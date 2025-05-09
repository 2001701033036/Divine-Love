import React, { useState } from 'react';
import img1 from '../asset/event1.jpg'
import { Button } from '../component/ui/moving-border';
const About = ()=>{
    const data=[
        {
            title:"About our story",
            titledesc:"Welcome to Divine Love",
            image:img1,
            descriptino:""
        }
    ]
    const [item,setItem] = useState(0);
    const setData = data[item];
    return(

<section className=' bg-neutral-900  scroll-mt-14 pt-20' id="about">
<div className='flex items-center  justify-center 'id="">
<div className='md:flex flex-row  items-center   md:w-[900px] md:h-[600px]'>

    <div className='flex flex-col justify-center items-center'>
        <p className='text-xl font-semibold animate__animated animate__bounceIn font-serif text-white' >{setData.title}</p>
        <p className='md:text-3xl font-semibold font-serif text-orange-300'>{setData.titledesc}</p>
  <img data-aos="fade-right" className=" md:w-[500px] md:h-[300px] w-[300px] items-center justify-center text-center" src={setData.image}/>
    </div>
    <div className=''>
    

<div className='text-center shadow-2xl rounded-2xl md:w-[400px] md:h-[400px] grid grid-rows-1 bg-gray-900 p-10'>
<p className='w[200px] text-balance text-lg font-medium text-white'>We are a Christ-centered fellowship led by Pastor Dani, rooted in the teaching of God’s Word. What began as a small group hungry to know God has grown into a loving community walking together in faith, truth, and discipleship. Our desire is simple — to know Jesus more and to make Him known.</p>

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