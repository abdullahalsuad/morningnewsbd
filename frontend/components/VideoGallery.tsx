"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface VideoItem {
  id: number;
  title: string;
  subtitle?: string;
  thumbnail: string;
  videoUrl?: string;
  category?: string;
  duration?: string;
}

const VideoGallery: React.FC = () => {
  const mainVideo: VideoItem = {
    id: 1,
    title: "ইতালির শীর্ষস্থানী প্রাচীন জানালা রোমিক সংস্কৃতি",
    subtitle: "আজকের আলোচিত হাইলাইটস ভিডিও",
    thumbnail:
      "https://morningnewsbd.com/assets/images/post/1737223708GdANR5Mb.jpg",
    videoUrl: "#",
    category: "ভিডিও লিড",
  };

  const videoItems: VideoItem[] = [
    {
      id: 2,
      title: "সাদি কাষরেন মোড়ানো হলো...",
      subtitle: "প্রবীর মিত্রের শেষ দিনগুলো। যেমন ছিল......",
      thumbnail:
        "https://morningnewsbd.com/assets/images/post/1737223708GdANR5Mb.jpg",
      category: "ভিডিও বিনোদন",
      duration: "3:45",
    },
    {
      id: 3,
      title: "'পিনিক' মুছিতে আবারো দেখা যাবে আদর-দয়া অটি",
      subtitle: "দুবলীকে 'পিনিক'—এ দেখা যাবে......",
      thumbnail:
        "https://morningnewsbd.com/assets/images/post/1737223708GdANR5Mb.jpg",
      category: "ভিডিও টকশো",
      duration: "5:20",
    },
    {
      id: 4,
      title: "বলিউডে 'থান' কেন নিপানায়",
      subtitle: "প্রাথমিকভাবে হুমকি পেয়েছিলেন এই তারকারা......",
      thumbnail:
        "https://morningnewsbd.com/assets/images/post/1737223708GdANR5Mb.jpg",
      category: "বাংলা",
      duration: "4:15",
    },
    {
      id: 5,
      title: "নতুন সিনেমার প্রিমিয়ার শো",
      subtitle: "শহরের সবচেয়ে বড় ইভেন্টে......",
      thumbnail:
        "https://morningnewsbd.com/assets/images/post/1737223708GdANR5Mb.jpg",
      category: "প্রিমিয়ার",
      duration: "2:30",
    },
  ];

  return (
    <div className="bg-gray-900 py-8 mt-10">
      <div className="mx-auto max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">ভিডিও গ্যালারী</h2>
          <a
            href="#"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
          >
            আরো ভিডিও দেখুন
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video */}
          <div className="lg:col-span-1">
            <div className="relative group cursor-pointer">
              <div className="bg-red-600 text-white px-3 py-1 rounded-md absolute top-3 left-3 z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                {mainVideo.category}
              </div>
              <img
                src={mainVideo.thumbnail}
                alt={mainVideo.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all group-hover:scale-110">
                  <svg
                    className="w-8 h-8 text-red-600 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-yellow-400 text-sm mb-2">
                  {mainVideo.subtitle}
                </p>
                <h3 className="text-white text-lg font-semibold line-clamp-2">
                  {mainVideo.title}
                </h3>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-400">আজকের আলোচিত হাইলাইটস ভিডিও</p>
            </div>
          </div>

          {/* Video Carousel */}
          <div className="lg:col-span-2">
            <div className="flex justify-between mb-4">
              <div className="flex gap-4">
                <button className="text-white font-medium pb-2 border-b-2 border-red-600">
                  ভিডিও বিনোদন
                </button>
                <button className="text-gray-400 hover:text-white font-medium pb-2 transition-colors">
                  ভিডিও টকশো
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="relative"
            >
              {videoItems.map((video) => (
                <SwiperSlide key={video.id}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-red-600 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration */}
                      {video.duration && (
                        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      )}

                      {/* Category Badge */}
                      {video.category && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                          {video.category}
                        </div>
                      )}
                    </div>

                    <div className="mt-3">
                      <h4 className="text-white font-medium  group-hover:text-red-400 transition-colors line-clamp-2">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Swiper>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 gap-2">
              <span className="w-8 h-1 bg-red-600 rounded-full"></span>
              <span className="w-8 h-1 bg-gray-600 rounded-full cursor-pointer hover:bg-gray-500"></span>
              <span className="w-8 h-1 bg-gray-600 rounded-full cursor-pointer hover:bg-gray-500"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
