import React from 'react'

const Contact = () => {
  return (
    <section id="Contact" className='bg-neutral-900 pt-60'>
      <div className='flex flex-col items-center  bg-neutral-900 '>
     <div className=' p-10 text-start w-[300px] '>
     <p className='font-serif font-semibold text-white'>Contact</p>
      <p className='md:text-4xl text-3xl font-medium text-orange-300 mt-2 font-serif'>Divine Love Church</p>

      <div className='text-white '>
<p className='text-2xl mt-5 mb-3'> Address</p>
<p className=''>Sairam Nagar,Veerapandian Nagar main,</p>
<p  className=''> behind Nice Aqua,</p>
<p  className=''>Vengadamangalam,</p> 
<p  className=''>Tamil Nadu 600048</p>
      </div>
      <div className='text-white'>
<p className='text-2xl mt-5 mb-3'>Contact</p>

<div className='text-xl '>
{/* <p className='text-orange-300'>07845234263,</p> */}
<a href="tel:+916382209943" className='text-orange-300'>07845234263</a> 
<p className='text-orange-300'>contact@divinelove.org</p>
{/* <p className='text-orange-300'>divinelove@gmail.com</p> */}
<a href='https://mail.google.com/mail/?view=cm&to=divinelove@gmail.com' className='text-orange-300'>divinelove@gmail.com</a>
</div>

      </div>
     </div>

    </div>
    </section>
  )
}

export default Contact


// "use client";


// import React from "react";
// // import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import { CardItem,CardContainer,CardBody } from "../component/ui/3d-card";
// export function ThreeDCardDemo() {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody
//         className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white">
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
//           Hover over this card to unleash the power of CSS perspective
//         </CardItem>
//         <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
//           <img
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail" />
//         </CardItem>
//         <div className="flex justify-between items-center mt-20">
//           <CardItem
//             translateZ={20}
//             translateX={-40}
//             as="button"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
//             Try now →
//           </CardItem>
          
//           <CardItem
//             translateZ={20}
//             translateX={40}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
//             Sign up
//           </CardItem>

//           <CardItem
//           className="text-white"
//           as="button">
//         gggggf
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// }
