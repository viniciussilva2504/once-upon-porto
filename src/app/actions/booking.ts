"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/auth";

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function generateConfirmationCode(): string {
  // Unambiguous characters (no 0/O, 1/I/L)
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export async function createBookingAction(
  tourId: string,
  pricePerPerson: number,
  formData: FormData
) {
  const guestName = getValue(formData, "guestName");
  const guestEmail = getValue(formData, "guestEmail");
  const requestedDate = getValue(formData, "requestedDate");
  const numParticipantsStr = getValue(formData, "numParticipants");
  const slug = getValue(formData, "slug");

  // ── Validation ──────────────────────────────────────────────
  if (!guestName || !guestEmail || !requestedDate || !numParticipantsStr) {
    redirect(
      `/tours/${slug}/book?error=${encodeURIComponent("All fields are required.")}`
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(guestEmail)) {
    redirect(
      `/tours/${slug}/book?error=${encodeURIComponent("Please enter a valid email address.")}`
    );
  }

  const numParticipants = parseInt(numParticipantsStr, 10);
  if (isNaN(numParticipants) || numParticipants < 1 || numParticipants > 20) {
    redirect(
      `/tours/${slug}/book?error=${encodeURIComponent("Number of participants must be between 1 and 20.")}`
    );
  }

  // Ensure date is in the future (UTC comparison)
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const selected = new Date(requestedDate + "T00:00:00Z");
  if (selected <= today) {
    redirect(
      `/tours/${slug}/book?error=${encodeURIComponent("Please select a future date.")}`
    );
  }

  // ── Build the booking record ────────────────────────────────
  const totalPrice = numParticipants * pricePerPerson;
  const confirmationCode = generateConfirmationCode();

  const currentUser = await getCurrentUser();
  const supabase = await createClient();

  const { error } = await supabase.from("bookings").insert({
    tour_id: tourId,
    user_id: currentUser?.id ?? null,
    guest_name: guestName,
    guest_email: guestEmail,
    requested_date: requestedDate,
    num_participants: numParticipants,
    total_price: totalPrice,
    payment_status: "pending",
    confirmation_code: confirmationCode,
    schedule_id: null,
  });

  if (error) {
    redirect(
      `/tours/${slug}/book?error=${encodeURIComponent("Something went wrong. Please try again.")}`
    );
  }

  redirect(`/booking/confirmation?code=${confirmationCode}`);
}
