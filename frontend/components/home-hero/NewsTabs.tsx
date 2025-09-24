"use client";

import Image from "next/image";
import { useState } from "react";

export default function NewsTabs() {
  const [tab, setTab] = useState<"latest" | "popular">("latest");

  const latestNews = [
    {
      id: 1,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    },
    {
      id: 2,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    },
    {
      id: 3,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    },
    {
      id: 4,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    },
    {
      id: 5,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    },
    {
      id: 6,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg",
    },
  ];

  const popularNews = [
    {
      id: 1,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 2,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 3,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 4,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 5,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 6,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
  ];

  const dataset = tab === "latest" ? latestNews : popularNews;

  return (
    <div className="pr-4">
      {/* Tabs */}
      <div className="grid grid-cols-2 text-center border-t-4 border-[#0E4E73] text-[17px] font-semibold">
        <button
          className={`py-2 cursor-pointer ${
            tab === "latest"
              ? "bg-[#0E4E73] text-white"
              : "bg-gray-100 text-[#0E4E73]"
          }`}
          onClick={() => setTab("latest")}
        >
          সর্বশেষ সংবাদ
        </button>
        <button
          className={`py-2 cursor-pointer ${
            tab === "popular"
              ? "bg-[#0E4E73] text-white"
              : "bg-gray-100 text-[#0E4E73]"
          }`}
          onClick={() => setTab("popular")}
        >
          আলোচিত সংবাদ
        </button>
      </div>

      {/* News List */}
      <ul
        className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:theme(colors.gray.400)_transparent]
        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400"
      >
        {dataset.map((n, idx) => (
          <li key={n.id} className="relative py-2.5 hover:bg-gray-50 px-4">
            {/* Number Badge */}
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full  bg-gray-300 text-[17px] font-bold text-gray-900 border-4 border-white  ml-3">
              {idx + 1}
            </span>

            {/* News Item */}
            <a href="#" className="flex items-start gap-3">
              {/* Thumbnail */}
              <Image
                src={n.thumb}
                alt="thumb"
                width={100}
                height={60}
                className="w-[220px] h-[70px] object-cover  border border-gray-200"
              />

              {/* Text */}
              <div className="min-w-0 leading-snug pt-0.5">
                <h4 className="text-[17px] font-semibold text-gray-900  line-clamp-2">
                  {n.title}
                </h4>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
