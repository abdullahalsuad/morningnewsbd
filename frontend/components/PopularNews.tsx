"use client";
import Image from "next/image";

// Drop this into app/page.tsx (Next.js App Router)
// Pure TailwindCSS – responsive – 3 cards per row (like your image)

const CARDS = [
  {
    id: 1,
    img: "/img/1.jpg", // replace with your image
    title: "প্রধান উপদেষ্টাকে মঞ্চে বেইজিং সফরে নিতে আগ্রহী চীন",
    date: "Jan 19, 2025",
  },
  {
    id: 2,
    img: "/img/2.jpg",
    title: "রমজান উপলক্ষে আরতিতে হিফজুল কোরআন প্রতিযোগিতার সিলেকশন",
    date: "Jan 19, 2025",
  },
  {
    id: 3,
    img: "/img/3.jpg",
    title: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকারের নিশ্চিতে আহ্বান ডিআইজির",
    date: "Jan 19, 2025",
  },
  {
    id: 4,
    img: "/img/4.jpg",
    title:
      "সাংবাদিকদের দ্রুত অ্যাক্রেডিটেশন প্রক্রিয়ার আগমন অনলাইন এডিটরস অ্যালায়েন্স",
    date: "Jan 19, 2025",
  },
  {
    id: 5,
    img: "/img/5.jpg",
    title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
    date: "Jan 19, 2025",
  },
  {
    id: 6,
    img: "/img/6.jpg",
    title: "অভিযোগ: ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
    date: "Jan 19, 2025",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      {/* Top header row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center rounded-md bg-[#0c6ea6] px-3 py-2 text-white shadow">
            <span className="text-sm sm:text-base font-extrabold">
              জনপ্রিয় সংবাদ সমূহ
            </span>
          </div>
          <button className="group inline-flex items-center gap-2 text-[#0c6ea6] hover:text-[#06486e] text-sm font-bold">
            আরও খবর
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-current/40">
              <svg
                className="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Main content grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Cards (3 columns like screenshot) */}
          <section className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {CARDS.map((c) => (
                <article
                  key={c.id}
                  className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
                >
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src={c.img}
                      alt="thumb"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[15px] font-semibold leading-snug text-gray-900 line-clamp-2">
                      {c.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                      <span className="inline-block h-2 w-2 rounded-sm bg-gray-300" />
                      <span>প্রকাশের তারিখঃ {c.date} ঃ</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* RIGHT: Map + Audio stacked */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Map card */}
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden">
              <div className="flex items-center gap-2 bg-[#0c6ea6] text-white px-4 py-2">
                <p className="font-bold text-sm sm:text-base">
                  এক নজরে বাংলাদেশ
                </p>
              </div>
            </div>

            {/* Audio bar */}
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#0c6ea6] text-white px-3 py-1 text-sm font-bold">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 10v4h3l4 4V6L6 10H3Zm13 2a3 3 0 0 0-3-3v6a3 3 0 0 0 3-3Zm2 0a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7 7 7 0 0 0-7-7v2a5 5 0 0 1 5 5Z" />
                </svg>
                আমাদের জাতীয় সঙ্গীত
              </div>
              <div className="mt-3">
                <audio controls className="w-full">
                  <source src="" type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
