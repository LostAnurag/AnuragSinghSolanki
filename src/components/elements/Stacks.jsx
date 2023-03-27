import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { SiFirebase } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';

const Stacks = () => {
  return (

  <div className="bg-[#1e1e1e] w-full md:h-screen h flex justify-center items-center">
    <div className="right md:p-20 p-5">
  <h1 className="font-medium text-white md:text-4xl text-xl">Stacks</h1>
   <p className="text-white text-sm mt-1">With over 3 years of experience in coding, I am well-versed in various programming languages and stacks. My passion for coding drives me to take on new projects and challenges, constantly learning and improving my skills. With dedication and creativity, I strive to deliver quality code and innovative solutions.</p>
   
   <h2 className="typing font-medium text-white md:text-xl text-base mt-1">Here are some languages I like to use in my projects.</h2>
    <div className='w-full mt-2 md:grid md:grid-cols-2'>
    <ul>
        <li className='text-white flex items-center'><i className='mr-2'><AiFillHtml5/></i>Html</li>
        <li className='text-white flex items-center'><i className='mr-2'><DiCss3/></i>CSS</li>
        <li className='text-white flex items-center'><i className='mr-2'><DiJavascript/></i>Javascript</li>
        <li className='text-white flex items-center'><i className='mr-2'><FaReact/></i>React</li>
        <li className='text-white flex items-center'><i className='mr-2'><SiTailwindcss/></i>Tailwind CSS</li>
        </ul>
        
        <ul>
        <li className='text-white flex items-center'><i className='mr-2'><SiPhp/></i>PHP</li>
        <li className='text-white flex items-center'><i className='mr-2'><GrNode/></i>Node JS</li>
        <li className='text-white flex items-center'><i className='mr-2'><SiFirebase/></i>Firebase</li> 
        <li className='text-white flex items-center'><i className='mr-2'><TbSql/></i>My SQL</li> 
        <li className='text-white flex items-center'><i className='mr-2'><DiMongodb/></i>Mongo DB</li> 
    </ul>
    </div> 
</div>
    </div>
  )
}

export default Stacks
