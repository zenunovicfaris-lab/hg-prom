"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const slike = [
  { src: "/images/alat.jpg", alt: "Građevinski alati – kompletna ponuda" },
  { src: "/images/alat2.jpg", alt: "Profesionalni alati za gradilište" },
  { src: "/images/materijali.jpg", alt: "Građevinski materijali" },
  { src: "/images/alat3.jpg", alt: "Ručni i električni alati" },
  { src: "/images/stiropor.jpg", alt: "Stiropor i fasadni sistemi" },
  { src: "/images/alat4.jpg", alt: "Zaštitna oprema i dodaci" },
];

export default function Galerija() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () =>
    setSelected((s) => (s !== null ? (s - 1 + slike.length) % slike.length : null));
  const next = () =>
    setSelected((s) => (s !== null ? (s + 1) % slike.length : null));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") setSelected(null);
  };

  return (
    <section id="galerija" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-100 text-red-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
            Galerija
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Naša <span className="text-[#C41E1E]">ponuda</span>
          </h2>
          <p className="mt-4 text-xl text-[#4B5563] max-w-2xl mx-auto">
            Pogledajte dio naše bogate ponude alata, materijala i fasadnih sistema.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {slike.map((slika, i) => (
            <motion.div
              key={slika.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid mb-5 group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <Image
                src={slika.src}
                alt={slika.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div className="flex items-center justify-between w-full">
                  <p className="text-white font-bold">{slika.alt}</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 flex-shrink-0">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors z-10"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 bg-white/10 hover:bg-white/25 rounded-full p-3 text-white transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={slike[selected].src}
                  alt={slike[selected].alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain max-h-[80vh]"
                />
              </div>
              <p className="text-white/70 text-center mt-4 font-semibold">
                {slike[selected].alt}
              </p>
              {/* Dot indicators */}
              <div className="flex justify-center gap-2 mt-3">
                {slike.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === selected ? "bg-white scale-125" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 bg-white/10 hover:bg-white/25 rounded-full p-3 text-white transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
