import React from 'react';
import { FaArrowRight, FaChevronRight, FaMicroscope, FaFlask, FaDna } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-[#3B2F2F] via-[#2B1F1F] to-[#1A0F0F]"
    >
      {/* Decorative glowing circles for depth */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#B88E2F]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#E0D6C3]/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-b from-[#E0D6C3]/5 via-transparent to-[#B88E2F]/5 -translate-x-1/2 -translate-y-1/2 transform"></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1
              className="text-5xl md:text-6xl font-bold text-[#B88E2F] mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {authorData.fullName}
            </h1>
            <span className="block text-[#E0D6C3] text-2xl md:text-3xl mb-6">
              Independent Researcher & Author
            </span>
            <p className="text-[#E0D6C3]/90 mb-8 leading-relaxed max-h-[400px] overflow-y-auto">
              Bela Kleiner is an independent researcher and author. Outside of his published writing, he maintains a relatively low public profile, as his book was released through a hybrid/indie publishing press (Fulton Books). His book, <strong>True History of Vitamins</strong>, takes a deep dive into how the discovery of micronutrients fundamentally shaped modern science.  <br/><br/>
             
             
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#book"
                className="bg-[#B88E2F] hover:bg-[#8C6F20] text-[#3B2F2F] px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                Explore True History of Vitamins
                <FaArrowRight size={18} className="ml-1" />
              </a>
              <a
                href="#about"
                className="border-2 border-[#B88E2F] text-[#E0D6C3] hover:bg-[#B88E2F] hover:text-[#3B2F2F] px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-all"
              >
                Meet Bela
                <FaChevronRight size={18} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center">
            <div className="relative rounded-md overflow-hidden shadow-2xl max-w-md mx-auto bg-[#3B2F2F]/30 p-6 border-4 border-[#B88E2F]">
              <img
                src="/images/bela.webp" // Replace with Bela Kleiner's image
                alt={authorData.fullName}
                className="w-full h-auto object-cover rounded-md shadow-xl"
                style={{ maxHeight: '450px' }}
              />

              {/* Floating accent icons for science */}
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-10 h-10 bg-[#B88E2F] rounded-full flex items-center justify-center text-[#3B2F2F] text-sm shadow-md">
                  <FaMicroscope />
                </div>
                <div className="w-10 h-10 bg-[#E0D6C3] rounded-full flex items-center justify-center text-[#3B2F2F] text-sm shadow-md">
                  <FaFlask />
                </div>
                <div className="w-10 h-10 bg-[#8C6F20] rounded-full flex items-center justify-center text-[#E0D6C3] text-sm shadow-md">
                  <FaDna />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;