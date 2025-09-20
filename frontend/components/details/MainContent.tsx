"use client";

import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import MoreNationalNews from "./MoreNationalNews";
import ReporterInfo from "./ReporterInfo";
import { Clock, PrinterCheck } from "lucide-react";
import Image from "next/image";

const MainContent = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: comment, author: "মোঃ নজরুল ইসলাম" },
      ]);
      setComment("");
    }
  };

  return (
    <section>
      <Breadcrumb />

      <div className="bg-white  p-6 shadow-sm">
        <article>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সংবাদিকদের প্রবেশ
          </h1>

          {/* reporter */}
          <div className="mb-5 pb-3 border-b border-gray-200 text-sm text-gray-700 my-4">
            {/* Reporter info */}
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="https://morningnewsbd.com/assets/images/admin/17372991721726676905ra.jpg"
                alt="Reporter"
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
              <span className="font-semibold text-blue-900">
                মোঃ রাকিবুল ইসলাম
              </span>
            </div>

            {/* Published date */}
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={14} className="text-gray-500" />
              <span>
                নিউজ প্রকাশের তারিখ :{" "}
                <span className="font-medium">Jan 19, 2025 ইং</span>
              </span>
            </div>
          </div>

          <div className="my-6">
            <Image
              width={740}
              height={436}
              alt="news"
              src="https://morningnewsbd.com/assets/images/post/1737318906kjbfwtFr.jpg"
              className="w-full h-auto"
            />
            <p className="mt-2 text-lg italic text-gray-800">
              ছবির ক্যাপশন : প্রধান উপদেষ্টাকে মাঠে নেমেই সহযোগ নিতে আগ্রহী চীন
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              এই জাতে মোবাইল কর্তৃপক্ষ স্থা হতের করাহনি ছিজদের সাজারিকদের
              পরিচয়ত প্রবেশ করতে দেছের। হিন্দু দেকান ঢাকে প্রবেশের জন্য
              সার্বজনিক পরিচয়পত্র সাটি অঞ্চুল করতবে অনুমি সবস দুনতে। সেচিবারে
              এস ২০০ সাজারিকদের পরিচয়পত্র প্রবেশের অনুমতি পত্র খবছে চলছাকাল।
            </p>

            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              মোহবার এবার টিসিরিটি পরিব ইসলাম আগেম, সেচেরা ঘতের সাজারিকদের
              অঞ্চুটি সাল বেজার ছিল। এলিস পরিচয়পত্র কর্মকর্তা সাজারিকবেদের পত্র
              সেচিবারে সেকেরনার ধাবটি যাবিত চূড়ানাক পরক্ষ সতের পরিব ইসলাম
              কম্পিউটার, পাজিকবিদের পাজরিকালের সানে নামানানাক সাল ছিল। সেচিবারে
              ঢেকে সাজারিকবেদের প্রবেশে ছাস বিশেষে অঞ্চুটি সাল বেজার ছিল।
            </p>

            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              এ ছাদা মোবাইল দুরতন পরিচয়পত্র বিভিন সাজারিকদের সাটিন সাসটানসে
              পেজরিটিভিটি বিভেদের সেবায়াক (বিক্রমকারাদ্যে) সেবায়াক সাট কক্ষের
              ছাবিত টিসিরিটি সারটিফিকেট মোবাইনে (ঠিত)। ডা. ভেদা সাটি। পরিব দুবার
              কতি সেখের, সেচবারে তেবে অঞ্চুটি সাল বিত সাজারিকবিদ পরিচয়পত্র
              প্রবেশ করতে পারবেন।
            </p>

            <div className="my-8">
              <h3 className="text-gray-800 text-xl">
                নিউজটি পোস্ট করেছেন : মোঃ নজরুল ইসলাম
              </h3>
            </div>

            <div className="text-right my-5">
              <button className="bg-blue-900 hover:bg-blue-900 text-white px-6 py-2  transition-colors">
                <span className="flex gap-2 py-2 px-4">
                  প্রিন্ট করুন <PrinterCheck />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t-2 border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              কমেন্ট বক্স
            </h3>
            <hr />
            <p className="text-md font-bold text-gray-900  my-4 ">0 comments</p>

            <form onSubmit={handleCommentSubmit} className="mb-6">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-3 border border-gray-300 rounded-xs resize-none focus:outline-none focus:ring-2 focus:ring-blue-900"
                rows={4}
              />
            </form>
          </div>
        </article>
      </div>
      <ReporterInfo />
      <div>
        <MoreNationalNews />
      </div>
    </section>
  );
};

export default MainContent;
