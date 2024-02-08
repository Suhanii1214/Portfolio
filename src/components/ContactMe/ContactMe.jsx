import React from 'react'
import './ContactMe.css'
import { ContactInfoCard } from './ContactInfoCard/ContactInfoCard'
import { ContactForm } from './ContactForm/ContactForm'
import gmail from '../../assets/gmail.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

export const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
                <ContactInfoCard
                    iconUrl={gmail}
                    text = "Gmail"
                    link="mailto:suhanii1214@gmail.com"
                />
                <ContactInfoCard
                    iconUrl={github}
                    text = "Github"
                    link="https://github.com/Suhanii1214"
                />
                <ContactInfoCard
                    iconUrl={linkedin}
                    text = "LinkedIn"
                    link="https://www.linkedin.com/in/suhanii1214/"
                />
        </div>
    </section>
  )
}
