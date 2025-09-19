import Image from "next/image";

type NewsItem = {
  id: number;
  image: string;
  alt: string;
  text: string;
  imageClass?: string;
  href?: string;
};

export default function MiddleNewsCard() {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
    {
      id: 2,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
    {
      id: 3,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
    {
      id: 4,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
    {
      id: 5,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
    {
      id: 6,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
    {
      id: 7,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
    {
      id: 8,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
    {
      id: 9,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
    {
      id: 10,
      image:
        "https://morningnewsbd.com/assets/images/post/1737283161T1v3u229.jpg",
      alt: "Journalists at a press conference",
      text: "সচিবালয়ে সাংবাদিকদের প্রবেশাধিকার নিশ্চিতের আহ্বান ডিআরইউয়ের",
    },
  ];

  return (
    <section className="overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center py-2 px-3 border-l-4 border-[#012E48] bg-[#E8EDF0] my-4">
        <h2 className="text-lg font-bold text-gray-800">মিডিয়া</h2>
        <a
          href="#"
          className="flex items-center text-[#012E48] text-md hover:text-gray-700"
        >
          আরও খবর
          <span className="ml-1 text-xl -mt-1 transform scale-y-75">→</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 p-4 border border-gray-200 shadow-sm rounded-md">
        {newsItems.map((item) => (
          <a
            key={item.id}
            href={item.href || "#"}
            className="group flex items-center gap-2"
          >
            <div className="rounded-sm overflow-hidden border border-gray-200 bg-gray-100">
              <Image src={item.image} alt={item.alt} height={130} width={130} />
            </div>

            <p className="flex-1 text-[15px] leading-5 text-gray-900 group-hover:text-sky-700 line-clamp-3">
              {item.text}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
