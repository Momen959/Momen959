import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { extracurricular } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExtracurricularCard = ({ extracurricular }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={extracurricular.date}
      iconStyle={{ background: extracurricular.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={extracurricular.icon}
            alt={extracurricular.type}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{extracurricular.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {extracurricular.type}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {extracurricular.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {extracurricular.credential && (
        <a
          href={extracurricular.credential}
          target="_blank"
          rel="noopener noreferrer"
          className='inline-block mt-5 text-blue-400'
        >
          See Credential
        </a>
      )}
    </VerticalTimelineElement>
  );
};

const Extracurricular = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Community work, courses, and team leadership
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Leadership & Certifications.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {extracurricular.map((extracurricular, index) => (
            <ExtracurricularCard
              key={`experience-${index}`}
              extracurricular={extracurricular}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular");
