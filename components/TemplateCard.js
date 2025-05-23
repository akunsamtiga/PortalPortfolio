import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function TemplateCard({ title, image, url }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={`Preview dari ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex justify-between items-center">
        <h2 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition">
          {title}
        </h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title="Lihat Live Preview"
          className="text-blue-500 hover:text-blue-700 transition"
        >
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
}
