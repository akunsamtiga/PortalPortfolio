import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Koleksi Template Portofolio',
  description: 'UI modern, clean, dan optimal untuk showcase portofolio kamu.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight">Koleksi Template Portofolio</h1>
            <p className="text-gray-600 mt-2">Modern, clean, dan siap dipakai untuk tampil profesional.</p>
          </header>
          {children}
          <footer className="text-center mt-20 text-sm text-gray-400">
            © {new Date().getFullYear()} Sanzystore Dev. All rights reserved.
          </footer>
        </main>
      </body>
    </html>
  );
}
