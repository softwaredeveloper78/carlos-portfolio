import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p> I'm a full-stack developer with 7 years of experience building modern, scalable web applications that make a real difference. I specialize in React, Next.js, Node.js, and TypeScript, and I enjoy transforming complex concepts into straightforward, high-performing solutions. </p>
                        <br />
                        <p> I've worked on large-scale platforms in fintech, e-commerce, and AI-driven automation, helping teams deliver faster, more reliable, user-focused products. My work includes designing authentication systems with OAuth2, JWT, and biometrics, building GraphQL APIs, and automating CI/CD pipelines. I focus on delivering secure, efficient, and maintainable code. </p>
                        <br />
                        <p> I'm passionate about collaboration, too. I enjoy mentoring developers, improving development workflows, and working closely with design and product teams to create seamless user experiences. My goal is always the same: to build products that scale, perform well, and help users. </p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
