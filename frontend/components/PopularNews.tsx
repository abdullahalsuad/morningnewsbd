"use client";
import { Map, MapPin, Volume2Icon } from "lucide-react";
import Image from "next/image";
import BangladeshMap from "./BangladeshMap";

// Drop this into app/page.tsx (Next.js App Router)
// Pure TailwindCSS – responsive – 3 cards per row (like your image)

const CARDS = [
  {
    id: 1,
    img: "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg", // replace with your image
    title: "প্রধান উপদেষ্টাকে মঞ্চে বেইজিং সফরে নিতে আগ্রহী চীন",
    date: "Jan 19, 2025",
  },
  {
    id: 2,
    img: "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    title: "রমজান উপলক্ষে আরতিতে হিফজুল কোরআন প্রতিযোগিতার সিলেকশন",
    date: "Jan 19, 2025",
  },
  {
    id: 3,
    img: "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    title: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকারের নিশ্চিতে আহ্বান ডিআইজির",
    date: "Jan 19, 2025",
  },
  {
    id: 4,
    img: "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    title:
      "সাংবাদিকদের দ্রুত অ্যাক্রেডিটেশন প্রক্রিয়ার আগমন অনলাইন এডিটরস অ্যালায়েন্স",
    date: "Jan 19, 2025",
  },
  {
    id: 5,
    img: "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
    date: "Jan 19, 2025",
  },
  {
    id: 6,
    img: "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    title: "অভিযোগ: ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
    date: "Jan 19, 2025",
  },
];

export default function Page() {
  return (
    <section className="mt-20">
      {/* Main content grid */}
      <div className="mx-auto w-8/12 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Cards (3 columns like screenshot) */}
          <section className="lg:col-span-2">
            {/* Header Section */}
            <div className="relative h-12 bg-[#E9F2F9] my-4">
              <div className="absolute left-0 top-0 h-full flex items-center gap-2 px-5 bg-[#0E4E73] clip-path-header">
                <span className="text-white text-[15px] font-semibold">
                  জনপ্রিয় সংবাদ সমূহ
                </span>
              </div>

              <a
                href="#"
                className="absolute inset-y-0 right-3 flex items-center gap-1 text-[14px] font-semibold text-[#0E4E73]"
              >
                আরও খবর
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M8 5l8 7-8 7z" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {CARDS.map((c) => (
                <article
                  key={c.id}
                  className=" bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
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
                    <h3 className="text-[15px] font-semibold leading-snug text-gray-900 line-clamp-2 mb-1">
                      {c.title}
                    </h3>
                    <hr />
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                      <span className="inline-block h-2 w-2 rounded-sm bg-gray-300" />
                      <span>প্রকাশের তারিখঃ {c.date} ঃ ইং</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* RIGHT*/}
          <aside className="lg:col-span-1 space-y-6">
            {/* Header Section */}
            <div className="relative h-12 bg-[#E9F2F9] mt-4">
              <div className="absolute left-0 top-0 h-full flex items-center gap-2 px-5 bg-[#0E4E73] clip-path-header">
                <span className="inline-flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </span>
                <span className="text-white text-[15px] font-semibold">
                  এক নজরে বাংলাদেশ
                </span>
              </div>

              <a
                href="#"
                className="absolute inset-y-0 right-3 flex items-center gap-1 text-[14px] font-semibold text-[#0E4E73]"
              >
                আরও খবর
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M8 5l8 7-8 7z" />
                </svg>
              </a>
            </div>

            {/* Audio bar */}
            <div className=" bg-white shadow-sm ring-1 ring-gray-200">
              {/* svg */}
              <BangladeshMap />

              <div className="relative h-12 bg-[#E9F2F9] mt-4">
                <div className="absolute left-0 top-0 h-full flex items-center gap-2 px-5 bg-[#0E4E73] clip-path-header">
                  <span className="inline-flex items-center justify-center">
                    <Volume2Icon size={20} className="text-white" />
                  </span>
                  <span className="text-white text-[15px] font-semibold mr-4">
                    আমাদের জাতীয় সঙ্গীত
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <audio controls className="w-full">
                <source src="national-anthem" type="audio/mpeg" />
              </audio>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
