"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import logo from "../../public/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50  bg-white w-full py-1 text-[#172536] shadow-sm">
      <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="DocAppoint Logo"
            width={170}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 justify-between">
          <ul className="flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#172536] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-2">
          <Link href="/login">
            <Button className="bg-[#FF9D0A] text-[#172536] hover:bg-[#E88400] hidden md:block">
              Login
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 text-[#172536]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-transparent border-t shadow-lg"
          >
            <ul className="flex flex-col gap-5 p-5 font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#172536] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button className="bg-[#FF9D0A] text-[#172536] w-full">
                    Create Account
                  </Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
