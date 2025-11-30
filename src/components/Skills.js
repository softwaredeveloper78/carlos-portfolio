import React, { useState } from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import SkillsData from "../data/SkillsData";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const {
    Frontend,
    Backend,
    DevOpsCloud,
    TestingPerformance,
    Other,
  } = SkillsData;

  const skillEffect = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  const tabData = [
    { id: "frontend", label: "Frontend", data: Frontend },
    { id: "backend", label: "Backend", data: Backend },
    { id: "devOpscloud", label: "DevOps & Cloud", data: DevOpsCloud },
    {
      id: "testingperformance",
      label: "Testing & Performance",
      data: TestingPerformance,
    },
    { id: "other", label: "Other", data: Other },
  ];

  return (
    <>
      <div className="skills" id="skills">
        <div className="container">
          <motion.div
            whileInView={skillEffect}
            initial={{ y: "-80px", opacity: 0 }}
            className="heading"
          >
            <p className="heading-sub-text">What I work with</p>
            <p className="heading-text">My Skills</p>
          </motion.div>
          
          <motion.div whileInView={skillEffect} initial={{ y: "-80px", opacity: 0 }} className="tabs">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            whileInView={skillEffect}
            className="skills-box"
            initial={{ y: "-80px", opacity: 0 }}
          >
            {tabData.map(
              (tab) =>
                activeTab === tab.id &&
                (
                  tab.data.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                      <div className="skill-icon">{skill.icon}</div>
                      <small className="skill-desc">{skill.name}</small>
                    </div>
                  ))
                )
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
