"use server";

import { createNews } from "@/lib/api";
import { NewsPayload } from "@/types/newsTypes";
import { auth } from "@/auth";

export async function submitNews(formData: FormData) {
  const session = await auth();

  if (!session?.user) {
    throw new Error("You must be logged in to submit news.");
  }

  const payload: NewsPayload = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    description: formData.get("description") as string,
    publicationDate: (formData.get("publication_date") as string) || undefined,
    parentCategoryId: formData.get("parentCategoryId") as string,
    childCategoryId: (formData.get("childCategoryId") as string) || null,
    coverImage: {
      url: formData.get("cover_image") as string,
      imgCaption: (formData.get("image_caption") as string) || undefined,
    },
    author: {
      userId: session.user.id,
      name: session.user.name,
      image: session.user.image,
    },
  };

  console.log(payload);

  try {
    await createNews(payload);
  } catch (error) {
    console.error("News submission failed:", error);
    throw error;
  }
}
