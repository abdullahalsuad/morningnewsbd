import React from "react";

export default function SmallPostCards() {
  const demo = [
    {
      id: 1,
      title: "প্রধান উপদেষ্টাকে মার্চে বেইজিং সফরে নিতে আগ্রহী চীন",
      img: "https://picsum.photos/seed/e/640/360",
    },
    {
      id: 2,
      title: "রমজান উপলক্ষে প্রতিযোগিতার হিফজুল কোরআন প্রতিযোগিতা সিলেকশন শুরু",
      img: "https://picsum.photos/seed/g/640/360",
    },
    {
      id: 3,
      title: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
      img: "https://picsum.photos/seed/e/640/360",
    },
    {
      id: 4,
      title: "সাংবাদিকদের দ্রুত অ্যাক্রিডিটেশন প্রদানের আহ্বান অনলাইন এডিটর",
      img: "https://picsum.photos/seed/g/640/360",
    },
    {
      id: 5,
      title: "অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      img: "https://picsum.photos/seed/e/640/360",
      badge: "স ম য় র | সরাসরি সম্প্রচার: প্রাথমিক",
    },
    {
      id: 6,
      title: "অধিকাংশে ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
      img: "https://picsum.photos/seed/e/640/360",
    },
    {
      id: 7,
      title: "‘বিটিভি নিউজ’ এর যাত্রা শুরু",
      img: "https://picsum.photos/seed/g/640/360",
    },
    {
      id: 8,
      title: "বিশ্বকাপ নিয়ে বিতর্কের মাঝে তর্কে জড়ালেন নেইমার",
      img: "https://picsum.photos/seed/e/640/360",
    },
    {
      id: 9,
      title: "৪৮ রানে ৭ উইকেট হারাল পাকিস্তান, ওয়্যারিকানের স্পিন–ধ্বংস",
      img: "https://picsum.photos/seed/g/640/360",
    },
  ];

  return (
    <section className="w-[940px]">
      <div className="grid grid-cols-3 gap-4">
        {demo.map((p, idx) => (
          <article
            key={p.id}
            className="rounded-md border border-gray-300 bg-white shadow-sm overflow-hidden"
          >
            <div className="relative">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt="thumb"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <h3 className="px-3 py-3 text-[17px] leading-6 font-semibold text-gray-900">
              {p.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
