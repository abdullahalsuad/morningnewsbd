import Image from "next/image";
import React from "react";

interface HomePageAdsProps {
  src: string;
  alt?: string;
}

const HomePageAds = ({ src, alt = "ads" }: HomePageAdsProps) => {
  return (
    <div className="w-full my-4">
      <Image
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
