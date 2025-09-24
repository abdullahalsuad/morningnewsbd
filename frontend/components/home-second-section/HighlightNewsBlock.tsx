import { ChevronsRight, NewspaperIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const HighlightNewsBlock = ({ title }) => {
  return (
    <section className="overflow-hidden">
      {/* Header */}

      <div className="relative h-12 bg-[#E9F2F9]">
        <div className="absolute left-0 top-0 h-full flex items-center gap-2 px-5 bg-[#0A4466] clip-path-header">
          <span className="inline-flex items-center justify-center">
            <NewspaperIcon size={20} className="text-white" />
          </span>
          <span className="text-white text-[18px] font-semibold">{title}</span>
        </div>

        <a
          href="#"
          className="absolute inset-y-0 right-3 flex items-center gap-1 text-[18px]  text-[#0E4E73]"
        >
          আরও খবর
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M8 5l8 7-8 7z" />
          </svg>
        </a>
      </div>

      {/* card */}
      <div className=" border border-gray-100 bg-white shadow-sm my-3">
        {/* Feature */}
        <div className="p-1">
          <div className="rounded-[3px] overflow-hidden border">
            <Image
              width={500}
              height={500}
              src="https://morningnewsbd.com/assets/images/post/1737223708GdANR5Mb.jpg"
              alt="featured"
              className=" object-cover"
            />
          </div>
          <h3 className="mt-2 px-2 text-[22px] leading-6 font-semibold text-[#0A0A0A]">
            খালেদা জিয়াকে সর্বক্ষনিক চিকিৎসা দিচ্ছে লন্ডন ক্লিনিকের মেড
          </h3>
        </div>

        {/* List-01 */}
        <ul className="px-2 pb-3">
          <li className="py-2 border-t">
            <a href="#" className="flex gap-3">
              <img
                src="https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg"
                alt=""
                className="h-[72px] w-[112px] object-cover rounded-[3px] border"
              />
              <p className="text-[16px] leading-[22px] font-medium text-[#222]">
                সেমিকন্ডাক্টর খাতের বিকাশে টাস্কফোর্স গঠন, সদস্য ১৩ জন
              </p>
            </a>
          </li>

          {/* List-02 */}
          <li className="py-2 border-t">
            <a href="#" className="flex gap-3">
              <img
                src="https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg"
                alt=""
                className="h-[72px] w-[112px] object-cover rounded-[3px] border"
              />
              <p className="text-[16px] leading-[22px] font-medium text-[#222]">
                সেমিকন্ডাক্টর খাতের বিকাশে টাস্কফোর্স গঠন, সদস্য ১৩ জন
              </p>
            </a>
          </li>

          {/* List-3 */}
          <li className="py-2 border-t">
            <a href="#" className="flex gap-3">
              <img
                src="https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg"
                alt=""
                className="h-[72px] w-[112px] object-cover rounded-[3px] border"
              />
              <p className="text-[16px] leading-[22px] font-medium text-[#222]">
                সেমিকন্ডাক্টর খাতের বিকাশে টাস্কফোর্স গঠন, সদস্য ১৩ জন
              </p>
            </a>
          </li>

          <hr />
        </ul>

        {/* bottom right link (small) */}
        <div className="px-3 pb-3 flex justify-end items-center">
          <a
            href="#"
            className="flex items-center gap-1 text-[15px] font-semibold text-[#0E4E73]"
          >
            আরও খবর
            <ChevronsRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HighlightNewsBlock;
