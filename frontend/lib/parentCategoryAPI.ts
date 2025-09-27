import { ParentCategoryPayload } from "@/types/categoriesTypes";

// const baseUrl = process.env.API_BASE_URL || "http://localhost:8000/api/v1";
const baseUrl = "http://localhost:8000/api/v1";

// Create parent category
export async function createParentCategory(data: ParentCategoryPayload) {
  const res = await fetch(`${baseUrl}/parent-category/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to create parent: ${error}`);
  }

  return res.json();
}

// Fetch all parents
export async function fetchParentCategories() {
  const res = await fetch(`${baseUrl}/parent-category/all`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch parent categories");
  }

  const json = await res.json();
  return json.data;
}

// Update parent
export async function updateParentCategory(
  id: string,
  data: ParentCategoryPayload
) {
  const res = await fetch(`${baseUrl}/parent-category/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to update parent: ${error}`);
  }

  return res.json();
}

// Delete parent
export async function deleteParentCategory(id: string) {
  const res = await fetch(`${baseUrl}/parent-category/delete/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to delete parent: ${error}`);
  }

  return res.json();
}
