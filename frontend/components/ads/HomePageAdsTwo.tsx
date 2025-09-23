import Image from "next/image";
import React from "react";

interface HomePageAdsProps {
  src: string;
  src2: string;
  alt1?: string;
  alt2?: string;
}

const HomePageAdsTwo = ({
  src,
  src2,
  alt1 = "ad 1",
  alt2 = "ad 2",
}: HomePageAdsProps) => {
  return (
    <section className=" mx-auto lg:w-8/12 px-4 lg:px-0">
      <div className="my-4 grid grid-cols-2 gap-4">
        <Image
          src={src}
          alt={alt1}
          width={1000}
          height={500}
          className="w-full h-auto"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
        <Image
          src={src2}
          alt={alt2}
          width={1000}
          height={500}
          className="w-full h-auto"
          sizes="(min-width: 768px) 50vw, 100vw"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HomePageAdsTwo;
