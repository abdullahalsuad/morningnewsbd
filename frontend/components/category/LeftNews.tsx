import CategoryBreadcrumb from "./CategoryBreadcrumb";

const newsData = [
  {
    id: 1,
    img: "https://morningnewsbd.com/assets/images/post/1737204417fiM7Ihoq.jpg",
    title: "চাঁপাইনবাবগঞ্জের সীমান্তে আবার উত্তেজনা, হামলায় ৩ বাংলাদেশি আহত",
    date: "Jan 18, 2025 ইং",
  },
  {
    id: 2,
    img: "https://morningnewsbd.com/assets/images/post/1737204417fiM7Ihoq.jpg",
    title:
      "বর্তমান সরকারের প্রধান দায়িত্ব শেখ হাসিনাকে ফিরিয়ে এনে বিচারের সম্মুখীন করা: শফিকুল আলম",
    date: "Jan 18, 2025 ইং",
  },
  {
    id: 3,
    img: "https://morningnewsbd.com/assets/images/post/1737204417fiM7Ihoq.jpg",
    title: "রিকশাচালককে গুলি করে হত্যা মামলায় কারাগারে চিকিৎসকসহ পাঁচজন",
    date: "Jan 18, 2025 ইং",
  },
];

export default function LeftNews() {
  return (
    <>
      <CategoryBreadcrumb />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white shadow  overflow-hidden ">
            <img src={news.img} alt="" className="w-full h-36 object-cover" />
            <div className="px-2 py-2">
              <h3 className="font-medium text-gray-800 text-[20px] mb-2 line-clamp-2">
                {news.title}
              </h3>
              <hr />
              <p className="text-[12px] text-gray-500 pt-1">
                প্রকাশের তারিখঃ {news.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
