import React, { useRef } from 'react'
import './WorkExperience.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { WORK_EXPERIENCE } from '../../utils/data'
import { ExperienceCard } from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'

export const WorkExperience = ({workExperienceRef}) => {

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
    <section ref={workExperienceRef} className='experience-container'>
        <h5>Work Experience</h5>

        <div className='experience-content'>

            <div className='arrow-left' onClick={sliderLeft}>
                <span><FaChevronLeft/></span>
            </div>

            <div className='arrow-right' onClick={sliderRight}>
                <span><FaChevronRight/></span>
            </div>

            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard
                    key={item.title}
                    details={item}
                />
            ))}
            </Slider>
        </div>
    </section>
  )
}
