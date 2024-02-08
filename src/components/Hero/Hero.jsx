import React from 'react'
import poster from '../../assets/poster.jpeg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'

import './Hero.css'

export const Hero = ({homeRef}) => {
  return (
    <section ref={homeRef} className='hero-container'>
        <div className='hero-content'>
            <h2>Hi, I'm Suhani Singh</h2>
            <h3>FullStack Developer</h3>
            <p>I am a final year student at Lovely Professional University. I have experience working in different web technologies like HTML, CSS, Javascript, React, Node, Express, etc. through projects and internships.</p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src={react}/>
                </div>
                <img src={poster}/>
            </div>

            <div>
                <div className='tech-icon'>
                    <img src={html}/>
                </div>
                <div className='tech-icon'>
                    <img src={css}/>
                </div>
                <div className='tech-icon'>
                    <img src={javascript}/>
                </div>
            </div>
        </div>
    </section>
  )
}

// export default React.forwardRef(Hero);

