import React from 'react'
import {CiBoxList} from 'react-icons/ci' 
import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = ({homeRef, skillsRef, projectsRef, workExperienceRef}) => {

    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        }) 
    };      

  return (
    <nav className='nav-wrapper bg-[#0000001a] px-8 sticky top-0 z-30 backdrop-blur-3xl'>
        <div className='nav-content max-w-[1300px] flex items-center justify-between py-4 mx-auto'>
            <img src={logo} alt='logo' className='w-48 h-auto'/>

            <ul className='flex items-center gap-2 list-none'>
                <li onClick={() => scrollToRef(homeRef)} className='mx-6 text-base font-medium text-white relative cursor-pointer menu-item'>
                    Home
                </li>
                <li onClick={() => scrollToRef(skillsRef)} className='mx-6 text-base font-medium text-white relative cursor-pointer menu-item'>
                    Skills
                </li>
                <li onClick={() => scrollToRef(projectsRef)} className='mx-6 text-base font-medium text-white relative cursor-pointer menu-item'>
                    Projects
                </li>
                <li onClick={() => scrollToRef(workExperienceRef)} className='mx-6 text-base font-medium text-white relative cursor-pointer menu-item'>
                    Work Experience
                </li>
                <button className='dwnld-btn text-base font-medium flex items-center justify-center text-white py-3 px-8 border-none outline-none rounded hover:text-[#a993fe] hover:outline-2 hover:outline-[#a993fe]'><a href='https://drive.google.com/file/d/1aAY95wNaGWpC15q6e5sWBCOUjOP8K2OR/view?usp=sharing' target='blank'>Download CV</a></button>
            </ul>

            <button className='menu-btn w-10 h-10 text-2xl items-center justify-center border-none rounded-lg text-white cursor-pointer hidden'>
                <span>
                    <CiBoxList size={40}/>
                </span>
                menu
            </button>
        </div>
    </nav>
  )
}
