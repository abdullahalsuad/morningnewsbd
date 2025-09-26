import { fetchNews } from "@/lib/api";
import { NewsItem } from "@/utils/news";
import React from "react";
import Image from "next/image";
import { Eye, Edit3, Trash2 } from "lucide-react";

export default async function AllNews() {
  let newsList: NewsItem[] = [];

  try {
    newsList = await fetchNews();
  } catch (error) {
    console.error("Failed to load news:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Container with responsive padding */}
      <div className="w-full max-w-7xl mx-auto ">
        {newsList.length === 0 ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <p className="text-center text-gray-500 text-base sm:text-lg">
              No news articles found.
            </p>
          </div>
        ) : (
          <>
            {/* News grid - fully responsive */}
            <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
              {newsList.map((news) => (
                <article
                  key={news._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  tabIndex={0}
                  aria-label={`News article titled ${news.title}`}
                >
                  {/* Action buttons */}
                  <div className="flex justify-end gap-2 mb-4 pt-4 px-4">
                    <button
                      className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors duration-200"
                      title="View article"
                      aria-label="View article"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-full transition-colors duration-200"
                      title="Edit article"
                      aria-label="Edit article"
                    >
                      <Edit3 size={18} />
                    </button>
                    <button
                      className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full transition-colors duration-200"
                      title="Delete article"
                      aria-label="Delete article"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <hr />
                  {/* Uncomment when images are ready */}
                  {/* {news.coverImage?.url && (
                    <div className="relative w-full h-40 sm:h-48 lg:h-52 overflow-hidden">
                      <Image
                        src={news.coverImage.url}
                        alt={news.coverImage.imgCaption || news.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        width={500}
                        height={300}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                  )} */}

                  {/* Content section */}
                  <div className="p-2 flex flex-col flex-grow">
                    {/* Title */}
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 line-clamp-2 text-gray-900 leading-tight">
                      {news.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 flex-grow mb-4 sm:mb-6 line-clamp-3 text-sm sm:text-base leading-relaxed">
                      {news.description}
                    </p>

                    {/* Footer with publication date and author */}
                    <footer className="mt-auto pt-3 sm:pt-4 border-t border-gray-100">
                      {/* Publication date */}
                      <time
                        dateTime={news.publicationDate}
                        className="block text-xs sm:text-sm text-gray-500 mb-3"
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

                      {/* Author section */}
                      {news.author && (
                        <div className="flex items-center gap-3">
                          {/* Uncomment when author images are ready */}
                          {/* {news.author.image && (
                            <div className="flex-shrink-0">
                              <Image
                                src={news.author.image}
                                alt={news.author.name || "Author"}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-gray-100"
                                width={40}
                                height={40}
                              />
                            </div>
                          )} */}

                          <div className="flex-grow min-w-0">
                            <p className="font-medium text-sm sm:text-base text-gray-900 truncate">
                              {news.author.name}
                            </p>
                            {news.author.phone && (
                              <p className="text-xs text-gray-400 truncate">
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
          </>
        )}
      </div>
    </main>
  );
}
