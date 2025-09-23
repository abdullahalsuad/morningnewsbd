"use client";

import Marquee from "react-fast-marquee";

export const NewsHeading = () => {
  const notice =
    "◎ প্রধানের আগামী অনলাইন এডিটরস অ্যারেঞ্জমেন্ট   ◎   বিটিভি নিউজের যাত্রা শুরু ◎ বিটিভি নিউজের যাত্রা শুরু ◎ জাতীয় বাজেট নিয়ে বিশেষ আলোচনা tonight";

  return (
    <div className="mx-auto max-w-full xl:max-w-[1200px] 2xl:max-w-[1400px]  text-[#111] border-t border-[#eee] my-4 bg-gray-300 ">
      <div className="relative ">
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
          <div className="bg-[#0A4466] text-white px-5 py-3 font-semibold select-none">
            সংবাদ শিরোনাম :
          </div>
        </div>
        <CustomMarquee text={notice} />
      </div>
    </div>
  );
};

function CustomMarquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden pl-[92px]">
      <Marquee
        direction="left"
        pauseOnHover
        className="whitespace-nowrap py-3 animate-marquee will-change-transform"
      >
        {text}
      </Marquee>
    </div>
  );
}
