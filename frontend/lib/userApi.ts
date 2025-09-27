import { Role, User } from "@/types/userTypes";

// const baseUrl = process.env.API_BASE_URL || "http://localhost:8000/api/v1";
const baseUrl = "http://localhost:8000/api/v1";

export async function getAllUsers(): Promise<User[]> {
  const res = await fetch(`${baseUrl}/user/all`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function updateUserRole(id: string, role: Role): Promise<User> {
  const res = await fetch(`${baseUrl}/user/role/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role }),
  });
  if (!res.ok) throw new Error("Failed to update role");
  return res.json();
}
