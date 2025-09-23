import Image from "next/image";
import React from "react";

interface HomePageAdsProps {
  src: string;
  alt?: string;
}

const HomePageAds = ({ src, alt = "ads" }: HomePageAdsProps) => {
  return (
    <div className="mx-auto max-w-full xl:max-w-[1200px] 2xl:max-w-[1400px]  my-6">
      <Image
        className="px-4"
        src={src}
        alt={alt}
        width={1000}
        height={500}
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </div>
  );
};

export default HomePageAds;
