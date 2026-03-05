"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";

const infoKartice = [
  {
    Icon: Phone,
    title: "Telefon",
    lines: ["061 963 020"],
    href: "tel:+38761963020",
  },
  {
    Icon: MapPin,
    title: "Adresa",
    lines: ["Magistralni put M18", "Živinice, Bosna i Hercegovina"],
    href: "https://maps.google.com/?q=Živinice+M18",
  },
  {
    Icon: Clock,
    title: "Radno vrijeme",
    lines: ["Pon – Pet: 07:00 – 16:00", "Subota: 07:00 – 14:00", "Nedjelja: Zatvoreno"],
  },
];

export default function Kontakt() {
  const [formData, setFormData] = useState({
    ime: "",
    telefon: "",
    email: "",
    poruka: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-white overflow-hidden">
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
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Kontaktirajte <span className="text-[#C41E1E]">nas</span>
          </h2>
          <p className="mt-4 text-xl text-[#4B5563] max-w-2xl mx-auto">
            Tu smo za sva vaša pitanja. Posjetite nas ili pošaljite upit — odgovaramo brzo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left – info cards + map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {infoKartice.map(({ Icon, title, lines, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-200"
              >
                <div className="bg-red-100 rounded-xl p-3 flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#C41E1E]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{title}</p>
                  {lines.map((line) =>
                    href && line === lines[0] ? (
                      <a
                        key={line}
                        href={href}
                        className="block text-[#4B5563] hover:text-[#C41E1E] transition-colors font-medium"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-[#4B5563]">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </motion.div>
            ))}

            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-64"
            >
              <iframe
                src="https://maps.google.com/maps?q=%C5%BDivinice%2C+Bosnia+and+Herzegovina&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HG-PROM lokacija Živinice M18"
              />
            </motion.div>
          </motion.div>

          {/* Right – contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-gray-100 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Hvala!</h3>
                <p className="text-[#4B5563] text-lg">
                  Vaša poruka je primljena. Kontaktirat ćemo vas u najkraćem mogućem roku.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ ime: "", telefon: "", email: "", poruka: "" }); }}
                  className="mt-8 text-[#C41E1E] font-bold hover:underline"
                >
                  Pošalji novu poruku
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100 space-y-5"
              >
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-1">Pošaljite upit</h3>
                  <p className="text-[#4B5563]">Odgovaramo u najkraćem mogućem roku.</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Ime i prezime <span className="text-[#C41E1E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="ime"
                    value={formData.ime}
                    onChange={handleChange}
                    required
                    placeholder="npr. Amer Hadžić"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#C41E1E] focus:outline-none transition-colors text-gray-900 bg-white placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      placeholder="061 000 000"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#C41E1E] focus:outline-none transition-colors text-gray-900 bg-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vas@email.com"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#C41E1E] focus:outline-none transition-colors text-gray-900 bg-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Poruka <span className="text-[#C41E1E]">*</span>
                  </label>
                  <textarea
                    name="poruka"
                    value={formData.poruka}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Opišite šta vam je potrebno..."
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#C41E1E] focus:outline-none transition-colors text-gray-900 bg-white placeholder-gray-400 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#C41E1E] to-red-700 hover:from-red-700 hover:to-red-800 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
                >
                  <Send className="w-5 h-5" />
                  Pošalji upit
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
