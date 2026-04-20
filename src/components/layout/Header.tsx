import { getCurrentUser } from "@/lib/auth";
import { HeaderClient } from "./HeaderClient";

export async function Header() {
  const currentUser = await getCurrentUser();

  return <HeaderClient currentUser={currentUser} />;
}
