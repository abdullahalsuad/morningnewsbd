import { fetchNews } from "@/lib/api";
import { NewsItem } from "@/utils/news";
import React from "react";
import Image from "next/image";

export default async function AllNews() {
  let newsList: NewsItem[] = [];

  try {
    newsList = await fetchNews();
  } catch (error) {
    console.error("Failed to load news:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-[#0A4466] mb-8 text-center">
        Latest News
      </h1>

      {newsList.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-20">
          No news articles found.
        </p>
      ) : (
        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsList.map((news) => (
            <article
              key={news._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
              tabIndex={0}
              aria-label={`News article titled ${news.title}`}
            >
              {news.coverImage?.url && (
                <Image
                  src={news.coverImage.url}
                  alt={news.coverImage.imgCaption || news.title}
                  className="h-48 w-full object-cover"
                  width={500}
                  height={300}
                />
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-3 line-clamp-2">
                  {news.title}
                </h2>
                <p className="text-gray-700 flex-grow mb-4 line-clamp-3">
                  {news.description}
                </p>

                <footer className="mt-auto text-sm text-gray-500 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <time
                    dateTime={news.publicationDate}
                    className="whitespace-nowrap"
                  >
                    Published:{" "}
                    {new Date(news.publicationDate).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </time>

                  {news.author && (
                    <div className="flex items-center gap-3">
                      {news.author.image && (
                      <Image
                          src={news.author.image}
                          alt={news.author.name || "Author"}
                          className="w-10 h-10 rounded-full object-cover"
                          width={40}
                          height={40}
                        />
                      )}
                      <div>
                        <p className="font-medium">{news.author.name}</p>
                        {news.author.phone && (
                          <p className="text-xs text-gray-400">
                            {news.author.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </footer>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
