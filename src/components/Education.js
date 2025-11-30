import React from "react";
import "../styles/Education.css";
import { motion } from "framer-motion";
import EducationData from "../data/EducationData";

const Education = () => {
  const horizontal = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div className="education" id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={horizontal}
          viewport={{ once: true }}
          className="heading"
        >
          <p className="heading-sub-text">My academic background</p>
          <p className="heading-text">Education</p>
        </motion.div>
        <div className="split-education">
          {EducationData.map((education, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={horizontal}
              viewport={{ once: true }}
            >
              <div className="education-item-header">
                <div className="education-item-header-degree">{education.degree}</div>
                <div className="education-item-header-date">{education.date}</div>
              </div>
              <div className="education-item-content">
                <p className="education-university">{education.university}</p>
                <p className="education-location">{education.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

