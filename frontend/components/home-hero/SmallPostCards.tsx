import { fetchNews } from "@/lib/api";
import { NewsItem } from "@/utils/news";
import Link from "next/link";
import React from "react";

export default async function SmallPostCards() {
  let newsList: NewsItem[] = [];

  try {
    newsList = await fetchNews();
  } catch (error) {
    console.error("Failed to load news:", error);
  }

  return (
    <section className="w-full lg:w-[940px] mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsList.map((p) => (
          <article
            key={p._id}
            className="rounded-md border border-gray-300 bg-white shadow-sm overflow-hidden"
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

            <button className="px-3 py-3 text-base sm:text-[17px] leading-6 font-semibold text-gray-900 cursor-pointer">
              <Link href={`/${p._id}`}>{p.title}</Link>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
