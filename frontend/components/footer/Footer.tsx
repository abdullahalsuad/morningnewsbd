"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Fixed & cleaned up: proper grid, valid Tailwind classes, pixel-like spacing,
// and marquee kept.

type FooterProps = {
  notice?: string;
  year?: number;
};

export default function Footer({
  notice = "আমাদের ওয়েবসাইট সার্বিক উন্নয়ন এর কাজ চলছে। কাজ চলাকালীন অবস্থায়, আপনারদের সাময়িকভাবে কিছু অসুবিধা হতে পারে এর জন্য আমরা আন্তরিকভাবে দুঃখিত । আমাদের ওয়েবসাইট উন্নয়নের কাজ আগামীকাল শেষ হবে ।",
  year = new Date().getFullYear(),
}: FooterProps) {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative bg-[#171717] text-white/90">
      {/* Main content container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ROW 1: Category columns (exactly like screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Column 1 */}
          <div>
            <h5 className="text-lg text-center mb-4">প্রচ্ছদ</h5>
            <h5 className="text-lg text-center mb-4">ক্যাম্পাস</h5>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-lg text-center mb-4">জাতীয়</h5>
            <h5 className="text-lg text-center mb-4">বিনোদন</h5>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-lg text-center mb-4">রাজনীতি</h5>
            <h5 className="text-lg text-center mb-4">খেলাধুলা</h5>
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="text-lg text-center mb-4">আন্তজাতিক</h5>
            <h5 className="text-lg text-center mb-4">মিডিয়া</h5>
          </div>

          {/* Column 5 */}
          <div>
            <h5 className="text-lg text-center mb-4">তথ্য প্রযুক্তি</h5>
            <h5 className="text-lg text-center mb-4">প্রতিনিধির তালিকা</h5>
          </div>
          {/* Column 5 */}
          <div>
            <h5 className="text-lg text-center mb-4">সারাদেশ</h5>
            <h5 className="text-lg text-center mb-4">ফটোগ্যালারী</h5>
          </div>

          {/* Optional sixth empty to keep even spacing on lg (matches 6 cols). */}
          <div className="hidden lg:block" />
        </div>

        {/* ROW 2: Editors / Office / Footer menu */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Column 6 (Editors) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 relative after:block after:w-24 after:h-[2px] after:bg-[#f39c12] after:mt-2">
              সম্পাদকীয় :
            </h4>
            <div className="text-sm space-y-2">
              <p>সম্পাদক ও প্রকাশক : মোঃ আব্দুর রশিদ</p>
              <p>নির্বাহী সম্পাদক: মোঃ নজরুল ইসলাম</p>
              <p>বার্তা সম্পাদক : মোঃ নাইম হোসেন</p>
            </div>
          </div>

          {/* Column 7 (Office) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 relative after:block after:w-24 after:h-[2px] after:bg-[#f39c12] after:mt-2">
              অফিস :
            </h4>
            <div className="text-sm space-y-2">
              <p>
                অফিস: হাউজঃ মুলি বাড়ি, নয়ার হাট স্কুল সংলগ্ন, বড়বাড়ি,
                লালমনিরহাট ।
              </p>
              <p>
                ইমেইল :
                <a
                  href="mailto:info@creativedesign.com.bd"
                  className="underline decoration-dotted ml-1"
                >
                  info@creativedesign.com.bd
                </a>
              </p>
              <p>মোবাইল : ০১৮৪৮৯৮৩১৮৬</p>
            </div>
          </div>

          {/* Column 8 (Footer menu) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 relative after:block after:w-24 after:h-[2px] after:bg-[#f39c12] after:mt-2">
              ফুটার মেনু
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 hover:bg-white/10"
              >
                লগইন
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 hover:bg-white/10"
              >
                শর্ত ও নীতিমালা
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 hover:bg-white/10"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 hover:bg-white/10"
              >
                গোপনীয়তা নীতি
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm flex flex-wrap items-center justify-between gap-3">
          <p>© সকল কিছুর স্বত্বাধিকার সংরক্ষিত {year} : সংবাদ ৭১ বিডি</p>
          <p>
            সকল কারিগরি সহযোগিতায় :{" "}
            <Link href="#" className="font-semibold hover:underline">
              Nexrox Digital
            </Link>
          </p>
        </div>
      </div>

      {/* Notice bar */}
      <div className="w-full bg-white text-[#111] border-t border-[#eee]">
        <div className="relative  px-0">
          <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
            <div className="bg-[#8b0000] text-white px-5 py-3 font-semibold select-none">
              নোটিশ
            </div>
          </div>
          <Marquee text={notice} />
        </div>
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-[#8b0000] text-white shadow-lg hover:opacity-90"
        >
          ↑
        </button>
      )}
    </footer>
  );
}

function Marquee({ text }: { text: string }) {
  // Duplicate text for seamless loop
  const repeated = `${text}   ${text}  ${text}`;
  return (
    <div className="overflow-hidden pl-[92px]">
      {/* left space for the badge */}
      <div className="whitespace-nowrap py-3 animate-marquee will-change-transform">
        <span className="inline-block pr-12">{repeated}</span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
