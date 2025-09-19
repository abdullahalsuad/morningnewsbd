"use server";

import { createNews } from "@/lib/api";
import { NewsPayload } from "@/utils/news";

export async function submitNews(formData: FormData) {
  const payload: NewsPayload = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    publicationDate: (formData.get("publication_date") as string) || undefined,
    author: {
      name: formData.get("author_name") as string,
      phone: (formData.get("phone") as string) || undefined,
      image: (formData.get("author_image") as string) || undefined,
    },
    coverImage: {
      url: formData.get("cover_image") as string,
      imgCaption: (formData.get("image_caption") as string) || undefined,
    },
  };

  try {
    await createNews(payload);
  } catch (error) {
    console.error("News submission failed:", error);
    throw error;
  }
}
