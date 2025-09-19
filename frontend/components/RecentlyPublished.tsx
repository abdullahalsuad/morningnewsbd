"use client";
import Image from "next/image";

export default function RecentlyPublished() {
  const posts = [
    {
      id: 1,
      img: "https://morningnewsbd.com/assets/images/post/1737283339GWaPstmH.jpg",
      title: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকারের নিশ্চিতে আহ্বান ডিআইজির",
    },
    {
      id: 2,
      img: "https://morningnewsbd.com/assets/images/post/1737283339GWaPstmH.jpg",
      title:
        "সাংবাদিকদের দ্রুত অ্যাক্রেডিটেশন প্রক্রিয়ার আহ্বান অনলাইন এডিটরস অ্যালায়েন্স",
    },
    {
      id: 3,
      img: "https://morningnewsbd.com/assets/images/post/1737283339GWaPstmH.jpg",
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
    },
    {
      id: 4,
      img: "https://morningnewsbd.com/assets/images/post/1737283339GWaPstmH.jpg",
      title: "অধিকাংশে ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
    },
    {
      id: 5,
      img: "https://morningnewsbd.com/assets/images/post/1737283339GWaPstmH.jpg",
      title: "বিটিভি নিউজের যাত্রা শুরু",
    },
    {
      id: 6,
      img: "https://morningnewsbd.com/assets/images/post/1737283339GWaPstmH.jpg",
      title: "বিশ্বকাপ নিয়ে ব্রাজিলিয়ানদের সঙ্গে উচ্ছ্বসিত নেইমার",
    },
    {
      id: 7,
      img: "https://morningnewsbd.com/assets/images/post/1737283339GWaPstmH.jpg",
      title:
        "৪৮ রানে ৭ উইকেট হারানো পাকিস্তানের বিপক্ষে ওয়েস্ট ইন্ডিজের স্পিন মূর্তি",
    },
    {
      id: 8,
      img: "https://morningnewsbd.com/assets/images/post/1737283339GWaPstmH.jpg",
      title: "রান নেই উইকেট নেই, তবুও ম্যাচ জেতালেন",
    },
  ];

  return (
    <>
      <hr className="mt-10 border-t-2 border-[#0A4466] my-4" />

      <div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-1 ">
          <h2 className="text-base sm:text-lg font-bold text-gray-900">
            সম্প্রতি প্রকাশিত সংবাদ
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm sm:text-base font-semibold text-[#0E4E73] hover:text-[#083248]"
          >
            আরও খবর
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M8 5l8 7-8 7z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="my-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((p) => (
            <article
              key={p.id}
              className="bg-white  overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={p.img}
                  alt="recent news"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                  <h3 className="text-[13px] sm:text-[14px] font-semibold leading-snug text-white line-clamp-2">
                    {p.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
