"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    // Check if image exists on mount
    const img = new window.Image();
    img.onerror = () => setImageError(true);
    img.onload = () => setImageError(false);
    img.src = "/profile.jpg";
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="pt-20">
        {/* Hero Section with Image and Wrapping Text */}
        <section id="hero" className="hero py-12 sm:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Profile Image - Floats on Left */}
              <div className="w-full lg:w-auto lg:flex-shrink-0">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl 
                  border-4 border-blue-400/50 bg-blue-500/10
                  transform transition-all duration-500 hover:scale-110 hover:shadow-blue-500/50 hover:border-blue-400
                  cursor-pointer flex items-center justify-center">
                  {!imageError ? (
                    <Image
                      src="/profile.jpg"
                      alt="Srirangan Krishnaswamy"
                      width={320}
                      height={320}
                      className="object-cover w-full h-full"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-blue-400 font-bold text-4xl sm:text-5xl lg:text-6xl bg-blue-900/30">
                      SK
                    </div>
                  )}
                </div>
              </div>

              {/* Content Wrapping Around Image */}
              <div className="flex-1 space-y-6">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                    SRIRANGAN KRISHNASWAMY
                  </h1>
                  <a
                    href="/Ranga%20Resume%20%283%29%20%281%29%20%281%29%20%281%29.pdf"
                    download="Srirangan_Krishnaswamy_Resume.pdf"
                    className="inline-flex items-center gap-2 font-medium py-3 px-6 rounded-lg 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                      bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills py-12 sm:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-300 border-b border-blue-500/30 pb-2">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'C++', 'JavaScript'].map((skill) => (
                    <span key={skill} className="rounded-lg px-3 py-1 bg-blue-800/50 hover:bg-blue-700/50 text-sm font-medium transition-colors border border-blue-500/30 text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-300 border-b border-blue-500/30 pb-2">Engineering</h3>
                <div className="flex flex-wrap gap-2">
                  {['CAD / CAM', 'Onshape', 'Fusion 360', 'Kinematics'].map((skill) => (
                    <span key={skill} className="rounded-lg px-3 py-1 bg-blue-800/50 hover:bg-blue-700/50 text-sm font-medium transition-colors border border-blue-500/30 text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-300 border-b border-blue-500/30 pb-2">Software</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JUCE', 'Git', 'AWS'].map((skill) => (
                    <span key={skill} className="rounded-lg px-3 py-1 bg-blue-800/50 hover:bg-blue-700/50 text-sm font-medium transition-colors border border-blue-500/30 text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-300 border-b border-blue-500/30 pb-2">Business</h3>
                <div className="flex flex-wrap gap-2">
                  {['Startup Development', 'Marketing Strategy', 'Competitive Analysis'].map((skill) => (
                    <span key={skill} className="rounded-lg px-3 py-1 bg-blue-800/50 hover:bg-blue-700/50 text-sm font-medium transition-colors border border-blue-500/30 text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="education py-12 sm:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Education</h2>
            <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-300">Skyline High School - Sammamish WA</h3>
              <p className="text-blue-200 mb-2 text-lg">Sep 2023 - June 2027</p>
              <p className="text-blue-200 mb-4 text-lg">IB Diploma Candidate | GPA: 3.99</p>
              <p className="text-blue-100 text-base">
                <strong className="text-blue-300">Relevant Coursework:</strong> IB Computer Science, Mechatronics, Sales & Marketing I/II, IB Physics HL, IB Math HL
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience py-12 sm:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Experience</h2>
            <div className="space-y-6">
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">Build Lead, CAD, Fabrication, Design</h3>
                <p className="text-blue-200 mb-3">FRC 9023 Future Martians | Sep 2023 - Present</p>
                <ul className="list-disc list-inside text-blue-100 space-y-1 text-sm sm:text-base">
                  <li>Led mechanical design, CAD, and fabrication for competition robot; improved build reliability by identifying failure points pre-manufacture, helped team reach world level competition (2x times)</li>
                  <li>Coordinated cross-functional subteams to meet fixed competition deadlines while enforcing safety and quality standards</li>
                </ul>
              </div>

              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">Assistant Senior Patrol Leader</h3>
                <p className="text-blue-200 mb-3">Boy Scouts of America | Jun 2021 - Present</p>
                <ul className="list-disc list-inside text-blue-100 space-y-1 text-sm sm:text-base">
                  <li>Mentored and led 20+ scouts to First Class rank through structured skills instruction and leadership development</li>
                  <li>Previously served as Patrol Leader (4×), Quartermaster (2×), Instructor (2×), and Troop Guide</li>
                </ul>
              </div>

              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">Chapter Member, SCDC Finalist</h3>
                <p className="text-blue-200 mb-3">Skyline DECA | Sep 2023 - Present</p>
                <ul className="list-disc list-inside text-blue-100 space-y-1 text-sm sm:text-base">
                  <li>Finalist at WA SCDC in Integrated Marketing Campaign (Product)</li>
                  <li>Developed full strategic plans for business, finance, and marketing case competitions</li>
                </ul>
              </div>

              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">Instructor</h3>
                <p className="text-blue-200 mb-3">iCode Sammamish | Feb 2023 - June 2025</p>
                <ul className="list-disc list-inside text-blue-100 space-y-1 text-sm sm:text-base">
                  <li>Delivered 300+ hours of instruction to 50+ students across Python, Java, Web Dev, CAD, and design tools</li>
                  <li>Managed instructors and standardized lesson delivery to improve consistency and student outcomes</li>
                </ul>
              </div>

              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">Project Manager</h3>
                <p className="text-blue-200 mb-3">The Indus Entrepreneurs | Sep 2024 - June 2025</p>
                <ul className="list-disc list-inside text-blue-100 space-y-1 text-sm sm:text-base">
                  <li>Guided team through ideation, validation, and pitch development for startup concepts</li>
                  <li>Emphasized execution, teamwork, and problem-solving under real business constraints</li>
                  <li>Working with real investors and receiving LOIs</li>
                </ul>
              </div>

              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">Business Intern</h3>
                <p className="text-blue-200 mb-3">iStart Valley | May 2022 - July 2022</p>
                <ul className="list-disc list-inside text-blue-100 space-y-1 text-sm sm:text-base">
                  <li>Led a startup team in a selective accelerator; earned 3rd place overall</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects py-12 sm:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="https://github.com/rngkrshn/sub808-vst" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300 block cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-300">808 VST Plugin</h3>
                <p className="text-blue-100 text-sm sm:text-base mb-2">
                  Built an 808 sub-bass VST/AU plugin in C++ (JUCE) with oscillators and ADSR envelopes.
                </p>
                <span className="text-blue-400 text-sm flex items-center gap-1">
                  View on GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
              <a 
                href="https://github.com/rngkrshn/RepReady-Backend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300 block cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-300">RepReady - AI Training Platform</h3>
                <p className="text-blue-100 text-sm sm:text-base mb-2">
                  Developed an AI-assisted training platform with response evaluation and follow-up logic using FastAPI.
                </p>
                <span className="text-blue-400 text-sm flex items-center gap-1">
                  View on GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
              <a 
                href="https://github.com/rngkrshn/wellness-chatbot-slm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300 block cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-300">Wellness SLM</h3>
                <p className="text-blue-100 text-sm sm:text-base mb-2">
                  Implemented SLM-driven conversational systems and additional CS projects.
                </p>
                <span className="text-blue-400 text-sm flex items-center gap-1">
                  View on GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section id="additional" className="additional py-12 sm:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Additional Information</h2>
            <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/60 transition-all duration-300">
              <ul className="list-disc list-inside text-blue-100 space-y-2 text-sm sm:text-base">
                <li>OSHA 10 Certified</li>
                <li>First WA Volunteering @ Various First WA events + Mentoring First Teams (250+ Volunteering Hours with Gold Presidential Volunteering Service Award)</li>
                <li>Participant in Youth Campaign for Local Sammamish City Council Candidate Lin Yang</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact py-12 sm:py-20 px-4 sm:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Contact</h2>
            <p className="text-blue-200 text-lg mb-4">
              Feel free to reach out to me at{" "}
              <a href="mailto:rngkrshn@gmail.com" 
                className="underline transition-colors duration-300 text-blue-400 hover:text-blue-300">
                rngkrshn@gmail.com
              </a>
            </p>
            <p className="text-blue-200 text-lg">
              Phone: <a href="tel:4253943069" className="text-blue-400 hover:text-blue-300">425-394-3069</a>
            </p>
            <p className="text-blue-200 text-lg mt-2">
              Location: Sammamish, WA 98075
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
