import Header from "./header";
import { Link } from '@chakra-ui/react'

export default function accesorios() {
    return (
 <>
 <Header />
<section >

        <div class="container px-6 py-8 mx-auto">
            <div class="lg:flex lg:-mx-2">
                <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                    <a href="arte" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Niños Arte</a>
                    <a href="accesorios" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Adornos Mate</a>
                    <a href="child" class="block font-medium text-blue-600 dark:text-blue-500 hover:underline">Espejos</a>
                  
                </div>

                <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p class="text-gray-500 dark:text-gray-300">6 Items</p>
                        <div class="flex items-center">
                            <p class="text-gray-500 dark:text-gray-300">Sort</p>
                            <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                <option value="#">Recommended</option>
                                <option value="#">Size</option>
                 |               <option value="#">Price</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                        <Link href="productosador">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="posa1/02.jpeg" alt="T-Shirt"/>
                            </Link>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Printed T-shirt</h4>
                            <p class="text-blue-500">$12.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Comprar</span>
                            </button>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                        <Link href="Cards/posauno">
                            <img class="object-cover w-full rounded-md h-72 xl:h-76" src="posa1/port1.jpeg" alt="T-Shirt"/>
                            </Link>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">T-shirt with a motif</h4>
                            <p class="text-blue-500">$16.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Comprar</span>
                            </button>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                        <Link href="Cards/posados">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="posa1/mat1.jpeg" alt="T-Shirt"/>
                            </Link>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">T-shirt with a motif</h4>
                            <p class="text-blue-500">$16.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Comprar</span>
                            </button>
                        </div>

                      
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
)
}