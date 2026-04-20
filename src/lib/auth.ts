import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export interface AuthUserSummary {
  id: string;
  email: string;
  fullName: string | null;
}

export async function getCurrentUser(): Promise<AuthUserSummary | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email ?? "",
    fullName:
      typeof user.user_metadata.full_name === "string"
        ? user.user_metadata.full_name
        : null,
  };
}

export async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}