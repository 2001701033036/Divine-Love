
import React from "react";
import { useEffect, useState } from "react";


import img1 from '../asset/event1.jpg'
import img2 from '../asset/event2.jpg'
import img3 from '../asset/church.jpg'

import p1 from '../asset/p1.webp'
import p2 from '../asset/p2.webp'

import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { cn } from "@/lib/utils";
// import { Spotlight } from "../ui/spotlight";

import { Spotlight } from "../component/ui/Spotlight";
import { DotBackgroundDemo } from "../component/ui/DotBackgroundDemo.js";

export function SpotlightPreview() {
    const data =[
        {
            title:'Saturday',
            subtitle:'Fasting Prayer',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Aut architecto similique non officiis explicabo asperiores totam quod ratione beatae omnis illo repudiandae provident nulla.',
            imageTitle:'Upcoming Events',
            image:p1
        },
        {
            title:'Sunday service',
            subtitle:'Morning devotion',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Aut architecto similique non officiis explicabo asperiores totam quod ratione beatae omnis illo repudiandae provident nulla,',
            imageTitle:'Upcoming Events',
            image:p2
        },
    ];
    const [currentIndex,setCurrentIndex] = useState(0);

     useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust rotation speed here
      setRotation(scrollY * 0.2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
//Autoplay every 3 seconds
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
    console.log("next",handleNext)
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const [rotation, setRotation] = useState(0);

  const currentItem = data[currentIndex];
  return (
   <section id="">
      <div className="relative flex  w-full items-center justify-center bg-white dark:bg-black">
        
     <div
      className="relative   w-full overflow-hidden  bg-black/[0.96] antialiased md:items-center md:justify-center">
         <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )} />
     
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
    

<div className='md:relative pt-5' >
{/* <img src={img3} className='md:absolute top-0 w-full min-h-screen object-cover -z-20  '/> */}
    <div  className=' flex items-center justify-center min-h-screen  ' style={{backgroundImage:`url(${""})`,}} >
    <div className='md:flex flex-row  md:flex-row     p-6 rounded-xl  space-x-0 md:space-x-20'>
      
      {/* Left content */}
      <div className='mb-6 md:mb-0 '>
        <p className='font-bold text-white font-serif '>{currentItem.title}</p>
        <p className='text-2xl font-semibold text-orange-300 font-serif'>{currentItem.subtitle}</p>
        <p data-aos='fade-left' className='md:text-lg mt-2 w-80 text-white' >{currentItem.description}</p>
        <button className='mt-4 border-4 border-orange-300 hover:bg-orange-300 font-serif font-semibold px-4 py-2 text-white rounded '>
          More Details
        </button>
      </div>
{/* RIGHTSIDE */}
<div className='text-center'>
  <p className='mb-2 font-semibold text-orange-300 text-xl  text-start font-serif'>{currentItem.imageTitle}</p>
  <img
  data-aos="fade-right"
    className="w-[350px] h-[250px]  object-cover rounded"
    src={currentItem.image}
    alt="Event"
  />
  <div className="flex justify-center  mt-4">
  <button
  type="button"
  onClick={handlePrev}
  className="bg-orange-300 px-4 py-3  text-white  hover:bg-white"
>
<FaLessThan className='text-black text-sm '/>

</button>
  <button
      onClick={handleNext}
      className='bg-orange-300 px-4  py-3 text-white  hover:bg-white'
    >
<FaGreaterThan className="text-black text-sm " />

    </button>  
  </div>
  </div>
      </div>
    </div>
    </div>
    </div>
    </div>



    {/* time */}

    <div className="min-h-[100vh] bg-neutral-900 flex items-center justify-center">

      <div className="w-[600px] h-[600px] mt-20  items-center justify-center hidden md:block ">
          <img
            src={img1}
            alt="rotate"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.1s linear",
            }}
            className="w-full h-full object-cover rounded-full shadow-lg "
          />
        </div>

      <div className="mt-10 p-5 md:p-0">
        <p className="text-start text-white font-thin ">Our group</p>
      <p className="text-5xl font-semibold font-serif text-orange-500 text-start">Join a <br/><span>community</span></p>
      <div className="p-6 rounded shadow-2xl max-w-md bg-neutral-800 space-y-5 h-[500px] mt-5">
         <p className="text-white text-2xl  text-start ">Sunday service</p>
        <p className="text-white text-2xl text-start"> Morning - 10:00 am - 12.30pm</p>
        <p className="text-gray-400 text-xl font-thin text-justify">We want you to feel at home here-and we know that doesn't happen overnight.So, if there's anything you need or want from us, please let us know! We'll do our best to make sure it happens for you </p>
       
       <a href="#Contact"/> 
        <button className="p-2 border-2 border-orange-400 hover:bg-orange-400 text-white"> Contact us</button>
       
       <a/>

      </div>
      
      </div>

    </div>
    
   </section>
  );
}
