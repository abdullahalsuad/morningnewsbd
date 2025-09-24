import Image from "next/image";
import React from "react";

const LeftSidebar = () => {
  const sidebarNews = [
    {
      id: 1,
      title: "৫৩ বছর দেশ শাসনকারীরা নতুন আঙ্গি দেখাতে পারেনি: চরমোনাই পীর",
      image:
        "https://morningnewsbd.com/assets/images/post/17372148908RRSF15H.jpg",
    },
    {
      id: 2,
      title: "চাপাইনবাবগঞ্জের সীমান্তে আবারও উত্তেজনা, হামলায় ৩ বাংলাদেশি",
      image:
        "https://morningnewsbd.com/assets/images/post/17372148908RRSF15H.jpg",
    },
    {
      id: 3,
      title: "বদলে যাওয়া ক্যাম্পাস",
      image:
        "https://morningnewsbd.com/assets/images/post/17372148908RRSF15H.jpg",
    },
    {
      id: 4,
      title: "প্রধান উপদেষ্টাকে মাঠে নেমেই সহযোগ নিতে আগ্রহী চীন",
      image:
        "https://morningnewsbd.com/assets/images/post/17372148908RRSF15H.jpg",
    },
  ];

  return (
    <div className="bg-white  px-2 py-2 shadow-sm">
      {/* Section Heading */}
      <h3 className="text-lg  px-2 font-extrabold   pb-2 ">সর্বশেষ সংবাদ</h3>

      {/* News List */}
      <div className="space-y-4">
        {sidebarNews.map((item) => (
          <div
            key={item.id}
            className="pb-4  cursor-pointer   duration-200 bg-[#F9FAFB]"
          >
            {/* Image on Top */}
            <Image width={500} height={500} src={item.image} alt={item.title} />

            {/* Title Below */}
            <p className="mt-2 pl-2 text-md font-black text-gray-900 leading-snug hover:text-blue-900 transition-colors">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
