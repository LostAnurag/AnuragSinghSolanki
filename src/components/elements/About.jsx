import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi';
const About = () => {
  return (
   
  <div className=" bg-[#1e1e1e] w-full md:h-screen h flex justify-center items-center">
    <div className="right md:p-20 p-5">
  <h1 className="font-medium text-white md:text-4xl text-xl">About</h1>
   <h2 className="typing font-medium text-white md:text-xl text-base mt-1">Student/Freelancer</h2>
   <p className="text-white text-sm mt-1">I'm Anurag, a skilled full-stack web developer, and a dedicated BCA student. With expertise in various programming languages and frameworks, I can build robust web applications from scratch. Combining my passion for technology and continuous learning, I strive to enhance my skills and create impactful projects.</p>
    <ul>
        <li className='text-white flex items-center mt-2'><i className='mr-2'><FiArrowRightCircle/></i>Student</li>
        <li className='text-white flex items-center mt-2'><i className='mr-2'><FiArrowRightCircle/></i>Web Developer</li>
        <li className='text-white flex items-center mt-2'><i className='mr-2'><FiArrowRightCircle/></i>Android Developer</li>
        <li className='text-white flex items-center mt-2'><i className='mr-2'><FiArrowRightCircle/></i>Freelancer</li>   
    </ul> 
  
</div>
    </div>
  )
}

export default About
