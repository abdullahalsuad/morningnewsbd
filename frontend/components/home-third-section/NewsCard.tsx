import Image from "next/image";

export default function NewsCard({ title }) {
  return (
    <section className="overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center py-2 px-3 border-l-4 border-[#012E48] bg-[#E8EDF0] my-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <a
          href="#"
          className="flex items-center text-[#012E48] text-md hover:text-gray-700"
        >
          আরও খবর
          <span className="ml-1 text-xl -mt-1 transform scale-y-75">→</span>
        </a>
      </div>

      <div className="border border-gray-200 p-3">
        {/* Main Article Section */}
        <div>
          <Image
            src="https://morningnewsbd.com/assets/images/post/1737280863qJHZXU6J.jpg"
            alt="Rivaldo"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className="my-2 text-md font-semibold text-gray-800">
            বিশ্বকাপ নিয়ে রিভালদোর সঙ্গে তর্কে জড়ালেন নেইমার
          </p>
        </div>

        <hr className="w-full h-px border-none bg-gray-200" />

        {/* Smaller Article 1 */}
        <div className="flex items-center gap-3 p-3">
          <div className="relative shrink-0 w-24 h-16 overflow-hidden rounded">
            <Image
              src="https://morningnewsbd.com/assets/images/post/1737280733ECQhqcNY.jpg"
              alt="Cricket Match"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>

          <p className="flex-1 text-sm text-gray-800 leading-snug">
            ৪৮ রানে ৭ উইকেট হারাল পাকিস্তান, ওয়ানিকারের স্পিন-ঘূর্ণি
          </p>
        </div>

        <hr className="w-full h-px border-none bg-gray-200" />

        {/* Smaller Article 2 */}
        <div className="flex items-center gap-3 p-3">
          <div className="relative shrink-0 w-24 h-16 overflow-hidden rounded">
            <Image
              src="https://morningnewsbd.com/assets/images/post/1737280733ECQhqcNY.jpg"
              alt="Cricket Match"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>

          <p className="flex-1 text-sm text-gray-800 leading-snug">
            ৪৮ রানে ৭ উইকেট হারাল পাকিস্তান, ওয়ানিকারের স্পিন-ঘূর্ণি
          </p>
        </div>

        <hr className="w-full h-px border-none bg-gray-200" />

        {/* Bottom More News Link */}
        <div className="text-right py-2 px-3">
          <a
            href="#"
            className="inline-flex items-center text-[#012E48] text-md hover:text-gray-700"
          >
            আরও খবর <span className="ml-1 text-lg">»</span>
          </a>
        </div>
      </div>
    </section>
  );
}
