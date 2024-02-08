import frontend from '../assets/frontend.png'
import backend from '../assets/backend.png'
import tools from '../assets/tools.png'
import softSkills from '../assets/soft-skills.png'

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontend,
        skills: [
            {skill: "HTML5", percent: "80%"},
            {skill: "CSS3", percent: "90%"},
            {skill: "Javascript", percent: "75%"},
            {skill: "React", percent: "85%"},
        ]
    },
    {
        title: "Backend",
        icon: backend,
        skills: [
            {skill: "Node.js", percent: "60%"},
            {skill: "Express.js", percent: "65%"},
            {skill: "Postman", percent: "85%"},
        ]
    },
    {
        title: "Tools",
        icon: tools,
        skills: [
            {skill: "Git & Github", percent: "75%"},
            {skill: "Visual Studio Code", percent: "90%"},
            {skill: "Figma", percent: "80%"},
        ]
    },
    {
        title: "Soft Skills",
        icon: softSkills,
        skills: [
            {skill: "Problem Solving", percent: "80%"},
            {skill: "Leadership", percent: "90%"},
            {skill: "Communication", percent: "85%"},
            {skill: "Team Work", percent: "85%"},
        ]
    },
]

export const PROJECTS = [
    {
        title: "BE:BOLD",
        category: "Ecommerce Website",
        link: "https://bebold-ecommerce.vercel.app/",
        description: [
            "Implemented the frontend of the Ecommerce project using React and Tailwind CSS for building a dynamic user interface",
            "Employed Redux Toolkit for efficient state management in the frontend, ensuring a centralized and predictable flow of data throughout the application",
            "Implemented secure authentication and authorization of users using JWTs enhancing overall security and user access control.",
            "Developed the backend functionality of the project using Node.js and Express, ensuring seamless communication between the frontend and the MongoDB database",
            "Integrated the Razorpay payment gateway, enabling secure and efficient online transactions within the application"
        ]
    },
    {
        title: "Filmbox",
        category: "Movies Streaming Website",
        link: "https://filmbox-tau.vercel.app/",
        description: [
            "Created a Movies Streaming Application by leveraging advanced React functionalities and SCSS for user interface.",
            "Employed Redux Toolkit  for efficient global state management and added functinalities like lazy loading, dynamic loading skeletons, and infinite scrolling.",
            "Learnt about data retrieval from RESTful APIs using Axios, enabling the app to fetch and display real-time information.",
            "Implemented user authentication using Firebase and extensively used Cloud Firestore to store the user information.",
            "Integrated the Razorpay payment gateway for the subscriptions to ensure safe payment options for the user."
        ]
    }
]

export const WORK_EXPERIENCE = [
    {
        title: "Software Engineering Intern at SaintCoders",
        date: "May 2023 - Dec 2023",
        responsibilities: [
            "Collaborated with the Frontend Development team to complete the designs and features of the website using REACT JS",
            "Implemented advanced CSS animations and transitions to enhance user experience",
            "Gained hands-on experience with version control system, specifically Git and Github"
        ]
    },
    {
        title: "Research Intern at India School of Business",
        date: "May 2022 - Aug 2022",
        responsibilities: [
            "Worked on a project Data Science for Product Managers under Prof. Sumeet Kumar", 
            "Conducted 15 interviews to understand how Product Managers use data to gain insights",
            "Explored different websites and articles to dig deeper into data available in the form of reviews"
        ]
    }
]