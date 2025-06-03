"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="relative">
      <main className="pt-16">
        <section id="hero" className="hero relative transform transition-all duration-500 hover:scale-[1.05] 
          overflow-hidden mx-2 sm:mx-4 rounded-2xl sm:rounded-3xl shadow-2xl
          bg-gray-900 border border-gray-800 hover:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)]
          text-white py-12 sm:py-20">
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl
            bg-gray-800/50"></div>
          <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl
            bg-gray-800/50"></div>
          
          <div className="container mx-auto px-4 text-center relative">
            {/* Abstract shapes - hidden on mobile */}
            <div className="hidden sm:block absolute top-10 left-10 animate-float">
              <div className="w-16 h-16 border-4 rounded-lg transform rotate-45 border-gray-700"></div>
            </div>
            <div className="hidden sm:block absolute bottom-10 right-10 animate-float-delayed">
              <div className="w-20 h-20 border-4 rounded-full border-gray-700"></div>
            </div>
            
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-xl mb-4 sm:mb-6 
                transform transition-all duration-300 hover:scale-110 border-4
                border-gray-700 shadow-gray-900">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=srirangan&backgroundColor=b6e3f4&clothingColor=blue&hairColor=black&skinColor=brown"
                  alt="Srirangan Avatar"
                  width={128}
                  height={128}
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 relative tracking-tight">
                Hi, I'm Srirangan
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-r-4 border-white/20"></div>
              </h1>
              <p className="text-xl sm:text-2xl mb-6 sm:mb-8 font-light tracking-wide px-2">Student Software Engineer passionate about building innovative solutions</p>
              <a
                href="/Srirangan_CV.pdf"
                download
                className={`font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-full 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                  flex items-center gap-2 backdrop-blur-sm text-sm sm:text-base
                  bg-gray-800/50 hover:bg-gray-700/50 shadow-gray-900`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className={`backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8 
                transform transition-all duration-300
                bg-gray-800/30 hover:bg-gray-700/30`}>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 tracking-tight">Technical Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {['Web Development', 'JavaScript/TypeScript', 'React & Next.js', 'Python', 'Data Structures', 'Algorithms'].map((skill) => (
                    <div key={skill} className={`rounded-lg sm:rounded-xl p-3 sm:p-4 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                      bg-gray-800/50 hover:bg-gray-700/50 shadow-gray-900`}>
                      <span className="text-base sm:text-lg font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xl leading-relaxed font-light tracking-wide">
                Currently pursuing Computer Science, I'm focused on developing 
 applications and exploring new technologies. I combine strong 
                theoretical foundations with practical coding experience.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects py-12 sm:py-20 px-4 bg-black">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {[1, 2].map((num) => (
              <div key={num} className="project p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300
                bg-gray-800 hover:bg-gray-750 shadow-gray-900 hover:shadow-gray-800 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Project {num}</h3>
                <p className="text-gray-300">
                  Description of project {num}.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact py-12 sm:py-20 px-4 text-center bg-black text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact</h2>
          <p className="text-base sm:text-lg">
            Feel free to reach out to me at{" "}
            <a href="mailto:your.email@example.com" 
              className="underline transition-colors duration-300
                text-blue-400 hover:text-blue-300">
              your.email@example.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
