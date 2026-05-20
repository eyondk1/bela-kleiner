import React, { useState } from 'react';
import { FaBook, FaStar, FaQuoteLeft, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const book = authorData.book;
  const images = ["/images/vitamins.webp", "/images/vitamins2.webp"]; // Add your additional book images here
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <section id="book" className="py-20 relative bg-gradient-to-b from-[#C49A6C]/20 via-[#D4A841]/10 to-[#C49A6C]/20">
      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-[#B88E2F]">{book.title}</h2>
          <div className="w-24 h-1 bg-[#B88E2F] mx-auto mb-6"></div>
          <p className="section-subtitle text-[#8C6E56]">
            A Scientific Memoir Exploring the Discovery and History of Vitamins
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
          {/* Image Carousel */}
          <div className="relative flex justify-center">
            <div className="relative p-6 rounded-xl shadow-2xl max-w-md mx-auto bg-[#F5F1EC]/20">
              <div className="absolute inset-0 border-4 border-[#B88E2F] rounded-xl pointer-events-none shadow-inner"></div>
              <div className="absolute inset-2 border-2 border-[#D4A841] rounded-lg pointer-events-none shadow-inner"></div>

              <img
                src={images[current]}
                alt={`${book.title} - Book Cover ${current + 1}`}
                className="relative w-full max-w-xl md:max-w-xl h-auto object-cover rounded-lg shadow-xl transition-transform duration-500 ease-in-out"
              />

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#B88E2F]/70 hover:bg-[#B88E2F]/90 text-[#3B2F2F] p-2 rounded-full shadow-lg"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#B88E2F]/70 hover:bg-[#B88E2F]/90 text-[#3B2F2F] p-2 rounded-full shadow-lg"
              >
                <FaChevronRight />
              </button>

              {/* Accent icons */}
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-10 h-10 bg-[#C49A6C]/30 rounded-full flex items-center justify-center text-[#B88E2F] text-sm shadow-md transform hover:scale-110 transition-transform">
                  ⚗️
                </div>
                <div className="w-10 h-10 bg-[#D4A841]/30 rounded-full flex items-center justify-center text-[#8B2C1A] text-sm shadow-md transform hover:scale-110 transition-transform">
                  📖
                </div>
              </div>
            </div>
          </div>

          {/* Book info */}
          <div>
            <div className="prose text-[#3B2F2F]/90 mb-6">
              <p className="leading-relaxed text-base">{book.description.substring(0, 800)}...</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-[#B88E2F] mb-3 flex items-center gap-2">
                <FaBook size={20} />
                Themes Explored:
              </h4>
              <div className="flex flex-wrap gap-2">
                {book.themes.map((theme, idx) => (
                  <span key={idx} className="bg-[#F5F1EC]/50 px-3 py-1 rounded-full text-sm text-[#8C6E56]">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#F5F1EC]/50 rounded-md p-5 shadow-md mb-6 border-l-4 border-[#B88E2F]">
              <FaQuoteLeft className="text-[#B88E2F] mb-2" size={24} />
              <p className="text-[#3B2F2F]/70 italic mb-3 text-sm">
                "This book explores the heroic efforts of scientists discovering vitamins, their roles, and the historical impact on modern biochemistry."
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaHeart className="text-[#B88E2F]" size={14} />
                <span className="text-xs text-[#B88E2F] font-semibold">— From {book.title}</span>
                <FaHeart className="text-[#B88E2F]" size={14} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#C49A6C] to-[#D4A841] text-[#1E1E1E] rounded-md p-4 mb-6 border border-[#B88E2F]">
              <h4 className="font-semibold text-[#1E1E1E] mb-2 flex items-center gap-2">
                <FaBook size={18} />
                Book Details
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-[#3B2F2F]/50">Genre:</span>
                  <p className="text-[#3B2F2F]/80 font-medium">{book.details.genre}</p>
                </div>
                <div>
                  <span className="text-[#3B2F2F]/50">Setting:</span>
                  <p className="text-[#3B2F2F]/80 font-medium">{book.details.setting}</p>
                </div>
                <div>
                  <span className="text-[#3B2F2F]/50">Format:</span>
                  <p className="text-[#3B2F2F]/80 font-medium">{book.details.format}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1 text-center flex items-center justify-center gap-2">
                <FaBook size={16} />
                Buy {book.title}
              </button>
              <button className="btn-outline flex-1 text-center flex items-center justify-center gap-2">
                <FaStar size={16} />
                Read Excerpt
              </button>
            </div>

            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 text-sm text-[#3B2F2F]/50 bg-[#F5F1EC]/40 px-4 py-2 rounded-md">
                <FaStar size={14} className="text-[#B88E2F]" />
                <span>"An essential read for scholars, science historians, and teachers" — Reader Review</span>
                <FaStar size={14} className="text-[#B88E2F]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;