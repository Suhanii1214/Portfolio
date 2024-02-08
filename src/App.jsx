import React, { useRef } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import {Hero} from './components/Hero/Hero'
import './App.css'
import { Skills } from './components/Skills/Skills'
import { WorkExperience } from './components/WorkExperience/WorkExperience'
import { ContactMe } from './components/ContactMe/ContactMe'
import { Footer } from './components/Footer/Footer'
import { Projects } from './components/Projects/Projects'

export const App = () => {

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const workExperienceRef = useRef(null);

  return (
    <div>
      <Navbar homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} workExperienceRef={workExperienceRef}/>
      <div className='container'>
        <Hero homeRef={homeRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <WorkExperience workExperienceRef={workExperienceRef} />
        <ContactMe />
      </div>
      <Footer/>
    </div>
  )
}

