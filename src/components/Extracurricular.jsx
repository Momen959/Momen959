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
        background: "#021136",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #021136" }}
      date={extracurricular.date}
      iconStyle={{ background: extracurricular.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full overflow-hidden rounded-full'>
          <img
            src={extracurricular.icon}
            alt={extracurricular.type}
            className='w-full h-full object-cover rounded-full'
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
