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

      <div className="hidden sm:flex flex-col gap-10 mt-10">
        {technologies.map((group) => (
          <div key={group.category} className="w-full">
            <h4 className="text-white text-lg font-semibold text-center mb-5">
              {group.category}
            </h4>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
              {group.items.map((technology) => (
                <div
                  className='w-28 min-h-[150px] flex flex-col items-center gap-3'
                  key={technology.name}
                >
                  <div className='w-28 h-28'>
                    <BallCanvas icon={technology.icon} />
                  </div>
                  <p className='text-secondary text-center text-[13px] leading-5'>
                    {technology.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden mt-10 space-y-8">
        {technologies.map((group) => (
          <div key={group.category} className="w-full">
            <h4 className="text-white text-base font-semibold text-center mb-3">
              {group.category}
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {group.items.map((technology) => (
                <span
                  key={technology.name}
                  className="rounded-md border border-secondary/30 bg-tertiary px-4 py-2 text-secondary text-[14px]"
                >
                  {technology.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Tech, "skills");
