import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <section id="Contact" className='bg-neutral-900 pt-60'>
      <div className='md:flex items-center justify-center'>

        <div className='flex flex-col items-center  bg-neutral-900 '>
     <div className=' p-10 text-start  '>
     <p className='font-serif font-semibold text-white'>Contact</p>
      <p className='md:text-4xl text-3xl font-medium text-orange-300 mt-2 font-serif'>Divine Love Church</p>


<div className='flex flex-row items-center gap-5'>
  <div className='h-[40px] w-[40px] bg-orange-200  rounded-full flex flex-col group items-center justify-center hover:bg-orange-300 '>
     <FaLocationDot className='h-[25px] w-[25px] text-orange-400 group-hover:text-white'/>
   </div>
      <div className='text-white '>
<p className='text-2xl mt-5 '> Address</p>

<a href='https://g.co/kgs/Cbg7DZB'>
<p className=''>Sairam Nagar,Veerapandian Nagar main,</p>
<p  className=''> behind Nice Aqua,</p>
<p  className=''>Vengadamangalam,</p> 
<p  className=''>Tamil Nadu 600048</p>
</a>
      </div>
</div>
      
        
 <div className=' flex flex-row items-center gap-5  pt-5'>
   <div className='h-[40px] w-[40px] bg-orange-200 rounded-full flex flex-col group items-center justify-center hover:bg-orange-300'>
     <IoCall className='h-[25px] w-[25px] text-orange-400 group-hover:text-white'/>
   </div>
<div className=' '>
<p className='text-2xl mt-5 text-white'>Call Us</p>
{/* <p className='text-orange-300'>07845234263,</p> */}
<a href="tel:+916382209943" className='text-orange-300 '>07845234263</a> 
</div>
 </div>

 <div className='flex flex-row items-center gap-5 mt-3 '>
  <div className='h-[40px] w-[40px] bg-orange-200 rounded-full flex flex-col group items-center justify-center hover:bg-orange-300'>
     <IoIosMail className='h-[25px] w-[25px] group-hover:text-white text-orange-400'/>
   </div>
 <div>
  <p className='text-2xl  text-white pt-5'>Email Us</p>
  <p className='text-orange-300 text-xl'>contact@divinelove.org</p>
{/* <p className='text-orange-300'>divinelove@gmail.com</p> */}
<a href='https://mail.google.com/mail/?view=cm&to=divinelove@gmail.com' className='text-orange-300 text-xl'>divinelove@gmail.com</a>
 </div>
  
 </div> 
     </div>
    </div>
{/* <p className='h-[380px]  border-2 border-neutral-500 mr-5'></p> */}



    <div className='md:hidden  justify-center items-center place-items-center align-middle'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7539767273397!2d80.15461840986777!3d12.85916061728268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52590e513ee591%3A0x4bea0bca90fc5a40!2sDivine%20Love%20Church!5e0!3m2!1sen!2sin!4v1750740026056!5m2!1sen!2sin" 
  width="400" 
  height="400" 
  title='mobile map'
  
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"
  className="rounded-lg  w-[450px] p-5 md:hidden"
  >
  </iframe>

    </div>

     <div className=' hidden md:block'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7539767273397!2d80.15461840986777!3d12.85916061728268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52590e513ee591%3A0x4bea0bca90fc5a40!2sDivine%20Love%20Church!5e0!3m2!1sen!2sin!4v1750740026056!5m2!1sen!2sin" 
  width="600" 
  height="400" 
  title='web map'
  
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"
  className="rounded-lg border-2 border-orange-20 w-[450px] hidden md:block "
  >
  </iframe>
    </div>

      </div>
    </section>
  )
}

export default Contact

