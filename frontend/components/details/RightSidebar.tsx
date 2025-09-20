import Image from "next/image";
import React from "react";

const RightSidebar = () => {
  const trendingArticles = [
    {
      id: 1,
      title: "প্রেস অ্যাক্রিডিটেশন নীতিমালা পুনর্গঠনে ১৭ সদস্যের কমিটি",
      image:
        "https://morningnewsbd.com/assets/images/post/1737221712MyHNpt14.jpg",
      featured: true,
    },
    {
      id: 2,
      title:
        "খায়রুল কবির খোকন বললেন, তাদের বহিষ্কারই সরকারের পতন আন্দোলনের মা",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273429ilYUX6zd.jpg",
    },
    {
      id: 3,
      title: "রান নেই-উইকেট নেই, তবু ম্যাচসেরা",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273429ilYUX6zd.jpg",
    },
    {
      id: 4,
      title: "বুবলীকে ‘পুলিশ’-এ যেমন দেখা যাবে",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273429ilYUX6zd.jpg",
    },
    {
      id: 5,
      title: "কিশোরগঞ্জে গুলি করে হত্যা মামলার কারাগারের চিকিৎসকসহ পাঁচজন",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273429ilYUX6zd.jpg",
    },
  ];

  return (
    <div className="bg-white  p-2 shadow-sm">
      {/* Section Heading */}
      <h3 className="text-lg py-4 px-2 font-semibold text-gray-800 mb-4 pb-2 ">
        আলোচিত সংবাদ
      </h3>

      {/* Featured Article */}
      {trendingArticles
        .filter((a) => a.featured)
        .map((article) => (
          <div key={article.id} className="mb-6">
            <Image
              width={500}
              height={500}
              src={article.image}
              alt={article.title}
            />
            <p className="mt-2 font-black text-gray-900 text-md  hover:text-blue-900 cursor-pointer">
              {article.title}
            </p>
          </div>
        ))}

      {/* Grid Articles */}
      <div className="grid grid-cols-2 gap-4">
        {trendingArticles
          .filter((a) => !a.featured)
          .map((article) => (
            <div key={article.id} className="cursor-pointer">
              <Image
                width={500}
                height={500}
                src={article.image}
                alt={article.title}
                className="w-full h-24 object-cover rounded"
              />
              <p className="mt-2 text-md font-black text-gray-900 hover:text-blue-900 leading-snug">
                {article.title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RightSidebar;
