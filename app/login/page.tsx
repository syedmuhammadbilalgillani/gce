import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import LoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default async function LoginPage() {
  if (await isAuthenticated()) redirect("/leads");
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-16">
      <LoginForm />
    </div>
  );
}
