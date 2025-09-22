"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const newsSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=600&fit=crop",
    mainTitle: "সময় সচিবালয়ে আগুন: প্রাথমিক",
    subtitle: "আগ্নিকাণ্ডের ৫ দিন পর সচিবালয়ে সাংবাদিকদের প্রবেশ",
    description:
      "এর আগে রবিবার সরকারের পক্ষ থেকে জানানো হয়েছিল সাংবাদিকরা সচিবালয়ে প্রবেশ করতে পারবেন, কিন্তু সকাল থেকে প্রবেশের জন্য সাংবাদিকরা সচিবালয়ে",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    mainTitle: "রাজধানীতে পরিস্থিতি উত্তপ্ত",
    subtitle: "পুলিশের সঙ্গে ধাওয়া-পাল্টা ধাওয়া চলছে",
    description:
      "সকালে রাজধানীর বিভিন্ন স্থানে রাজনৈতিক দলগুলো মিছিল সমাবেশ করে। পুলিশের সঙ্গে ধাওয়া-পাল্টা ধাওয়া হয়, পরিস্থিতি উত্তপ্ত আকার ধারণ করে। বিভিন্ন",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop",
    mainTitle: "বাংলাদেশ দলের নতুন যাত্রা শুরু",
    subtitle: "বিশ্বকাপকে সামনে রেখে দলের প্রস্তুতি চলছে",
    description:
      "সকালে রাজধানীর বিভিন্ন স্থানে রাজনৈতিক দলগুলো মিছিল সমাবেশ করে। পুলিশের সঙ্গে ধাওয়া-পাল্টা ধাওয়া হয়, পরিস্থিতি উত্তপ্ত আকার ধারণ করে। বিভিন্ন",
  },
];

export default function BengaliNewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + newsSlides.length) % newsSlides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="lg:max-w-4xl mx-auto ">
      {/* Main Slider Container */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {newsSlides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="relative">
                {/* Full Image Background */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    height={500}
                    width={500}
                    src={slide.image}
                    alt={slide.mainTitle}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Red Title Bar at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-3">
                    <h2 className="text-white font-bold text-xl md:text-2xl leading-tight">
                      {slide.mainTitle}
                    </h2>
                  </div>
                </div>

                {/* Description Below Image */}
                <div className="bg-white p-2">
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    {slide.description}{" "}
                    <a
                      href="#"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      বিস্তারিত
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots Pagination */}
      <div className="flex justify-center space-x-2 py-3 ">
        {newsSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-red-600"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
