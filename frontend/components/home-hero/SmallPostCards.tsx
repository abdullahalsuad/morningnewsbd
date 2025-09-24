import { fetchNews } from "@/lib/api";
import { NewsItem } from "@/utils/news";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

export default async function SmallPostCards() {
  let newsList: NewsItem[] = [];

  try {
    newsList = await fetchNews();
  } catch (error) {
    console.error("Failed to load news:", error);
  }

  return (
    <>
      {newsList.map((p) => (
        <article
          key={p._id}
          className="rounded-md border border-gray-300 bg-white shadow-sm overflow-hidden col-span-1"
        >
          <div className="relative w-full">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src={p.coverImage.url}
                alt="thumb"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <button className="px-3 py-3 text-[20px] leading-6 font-semibold text-gray-900 cursor-pointer text-left">
            <Link href={`/${p._id}`}>{p.title}</Link>
          </button>
        </article>
      ))}
    </>
  );
}
