import React from "react";
import NewsTabs from "./NewsTabs";
import RightSidebar from "./RightSidebar";
import SmallPostCards from "./SmallPostCards";
import NewsCarousel from "./NewsCarousel";

export default function HeroLayout({ items = [] }) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-12  isolate">
        {/* LEFT  */}
        <section className="col-span-12 lg:col-span-9">
          {/* TOP ROW */}
          <div className="grid grid-cols-12 ">
            {/* HERO */}
            <div className="col-span-12 lg:col-span-7">
              <NewsCarousel />
            </div>

            {/* NEWS TABS */}
            <div className="col-span-12 lg:col-span-5">
              <NewsTabs />
            </div>
          </div>

          {/*Bottom SMALL POSTS  */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <SmallPostCards />
          </div>
        </section>

        {/* RIGHT SIDEBAR  */}
        <aside className="col-span-12 lg:col-span-3 overflow-hidden">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
