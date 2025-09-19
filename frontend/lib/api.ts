import { NewsPayload } from "@/utils/news";

const baseUrl = process.env.API_BASE_URL || "http://localhost:8000/api/v1";

export async function createNews(data: NewsPayload) {
  const res = await fetch(`${baseUrl}/news/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to create news: ${error}`);
  }

  return await res.json();
}

export async function fetchNews() {
  const res = await fetch(`${baseUrl}/news/all`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const json = await res.json();

  return json.data;
}
