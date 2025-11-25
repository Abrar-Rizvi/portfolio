"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
const Typewriter = dynamic(() => import("./Typewriter"), { ssr: false });

export default function Hero() {
  const [hasAnimated, setHasAnimated] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Scroll function only runs on client side
  const scrollToNext = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f8fafc)",
      }}
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-sky-200 rounded-full opacity-20 blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-slate-200 rounded-full opacity-20 blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1
              className={`font-bold text-4xl md:text-5xl lg:text-6xl mb-4 transition-all duration-700 ${
                hasAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                background: "linear-gradient(135deg, #334155 0%, #2563eb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transitionDelay: "0.6s",
              }}
            >
              Muhammad Abrar
            </h1>

            <h2
              className={`text-xl md:text-2xl lg:text-3xl font-semibold text-slate-600 mb-6 transition-all duration-700 ${
                hasAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              {/* Full Stack AI Developer | Nextjs & React Specialist */}
              <Typewriter
              />
            </h2>

            <p
              className={`text-base md:text-lg text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-700 ${
                hasAnimated ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              Crafting intelligent web applications with modern tech. Passionate
              about AI, clean code, and building products that matter.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${
                hasAnimated ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <a
                href="https://www.linkedin.com/in/abrar-rizvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 hover:scale-105 hover:shadow-lg transition-all duration-200 text-center"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Abrar-Rizvi?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-sky-500 text-sky-600 font-semibold rounded-lg hover:bg-sky-50 hover:scale-105 hover:shadow-lg transition-all duration-200 text-center"
              >
                Github
              </a>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-700 ${
                hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "1.4s" }}
            >
              {/* Glow Effect Behind Video */}
              <div className="absolute inset-0 bg-linear-to-r from-sky-400 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Video Container */}
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-sky-200 animate-float">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
