"use client";

import { useState, useRef, useEffect } from "react";
import { LucideHome } from "lucide-react";
import { FiMenu, FiSearch, FiChevronDown } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileDrawer from "./MobileDrawer";
import { FaCaretDown } from "react-icons/fa";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV_LINKS: NavItem[] = [
  { label: "প্রচ্ছদ", href: "/" },
  {
    label: "জাতীয়",
    href: "/national",
    children: [
      { label: "অর্থনীতি", href: "/national/economy" },
      { label: "দুর্নীতি", href: "/national/corruption" },
    ],
  },
  {
    label: "রাজনীতি",
    href: "/politics",
    children: [
      { label: "বিএনপি", href: "/politics/bnp" },
      { label: "আওয়ামীলীগ", href: "/politics/awami-league" },
      { label: "অনন্য", href: "/politics/others" },
      { label: "বিশেষ প্রতিবেদন", href: "/politics/special" },
    ],
  },
  {
    label: "আন্তর্জাতিক",
    href: "/international",
    children: [
      { label: "জাতিসংঘ", href: "/international/un" },
      { label: "বিশ্ব রাজনীতি", href: "/international/world-politics" },
      { label: "সারাবিশ্ব", href: "/international/global" },
    ],
  },
  { label: "তথ্য প্রযুক্তি", href: "/technology" },
  {
    label: "সারাদেশ",
    href: "/country",
    children: [
      { label: "ঢাকা", href: "/country/dhaka" },
      { label: "চট্টগ্রাম", href: "/country/chittagong" },
      { label: "রাজশাহী", href: "/country/rajshahi" },
      { label: "খুলনা", href: "/country/khulna" },
      { label: "বরিশাল", href: "/country/barishal" },
      { label: "সিলেট", href: "/country/sylhet" },
      { label: "রংপুর", href: "/country/rangpur" },
      { label: "ময়মনসিংহ", href: "/country/mymensingh" },
    ],
  },
  { label: "ক্যাম্পাস", href: "/campus" },
  { label: "বিনোদন", href: "/entertainment" },
  { label: "খেলাধুলা", href: "/sports" },
  { label: "মিডিয়া", href: "/media" },
  { label: "ই-পেপার", href: "/epaper" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  // Check if current path matches nav item
  const isActive = (href: string, children?: NavChild[]) => {
    if (pathname === href) return true;
    if (children) {
      return children.some((child) => pathname === child.href);
    }
    return false;
  };

  return (
    <div className="w-full bg-[#0A4466] text-white sticky top-0 z-40 shadow-sm">
      <div className="mx-auto px-4  max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px]">
        <div className="flex items-center justify-between ">
          <nav className="hidden xl:flex items-stretch gap-0 flex-1">
            {NAV_LINKS.map((item) => {
              const hasChildren = (item.children?.length ?? 0) > 0;
              const active = isActive(item.href, item.children);

              // Items without children
              if (!hasChildren) {
                const icon =
                  item.label === "প্রচ্ছদ" ? (
                    <LucideHome size={16} />
                  ) : item.label === "ই-পেপার" ? (
                    <LuNewspaper size={16} />
                  ) : null;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-2 xl:px-5 py-3.4 flex items-center select-none cursor-pointer text-sm xl:text-base whitespace-nowrap transition-all duration-200 ${
                      active
                        ? "bg-[#012E48] text-white"
                        : "hover:bg-[#093955]/80"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1">
                      {icon}
                      {item.label}
                    </span>
                  </Link>
                );
              }

              // Items with dropdown children
              return (
                <SmoothHoverDropdown
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  active={active}
                >
                  {item.children!.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className={`w-full block px-4 py-2.5 hover:bg-[#093955]/20 transition-colors duration-150 ${
                        pathname === c.href ? "bg-[#093955]/30 font-medium" : ""
                      }`}
                    >
                      {c.label}
                    </Link>
                  ))}
                </SmoothHoverDropdown>
              );
            })}
          </nav>

          {/* Tablet navigation (lg to xl) - shows fewer items */}
          <nav className="hidden lg:flex xl:hidden items-stretch gap-0 flex-1">
            {NAV_LINKS.slice(0, 6).map((item) => {
              const hasChildren = (item.children?.length ?? 0) > 0;
              const active = isActive(item.href, item.children);

              if (!hasChildren) {
                const icon =
                  item.label === "প্রচ্ছদ" ? (
                    <LucideHome size={16} />
                  ) : item.label === "ই-পেপার" ? (
                    <LuNewspaper size={16} />
                  ) : null;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-2 flex items-center select-none cursor-pointer text-sm whitespace-nowrap transition-all duration-200 ${
                      active
                        ? "bg-[#012E48] text-white"
                        : "hover:bg-[#093955]/80"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1">
                      {icon}
                      {item.label}
                    </span>
                  </Link>
                );
              }

              return (
                <SmoothHoverDropdown
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  active={active}
                >
                  {item.children!.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className={`w-full block px-4 py-2.5 hover:bg-[#093955]/20 transition-colors duration-150 ${
                        pathname === c.href ? "bg-[#093955]/30 font-medium" : ""
                      }`}
                    >
                      {c.label}
                    </Link>
                  ))}
                </SmoothHoverDropdown>
              );
            })}

            {/* More dropdown for remaining items */}
            <SmoothHoverDropdown label="আরও" href="#" active={false}>
              {NAV_LINKS.slice(6).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`w-full block px-4 py-2.5 hover:bg-[#093955]/20 transition-colors duration-150 ${
                    pathname === item.href ? "bg-[#093955]/30 font-medium" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </SmoothHoverDropdown>
          </nav>

          {/* Mobile hamburger menu */}
          <button
            className="lg:hidden p-2 -ml-2 hover:bg-[#093955] rounded-md transition-colors duration-200"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>

          {/* Search button */}
          <button
            onClick={() => setShowSearch((s) => !s)}
            className="p-2 rounded-md hover:bg-[#093955] ml-auto lg:ml-0 transition-colors duration-200"
            aria-label="Toggle search"
          >
            <FiSearch size={18} />
          </button>
        </div>

        {/* Collapsible search bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showSearch ? "max-h-20 opacity-100 pb-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 pt-3">
            <input
              type="text"
              placeholder="খুঁজুন…"
              className="w-full rounded-md border border-transparent bg-white/95 text-gray-800 placeholder-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white text-sm transition-all duration-200"
            />
            <Button
              type="button"
              variant="secondary"
              className="bg-white text-[#0A4466] hover:bg-gray-100 text-sm px-4 py-2 whitespace-nowrap transition-colors duration-200"
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={NAV_LINKS}
      />
    </div>
  );
}

/* Enhanced Smooth Hover Dropdown Component */
function SmoothHoverDropdown({
  label,
  href,
  children,
  active,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className={`px-2 xl:px-3 h-12 text-white inline-flex items-center gap-1 cursor-pointer text-sm xl:text-base whitespace-nowrap transition-all duration-200 ${
          active ? "bg-[#012E48] text-white" : "hover:bg-[#093955]/80"
        }`}
      >
        {label}
        <FaCaretDown
          size={20}
          className={`ml-4 transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </Link>

      {/* Custom dropdown with smooth animations */}
      <div
        className={`absolute top-full left-0 mt-0 w-56 bg-[#0A4466] text-white  shadow-lg z-50 transition-all duration-200 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 visible"
            : "opacity-0 scale-95 -translate-y-2 invisible"
        }`}
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
}
