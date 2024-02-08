import React from 'react'
import './ContactInfoCard.css'

export const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <a href={link} className='contact-details-card'>
        <div className='icon'>
            <img src={iconUrl} alt='icon'/>
        </div>
        <p>{text}</p>
    </a>
  )
}
