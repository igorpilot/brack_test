"use client";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { navItems } from "@/data/navItems";
export const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-yellow-500 shadow-[0_0_10px_#FFE81F]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href={ROUTES.HOME}
          className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-all"
        >
          AllianceBook
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-yellow-400 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <MobileMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          pathname={pathname}
        />
      )}
    </header>
  );
};

const MobileMenu = ({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string | null;
}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900/95 border-r border-yellow-500 shadow-lg transform transition-transform duration-300 z-40 translate-x-0`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col mt-20">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={pathname === item.href}
              onClick={onClose}
            />
          ))}
        </nav>
      </div>

      <div
        className="fixed inset-0 bg-black/50 z-30"
        onClick={onClose}
        aria-hidden={!open}
      />
    </>
  );
};
