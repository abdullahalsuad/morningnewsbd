"use client";

import Marquee from "react-fast-marquee";

export const NewsHeading = () => {
  const notice =
    "◎ প্রধানের আগামী অনলাইন এডিটরস অ্যারেঞ্জমেন্ট   ◎   বিটিভি নিউজের যাত্রা শুরু ◎ বিটিভি নিউজের যাত্রা শুরু ◎ জাতীয় বাজেট নিয়ে বিশেষ আলোচনা tonight";

  return (
    <div className="mx-auto max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px]  text-[#111]  my-5  px-4 ">
      <div className="relative bg-[#EEEEEE]">
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
          <div className="bg-[#0A4466] text-white px-3 pr-4 py-2 font-semibold select-none text-[18px]">
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
        className="tracking-wide whitespace-nowrap py-2.5 animate-marquee will-change-transform font-normal"
      >
        {text}
      </Marquee>
    </div>
  );
}
