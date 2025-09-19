import React from 'react';

const RightSidebar = () => {
  const trendingArticles = [
    {
      id: 1,
      title: 'করোনাকালের বাজেস্কে দরেছ করছে সিজিশাসে বিদিয়ান, সাই সহজ করা',
      image: '/images/trending1.jpg',
      category: 'আলোচিত সংবাদ',
    },
    {
      id: 2,
      title: 'লস সেব: উপবার সে, শুর বাহাশাক',
      image: '/images/trending2.jpg',
      category: '',
    },
    {
      id: 3,
      title: 'দুর্নীতিস পিশানে ...এ সেলস লেস দারে',
      image: '/images/trending3.jpg',
      category: '',
    },
    {
      id: 4,
      title: 'প্রেস পাটিফিশিজ্ঞিশ মিডিয়ারা সুদমাদিবাদের ১৭ জরশাস পিটিশ',
      image: '/images/trending4.jpg',
      category: '',
    },
    {
      id: 5,
      title: 'গ্রান্ড সাসেস ফুটবল এ গোল্ডমেডেল এই গেজরকা',
      image: '/images/trending5.jpg',
      category: '',
    },
  ];

  const onlineEditors = [
    {
      id: 1,
      title: 'ONLINE EDITORS CHOICE',
      image: '/images/editor1.jpg',
    },
  ];

  const popularNews = [
    {
      id: 1,
      title: 'সংস্কার অভিসেয়ে ২২ মায় সংস্কার সরকেনা মিসল মূল গানারা',
      image: '/images/popular1.jpg',
    },
    {
      id: 2,
      title: 'সাজারিভিকাগ্রে ছারের জিয়ার জিজ্ঞাসা প্রবি সসরা ১৫ জন',
      image: '/images/popular2.jpg',
    },
  ];

  const videoNews = [
    {
      id: 1,
      title: 'সেপিডিডাছাটিত ছাসের বিজার জিভাসান প্রবি সসরা ১৫ জন',
      image: '/images/video1.jpg',
    },
  ];

  const businessNews = [
    {
      id: 1,
      title: 'স্বাধা লাভার লালি, আজাস ইসাবিড়িসের বিশৃষ্টি কর না',
      image: '/images/business1.jpg',
    },
  ];

  const moreNews = [
    {
      id: 1,
      title: 'বিবিশিসহ সাস স্কুট: অলিম কলের বিবিশিস প্রবাসার',
      image: '/images/more1.jpg',
    },
    {
      id: 2,
      title: 'বাইপাস করিত কারস: সালাবার "স্বরের রাইশকিস লেডার প্রানাইছেদের না',
      image: '/images/more2.jpg',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-red-500">
          আলোচিত সংবাদ
        </h3>
        <div className="space-y-3">
          {trendingArticles.map((article) => (
            <div key={article.id} className="flex gap-3 pb-3 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-24 h-20 object-cover rounded flex-shrink-0"
              />
              <div>
                {article.category && (
                  <span className="text-xs text-red-500 font-semibold">{article.category}</span>
                )}
                <p className="text-sm text-gray-700 line-clamp-2 hover:text-red-500 transition-colors">
                  {article.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        {onlineEditors.map((item) => (
          <div key={item.id} className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 text-center font-bold">
              {item.title}
            </div>
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-red-500">
          জনপ্রিয় সংবাদ
        </h3>
        <div className="space-y-3">
          {popularNews.map((article) => (
            <div key={article.id} className="flex gap-3 pb-3 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-20 h-16 object-cover rounded flex-shrink-0"
              />
              <p className="text-sm text-gray-700 line-clamp-2 hover:text-red-500 transition-colors">
                {article.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-red-500">
          ভিডিও সংবাদ
        </h3>
        <div className="space-y-3">
          {videoNews.map((video) => (
            <div key={video.id} className="cursor-pointer group">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[16px] border-l-red-500 border-y-[10px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2 group-hover:text-red-500 transition-colors">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-red-500">
          বাণিজ্য
        </h3>
        <div className="space-y-3">
          {businessNews.map((article) => (
            <div key={article.id} className="cursor-pointer hover:bg-gray-50 transition-colors p-2 -m-2 rounded">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-32 object-cover rounded mb-2"
              />
              <p className="text-sm text-gray-700 line-clamp-2 hover:text-red-500 transition-colors">
                {article.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-red-500">
          আরো সংবাদ
        </h3>
        <div className="space-y-3">
          {moreNews.map((article) => (
            <div key={article.id} className="flex gap-3 pb-3 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-20 h-16 object-cover rounded flex-shrink-0"
              />
              <p className="text-sm text-gray-700 line-clamp-2 hover:text-red-500 transition-colors">
                {article.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;