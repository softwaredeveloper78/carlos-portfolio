import React, { useState } from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import WorkData from "../data/WorkData";
import WorkCard from "./WorkCard";

const Works = () => {
  const [activeTab, setActiveTab] = useState("react");

  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div className="works" id="works">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={fade}
          viewport={{ once: true }}
          className="heading"
        >
          <p className="heading-sub-text">I build real value</p>
          <p className="heading-text">Works</p>
        </motion.div>

        <motion.div
          className="works-box"
          initial={{ opacity: 0 }}
          whileInView={fade}
        >
          {WorkData.map((w, index) => (
            <WorkCard w={w} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
