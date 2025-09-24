"use client";

import Image from "next/image";
import { Newspaper } from "lucide-react";

interface MediaItem {
  id: number;
  img: string;
  title: string;
}

const items: MediaItem[] = [
  {
    id: 1,
    img: "https://morningnewsbd.com/assets/images/post/1737283502kogi9xQ3.jpg",
    title: "রমজান উপলক্ষে আরতিতে হিফজুল কোরআন প্রতিযোগিতার সিলেকশন শুরু",
  },
  {
    id: 2,
    img: "https://morningnewsbd.com/assets/images/post/1737283502kogi9xQ3.jpg",
    title: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকারের নিশ্চিতে আহ্বান ডিআইজির",
  },
  {
    id: 3,
    img: "https://morningnewsbd.com/assets/images/post/1737283502kogi9xQ3.jpg",
    title: "সাংবাদিকদের দ্রুত অ্যাক্রেডিটেশন প্রদানের আহ্বান অনলাইন এডিট",
  },
  {
    id: 4,
    img: "https://morningnewsbd.com/assets/images/post/1737283502kogi9xQ3.jpg",
    title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
  },
  {
    id: 5,
    img: "https://morningnewsbd.com/assets/images/post/1737283502kogi9xQ3.jpg",
    title: "বিটিভি নিউজের যাত্রা শুরু",
  },
  {
    id: 6,
    img: "https://morningnewsbd.com/assets/images/post/1737283502kogi9xQ3.jpg",
    title: "সাংবাদিকতা পেশায় রাজনৈতিক দলবাজি বন্ধ করা দরকার: সঞ্চয়ন কমিটি",
  },
];

export default function Media() {
  return (
    <section>
      {/* Header */}
      <div className="h-12 bg-[#E9F2F9] flex items-center justify-between my-4">
        <div className="flex items-center gap-2 px-3 pr-6 h-full bg-[#0E4E73] clip-path-header">
          <Newspaper size={18} className="text-white" />
          <span className="text-white text-sm font-semibold">মিডিয়া</span>
        </div>

        <a
          href="#"
          className="flex items-center gap-1 pr-3 text-[18px] text-[#0E4E73]"
        >
          আরও খবর
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M8 5l8 7-8 7z" />
          </svg>
        </a>
      </div>

      <div className="border border-gray-100  bg-white shadow-sm">
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex gap-3 p-1 py-1.5 hover:bg-gray-50"
            >
              <div className="relative  flex-shrink-0  overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={150}
                  height={70}
                  style={{
                    width: "150",
                    height: "80px",
                    objectFit: "cover",
                    minWidth: "150px",
                    minHeight: "80px",
                    maxWidth: "150px",
                    maxHeight: "80px",
                  }}
                />
              </div>
              <p className="text-[18px]">{item.title}</p>
            </li>
          ))}
        </ul>

        <hr />
        <div className="flex justify-end p-3">
          <a
            href="#"
            className="flex items-center gap-1 text-[15px] text-[#0E4E73]"
          >
            আরও খবর
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M8 5l8 7-8 7z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
