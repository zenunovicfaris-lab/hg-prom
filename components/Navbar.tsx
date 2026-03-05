"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#pocetna", label: "Početna" },
  { href: "#o-nama", label: "O nama" },
  { href: "#usluge", label: "Usluge" },
  { href: "#brendovi", label: "Brendovi" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

function HGLogo() {
  return (
    <a href="#pocetna" className="flex items-center gap-3 group">
      <Image
        src="/images/hg-prom-logo.png"
        alt="HG-PROM d.o.o. Živinice"
        width={44}
        height={44}
        className="flex-shrink-0 hover:scale-105 transition-transform duration-200 rounded-lg shadow-sm"
        priority
      />
      <div className="flex flex-col leading-tight">
        <span className="text-[#1F2937] font-bold text-lg tracking-tight group-hover:text-[#C41E1E] transition-colors duration-200">
          HG-PROM
        </span>
        <span className="text-[#4B5563] text-[10px] uppercase tracking-widest font-medium">
          d.o.o. Živinice
        </span>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      {/* FIXED NAVBAR - VIDLJIV NA SVIH EKRANIMA */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <HGLogo />

            {/* Desktop nav - SAKRIVAN NA MOBITELU */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-base font-semibold text-gray-700 hover:text-red-600 rounded-lg transition-all duration-200 hover:bg-red-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+38761963020" className="text-sm text-gray-600 font-semibold hover:text-red-600">
                061 963 020
              </a>
              <a
                href="tel:+38761963020"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Phone size={18} />
                Pozovi
              </a>
            </div>

            {/* MOBILE HAMBURGER - VIDLJIV NA SVIH EKRANIMA MALIH OD LG */}
            <button
              className="lg:hidden p-3 bg-white/50 hover:bg-white rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center w-12 h-12"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            >
              {mobileOpen ? (
                <X className="w-7 h-7 text-gray-800" />
              ) : (
                <Menu className="w-7 h-7 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE SIDEBAR - OTVARA SE NA KLIK */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow-2xl border-t-4 border-red-600"
          >
            <div className="max-w-4xl mx-auto px-6 py-12">
              <div className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="block text-2xl font-bold text-gray-800 hover:text-red-600 py-6 px-4 rounded-2xl hover:bg-red-50 transition-all duration-200 border-l-8 border-transparent hover:border-red-600 text-left"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="tel:+38761963020"
                  onClick={handleLinkClick}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl font-black py-8 px-12 rounded-3xl shadow-2xl hover:shadow-3xl mt-8 mx-auto w-fit transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-8 h-8" />
                  POZOVI 061 963 020
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
