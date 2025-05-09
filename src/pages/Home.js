import { useEffect, useState } from "react";

import img1 from '../asset/event1.jpg'
import img2 from '../asset/event2.jpg'
import img3 from '../asset/church.jpg'
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { cn } from "@/lib/utils";
// import { Spotlight } from "../ui/spotlight";

import { Spotlight } from "../component/ui/Spotlight";

export function SpotlightPreview() {
    const data =[
        {
            title:'Saturday',
            subtitle:'Fasting Prayer',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Aut architecto similique non officiis explicabo asperiores totam quod ratione beatae omnis illo repudiandae provident nulla.',
            imageTitle:'Upcoming Events',
            image:img1
        },
        {
            title:'Sunday service',
            subtitle:'Morning devotion',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Aut architecto similique non officiis explicabo asperiores totam quod ratione beatae omnis illo repudiandae provident nulla,',
            imageTitle:'Upcoming Events',
            image:img2
        },
    ];
    const [currentIndex,setCurrentIndex] = useState(0);
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

  const currentItem = data[currentIndex];
  return (
   <section id="/" >
     <div
      className="relative flex h-[40rem] w-full overflow-hidden rounded-md  bg-black/[0.96] antialiased md:items-center md:justify-center">
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )} /> */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      {/* <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1
          className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Spotlight <br /> is the new trend.
        </h1>
        <p
          className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div> */}

<div className='md:relative pt-5' >
{/* <img src={img3} className='md:absolute top-0 w-full min-h-screen object-cover -z-20  '/> */}
    <div  className=' flex items-center justify-center' style={{backgroundImage:`url(${""})`,}} >
    <div className='md:flex flex-row  md:flex-row  justify-center items-center  p-6 rounded-xl  space-x-0 md:space-x-20'>
      
      {/* Left content */}
      <div className='mb-6 md:mb-0'>
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
<FaLessThan className='text-black '/>

</button>
  <button
      onClick={handleNext}
      className='bg-orange-300 px-4  py-3 text-white  hover:bg-white'
    >
<FaGreaterThan className="text-black " />

    </button>
  
  
    
  </div>
</div>
      </div>
    </div>
    </div>
    </div>
   </section>
  );
}
