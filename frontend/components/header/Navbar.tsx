"use client";

import { useState } from "react";
import { LucideHome } from "lucide-react";
import { FiMenu, FiSearch, FiChevronDown } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";

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

  return (
    <div className="w-full bg-[#0A4466] text-white sticky top-0 z-40 shadow-sm">
      <div className="mx-auto px-4  py-2 max-w-full xl:max-w-[1200px] 2xl:max-w-[1400px]">
        <div className="flex items-center justify-between h-12">
          <nav className="hidden xl:flex items-stretch gap-0 flex-1">
            {NAV_LINKS.map((item) => {
              const hasChildren = (item.children?.length ?? 0) > 0;

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
                    className="px-2 xl:px-3 flex items-center rounded-md hover:bg-[#093955]/80 select-none cursor-pointer text-sm xl:text-base whitespace-nowrap"
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
                <HoverDropdown key={item.label} label={item.label}>
                  {item.children!.map((c) => (
                    <DropdownMenuItem key={c.label} asChild>
                      <Link href={c.href} className="w-full block px-2 py-1">
                        {c.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </HoverDropdown>
              );
            })}
          </nav>

          {/* Tablet navigation (lg to xl) - shows fewer items */}
          <nav className="hidden lg:flex xl:hidden items-stretch gap-0 flex-1">
            {NAV_LINKS.slice(0, 6).map((item) => {
              const hasChildren = (item.children?.length ?? 0) > 0;

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
                    className="px-2 flex items-center rounded-md hover:bg-[#093955]/80 select-none cursor-pointer text-sm whitespace-nowrap"
                  >
                    <span className="inline-flex items-center gap-1">
                      {icon}
                      {item.label}
                    </span>
                  </Link>
                );
              }

              return (
                <HoverDropdown key={item.label} label={item.label}>
                  {item.children!.map((c) => (
                    <DropdownMenuItem key={c.label} asChild>
                      <Link href={c.href} className="w-full block px-2 py-1">
                        {c.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </HoverDropdown>
              );
            })}

            {/* More dropdown for remaining items */}
            <HoverDropdown label="আরও">
              {NAV_LINKS.slice(6).map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.href} className="w-full block px-2 py-1">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </HoverDropdown>
          </nav>

          {/* Mobile hamburger menu */}
          <button
            className="lg:hidden p-2 -ml-2 hover:bg-[#093955] rounded-md"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>

          {/* Search button */}
          <button
            onClick={() => setShowSearch((s) => !s)}
            className="p-2 rounded-md hover:bg-[#093955] ml-auto lg:ml-0"
            aria-label="Toggle search"
          >
            <FiSearch size={18} />
          </button>
        </div>

        {/* Collapsible search bar */}
        {showSearch && (
          <div className="pb-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="খুঁজুন…"
                className="w-full rounded-md border border-transparent bg-white/95 text-gray-800 placeholder-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white text-sm"
              />
              <Button
                type="button"
                variant="secondary"
                className="bg-white text-[#0A4466] hover:bg-gray-100 text-sm px-4 py-2 whitespace-nowrap"
              >
                Search
              </Button>
            </div>
          </div>
        )}
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

/* Reusable Hover Dropdown Component */
function HoverDropdown({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="px-2 xl:px-3 h-12 text-white hover:bg-[#093955]/80 inline-flex items-center gap-1 cursor-pointer text-sm xl:text-base whitespace-nowrap"
          >
            {label}
            <FiChevronDown
              size={14}
              className={`transition-transform cursor-pointer ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-56 bg-white text-gray-900 cursor-pointer"
        >
          {children}
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
