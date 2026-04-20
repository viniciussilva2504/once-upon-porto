"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getSafeRedirectPath(value: string, fallback: string) {
  if (!value.startsWith("/") || value.startsWith("//")) {
    return fallback;
  }

  return value;
}

export async function loginAction(formData: FormData) {
  const email = getValue(formData, "email");
  const password = getValue(formData, "password");
  const redirectTo = getSafeRedirectPath(
    getValue(formData, "redirectTo") || "/account",
    "/account"
  );

  if (!email || !password) {
    redirect(
      `/login?error=${encodeURIComponent("Email and password are required.")}`
    );
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(
      `/login?error=${encodeURIComponent(error.message)}&redirectTo=${encodeURIComponent(redirectTo)}`
    );
  }

  revalidatePath("/", "layout");
  redirect(redirectTo);
}

export async function signupAction(formData: FormData) {
  const fullName = getValue(formData, "fullName");
  const email = getValue(formData, "email");
  const password = getValue(formData, "password");
  const redirectTo = getSafeRedirectPath(
    getValue(formData, "redirectTo") || "/account",
    "/account"
  );

  if (!fullName || !email || !password) {
    redirect(
      `/signup?error=${encodeURIComponent("Full name, email, and password are required.")}`
    );
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");

  if (data.session) {
    redirect(redirectTo);
  }

  redirect(
    `/login?message=${encodeURIComponent("Account created. Check your email if confirmation is enabled, then sign in.")}`
  );
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/");
}