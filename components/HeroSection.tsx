"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="pocetna" className="relative overflow-hidden bg-white min-h-screen">
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

      {/* Content - UKLONIO VELIKI LOGO */}
      <div className="relative z-20 pt-24 pb-32 lg:pt-32 lg:pb-48 min-h-screen flex items-center">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white/95 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Lokacija badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-8 py-4 rounded-3xl mb-12 border-4 border-red-200 shadow-2xl backdrop-blur-sm"
          >
            <MapPin className="w-6 h-6" />
            <span className="font-bold text-xl">Živinice, Magistralni put M18 • 061 963 020</span>
          </motion.div>

          {/* Glavni naslov */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[0.9] drop-shadow-lg"
          >
            SVE ZA<span className="block text-red-600 text-6xl md:text-8xl lg:text-9xl">FASADNE SISTEME</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 mt-6 px-4 py-4 bg-white/60 rounded-3xl backdrop-blur-sm">
              Stiropor • Fasade • Utpljavanje objekata • Baumit • Ceresit
            </span>
          </motion.h1>

          {/* Opis */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed font-light drop-shadow-sm"
          >
            HG-PROM d.o.o. • Najbolje cijene u Živinicama • Brza dostava • Stručni savjet
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-16 py-8 rounded-3xl font-black text-2xl shadow-2xl hover:shadow-3xl border-4 border-red-500/30 backdrop-blur-sm flex items-center justify-center gap-4"
            >
              <Phone className="w-8 h-8" />
              POZOVITE ODMAH
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/80 hover:bg-white border-4 border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 px-16 py-8 rounded-3xl font-black text-2xl shadow-2xl hover:shadow-3xl backdrop-blur-sm"
            >
              POGLEDAJTE PONUDU
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-red-600 mb-4">15+</div>
              <div className="text-2xl font-bold text-gray-800">Godina iskustva</div>
            </div>
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-red-600 mb-4">500+</div>
              <div className="text-2xl font-bold text-gray-800">Zadovoljnih klijenata</div>
            </div>
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-red-600 mb-4">10+</div>
              <div className="text-2xl font-bold text-gray-800">Premium brendova</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-10 h-10 text-red-600 animate-bounce drop-shadow-lg" />
      </motion.div>
    </section>
  );
}
