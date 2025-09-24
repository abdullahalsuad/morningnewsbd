"use client";

import PhotoGallery from "./PhotoGallery";
import Media from "./Media";

export default function Page() {
  return (
    <section className="mx-auto max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px] mb-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
        {/* Left side: PhotoGallery (8/12) */}
        <div className="lg:col-span-8">
          <PhotoGallery
            images={[
              "https://morningnewsbd.com/assets/images/image-album/17372200621726645091Screenshot_1.jpg",
              "https://morningnewsbd.com/assets/images/image-album/17372199391726644443ak_1723399984.jpg",
              "https://morningnewsbd.com/assets/images/image-album/17372200621726645091Screenshot_1.jpg",
              "https://morningnewsbd.com/assets/images/image-album/17372199691726644500gonobhaban-050824-09-1722853720.jpg",
            ]}
          />
        </div>

        {/* Right side: Media widget (4/12) */}
        <div className="lg:col-span-4">
          <Media />
        </div>
      </div>
    </section>
  );
}
