import React from 'react';
import { FaBook, FaStar, FaQuoteLeft, FaHeart, FaFire, FaBaseballBall, FaFootballBall } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const book = authorData.book;

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-light to-secondary/10">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">{book.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="section-subtitle">
            A Sports Memoir Sharing Behind-the-Scenes Stories of Legendary Athletes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="bg-white rounded-md p-8 shadow-xl border-2 border-primary/20">
              <div className="mb-6 relative">
                <img 
                  src="/images/book.png" // Replace with the actual book cover
                  alt={`${book.title} - Book Cover`}
                  className="w-full max-w-sm mx-auto rounded-md shadow-2xl border-4 border-white"
                />
                <div className="absolute -top-3 -right-3 bg-primary text-white rounded-full p-2 shadow-lg">
                  <FaStar size={16} />
                </div>
              </div>
              
              <div className="text-center bg-secondary/10 rounded-md p-4">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">{book.fullTitle}</h3>
                <div className="w-16 h-0.5 bg-primary mx-auto my-2"></div>
                <p className="text-dark/60 text-sm">By {authorData.fullName}</p>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-primary" />
                  ))}
                </div>
                <p className="text-xs text-primary mt-2 font-semibold">⚾ Behind the Scenes of Major League Baseball & NFL ⚽</p>
              </div>
              
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-8 h-8 bg-primary rounded-full opacity-50 flex items-center justify-center text-white">
                  <FaBaseballBall />
                </div>
                <div className="w-8 h-8 bg-secondary rounded-full opacity-50 flex items-center justify-center">
                  <FaFootballBall />
                </div>
                <div className="w-8 h-8 bg-accent rounded-full opacity-50 flex items-center justify-center text-white">
                  <FaBook />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="prose text-dark/80 mb-6">
              <p className="leading-relaxed text-base">{book.description.substring(0, 800)}...</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <FaBook size={20} />
                Themes Explored:
              </h4>
              <div className="flex flex-wrap gap-2">
                {book.themes.map((theme, idx) => (
                  <span key={idx} className="bg-secondary/20 px-3 py-1 rounded-full text-sm text-dark/70">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-secondary/15 rounded-md p-5 shadow-md mb-6 border-l-4 border-primary">
              <FaQuoteLeft className="text-primary mb-2" size={24} />
              <p className="text-dark/70 italic mb-3 text-sm">
                "Life from the Press Box shares the real stories, triumphs, and challenges of a four-decade sportswriting career."
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaHeart className="text-primary" size={14} />
                <span className="text-xs text-primary font-semibold">— From {book.title}</span>
                <FaHeart className="text-primary" size={14} />
              </div>
            </div>

            <div className="bg-primary/5 rounded-md p-4 mb-6 border border-primary/20">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <FaBook size={18} />
                Book Details:
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-dark/50">Genre:</span>
                  <p className="text-dark/80 font-medium">{book.details.genre}</p>
                </div>
                <div>
                  <span className="text-dark/50">Setting:</span>
                  <p className="text-dark/80 font-medium">{book.details.setting}</p>
                </div>
                <div>
                  <span className="text-dark/50">Format:</span>
                  <p className="text-dark/80 font-medium">{book.details.format}</p>
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
              <div className="inline-flex items-center gap-2 text-sm text-dark/50 bg-secondary/15 px-4 py-2 rounded-md">
                <FaFire size={14} className="text-primary" />
                <span>"An insightful memoir for sports fans and aspiring journalists" — Goodreads Review</span>
                <FaFire size={14} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;