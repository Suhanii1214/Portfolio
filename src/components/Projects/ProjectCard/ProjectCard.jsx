import React from 'react'
import { FaExternalLinkAlt} from 'react-icons/fa'
import './ProjectCard.css'

export const ProjectCard = ({ details }) => {
  return (
    <div className='project-card'>
        <div className='sub-container'>
            <h6>{details.title}</h6>
            <a href={details.link} target='blank'><FaExternalLinkAlt className='icon'/></a>
        </div>
        <div className='project-category'>{details.category}</div>

        <ul>
            {details.description.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

