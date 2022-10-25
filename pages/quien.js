import Header from "./header";
import { Img } from "@chakra-ui/react";
import Footer from "./footer";


export default function quien() {
    return (

            <>
        <Header />

   

        <div className="w-full">
       
<div id="blog" className=" px-4 xl:px-4 py-14">
                    <div className="mx-auto container">
                        <span role="contentinfo">
                        <h1  className="text-lg font-semibold text-center text-blue-500 sm:text-6xl text-yellow-400 dark:text-gray-500">El Taller Creativo</h1>
                    </span>
                        <div   aria-label="Group of cards" className="focus:outline-none mt-12 lg:mt-24">
                            <div  className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div  className="focus:outline-none" aria-label="card 1">
                                    <Img role="Img" aria-label="code editor"  className="duration-200 hover:scale-105 hover:shadow-xl w-full shadow-lg" src="taller.jpeg" alt="code editor" ></Img>
                                    <div className="py-4 px-8 w-full flex justify-between bg-green-300">
                                        <p   className="focus:outline-none text-sm text-white font-semibold tracking-wide"></p>
                                        <p  className="focus:outline-none text-sm text-white font-semibold tracking-wide"></p>
                                    </div>
                                    <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                
                                        <p  className="focus:outline-none text-gray-700 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">Estos instantes reflejan los instantes de trabajo el cual los colores materiales y juego comienzan a reflejarse en los objetos de nuestra tienda , en la foto vemos unas maceteas que tienen diferentes detalles de venecitas y colores vivos armonizando con las flores en su interior y con el entorno. </p>
                                        <div className="w-full flex justify-end" >
                                            <button className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                                              
                                                <Img className="duration-200 hover:scale-105 hover:shadow-xl w-full shadow-lg" href="taller2.jpeg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                                   
                                                </Img>
                                            </button>
                                        </div>
                                        <div className="h-5 w-2"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                        <div  className="focus:outline-none " aria-label="card 2" >
                                            <Img  role="img" aria-label="gaming" className="duration-200 hover:scale-105 hover:shadow-xl w-full shadow-lg" src="espe3.jpeg" alt="games" ></Img>
                                            <div className="py-2 px-4 w-full flex justify-between bg-orange-300">
                                       
                                            </div>
                                            <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                                <h1  className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"></h1>
                                                <p  className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"></p>
                                            </div>
                                        </div>
                                        <div   className="focus:outline-none" aria-label="card 3">
                                            <Img  role="img" aria-label="gaming" className="duration-200 hover:scale-105 hover:shadow-xl w-full shadow-lg" src="taller2.jpeg" alt="notes" ></Img>
                                            <div className="py-2 px-4 w-full flex justify-between bg-green-300">
                                    
                                            </div>
                                            <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                                <h1  className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"></h1>
                                                <p  className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"></p>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                        <div  className="focus:outline-none " aria-label="card 4">
                                            <Img  role="img" aria-label="laptop" className="duration-200 hover:scale-105 hover:shadow-xl w-full shadow-lg" src="espe.jpeg" alt="laptop" ></Img>
                                            <div className="py-2 px-4 w-full flex justify-between bg-green-300">
                                               
                                            </div>
                                            <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                      
                                                <p  className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"></p>
                                            </div>
                                        </div>
                                        <div  className="focus:outline-none" aria-label="card 5">
                                            <Img  role="img" aria-label="worker" className="duration-200 hover:scale-105 hover:shadow-xl w-full shadow-lg" src="espe3.jpeg" alt="worker" ></Img>
                                            <div className="py-2 px-4 w-full flex justify-between bg-orange-300">
                                               
                                            </div>
                                            <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                               
                                                <p  className="focus:outline-none  text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">En el proceso creativo donde  se busca plasmar una idea para crear un objeto artesanal que contenga un estilo propio.</p>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

</div>


<Footer />
</>
)
}
