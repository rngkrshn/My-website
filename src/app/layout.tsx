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
      <body className="min-h-screen bg-black text-white">
        <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-sm">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="bg-gray-800 rounded-md px-6 py-2 shadow-md">
              <h1 className="text-white text-2xl font-bold">SRI</h1>
            </div>
            <div className="bg-gray-800 rounded-md px-6 py-2 shadow-md">
              <ul className="flex space-x-8 items-center">
                <li>
                  <a href="#hero" className="text-white hover:text-blue-200 transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white hover:text-blue-200 transition duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white hover:text-blue-200 transition duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4 mt-16">{children}</main>
        <footer className="bg-gray-900 text-white text-center p-4 mt-8">
          <p>&copy; 2025 Srirangan. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
