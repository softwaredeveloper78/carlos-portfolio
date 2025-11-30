import React from "react";
import "../../styles/WorkExperience.css";
import { motion } from "framer-motion";
import WorkExperienceItem from "./WorkExperienceItem";
import WorkExperienceData from "../../data/WorkExperienceData";

const WorkExperience = () => {

  const horizontal = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div className="work-experience" id='workexperience'>
      <div className="container">
        <div viewport={{ once: true }}
          className="heading"
        >
          <p className="heading-sub-text">My professional journey</p>
          <p className="heading-text">Work Experience</p>
        </div>
        <div className="split-work-experience">
          {WorkExperienceData.map((work, index) => (
            <WorkExperienceItem key={index} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
