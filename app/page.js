'use client';
import { motion } from 'framer-motion';
import TemplateCard from '@/components/TemplateCard';
import templates from './data/templates';

export default function HomePage() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((tpl) => (
          <TemplateCard
            key={tpl.id}
            title={tpl.title}
            image={tpl.image}
            url={tpl.url}
          />
        ))}
      </section>

      {/* CTA */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  className="mt-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-10 text-center shadow-xl"
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
    Siap Naik Level dengan Website Profesional?
  </h2>
  <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
    Saya bantu kamu wujudkan website portofolio atau personal branding yang modern, cepat, dan siap tampilkan yang terbaik dari dirimu.
  </p>
  <a
    href="https://wa.me/6281339908765"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 bg-white text-blue-700 font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.586-4.586m0 0L10 6l-5 5m5-5v12" />
    </svg>
    Hubungi Sekarang
  </a>
</motion.section>
    </>
  );
}
