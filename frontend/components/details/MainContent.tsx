'use client';

import React, { useState } from 'react';

const MainContent = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, { id: Date.now(), text: comment, author: 'মোঃ নজরুল ইসলাম' }]);
      setComment('');
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <article>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
          অগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সংবাদিকদের প্রবেশ
        </h1>
        
        <div className="flex gap-4 mb-5 text-sm text-gray-600 pb-3 border-b border-gray-200">
          <span className="font-semibold text-red-500">মোঃ নজরুল ইসলাম</span>
          <span>নিজস্ব প্রতিবেদন | Jan 19, 2025 8:47</span>
        </div>

        <div className="relative mb-6 rounded-lg overflow-hidden">
          <img 
            src="/images/main-article.jpg" 
            alt="সচিবালয় অগ্নিকাণ্ড" 
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/40 text-white p-4">
            সমায় সচিবালয় আগুন: প্রাথমিক তদন্ত প্রতিবেদন আজ
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-5 rounded-lg mb-6 text-center">
            <h3 className="text-white text-lg mb-3">চত্বর ও পরিদর্শন এলাকা এ সাধারণ-আস করতে</h3>
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm inline-block">
              150 MB বোনাস
            </span>
          </div>

          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
            এই জাতে মোবাইল কর্তৃপক্ষ স্থা হতের করাহনি ছিজদের সাজারিকদের পরিচয়ত প্রবেশ করতে দেছের। হিন্দু দেকান ঢাকে প্রবেশের জন্য 
            সার্বজনিক পরিচয়পত্র সাটি অঞ্চুল করতবে অনুমি সবস দুনতে। সেচিবারে এস ২০০ সাজারিকদের পরিচয়পত্র প্রবেশের অনুমতি পত্র খবছে 
            চলছাকাল।
          </p>

          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
            মোহবার এবার টিসিরিটি পরিব ইসলাম আগেম, সেচেরা ঘতের সাজারিকদের অঞ্চুটি সাল বেজার ছিল। এলিস পরিচয়পত্র কর্মকর্তা সাজারিকবেদের 
            পত্র সেচিবারে সেকেরনার ধাবটি যাবিত চূড়ানাক পরক্ষ সতের পরিব ইসলাম কম্পিউটার, পাজিকবিদের পাজরিকালের সানে নামানানাক সাল ছিল। 
            সেচিবারে ঢেকে সাজারিকবেদের প্রবেশে ছাস বিশেষে অঞ্চুটি সাল বেজার ছিল।
          </p>

          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
            এ ছাদা মোবাইল দুরতন পরিচয়পত্র বিভিন সাজারিকদের সাটিন সাসটানসে পেজরিটিভিটি বিভেদের সেবায়াক (বিক্রমকারাদ্যে) সেবায়াক সাট 
            কক্ষের ছাবিত টিসিরিটি সারটিফিকেট মোবাইনে (ঠিত)। ডা. ভেদা সাটি। পরিব দুবার কতি সেখের, সেচবারে তেবে অঞ্চুটি সাল বিত সাজারিকবিদ 
            পরিচয়পত্র প্রবেশ করতে পারবেন।
          </p>

          <div className="bg-gray-100 p-4 rounded-lg my-8">
            <h3 className="text-gray-800 font-semibold">নিউজইটারি নোগট করেজেন : মোঃ নজরুল ইসলাম</h3>
          </div>

          <div className="text-right my-5">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition-colors">
              প্রিন্ট করুন
            </button>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t-2 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">মন্তব্য বক্স</h3>
          <p className="text-sm text-gray-600 mb-4">0 comments</p>
          
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={4}
            />
            <button 
              type="submit" 
              className="mt-3 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition-colors"
            >
              মন্তব্য করুন
            </button>
          </form>

          <div className="space-y-4">
            {comments.map((c) => (
              <div key={c.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-semibold text-red-500 mb-2">{c.author}</div>
                <div className="text-gray-700">{c.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-gray-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">লেখক সম্পর্কে</h3>
          <div className="flex items-center gap-4">
            <img 
              src="/images/author.jpg" 
              alt="মোঃ নজরুল ইসলাম" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-800">মোঃ নজরুল ইসলাম</h4>
              <p className="text-sm text-gray-600">সিনিয়র সংবাদদাতা +8801840832178</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-5 pb-2 border-b-2 border-red-500">
            এ জাতীয় আরো খবর
          </h3>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="cursor-pointer hover:-translate-y-1 transition-transform">
              <img 
                src="/images/related1.jpg" 
                alt="Article" 
                className="w-full h-28 object-cover rounded-lg mb-2"
              />
              <h4 className="text-sm text-gray-700 line-clamp-2">বাসার দাহের ক্ষান্তসপ</h4>
            </div>
            <div className="cursor-pointer hover:-translate-y-1 transition-transform">
              <img 
                src="/images/related2.jpg" 
                alt="Article" 
                className="w-full h-28 object-cover rounded-lg mb-2"
              />
              <h4 className="text-sm text-gray-700 line-clamp-2">
                ছাত্রীর সহকাল ন, জার্নিল নির্বাহীন অনুস চাই বিশিনসিসহ মিডিয়া নম
              </h4>
            </div>
            <div className="cursor-pointer hover:-translate-y-1 transition-transform">
              <img 
                src="/images/related3.jpg" 
                alt="Article" 
                className="w-full h-28 object-cover rounded-lg mb-2"
              />
              <h4 className="text-sm text-gray-700 line-clamp-2">
                সাজারিডিটিভিট: সেগার রাজেরাটিভ নিহিড়ের হাস জাকাম ছিতাক
              </h4>
            </div>
            <div className="cursor-pointer hover:-translate-y-1 transition-transform">
              <img 
                src="/images/related4.jpg" 
                alt="Article" 
                className="w-full h-28 object-cover rounded-lg mb-2"
              />
              <h4 className="text-sm text-gray-700 line-clamp-2">
                সংচার অটিসেক ২২ মায় সংচার প্রাজবনা মিসল মূল গানারা
              </h4>
            </div>
            <div className="cursor-pointer hover:-translate-y-1 transition-transform">
              <img 
                src="/images/related5.jpg" 
                alt="Article" 
                className="w-full h-28 object-cover rounded-lg mb-2"
              />
              <h4 className="text-sm text-gray-700 line-clamp-2">একইভাবেদের রাজটিত দেশা অজটিড</h4>
            </div>
            <div className="cursor-pointer hover:-translate-y-1 transition-transform">
              <img 
                src="/images/related6.jpg" 
                alt="Article" 
                className="w-full h-28 object-cover rounded-lg mb-2"
              />
              <h4 className="text-sm text-gray-700 line-clamp-2">কতির মিডিয়া সেশ মিশেদের সেশ দিল</h4>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MainContent;