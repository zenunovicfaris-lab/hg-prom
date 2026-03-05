"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="pocetna" className="relative overflow-hidden bg-white min-h-[90vh]">
      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-50">
        <Image
          src="/images/hero.jpg"
          alt="HG-PROM prodavnica Živinice"
          fill
          className="object-cover object-center opacity-20 mix-blend-multiply"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 pt-20 pb-24 lg:pt-28 lg:pb-36 min-h-[90vh] flex items-center">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/95 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Lokacija badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-6 py-3 rounded-3xl mb-10 border-4 border-red-200 shadow-xl backdrop-blur-sm"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-bold text-base md:text-lg">
              Živinice, Magistralni put M18 • 061 963 020
            </span>
          </motion.div>

          {/* Glavni naslov */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[0.95] drop-shadow-lg"
          >
            SVE ZA
            <span className="block text-red-600 text-5xl md:text-7xl lg:text-8xl">
              FASADNE SISTEME
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mt-5 px-4 py-3 bg-white/60 rounded-3xl backdrop-blur-sm">
              Stiropor • Fasade • Utpljavanje objekata • Baumit • Ceresit
            </span>
          </motion.h1>

          {/* Opis */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-sm"
          >
            HG-PROM d.o.o. • Najbolje cijene u Živinicama • Brza dostava • Stručni savjet
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="tel:+38761963020"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-3xl border-4 border-red-500/30 backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              POZOVITE ODMAH
            </motion.a>
            <motion.a
              href="#usluge"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/80 hover:bg-white border-4 border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-3xl backdrop-blur-sm flex items-center justify-center"
            >
              POGLEDAJTE PONUDU
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto text-center"
          >
            {[
              { num: "15+", label: "Godina iskustva" },
              { num: "500+", label: "Zadovoljnih klijenata" },
              { num: "10+", label: "Premium brendova" },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="bg-white/70 backdrop-blur-xl p-7 rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-black text-red-600 mb-2">{num}</div>
                <div className="text-lg font-bold text-gray-800">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-red-600 animate-bounce drop-shadow-lg" />
      </motion.div>
    </section>
  );
}
