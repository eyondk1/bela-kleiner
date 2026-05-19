import React from 'react';
import { FaHeart, FaEnvelope, FaBook, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaStar, FaFire, FaBaseballBall, FaFootballBall } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white/80 py-10">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Author Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="relative">
                <FaFire className="text-secondary" size={22} />
                <FaStar className="text-secondary absolute -top-2 -right-2 text-xs" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">{authorData.fullName}</h3>
            </div>
            <p className="text-sm text-white/70">Sportswriter | Memoirist</p>
            <div className="flex items-center gap-1 justify-center md:justify-start mt-2">
              <FaBaseballBall size={12} className="text-secondary" />
              <p className="text-xs text-white/50">{authorData.book.title}</p>
              <FaFootballBall size={12} className="text-secondary" />
            </div>
          </div>
          
          {/* Call-to-Action Button */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-r from-primary-light via-primary to-primary-dark
                text-white text-2xl font-bold py-6 px-20 rounded-full
                shadow-2xl
                transform transition-all duration-300
                hover:scale-105 hover:shadow-primary/50
                animate-pulse
              "
            >
              Launch & Go-Live Portal
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaLinkedinIn size={18} /></a>
            <a href={`mailto:${authorData.email}`} className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaEnvelope size={18} /></a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          <div className="flex items-center justify-center gap-2">
            <FaBaseballBall size={12} className="text-secondary" />
            <span>Major League Baseball & NFL Coverage</span>
            <FaFootballBall size={12} className="text-secondary" />
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaBook size={12} className="text-secondary" />
            <span>© 2026 {authorData.fullName}. All rights reserved.</span>
            <FaBook size={12} className="text-secondary" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaStar size={10} className="text-secondary" />
            <span>Memoir & Sports Journalism</span>
            <FaStar size={10} className="text-secondary" />
          </div>
        </div>

        {/* Quote */}
        <div className="mt-4 text-center text-xs text-white/30">
          <p className="flex items-center justify-center gap-1">
            <FaHeart size={10} className="text-secondary" /> 
            "Sharing the untold stories from four decades of sports journalism"
            <FaHeart size={10} className="text-secondary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;