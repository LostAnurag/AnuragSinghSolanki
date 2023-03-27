import React from 'react'
import { BsFillEnvelopeHeartFill } from 'react-icons/bs';

const Contact = () => {
  return (

  <div className="bg-[#1e1e1e] w-full md:h-screen h flex justify-center items-center">
    <div className="right md:p-20 p-5">
  <h1 className="font-medium text-white md:text-4xl text-xl">Contact Me</h1>
   <p className="text-white text-sm mt-1">Thank you for visiting my website. I would love to hear from you and answer any questions you may have. Please feel free to contact me using the form below or via the email address provided. I will do my best to respond to your message as soon as possible.</p>
   <div className='mt-2 md:grid md:grid-cols-1'>
       <ul>
        <a href="mailto:anuragsolanki299@gmail.com"><li className='text-white flex items-center hover:text-[#87acec]'><i className='mr-2'><BsFillEnvelopeHeartFill/></i>Email</li></a>
       </ul>
    </div> 
</div>
    </div>
  )
}

export default Contact
