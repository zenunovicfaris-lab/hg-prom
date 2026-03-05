"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Layers, Wrench, Package } from "lucide-react";

const usluge = [
  {
    Icon: Layers,
    title: "Stiropor i fasadni sistemi",
    description:
      "Kompletni fasadni sistemi za toplinsku izolaciju objekta. Stiropor različitih debljina, ljepenke, mrežice i svi prateći materijali za kvalitetnu i trajnu fasadu.",
    image: "/images/stiropor.jpg",
    gradient: "from-[#C41E1E] to-red-800",
  },
  {
    Icon: Wrench,
    title: "Građevinski alati",
    description:
      "Profesionalni alati za majstore i graditelje. Električni alati, ručni alati, zaštitna oprema i sve što je potrebno za siguran i efikasan rad na gradilištu.",
    image: "/images/alat.jpg",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    Icon: Package,
    title: "Građevinski materijal",
    description:
      "Kompletna ponuda — cement, malteri, ljepila, boje i podloge za unutarnje i vanjske radove. Sve na jednom mjestu po najpovoljnijim cijenama u Živinicama.",
    image: "/images/materijali.jpg",
    gradient: "from-[#C41E1E] to-gray-800",
  },
];

export default function Usluge() {
  return (
    <section id="usluge" className="py-24 lg:py-32 bg-white overflow-hidden">
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
            Usluge
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Šta <span className="text-[#C41E1E]">nudimo?</span>
          </h2>
          <p className="mt-4 text-xl text-[#4B5563] max-w-2xl mx-auto">
            Sve što vam je potrebno za fasadne radove i renovaciju — na jednom mjestu.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {usluge.map(({ Icon, title, description, image, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-100 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60`} />
                <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3">{title}</h3>
                <p className="text-[#4B5563] leading-relaxed mb-6">{description}</p>
                <motion.a
                  href="#kontakt"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-[#C41E1E] font-bold hover:text-red-700 transition-colors"
                >
                  Saznaj više
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
