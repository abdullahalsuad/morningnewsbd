"use client";

import Image from "next/image";
import { useState } from "react";

export default function RightSidebar() {
  const [tab, setTab] = useState<"latest" | "popular">("latest");

  const latestNews = [
    {
      id: 1,
      title: "রিকশাচালককে গুলি করে হত্যা মামলায় কারাগারে চিকিৎসকসহ পাঁচজন",
      thumb:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const popularNews = [
    {
      id: 1,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737282675ukyMoeTF.jpg",
    },
    {
      id: 2,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737282675ukyMoeTF.jpg",
    },
    {
      id: 3,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737282675ukyMoeTF.jpg",
    },
    {
      id: 4,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737282675ukyMoeTF.jpg",
    },
    {
      id: 5,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737282675ukyMoeTF.jpg",
    },
    {
      id: 6,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      thumb:
        "https://morningnewsbd.com/assets/images/post/1737282675ukyMoeTF.jpg",
    },
  ];

  const dataset = tab === "latest" ? latestNews : popularNews;

  return (
    <div>
      {/* Tabs */}
      <div className="grid grid-cols-2 text-center   text-[17px] font-semibold">
        <button
          className={`py-2 cursor-pointer ${
            tab === "latest"
              ? "bg-white text-[#0E4E73] border-t-3 border-[#0E4E73]"
              : "bg-[#DDDDDD] text-[#0E4E73] border-t-3 border-[#8B1010]"
          }`}
          onClick={() => setTab("latest")}
        >
          সর্বশেষ সংবাদ
        </button>
        <button
          className={`py-2 cursor-pointer ${
            tab === "popular"
              ? "bg-white text-[#0E4E73] border-t-3 border-[#0E4E73]"
              : "bg-[#DDDDDD] text-[#0E4E73] border-t-3 border-[#8B1010]"
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
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full  bg-gray-900 text-[15px] font-bold text-gray-100 border-4 border-white  ml-3">
              {idx + 1}
            </span>

            {/* News Item */}
            <a href="#" className="flex items-start gap-3">
              <Image
                src={n.thumb}
                alt="thumb"
                unoptimized
                width={200}
                height={80}
                style={{
                  width: "160px",
                  height: "80px",
                  objectFit: "cover",
                  minWidth: "160px",
                  minHeight: "80px",
                  maxWidth: "160px",
                  maxHeight: "80px",
                }}
              />

              {/* Text */}
              <div className="min-w-0 leading-snug pt-0.5 ">
                <h4 className="text-[17px] font-medium  text-gray-900 tracking-wide ">
                  {n.title}
                </h4>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <Image
        className="my-4 lg:my-2"
        alt="thumb"
        width={500}
        height={70}
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJzjUlrsCObpKCcZVhpveAxQXG5s1Nv7C8mxpmZWdgluDF6z5m3aAF7Mth6ycqS-3igAJ7ABRrK4VmPyyb_bqiTyaZqxJEHQ-crCcbbSHF_4NkwF5x96RBTkVdIHroZ1coRw2GqKkuBcdVlxTg7Emga-xb7hX3ZXz035N6v-2P3tLwe8lJRpEucwXHO_zV/s500/vertical.gif"
      />
    </div>
  );
}
