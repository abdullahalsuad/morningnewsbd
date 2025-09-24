// components/RightSidebar.jsx
import { NewspaperIcon, Play, Volume2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function RightSidebar() {
  return (
    <aside className="w-full  space-y-4">
      <CategoryNewsCard />
      <LiveTvCard />
      <FacebookBlock />
    </aside>
  );
}

/*  Category card  */
function CategoryNewsCard() {
  return (
    <section className="rounded-md border-4 border-[#0E4E73] bg-white shadow-sm overflow-hidden my-4 lg:my-0 lg:mb-4">
      {/* Header */}
      <div className="relative h-12  bg-[#E9F2F9] my-1 mx-1">
        <div className="absolute left-0 top-0 h-full flex items-center gap-2 px-2 pr-6  bg-[#0A4466] clip-path-header">
          <span className="inline-flex items-center justify-center">
            <NewspaperIcon size={18} className="text-white" />
          </span>
          <span className="text-white text-sm sm:text-[18px]  font-semibold">
            জাতীয়
          </span>
        </div>
      </div>

      {/* Big media */}
      <div className="px-1 pb-2">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg"
            alt="main"
            height={200}
            width={400}
            className="h-[150px] w-[300px]  object-cover"
          />

          <button
            aria-label="Play"
            className="absolute inset-0 grid place-items-center"
          >
            <span className="grid place-items-center h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-white/85 shadow-md">
              <Play />
            </span>
          </button>
        </div>

        <a className=" text-[20px]  leading-6 font-semibold text-gray-900">
          প্রধান উপদেষ্টাকে মার্চে বেইজিং সফরে নিতে আগ্রহী চীন
        </a>
      </div>

      {/* Two small items */}
      <ul className="px-1 pb-2 space-y-4">
        <SmallItem
          img="https://morningnewsbd.com/assets/images/post/1737210990FCdH2m3Q.jpg"
          title="রিকশাচালককে গুলি করে হত্যা মামলায় কারাগারে চিকিৎসকসহ পাঁচজন"
        />
        <SmallItem
          img="https://morningnewsbd.com/assets/images/post/1737210990FCdH2m3Q.jpg"
          title="বর্তমান সরকারের প্রধান দায়িত্ব শেখ হাসিনাকে ফিরিয়ে এনে বিচার"
        />
      </ul>

      <hr />
      <div className="px-3 pb-3 flex justify-end my-2">
        <a
          href="#"
          className="flex items-center gap-1 text-[15px] font-semibold text-[#0E4E73]"
        >
          আরও খবর
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M8 5l8 7-8 7z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

/*  SmallItem  */
function SmallItem({ img, title }) {
  return (
    <>
      <hr />
      <li className="flex items-center gap-2">
        <Image
          width={500}
          height={500}
          src={img}
          alt="thumb"
          className="h-[55px] ] w-[100px]    object-cover"
          loading="lazy"
        />
        <p className="text-[16px] leading-5 font-medium text-gray-900 line-clamp-2">
          {title}
        </p>
      </li>
    </>
  );
}

/*  Live TV  */
function LiveTvCard() {
  return (
    <section className="overflow-hidden">
      {/* Live TV header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b bg-[#0A4466] border-l-5 border-blue-950">
        <span className="inline-block h-3.5 w-3.5 rounded-full bg-red-600 animate-caret-blink" />
        <span className="text-[17px] font-semibold text-white">লাইভ টিভি</span>
      </div>

      <div className="my-2 relative w-full aspect-video">
        <iframe
          src="https://www.youtube.com/embed/w_jwubVsEdg?autoplay=0&rel=0"
          title="Live TV"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

/*  Facebook block + audio  */
function FacebookBlock() {
  return (
    <section className="overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-[#EEF3F7] ">
        <h4 className="h-full pl-4  flex items-center text-[18px] border-l-4 border-[#0E4E73] font-semibold text-[#0E4E73]">
          ফেসবুকে আমরা
        </h4>
      </div>

      {/* Facebook preview  */}
      <div className="py-3">
        <div className="w-full h-56 sm:h-72 overflow-hidden rounded border">
          <iframe
            src="https://www.facebook.com/official.creativedesign/?ref=embed_page#"
            title="Facebook"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="relative h-12 bg-[#E9F2F9] ">
        <div className="absolute left-0 top-0 h-full flex items-center gap-2 px-2 pr-6  bg-[#0A4466] clip-path-header">
          <span className="inline-flex  items-center justify-center">
            <Volume2 size={18} className="text-white" />
          </span>
          <span className="text-white text-[16px] font-semibold">
            আমাদের জাতীয় সঙ্গীত
          </span>
        </div>
      </div>

      {/* Audio  */}
      <div className="px-3 mt-3">
        <div className="rounded-2xl bg-[#F2F5F8] p-2 shadow-inner">
          <audio controls className="w-full">
            <source src="your-audio-file.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
}
