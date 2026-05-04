
import { useState } from 'react';
import img1 from '../asset/g1.webp'
import img2 from '../asset/p3.webp'
import img3 from '../asset/p4.webp'
import img4 from '../asset/p1.webp'
import img5 from '../asset/p5.webp'
import img6 from '../asset/p2.webp'


import { FocusCards } from "../component/ui/focus-card";

export function FocusCardsDemo() {
  const cards = [
    {
      
      src: img1,
      
    },
    {
      
      src: img2,
    },
    {
      
      src: img3,
    },
    {
      
      src: img4,
    },
    {
      
      src: img5,
    },
    {
      
      src: img6,
    },
  ];

 

  return(
    <section className="bg-neutral-900 scroll-mt-16 pt-20" id='Gallery'>

        <div className=" ">      
<p className="text-lg text-white  ">PhotoGallery</p>       
<p className="text-3xl font-semibold text-orange-300 font-serif">Our church life</p>

        </div>

<FocusCards cards={cards} />
<div className=' item-end justify-center flex mt-10 '>

  

  
         <button className='  p-1   border-4 border-orange-300 rounded text-white font-serif font-semibold px-3 py-2 hover:bg-orange-300 text-lg'>Allphotos</button>
     </div>
    </section>
  ) 
 
}


// import React, { useState } from 'react';
// import img from '../asset/event1.jpg';
// import img1 from '../asset/event2.jpg';


// const PhotoGallery =()=>{
//     const data=[
//         {
//             image:img,
//             image1:img1

//         },

//     ]
    
//     const [item,setItem] = useState(0);
//     const SetData = data[item];
//     return(
//         <section id="Gallery" className='bg-neutral-900 scroll-mt-14 pt-10 '>
           
//             <div className="md:w-1/2 px-8  mx-auto   flex flex-col  max-w-7xl ">

//             <div className='text-start items-start flex flex-col '>
//             <p className='text-white'>Photo Gallery</p>
//                 <p className='text-3xl font-semibold text-orange-300 mb-14' >Our Church Life</p>  
//                 </div>
                 

//     <div className=" md:flex-row mx-auto  md:h-[350px] md:grid md:grid-cols-3 grid grid-cols-2 gap-3 justify-center items-end" data-aos='zoom-in'>
//                 <img src={SetData.image}  className='photo ' />
//                 <img src={SetData.image1} className='photo' />
//                 <img src={SetData.image} className='photo' />
//                <img src={SetData.image} className='photo' />
//                 <img src={SetData.image1} className='photo' />
//                 <img src={SetData.image} className='photo' />
//                </div>
                      
   

//     <div className='md:mt-52 item-end justify-center flex mt-10 '>
//         <button className='  p-1   border-4 border-orange-300 rounded text-white font-serif font-semibold px-3 py-2 hover:bg-orange-300 text-lg'>Allphotos</button>
//     </div>
      
//     </div> 
 
//         </section>
// //    
        
//     )
// }

// export default PhotoGallery;

//  {/* <a href="#_"> <img src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"> </a><a href="#_"> 
//         <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"> </a><a href="#_"> 
//             <img src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"> </a><a href="#_"> 
//                 <img src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"> </a> */}



