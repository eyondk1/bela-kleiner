import React from 'react';
import { FaArrowRight, FaChevronRight, FaStar, FaBaseballBall, FaFootballBall } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary-dark to-primary">

      {/* Baseball logo background */}
      <div className="absolute inset-0 flex justify-left items-center pointer-events-none">
        <img 
          src="src/assets/baseball-logo.webp" // Replace with your baseball logo image
          alt="Baseball Logo Background"
          className="opacity-30 w-[600px] md:w-[100px] lg:w-[800px] object-contain"
        />
      </div>

      {/* Gray-blue decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-light/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-secondary/5 via-transparent to-secondary/5"></div>

     
      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-md text-secondary font-semibold text-sm mb-6">
              <FaStar size={14} className="text-secondary-light" />
              <span>Sports Memoir | Journalism Insights</span>
              <FaStar size={14} className="text-secondary-light" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              {authorData.fullName}
              <span className="block text-secondary-light text-2xl md:text-3xl mt-2">Sportswriter & Memoirist</span>
            </h1>

            <p className="text-lg text-secondary/90 mb-8 leading-relaxed">
              Veteran sportswriter with four decades covering baseball, football, golf, and major sporting events. "Life from the Press Box" shares behind-the-scenes stories of legendary athletes and iconic moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#book" className="bg-secondary hover:bg-secondary-dark text-primary-dark px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 shadow-lg">
                Explore Life from the Press Box
                <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-dark px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                Meet the Author
                <FaChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative rounded-md overflow-hidden shadow-2xl max-w-md mx-auto bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/30 p-6 border-4 border-white border-dashed border-red-600">
              <div className="relative">
                <img 
                  src="src/assets/jim.webp" // replace with Jim Street’s photo
                  alt="Jim Street"
                  className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-md shadow-xl"
                  style={{ maxHeight: '450px' }}
                />
              </div>
              
              {/* Sports-themed icons */}
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary-dark text-sm shadow-md transform hover:scale-110 transition-transform">
                  ⚾
                </div>
                <div className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center text-primary-dark text-sm shadow-md transform hover:scale-110 transition-transform">
                  🏈
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary text-sm shadow-md transform hover:scale-110 transition-transform">
                  📰
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
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;