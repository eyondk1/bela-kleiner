import React from "react";
import { FaBook, FaGraduationCap, FaStar, FaLightbulb, FaUsers, FaPenFancy, FaMapMarkerAlt } from "react-icons/fa";
import { authorData } from "../data/authorData";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#C49A6C]/20 via-[#D4A841]/10 to-[#C49A6C]/20"
    >
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A841]/25 rounded-md font-display text-[#B88E2F] font-semibold text-sm mb-4">
            <FaBook size={14} className="text-[#B88E2F]" />
            <span>Meet the Author</span>
            <FaBook size={14} className="text-[#B88E2F]" />
          </div>
          <h2 className="section-title text-[#B88E2F]">About Bela Kleiner</h2>
          <div className="w-24 h-1 bg-[#B88E2F] mx-auto mb-6 rounded"></div>
          <p className="section-subtitle text-[#8C6E56]">
            Bela Kleiner is an independent researcher and author. Her book <strong>{authorData.book.title}</strong> explores the history and discovery of vitamins and micronutrients, detailing the pioneering scientists and experiments that shaped modern biochemistry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Author Bio */}
          <div>
            <div className="bg-[#F5F1EC]/80 rounded-2xl p-8 shadow-lg border-l-8 border-[#B88E2F]">
              <FaBook className="text-[#B88E2F] mb-4" size={40} />
              <p className="text-[#3B2F2F]/90 leading-relaxed whitespace-pre-line">
                {authorData.authorBio.fullBio}
              </p>
              <div className="mt-6 pt-4 border-t border-[#D9CBB8]/50">
                <div className="flex items-start gap-3">
                  <FaLightbulb size={20} className="text-[#B88E2F]" />
                  <p className="text-[#B88E2F] font-semibold italic text-sm">
                    {authorData.authorBio.research}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Memberships */}
          <div className="space-y-6">
            <div className="bg-[#F5F1EC]/80 rounded-2xl p-6 shadow-md border border-[#D9CBB8]/50">
              <h3 className="text-xl font-display font-bold text-[#B88E2F] mb-4 flex items-center gap-2">
                <FaGraduationCap size={24} className="text-[#B88E2F]" />
                Education & Background
              </h3>
              <p className="text-[#3B2F2F]/70 mb-3">
                <span className="font-semibold">Graduate:</span>{" "}
                {authorData.authorBio.education || "Independent Researcher"}
              </p>
              {authorData.authorBio.location && (
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#D9CBB8]/20">
                  <FaMapMarkerAlt className="text-[#B88E2F]" size={16} />
                  <span className="text-[#3B2F2F]/60 text-sm">
                    Currently resides in {authorData.authorBio.location}
                  </span>
                </div>
              )}
            </div>

            <div className="bg-[#F5F1EC]/80 rounded-2xl p-6 shadow-md border border-[#D9CBB8]/50">
              <h3 className="text-xl font-display font-bold text-[#B88E2F] mb-4 flex items-center gap-2">
                <FaUsers size={24} className="text-[#B88E2F]" />
                Memberships
              </h3>
              <div className="space-y-2">
                {authorData.authorBio.memberships.length > 0
                  ? authorData.authorBio.memberships.map((m, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-[#D4A841]/10 rounded-md p-3"
                      >
                        <FaPenFancy className="text-[#B88E2F]" size={16} />
                        <span className="text-[#3B2F2F]/70">{m}</span>
                      </div>
                    ))
                  : <p className="text-[#3B2F2F]/70 italic">No memberships listed</p>}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#C49A6C] to-[#D4A841] text-[#1E1E1E] rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaStar size={24} className="text-[#B88E2F]" />
                <h3 className="text-xl font-display font-bold">Writing Journey</h3>
              </div>
              <p className="text-[#1E1E1E]/90 leading-relaxed text-sm">
                Bela Kleiner’s book <strong>{authorData.book.title}</strong> details the historical research, scientific breakthroughs, and heroic efforts behind the discovery of vitamins and their functions in human nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;