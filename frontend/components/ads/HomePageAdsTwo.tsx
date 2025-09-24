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
    <section className="mx-auto max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px]">
      <div className="my-10 grid grid-cols-2 gap-4 px-4">
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
