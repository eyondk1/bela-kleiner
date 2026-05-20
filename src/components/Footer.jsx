import React from 'react';
import { FaHeart, FaEnvelope, FaBook, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaStar, FaFlask, FaMicroscope, FaDna } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="bg-[#3B2F2F] text-[#E0D6C3]/80 py-10 relative overflow-hidden border-t border-[#B88E2F]">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#B88E2F]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E0D6C3]/15 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Author Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="relative">
                <FaMicroscope className="text-[#B88E2F]" size={22} />
                <FaStar className="text-[#E0D6C3] absolute -top-2 -right-2 text-xs" />
              </div>
              <h3 className="text-xl font-display font-bold text-[#B88E2F]">{authorData.fullName}</h3>
            </div>
            <p className="text-sm text-[#E0D6C3]/80">Researcher | Author</p>
            <div className="flex items-center gap-1 justify-center md:justify-start mt-2">
              <FaFlask size={12} className="text-[#B88E2F]" />
              <p className="text-xs text-[#E0D6C3]/50">{authorData.book.title}</p>
              <FaDna size={12} className="text-[#B88E2F]" />
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-r from-[#B88E2F] via-[#D4A841] to-[#8C6F20]
                text-[#3B2F2F] text-2xl font-bold py-6 px-20 rounded-full
                shadow-2xl
                transform transition-all duration-300
                hover:scale-105 hover:shadow-[#B88E2F]/50
                animate-pulse
              "
            >
              Launch & Go-Live Portal
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#B88E2F] transition-all duration-300 hover:scale-110 transform"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-[#B88E2F] transition-all duration-300 hover:scale-110 transform"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-[#B88E2F] transition-all duration-300 hover:scale-110 transform"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-[#B88E2F] transition-all duration-300 hover:scale-110 transform"><FaLinkedinIn size={18} /></a>
            <a href={`mailto:${authorData.email}`} className="hover:text-[#B88E2F] transition-all duration-300 hover:scale-110 transform"><FaEnvelope size={18} /></a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#E0D6C3]/20 text-center text-xs text-[#E0D6C3]/40">
          <div className="flex items-center justify-center gap-2">
            <FaMicroscope size={12} className="text-[#B88E2F]" />
            <span>Biochemistry & Molecular Biology</span>
            <FaFlask size={12} className="text-[#B88E2F]" />
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaBook size={12} className="text-[#B88E2F]" />
            <span>© 2026 {authorData.fullName}. All rights reserved.</span>
            <FaBook size={12} className="text-[#B88E2F]" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaDna size={12} className="text-[#B88E2F]" />
            <span>Research & Publications</span>
            <FaDna size={12} className="text-[#B88E2F]" />
          </div>
        </div>

        {/* Quote */}
        <div className="mt-4 text-center text-xs text-[#E0D6C3]/40">
          <p className="flex items-center justify-center gap-1">
            <FaHeart size={10} className="text-[#B88E2F]" /> 
            "Sharing the untold stories from four decades of scientific research"
            <FaHeart size={10} className="text-[#B88E2F]" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;