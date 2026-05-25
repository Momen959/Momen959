import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_project_link,
}) => {
  return (
    // ✨ FIX: Using a clean, highly reliable fade-up tween transition for rock-solid grid consistency
    <motion.div variants={fadeIn("up", "tween", index * 0.15, 0.5)}>
      <Tilt
        options={{
          max: 12,        // Subtle, high-end tilt angle
          scale: 1.02,    // Clean, crisp pop scaling
          speed: 300,
        }}
        className='bg-[#021136] p-5 rounded-2xl sm:w-[360px] w-full min-h-[520px] flex flex-col justify-between border border-slate-800/60 hover:border-white/30 transition-all duration-300 shadow-xl shadow-black/30'
      >
        <div className='flex flex-col w-full'>
          {/* Image Layer */}
          <div className='relative w-full h-[200px] group overflow-hidden rounded-xl bg-[#01091e]'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            />

            {/* Hover Live Link Overlay */}
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center backdrop-blur-xs'>
              {live_project_link && (
                <div
                  onClick={() => window.open(live_project_link, "_blank")}
                  className='w-11 h-11 rounded-full bg-[#01091e] border border-slate-700 hover:border-white text-slate-300 hover:text-white flex justify-center items-center cursor-pointer transition-all duration-200 shadow-md hover:scale-110'
                  title="View More"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[15px]" />
                </div>
              )}
            </div>
          </div>

          {/* Text Content Block */}
          <div className='mt-5 flex flex-col'>
            <h3 className='text-white font-bold text-[20px] tracking-wide leading-tight'>{name}</h3>
            <p className='mt-2.5 text-slate-400 text-[14px] leading-relaxed'>
              {description}
            </p>
          </div>
        </div>

        {/* 💎 FIX: Clean, reliable tech-capsules without formatting gaps or text-gradient bugs */}
        <div className='mt-6 pt-4 border-t border-slate-800/40 flex flex-wrap gap-1.5 items-center w-full'>
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className='text-[11px] font-medium font-mono px-2.5 py-0.5 rounded bg-[#01091e]/80 border border-slate-800 text-slate-300 flex items-center transition-colors duration-200 shadow-sm'
            >
              {/* Clean, universally supported fallback status indicators instead of gradient text classes */}
              <span className="w-1.5 h-1.5 rounded-full mr-2 bg-white/80 shrink-0"></span>
              {tag.name.toLowerCase()}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects highlight my focus on backend architecture, automated workflows, and practical machine learning. Built with a deep appreciation for stable systems, clean databases, and predictable Linux environments, they reflect how I translate complex programmatic concepts into dependable, real-world production systems.
        </motion.p>
      </div>

      {/* Grid Container */}
      <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center sm:justify-items-start'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");