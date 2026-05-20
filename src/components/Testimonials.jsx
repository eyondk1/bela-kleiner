import React from 'react';
import { FaStar, FaUser, FaCalendarAlt, FaQuoteRight } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Testimonials = () => {
  const testimonials = authorData.testimonials || [];

  return (
    <section className="py-20 bg-gradient-to-b from-[#C49A6C]/20 via-[#D4A841]/10 to-[#C49A6C]/20 relative">
      <div className="container-custom mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title text-[#B88E2F] text-4xl md:text-5xl font-display font-bold">
            Reader Reviews
          </h2>
          <div className="w-24 h-1 bg-[#B88E2F] mx-auto mb-4 rounded-full"></div>
          <p className="text-[#3B2F2F]/90 text-lg">
            What readers are saying about "{authorData.book.title}"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, idx) => {
              const rating = Math.floor(testimonial.rating);
              return (
                <div
                  key={idx}
                  className="bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#B88E2F]/30 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
                >
                  <FaQuoteRight className="text-[#B88E2F]/40 mb-3" size={28} />

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rating)].map((_, i) => (
                      <FaStar key={i} size={16} className="text-[#B88E2F]" />
                    ))}
                  </div>

                  <p className="text-[#3B2F2F]/80 text-sm italic mb-5 leading-relaxed">
                    "{testimonial.review.substring(0, 200)}..."
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#E0D6C3]/20">
                    <div className="bg-[#B88E2F]/20 p-2 rounded-full">
                      <FaUser size={14} className="text-[#B88E2F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#B88E2F] text-sm">{testimonial.name}</p>
                      <div className="flex items-center gap-2 text-xs text-[#3B2F2F]/60">
                        <span>{testimonial.title}</span>
                        <span>•</span>
                        <FaCalendarAlt size={10} />
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-full text-[#3B2F2F]/60">
              No testimonials available yet.
            </p>
          )}
        </div>

        {testimonials.length > 0 && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-white/50 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-[#B88E2F]/30">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-[#B88E2F]" />
                ))}
              </div>
              <span className="font-semibold text-[#B88E2F]">
                {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)} average rating
              </span>
              <span className="text-[#3B2F2F]/60">from readers worldwide</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;