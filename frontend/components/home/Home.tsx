import React from "react";
import HeroLayout from "../home-hero/HeroLayout";
import HomePageAds from "../ads/HomePageAds";
import HomeSecondSection from "../home-second-section/HomeSecondSection";
import HomePageAdsTwo from "../ads/HomePageAdsTwo";
import HomeThirdSection from "../home-third-section/HomeThirdSection";
import PopularNews from "../PopularNews";
import { HomeEightSection } from "../home-second-section/HomeEightSection";
import RecentlyPublished from "../RecentlyPublished";
import MediaPhotoGallery from "../last-section/MediaPhotoGallery";
import VideoGallery from "../VideoGallery";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl mt-4">
        <HeroLayout />

        {/* ads */}
        <HomePageAds src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicpd5jHn65_nWN7eXEfKknexTEUL-OEyacKKUGvnn_KB4k-3XOvXxPWeb95oVt__vcf4qyYJq1DyslPixzYnbarJ_IihV5SJ7AkImmZoPWsH8_Af8Zr3GvVpkz_BsgApqctt3WAFYMUS4TUiFcBXESm6YKGBFJ1a7xyD9j3ZBYkBZbQRDvgy03XPppeI6D/s16000/horizontalbig1.jpg" />

        {/* second section */}
        <HomeSecondSection />

        {/* ads */}
        <HomePageAdsTwo
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2q3jvnSTtcartzHFv62aa2JW0F3yChDdIklOFz3BfEfTByNXVuxaN9zkLl2s_6a7tNfR0JLpa_2Gb1AtjHW7MPBMzJRAx3FpoErd8JMwEwINEGoUwdwkTX38dSL0sJPWsBxm5wQqiGgIE4nnmcBKwmN8gLXL-1puulgXbnQmNO-ZjP0XjMEJ7sXaAnSVL/s16000/horizontal2.png"
          src2="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwXwG-gUMjN-ayvGlhS32qSGTVr14sRfdwxZtVyRGumfS1zYuhRqhBuxYU3JEjCAt8Lcn6vK8pR48IrElTGRhkiGRAyPpv2G8JRwjy0KVnSJG6M8IXue34tmmpPMPFQv1YeDWvhEVew1qibjtN57WpzL1YKG5QmhWcv3zwLwNsvCkUboJm_MC9dynRHF4y/s728/horizontal4.png"
        />
      </div>

      {/* third section */}
      <div className="bg-[#F6F9F9]">
        <HomeThirdSection />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* ads */}
        <HomePageAds src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVgwki2O2ZzP5feducaTkhS3SJ7e5Yt-RrcKLFUd9ctWka1p9NZYnJJKix5gYdDFUGHsjEY0i227K2N2NZFFNUwRDu0I-u0cmmEn1wI4xvnrbOD9zKTckfa8_yYKXKbFbuj7kFQ9yPAclB21jbjlVBgIywPjNKpINoAaNQjp6eCrALCrfeGYl_S5jAv0XG/s970/horizontalbig2.gif" />
      </div>

      {/* video  */}

      <VideoGallery />

      <div className="mx-auto max-w-7xl mt-10">
        {/* popular */}
        <PopularNews />

        {/* ads */}
        <HomePageAds src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVgwki2O2ZzP5feducaTkhS3SJ7e5Yt-RrcKLFUd9ctWka1p9NZYnJJKix5gYdDFUGHsjEY0i227K2N2NZFFNUwRDu0I-u0cmmEn1wI4xvnrbOD9zKTckfa8_yYKXKbFbuj7kFQ9yPAclB21jbjlVBgIywPjNKpINoAaNQjp6eCrALCrfeGYl_S5jAv0XG/s970/horizontalbig2.gif" />

        {/* Recently published news */}
        <RecentlyPublished />

        {/* ads */}
        <HomePageAdsTwo
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2q3jvnSTtcartzHFv62aa2JW0F3yChDdIklOFz3BfEfTByNXVuxaN9zkLl2s_6a7tNfR0JLpa_2Gb1AtjHW7MPBMzJRAx3FpoErd8JMwEwINEGoUwdwkTX38dSL0sJPWsBxm5wQqiGgIE4nnmcBKwmN8gLXL-1puulgXbnQmNO-ZjP0XjMEJ7sXaAnSVL/s16000/horizontal2.png"
          src2="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwXwG-gUMjN-ayvGlhS32qSGTVr14sRfdwxZtVyRGumfS1zYuhRqhBuxYU3JEjCAt8Lcn6vK8pR48IrElTGRhkiGRAyPpv2G8JRwjy0KVnSJG6M8IXue34tmmpPMPFQv1YeDWvhEVew1qibjtN57WpzL1YKG5QmhWcv3zwLwNsvCkUboJm_MC9dynRHF4y/s728/horizontal4.png"
        />

        <HomeEightSection />

        {/* ads */}
        <HomePageAds src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg37p8arzYJ3jLgzp9he0n4B3vRqt-VB5BC63EDHhvDvFM90BBoo4xDL5_29yqgnSInrev2cvSIZvalL5BShwvi0Vl4d1stMPpWKlcz_7PIpcK4UG4VLA-YoswL11EtInkB1YoshFLxhrlLbtgDk77bK2KJjrFpg5ugelAj1K47tHal971Z0WZK7uNgkQV5/s970/horizontalbig4.jpg" />

        {/* last */}
        <MediaPhotoGallery />
      </div>
    </>
  );
};

export default Home;
