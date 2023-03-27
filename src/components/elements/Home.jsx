import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import About from './About';

const Home = () => {
  return (
   
  <div className="bg-[#1e1e1e] w-full md:h-screen h flex justify-center items-center">
    <div className="right md:p-20 p-5">
   <h1 className="font-medium text-white md:text-4xl text-xl">Anurag Singh Solanki</h1>
   <h2 className="typing font-medium text-white md:text-xl text-base mt-1">Full Stack Developer</h2>
   <p className="text-white text-sm mt-1">I'm Anurag, a skilled full-stack web developer, and a dedicated BCA student. With expertise in various programming languages and frameworks.</p>
   <Link to={"about"}><button className="bg-white rounded text-[#1e1e1e] w-full mt-3 p-2 hover:bg-[#87acec] font-medium">About Me</button></Link>
     <div className='mt-2 md:grid md:grid-cols-1'>
       <ul>
        <a href="https://www.instagram.com/lostanurag"><li className='text-white flex items-center hover:text-[#87acec]'><i className='mr-2'><BsInstagram/></i>Instagram</li></a>
        <a href="https://www.linkedin.com/in/anurag-singh-solanki"><li className='text-white flex items-center hover:text-[#87acec]'><i className='mr-2'><BsLinkedin/></i>LinkedIn</li></a>
        <a href="https://github.com/lostanurag"><li className='text-white flex items-center hover:text-[#87acec]'><i className='mr-2'><BsGithub/></i>Github</li></a>
        </ul>
    
    </div> 
   <div>
  </div>
</div>
    </div>
  )

}

export default Home
