import React from 'react';

const LeftSidebar = () => {
  const sidebarNews = [
    {
      id: 1,
      title: 'যুক্তরাষ্ট্র নিষেধাজ্ঞা দিলেও মেবা থামে নরও বাছি',
      image: '/images/sidebar1.jpg',
    },
    {
      id: 2,
      title: 'অস্ট্রেলিয়ার রাষ্ট্রপতিপারসকে দুর্নীতি করে আজও ছুমে পাবায় ইসরায়েল',
      image: '/images/sidebar2.jpg',
    },
    {
      id: 3,
      title: 'কাসেরপ্রাকশল সেপার রাজেষ্টিকে রাজাজির যেব কলা ক্যালায়ক',
      image: '/images/sidebar3.jpg',
    },
    {
      id: 4,
      title: 'দক্ষতা উন্নয়নে নতুন কর্ম, বিভাসাখে শেষের বিবির',
      image: '/images/sidebar4.jpg',
    },
    {
      id: 5,
      title: 'স্থিতি বিতনের সেশ পিসচিত্তা সেল দিল',
      image: '/images/sidebar5.jpg',
    },
    {
      id: 6,
      title: 'বসাপিসক বাজারসেরের দেত ক্রারেয়ে নতুন সদস্যদের শপথ সম্পন্নক সায়া',
      image: '/images/sidebar6.jpg',
    },
    {
      id: 7,
      title: 'বিশ্বসেত এক নতুনরাজকে ৩ দিন বার পাড়ার ঘাটে না, ক্রারেয়ে বিশেক',
      image: '/images/sidebar7.jpg',
    },
    {
      id: 8,
      title: 'বাড়ির দেশখ্যাত পাদি, তাক-তেসের সৌদি পাগেত না পাদিয়া পদকাল',
      image: '/images/sidebar8.jpg',
    },
    {
      id: 9,
      title: 'স্লীম ওয়াপিলিটের পেশাতেশ, কম্য রিশাই সই করলেন বেল-উপশক',
      image: '/images/sidebar9.jpg',
    },
    {
      id: 10,
      title: 'করেন্ডাকারের বাজেসের ঢেরেই করছে পিটিয়াসের বিদিয়ান, চাই সহজ করা',
      image: '/images/sidebar10.jpg',
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-red-500">
        সর্বশেষ সংবাদ
      </h3>
      <div className="space-y-3">
        {sidebarNews.map((item) => (
          <div 
            key={item.id} 
            className="flex gap-3 pb-3 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-16 object-cover rounded flex-shrink-0"
            />
            <p className="text-sm text-gray-700 line-clamp-3 hover:text-red-500 transition-colors">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;