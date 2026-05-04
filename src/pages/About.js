import React, { useState } from 'react';

import c1 from '../asset/c1.webp'

const About = ()=>{
    const data=[
        {
            title:"About our story",
            titledesc:"Welcome to Divine Love",
            image:c1,
            descriptino:""
        }
    ]
    const [item,setItem] = useState(0);
    const setData = data[item];
    return(

<section className=' bg-neutral-900  scroll-mt-14 pt-20' id="about">
<div className='flex items-center  justify-center 'id="">
<div className='md:flex flex-row  items-center   md:w-[900px] md:h-[600px]'>

    <div className='flex flex-col justify-center p-5 md:p-0 '>
        <p className='text-3xl font-semibold animate__animated animate__bounceIn font-serif text-white text-start mb-2 ' >{setData.title}</p>
        <p className='md:text-3xl font-semibold font-serif text-orange-300 text-start'>{setData.titledesc}</p>
  <img alt='church' data-aos="fade-right" className=" md:w-[500px] md:h-[300px]  items-center justify-center text-center" src={setData.image}/>
    </div>
    <div className=''>
    

<div className='text-center shadow-2xl rounded-2xl md:w-[450px] md:h-[550px]  bg-neutral-800 p-10'>
<p className='w[200px] text-balance text-lg font-medium text-white text-justify'>Pr. Daniel has been teaching the 'Word of God' since 2010, at Rabboni With Us Church (Prayer Garden Fellowship), Chennai, Chengalpattu District, Tamil Nadu, South India. 
    The Lord anointed him specially to teach His words prophetically among Pastors, Leaders and Believers..</p>

    <p className=' text-justify mt-5 text-neutral-400'>He has been reviving the church through his prophetic teachings. His passions for revival led him to receive a vision, Revival through Refining from the Revealer! The Lord is using him in a mighty way to be a blessed son for many.</p>

<div className='flex j items-center flex-col'>
<button className='justify  px-3 py-2 md:mt-10  mt-5 border-4 border-orange-300 hover:bg-orange-300 font-serif font-semibold text-white p-1 rounded flex-col  bottom-0  flex'>Learnmore</button>

</div>    
</div>

    </div>


</div>
</div>
</section>

    )
}
export default About;