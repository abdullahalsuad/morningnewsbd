"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

type Props = {
  onNavigate?: () => void;
};

export default function Sidebar({ onNavigate }: Props) {
  const { data: session } = useSession();
  const name = session?.user?.name || "Guest";

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      onClick={onNavigate}
      className="block rounded px-3 py-2 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
    >
      {children}
    </Link>
  );

  return (
    <aside className="w-64 h-full bg-[#0A4466] text-white p-4 flex flex-col overflow-y-auto overflow-x-hidden">
      {/* Title */}
      <div className="text-lg font-semibold mb-4 text-center">
        সংবাদ ৭১ বিডি
      </div>
      <hr className="border-white/20 mb-3" />

      {/* Main nav */}
      <nav className="space-y-2">
        <NavLink href="/all">All News</NavLink>
        <NavLink href="/post">Add</NavLink>
        <NavLink href="/user">All Users</NavLink>
        <NavLink href="/categories">Categories</NavLink>
      </nav>

      {/* Bottom section */}
      <div className="mt-auto space-y-4">
        <NavLink href="/">Back to Home</NavLink>

        <div className="border-t border-white/20 pt-4 space-y-1 px-1">
          <div className="text-sm opacity-80">User Info</div>
          <div className="text-sm font-medium">{name}</div>
          {session?.user?.email && (
            <div className="text-xs opacity-75">{session.user.email}</div>
          )}

          <button
            onClick={() => {
              signOut();
            }}
            className="mt-3 w-full rounded bg-white/10 px-3 py-2 text-left hover:bg-white/20"
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
