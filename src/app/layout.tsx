'use client';

import "./globals.css";
import { ReactNode } from "react";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-slate-900/80 backdrop-blur-sm border-b border-blue-500/30">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="bg-blue-900/60 rounded-md px-6 py-2 shadow-md border border-blue-500/30">
              <h1 className="text-white text-2xl font-bold">SRI</h1>
            </div>
            <div className="bg-blue-900/60 rounded-md px-6 py-2 shadow-md border border-blue-500/30">
              <ul className="flex space-x-6 sm:space-x-8 items-center flex-wrap">
                <li>
                  <a href="#hero" className="text-white hover:text-blue-400 transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-white hover:text-blue-400 transition duration-300">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-white hover:text-blue-400 transition duration-300">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white hover:text-blue-400 transition duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white hover:text-blue-400 transition duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
