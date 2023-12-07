import React from 'react'
import Title from '../layouts/Title'
import { projectOne } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Real Estate Website"
          des=" Modern Real Estate Hub, your one-stop destination for all things related to real estate. Our platform, built using the powerful MERN stack, offers a seamless and intuitive experience for both property seekers and sellers. "
          src="https://images.unsplash.com/photo-1565402170291-8491f14678db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Shop seamlessly with our React-powered e-commerce site. Navigate through a user-friendly interface, powered by React Router DOM, and enjoy a dynamic shopping experience connected to a robust API."
          src="https://media.istockphoto.com/id/512398526/photo/hand-click-businessman-icon-over-blue-background-connection-concept.webp?b=1&s=170667a&w=0&k=20&c=XY1yFaxiMbh8g6ua5dg1weS8OhfCxqWUHufVf8C9QJM="
        />
        <ProjectsCard
          title="Ice-Cream Project"
          des=" Satisfy your sweet cravings at our Ice Cream Store, where React, Bootstrap, and Tailwind CSS harmonize to deliver a visually appealing and responsive platform. Explore a delightful menu, indulge in flavorful options, and experience an immersive ice cream shopping adventure."
          src="https://images.unsplash.com/photo-1436491911682-72ab1d398f59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlY3JlYW0lMjBwcm9qZWN0fGVufDB8fDB8fHww"
        />
        <ProjectsCard
          title="Weather App"
          des=" Discover real-time weather conditions effortlessly with our Weather App. Built using React, the application provides accurate forecasts, intuitive navigation, and a visually appealing interface for a seamless weather-tracking experience"
          src="https://media.istockphoto.com/id/1333043586/photo/tornado-in-stormy-landscape-climate-change-and-natural-disaster-concept.webp?b=1&s=170667a&w=0&k=20&c=yRqdVB5d4hieb6ehqWeF3cUB9Iu5F7JdYgWN8f-pM8Q="
        />
        <ProjectsCard
          title="TO-DO App"
          des=" Stay organized with our sleek To-Do Application. Crafted with React for a responsive UI, manage tasks efficiently, enjoy intuitive features, and elevate your productivity in style"
          src={projectOne}
        />
        <ProjectsCard
          title="Quiz Application"
          des=" Engage and challenge yourself with our interactive Quiz Application. Powered by React, embark on a knowledge journey with dynamic questions, user-friendly design, and an immersive quiz-taking experience."
          src="https://media.istockphoto.com/id/1461630476/photo/group-of-students-filling-admission-application-form-or-preparing-for-exams-on-college-campus.webp?b=1&s=170667a&w=0&k=20&c=VJMpY_63RcMSQOZl-5P9ybn9NKK9sP9SedzjSdGRjpw="
        />
      </div>
    </section>
  );
}

export default Projects