import { NewsItem, NewsPayload } from "@/types/newsTypes";

const baseUrl = process.env.API_BASE_URL || "http://localhost:8000/api/v1";

// Fetch all news for admin
export async function fetchNews(): Promise<NewsItem[]> {
  const res = await fetch(`${baseUrl}/news/admin/all`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch news");
  const json = await res.json();
  return json.data;
}

// Get single news by ID
export async function fetchSingleNews(id: string) {
  const res = await fetch(`${baseUrl}/news/admin/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch single news");
  const json = await res.json();
  return json.data;
}

// Delete news
export async function deleteNews(id: string) {
  const res = await fetch(`${baseUrl}/news/delete/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete news");
  return await res.json();
}

// Update news
export async function updateNews(id: string, payload: Partial<NewsItem>) {
  const res = await fetch(`${baseUrl}/news/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to update news: ${error}`);
  }

  return await res.json();
}
