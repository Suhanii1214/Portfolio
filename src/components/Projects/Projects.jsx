import React, { useRef } from 'react'
import './Projects.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { PROJECTS } from '../../utils/data'
import { ProjectCard } from './ProjectCard/ProjectCard'
import Slider from 'react-slick'

export const Projects = ({projectsRef}) => {

    const sliderRef = useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const sliderRight = () => {
        sliderRef.current.slickNext()
    }

    const sliderLeft = () => {
        sliderRef.current.slickPrev()
    }

  return (
    <section ref={projectsRef} className='project-container'>
        <h5>Projects</h5>

        <div className='project-content'>

            <div className='arrow-left' onClick={sliderLeft}>
                <span><FaChevronLeft/></span>
            </div>

            <div className='arrow-right' onClick={sliderRight}>
                <span><FaChevronRight/></span>
            </div>

            <Slider ref={sliderRef} {...settings}>
            {PROJECTS.map((item) => (
                <ProjectCard
                    key={item.title}
                    details={item}
                />
            ))}
            </Slider>
        </div>
    </section>
  )
}
