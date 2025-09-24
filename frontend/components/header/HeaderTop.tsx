"use client";

import { useEffect, useState } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { BanglaDate } from "@subrotosaha/bangla-date";
import { CalendarMinus2, MapPin } from "lucide-react";

export default function HeaderTop() {
  const [city, setCity] = useState("ঢাকা");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    // Detect city
    const fetchCity = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("Failed to fetch city");
        const data = await res.json();
        console.log(data);

        if (data.city) {
          const cityMap: Record<string, string> = {
            Dhaka: "ঢাকা",
            Chattogram: "চট্টগ্রাম",
            Rajshahi: "রাজশাহী",
            Khulna: "খুলনা",
          };
          setCity(cityMap[data.city] || data.city);
        }
      } catch (error) {
        console.error("City detection failed:", error);
        setCity("ঢাকা");
      }
    };
    fetchCity();

    // Time + Bangla date
    const fmt = () => {
      const now = new Date();

      // Bangla time
      const time = new Intl.DateTimeFormat("bn-BD", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }).format(now);

      // convert AM/PM to bangla
      const banglaTime = time.replace("AM", "এএম").replace("PM", "পিএম");

      // bangla to english number
      const banglaToEnglishNumber = (bn: string) => {
        const map: Record<string, string> = {
          "০": "0",
          "১": "1",
          "২": "2",
          "৩": "3",
          "৪": "4",
          "৫": "5",
          "৬": "6",
          "৭": "7",
          "৮": "8",
          "৯": "9",
        };
        return parseInt(
          bn.replace(/[০-৯]/g, (d) => map[d]),
          10
        );
      };

      // get bangla months name
      const getBanglaMonthName = (month: number) => {
        const months = [
          "বৈশাখ",
          "জ্যৈষ্ঠ",
          "আষাঢ়",
          "শ্রাবণ",
          "ভাদ্র",
          "আশ্বিন",
          "কার্তিক",
          "অগ্রহায়ণ",
          "পৌষ",
          "মাঘ",
          "ফাল্গুন",
          "চৈত্র",
        ];

        return months[month - 1];
      };

      // Bangla calendar date
      const bd = new BanglaDate(now, "bn");
      const day = bd.getDate();
      const monthIndex = bd.getMonth();
      const year = bd.getYear();

      // Convert bangla to english  number
      const monthIndexNum = banglaToEnglishNumber(monthIndex);
      const banglaMonthName = getBanglaMonthName(monthIndexNum);

      const banglaDate = `${day} ${banglaMonthName} ${year} বঙ্গাব্দ`;

      return `${banglaTime} | ${banglaDate}`;
    };

    setDateTime(fmt());
    const id = setInterval(() => setDateTime(fmt()), 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className=" mx-auto max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px]  border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="py-2 flex items-center justify-between px-4">
        {/* Left: City + Time */}
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <MapPin size={20} />
          <span className="font-medium text-[19px]">{city}</span>
          <span className="hidden sm:inline">
            <CalendarMinus2 size={20} />
          </span>
          <span className="hidden sm:inline font-medium text-[19px]">
            {dateTime}
          </span>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            aria-label="YouTube"
            className="p-3 rounded-full bg-red-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaYoutube size={20} className="text-red-600" />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaLinkedinIn size={20} className="text-[#0A66C2]" />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="p-3 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-gray-2 00 dark:hover:bg-gray-700 transition"
          >
            <FaTwitter size={20} className="text-sky-500" />
          </Link>
          <a
            href="#"
            aria-label="Facebook"
            className="p-3 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaFacebookF size={20} className="text-[#1877F2]" />
          </a>
        </div>
      </div>
    </div>
  );
}
