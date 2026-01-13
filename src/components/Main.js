import React from 'react';
import About from './About';
import HeroSection from './HeroSection';
import Services from './Services';
import Skills from './Skills';
import Works from './Works';
import WorkExperience from './WorkExperience/WorkExperience';
import Education from './Education';

const Main = ({nav, handleNav, closeNav}) => {
  return(
    <div onClick={closeNav } className='main'>
        <HeroSection nav={nav} handleNav={handleNav} />
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <Services />
        <Works />
    </div>
  )
};

export default Main;
