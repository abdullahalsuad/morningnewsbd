import { ChildCategoryPayload } from "@/types/categoriesTypes";

// const baseUrl = process.env.API_BASE_URL || "http://localhost:8000/api/v1";
const baseUrl = "http://localhost:8000/api/v1";

// Create
export async function createChildCategory(data: ChildCategoryPayload) {
  const res = await fetch(`${baseUrl}/child-category/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Fetch all
export async function fetchChildCategories() {
  const res = await fetch(`${baseUrl}/child-category/all`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch child categories");
  const json = await res.json();
  return json.data;
}

// Update
export async function updateChildCategory(
  id: string,
  data: ChildCategoryPayload
) {
  const res = await fetch(`${baseUrl}/child-category/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Delete
export async function deleteChildCategory(id: string) {
  const res = await fetch(`${baseUrl}/child-category/delete/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
