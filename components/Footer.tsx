"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MapPin, Clock, Facebook, Heart } from "lucide-react";

const navLinks = [
  { href: "#pocetna", label: "Početna" },
  { href: "#usluge", label: "Usluge" },
  { href: "#brendovi", label: "Brendovi" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

const kontaktInfo = [
  { Icon: Phone, text: "061 963 020", href: "tel:+38761963020" },
  { Icon: MapPin, text: "Magistralni put M18, Živinice", href: "https://maps.google.com/?q=Živinice+M18" },
  { Icon: Clock, text: "Pon–Pet 07:00–16:00 | Sub 07:00–14:00" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1F2937] text-white overflow-hidden">
      {/* Top red accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C41E1E] via-red-500 to-[#C41E1E]" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C41E1E] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C41E1E] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 – Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <a href="#pocetna" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1.5 group-hover:bg-white/20 transition-colors">
                <Image
                  src="/images/hg-prom-logo.png"
                  alt="HG-PROM d.o.o."
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-lg text-white group-hover:text-red-400 transition-colors">
                  HG-PROM
                </span>
                <span className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">
                  d.o.o. Živinice
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Vodeći distributer fasadnih sistema, stiropola i građevinskog materijala u
              Živinicama. 15+ godina iskustva, 2 lokacije, 10+ brendova.
            </p>
            {/* Social */}
            <a
              href="hhttps://www.facebook.com/p/DOO-Hg-Prom-100040748006278/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#C41E1E] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
          </motion.div>

          {/* Column 2 – Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#C41E1E] inline-block" />
              Navigacija
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C41E1E] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 – Kontakt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#C41E1E] inline-block" />
              Kontakt
            </h4>
            <ul className="space-y-4">
              {kontaktInfo.map(({ Icon, text, href }) => (
                <li key={text}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <div className="bg-[#C41E1E]/20 group-hover:bg-[#C41E1E]/40 rounded-lg p-1.5 flex-shrink-0 transition-colors">
                        <Icon className="w-4 h-4 text-[#C41E1E]" />
                      </div>
                      <span className="text-sm font-medium leading-snug">{text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-gray-400">
                      <div className="bg-[#C41E1E]/20 rounded-lg p-1.5 flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#C41E1E]" />
                      </div>
                      <span className="text-sm font-medium leading-snug">{text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 – CTA glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#C41E1E]/40 transition-colors">
              <h4 className="text-white font-black text-base mb-2">Trebate ponudu?</h4>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Pozovite nas ili pošaljite upit — odgovaramo brzo.
              </p>
              <a
                href="tel:+38761963020"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#C41E1E] to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 mb-3"
              >
                <Phone className="w-4 h-4" />
                061 963 020
              </a>
              <a
                href="#kontakt"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                Pošalji upit
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <p>© 2026 HG-PROM d.o.o. Živinice. Sva prava zadržana.</p>
            <p className="flex items-center gap-1.5">
              Napravio s <Heart className="w-3.5 h-3.5 text-[#C41E1E] fill-[#C41E1E]" />{" "}
              <span className="text-gray-400 font-medium">Faris Zenunović</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
