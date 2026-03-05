"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const prednosti = [
  "15+ godina iskustva u prodaji građevinskog materijala",
  "2 prodajne lokacije na magistralnom putu M18 u Živinicama",
  "Zastupnici i distributeri 10+ premium brendova",
  "Stručni tim uvijek spreman za besplatno savjetovanje",
  "Brza dostava direktno na vaše gradilište",
  "Konkurentne cijene i popusti za veće nabavke",
];

const stats = [
  { num: "15+", label: "Godina" },
  { num: "500+", label: "Klijenata" },
  { num: "10+", label: "Brendova" },
];

export default function ONama() {
  return (
    <section id="o-nama" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-100 text-red-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
            O nama
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Ko smo <span className="text-[#C41E1E]">mi?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              <strong className="text-gray-900">HG-PROM d.o.o.</strong> je vodeći distributer i
              prodavač fasadnih sistema, stiropola, građevinskog alata i materijala u Živinicama i
              okolini. Sa više od 15 godina iskustva, nudimo kvalitetne proizvode po najboljim
              cijenama.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Naše dvije lokacije na magistralnom putu M18 osiguravaju laku dostupnost, a naš
              stručni tim uvijek je spreman pružiti savjet pri odabiru pravog rješenja za vaš
              projekat.
            </p>

            <ul className="space-y-4 mb-10">
              {prednosti.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#C41E1E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feat}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#C41E1E] hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Saznaj više o nama
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right – image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/materijali.jpg"
                alt="HG-PROM materijali i prodavnica"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/50 grid grid-cols-3 gap-4 text-center">
                  {stats.map(({ num, label }) => (
                    <div key={label}>
                      <div className="text-2xl font-black text-[#C41E1E]">{num}</div>
                      <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-100 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gray-100 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
