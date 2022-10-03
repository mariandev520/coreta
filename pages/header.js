
import 'transition-style';
import { Text,  Box, Heading, Link, LinkBox, LinkOverlay } from "@chakra-ui/react";
import "animate.css";  
import Head from 'next/head';


export default function Header() {
    return (
   
<>
<header>


<div >

<div   >

<div >
<div  className="animate__animated animate__fadeInUp  text-uppercase font-semibold ">

<h1 class="text-6xl text-rigth font-bold p-7 mb-10 ">

</h1>



<div class=" text-center mx-auto m6">
<Link href="/">
 <button
 
   type="button" 
   class="border border-gray-200 bg-gray-300 text-gray-600 rounded-md px-8 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline"
 >
   INICIO
 </button>
 </Link>
 <Link href="quien">
 <button
   type="button"
   class="border border-gray-200 bg-gray-300 text-gray-600 rounded-md px-8 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline"
 >
   TALLER
 </button>
 </Link>
 <Link href="child">
 <button
   type="button"
   class="border border-gray-200 bg-green-200 text-gray-600 rounded-md px-8 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline"
 >
   TIENDA
 </button>
 </Link>
 </div>
</div>

</div>
</div>
</div>

</header>
</>
    )
}