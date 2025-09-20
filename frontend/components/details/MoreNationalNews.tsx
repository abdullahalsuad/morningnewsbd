import React from "react";

const MoreNationalNews = () => {
  const articles = [
    {
      id: 1,
      title: "সেমিকন্ডাক্টরের খাতের বিকাশে টাস্কফোর্স গঠন, সদস্য ১৩ জন",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 2,
      title: "খালেদা জিয়াকে সর্বক্ষনিক চিকিৎসা দিচ্ছে লন্ডন ক্লিনিকের মেড",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 3,
      title: "৫৩ বছর দেশ শাসনকারীরা নতুন আঙ্গি দেখাতে পারেনি: চরমোনাই পীর",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 4,
      title: "সংস্কার কমিটিতে ২২ দফা সংস্কারের প্রস্তাব দিল মুক্ত গণমঞ্চ",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 5,
      title: "নতুন বছরের শুরুতেই সব ফোনে বন্ধ হচ্ছে হোয়াটসঅ্যাপ",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
    {
      id: 6,
      title: "রান নেই-উইকেট নেই, তবু ম্যাচসেরা",
      image:
        "https://morningnewsbd.com/assets/images/post/1737273934D3RWtJBb.jpg",
    },
  ];

  return (
    <section className="mt-5">
      {/* Title bar */}
      <div className=" border-gray-300 bg-[#D1D2D4]">
        <h3 className="inline-block text-lg font-semibold text-gray-800  border-t-2 p-4 pb-3 bg-[#F1F1F2] border-red-500 ">
          এ জাতীয় আরো খবর
        </h3>
      </div>
      <div className=" bg-white p-4 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {articles.map((article) => (
            <div key={article.id} className="cursor-pointer">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-32 object-cover"
              />
              <p className="mt-2 text-md  font-black text-gray-900 leading-snug hover:text-blue-900 transition-colors">
                {article.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Grid */}
    </section>
  );
};

export default MoreNationalNews;
