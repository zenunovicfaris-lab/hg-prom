"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brendovi = [
  { name: "Baumit", logo: "/images/logos/baumit.png" },
  { name: "Bautrend", logo: "/images/logos/bautrend.png" },
  { name: "Bekament", logo: "/images/logos/bekament.png" },
  { name: "Ceresit", logo: "/images/logos/ceresit.png" },
  { name: "Duga Tehna", logo: "/images/logos/duga-tehna.png" },
  { name: "Maxima", logo: "/images/logos/maxima.png" },
  { name: "Rofix", logo: "/images/logos/rofix.png" },
  { name: "Svjetlost", logo: "/images/logos/svjetlost.png" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Brendovi() {
  return (
    <section id="brendovi" className="py-24 lg:py-32 bg-gray-50">
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
            Brendovi
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Zastupamo <span className="text-[#C41E1E]">najbolje brendove</span>
          </h2>
          <p className="mt-4 text-xl text-[#4B5563] max-w-2xl mx-auto">
            Ekskluzivni zastupnici i distributeri vodećih europskih i regionalnih proizvođača
            građevinskog materijala.
          </p>
        </motion.div>

        {/* Grid 2×4 */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {brendovi.map((brend) => (
            <motion.div
              key={brend.name}
              variants={itemVariants}
              whileHover={{ scale: 1.06, y: -5 }}
              className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer"
            >
              <div className="relative w-full h-16">
                <Image
                  src={brend.logo}
                  alt={brend.name}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-sm font-semibold text-gray-400 group-hover:text-[#C41E1E] transition-colors duration-300 tracking-wide">
                {brend.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
