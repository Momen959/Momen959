import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h3>
      </motion.div>

      <div className="hidden sm:flex">
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 min-h-[150px] flex flex-col items-center gap-3' key={technology.name}>
          <div className='w-28 h-28'>
          <BallCanvas icon={technology.icon} />
          </div>
          <p className='text-secondary text-center text-[13px] leading-5'>{technology.name}</p>
        </div>
      ))}
      </div>
    </div>
    <div className="sm:hidden mt-10 flex flex-wrap justify-center gap-3">
      {technologies.map((technology) => (
        <span
          key={technology.name}
          className="rounded-md border border-secondary/30 bg-tertiary px-4 py-2 text-secondary text-[14px]"
        >
          {technology.name}
        </span>
      ))}
    </div>
    </>
    
  );
};


export default SectionWrapper(Tech, "skills");
