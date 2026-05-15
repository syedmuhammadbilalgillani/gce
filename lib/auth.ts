import "server-only";
import { cookies } from "next/headers";

export const AUTH_COOKIE = "gce_admin";

export async function isAuthenticated() {
  const code = process.env.ADMIN_CODE;
  if (!code) return false;
  const jar = await cookies();
  return jar.get(AUTH_COOKIE)?.value === code;
}

export async function setAuthCookie() {
  const code = process.env.ADMIN_CODE!;
  const jar = await cookies();
  jar.set(AUTH_COOKIE, code, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export async function clearAuthCookie() {
  const jar = await cookies();
  jar.delete(AUTH_COOKIE);
}
