"use client";

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation"; // for active link (home only)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQs" },
    { href: "#security", label: "Security" },
    { href: "#contact", label: "Contact" },
  ];

  const Brand = () => (
    <div className="left-0 flex gap-3 items-center">
      <span className="inline-block w-7 h-7 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#0f766e] shadow-[0_0_0_4px_rgba(255,255,255,0.05)]" />
      <h1 className="text-xl md:text-2xl font-semibold tracking-tight">SaveWise Nexus</h1>
    </div>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden xl:block">
        <section className="w-full bg-[#0f1220]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0f1220]/60 rounded-full flex items-center justify-between px-6 py-3 border border-white/5">
          <Brand />

          {/* Nav Links */}
          <div className="flex items-center">
            {links.map((link) => (
              <h1
                key={link.href}
                className={`text-base px-4 py-2 rounded-full cursor-pointer transition-colors hover:bg-white/5`}
              >
                <a href={link.href}>{link.label}</a>
              </h1>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/signup" className="text-base hover:underline">
              Create account
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 rounded-full text-white text-base bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] hover:from-[#1a43bb] hover:to-[#0d6a62] transition-colors"
            >
              Start saving now
            </Link>
          </div>
        </section>
      </div>

      {/* Mobile & Tablet Navbar */}
      <div className="xl:hidden w-[97%] mx-auto bg-[#0f1220]/70 backdrop-blur px-6 py-4 flex justify-between items-center rounded-full border border-white/5">
        <Brand />

        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl z-[100] px-3 py-2 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0f766e]"
          aria-label="Open menu"
        >
          <Bars3BottomRightIcon className="w-7 h-7" />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <button
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
          aria-label="Close menu"
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 z-[1000] right-0 h-full w-72 bg-[#0e1424] text-white px-6 py-6 transform transition-transform duration-300 ease-in-out border-l border-white/10 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white text-3xl mb-6"
          aria-label="Close menu"
        >
          <HiOutlineX />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-white/5`}
            >
              {link.label}
            </a>
          ))}

          <hr className="border-white/10 my-4" />
          <Link href="/signup" onClick={() => setMenuOpen(false)} className="text-base">
            Create account
          </Link>
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center mt-2 py-3 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] text-white text-base"
          >
            Start saving now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
