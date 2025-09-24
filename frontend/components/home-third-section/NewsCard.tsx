import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function NewsCard({ title }) {
  return (
    <section className="overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center py-3 px-3 border-l-4 border-[#012E48] bg-[#E8EDF0] my-3 sm:my-4">
        <h2 className="text-[20px] font-bold text-gray-800">{title}</h2>
        <a href="#" className="flex items-center text-[#012E48] text-[18px]">
          আরও খবর
          <span className="ml-1 text-lg sm:text-xl  transform scale-y-75">
            →
          </span>
        </a>
      </div>

      <div className="border border-gray-200 p-2 sm:p-3">
        {/* Main Article Section */}
        <div>
          <Image
            src="https://morningnewsbd.com/assets/images/post/1737280863qJHZXU6J.jpg"
            alt="Rivaldo"
            width={500}
            height={300}
            className="w-full h-auto object-cover "
          />
          <p className="my-2 text-[20px] text-gray-800">
            বিশ্বকাপ নিয়ে রিভালদোর সঙ্গে তর্কে জড়ালেন নেইমার
          </p>
        </div>

        <hr className="w-full h-px border-none bg-gray-200" />

        {/* Smaller Articles */}
        {[1, 2].map((i) => (
          <div key={i}>
            <div className="flex items-center gap-2 sm:gap-3 py-1">
              <div className="relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 overflow-hidden rounded">
                <Image
                  src="https://morningnewsbd.com/assets/images/post/1737280733ECQhqcNY.jpg"
                  alt="Cricket Match"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <p className="flex-1 text-[17px] text-gray-800 leading-snug">
                ৪৮ রানে ৭ উইকেট হারাল পাকিস্তান, ওয়ানিকারের স্পিন-ঘূর্ণি
              </p>
            </div>
            <hr className="w-full h-px border-none bg-gray-200" />
          </div>
        ))}

        {/* Bottom More News Link */}
        <div className="px-3 py-2 flex justify-end items-center">
          <a
            href="#"
            className="flex items-center gap-1 text-[15px] font-semibold text-[#0E4E73]"
          >
            আরও খবর
            <ChevronsRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
