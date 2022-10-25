import Header from "./header";
import 'animate.css';
import {  Link } from "@chakra-ui/react";
import Footer from "./footer";
import { motion } from "framer-motion"


export default function Home() {

 

  return (
 
    
        <>
   <Header className />
   
    

    <section className="p-6 ">
       <section className="container mx-auto "  >
           <div className="mx-auto lg:py-16 lg:px-6 overflow-hidden rounded-lg shadow-lg shadow-green-200/50  rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl bg-fondop  "ß >
               <div className="max-w-screen-lg text-gray-100 sm:text-lg dark:text-gray-100">
                   <h2 className="text-lg font-semibold text-left text-blue-500 sm:text-6xl text-gray-500 dark:text-gray-500">Diseño <span className="font-extrabold "></span>en tus espacios</h2>
                 <Link href="child">
                   <button  className="border border-gray-200 bg-blue-400 text-white rounded-lg  px-8 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline animate__animated animate__pulse
 animate__infinite animate_infinite">
                       galeria
                       
                   </button>
                   </Link>
               </div>
           </div>
          

         </section>

         <section className="animate__animated animate__backInLeft
 animate__delay-2s">
         <div className="py-16 white">  
    <div className="container m-auto px-6 text-gray-600">
    <img className="duration-200 hover:scale-105 hover:shadow-xl w-full rounded-lg" />
    <motion.div
      className="demo"
      whileHover={{
        scale: 1.1,
        textShadow: "0px 2px 4px gray"
      }}
    >
     
        <h2 className="p-6 max-w-2xl mb-4 mt-3 md:text-4xl font-extrabold font-bold text-gray-500 dark:text-gray-500">Deco & Arte</h2>
        </motion.div>
        <div className="grid gap-8  lg:grid-cols-2">
        <img className="duration-200 hover:scale-105 hover:shadow-xl w-full shadow-lg shadow-yellow-500/50  rounded-lg" src="espe1/espe2b.jpeg"/>
        <img className="duration-200 hover:scale-105 hover:shadow-xl w-full shadow-lg shadow-blue-500/50  rounded-lg" src="espe1/espe3d.jpeg"/>
        
        </div>
    
        </div>
        </div>

        <div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12 animate__animated 
 animate__delay-3s">
          <img className="duration-200 hover:scale-105 hover:shadow-xl w-full shadow-lg shadow-gray-500/50  rounded-lg" src="porespe2.jpeg" alt="img" loading="lazy" width="" height=""/>
        </div>
        <div className="md:7/12 lg:w-6/12">

        <motion.div
      className="demo"
      whileHover={{
        scale: 1.1,
        textShadow: "0px 2px 4px gray"
      }}
    >
     
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Una Opcion en todos los espacios </h2>
          </motion.div>
          <p className="mt-6 text-gray-600">Elije armonizar tus espacios con colores y objetos que completen tu lugar</p>
          <p className="mt-4 text-gray-600"> </p>
        </div>
      </div>
  </div>
</div>
   
<div className="  bg-white bg-fondo1 ">
           <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
               <div className="mr-auto place-self-center lg:col-span-7">
                   <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-yellow-700">Objetos Artisticos </h1>
                   <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Puedes optar por darle un toque distinto a Tus espacios pasea por nuestro market para encontrar lo necesitas para tu interior</p>
                  
           
                   <a href="child" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-bg-yellow-500 dark:border-gray-100 dark:hover:bg-gray-200 dark:focus:ring-gray-1S00">
                       Lo distinto
                   </a> 
                   
               </div>
                            
           </div>
   
   
           <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
               <h2 className="mb-8 lg:mb-8 text-2xl  tracking-tight leading-tight text-center text-gray-900 dark:text-green-700 md:text-4xl"></h2>
               <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                  
                   <a href="#" className="flex justify-center items-center">
                                                                                                     
                   </a>
                   <a href="#" className="flex justify-center items-center">
                                                                                                         
                   </a>

<button type="button"  className=""></button>
               </div>
           </div>
   

  
           <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
               <div className="">
                   <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white"></h2>
               
               </div>
               <div className="">
                   <div>
                       <div className="">
                      
                       </div>
                       <h3 className=""></h3>
                       <p className=""></p>
                   </div>
                   <div>
                       <div className="">
                        
                     
                       <p className="text-gray-500 dark:text-gray-400"></p>
                   </div>
                  
                   </div>
               </div>
           </div>
           </div>
         </section>
   
         <section className="animate__animated  bg-white dark:bg-white">
           <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
               <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                   <h2 className="mb-4 text-5xl font-extrabold font-bold text-yellow-500 dark:text-gray-500 animate__animated animate__headShake
 animate__infinite animate_infinite">Campo Creativo</h2>
                   <p className="mb-4"></p>
                   <p>Este el espacio donde las ideas y la materialidad se juntan para expresarse en arte</p>
               </div>
               <div className="grid grid-cols-2 gap-4 mt-8 animate__animated animate__backInRight
 animate__delay-3s">
                   <img  className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl w-full rounded-lg" src="portadix.jpeg" alt="office content 1"/>
                   <img className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mt-4 w-full lg:mt-10 rounded-lg" src="portamase.jpeg" alt="office content 2"/>
               </div>
           </div>
       </section>
       <section>
       <div className="relative">
    <div className="bg-cover rounded-lg shadow-lg shadow-gray-500/50 sticky top-0 h-screen flex flex-col items-center justify-center bg-fondopaq1 duration-200 ">
        <h2 className="mb-32 text-7xl font-extrabold font-bold text-yellow-500 dark:text-white">Encuentra</h2>
        
    </div>
    <div className="sticky  top-0 rounded-lg shadow-lg shadow-gray-500/50 h-screen flex flex-col items-center justify-center bg-fondopa text-white ">
        <h2 className="mb-4 text-7xl font-extrabold font-bold text-white  dark:text-white">los Articulos</h2>
    
    </div>
    <div className="bg-center rounded-lg  shadow-lg shadow-gray-500/50  sticky top-0 h-screen flex flex-col items-center justify-center bg-fondon text-gray-200 ">
        <h2 className="mb-4 text-7xl font-extrabold font-bold text-yellow-500 dark:text-white">que crean </h2>
   
    </div>
    <div className="bg-cover rounded-lg shadow-lg shadow-gray-500/50  sticky top-0 h-screen flex flex-col items-center justify-center bg-fondopaq text-gray-500 ">
        <h2 className="mb-4 text-7xl font-extrabold font-bold text-yellow-500 dark:text-white">tu estilo</h2>
    </div>
</div>
</section>


  </section>
  
  <Footer />
</>

  )
}