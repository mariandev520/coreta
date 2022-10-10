import Header from "./header";
import { Link ,Image} from '@chakra-ui/react'

export default function child() {
    return (
 <>
 <Header />
<section >
        <div className="container px-6 py-8 mx-auto">
            <div className="lg:flex lg:-mx-2">
                <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                    <a href="child" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Espejos</a>
                    <a href="accesorios" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Objetos Deco</a>
                    <a href="arte" className="block font-medium text-blue-600 dark:text-blue-500 hover:underline">Deco Hogar</a>
                
                </div>

                <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-gray-500 dark:text-gray-300">6 Items</p>
                        <div className="flex items-center">
                            <p className="text-gray-500 dark:text-gray-300">Sort</p>
                            <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                <option value="#">Recommended</option>
                                <option value="#">Size</option>
                                <option value="#">Price</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                          <Link href="productoim">
                           <Image  className="object-cover w-full rounded-md h-72 xl:h-80" src=
                           "espe1/image7.jpg" alt="T-Shirt"></Image>
                           </Link>
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Espejo hippy chic</h4>
                            <p className="text-blue-500">$11000</p>
                            <Link href="https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEA21QXWvCMBT9LwH71Frd8KOFMhzDoSiyt8kYIaa3bTRtuuTW6sT_vtvC2MsgLzn3fNx7bkybXFUcrzWwmB2aK_NZrQVmxpZcpYSVmiCnEH6_oqMIK0pAsI7Ft84jh_QZSNS5ZEI7IJJosOCZNi1hfQxhynG4kK4SmrdwOCugaS_wWW6IWCDWLg7Dtm2HJVgpUqPVwcJQmnIobJh_h7IAeTINhrTuE20CFfLG6qSXDh4Xg4clPWFRyUab_1xovN0sgvF4Hk1Gs2g-C8DVcDRBqhxUJuDrrcels1myHkm8FC_7YD6dTKL315E5HZftLpq-YbTernb7jVl50lRIVyVnVXtfjahQ4TUZe6VJIalFDh6117WZUOhfJrv7VJVDjlbIE4vRNuCzFKRWFVDzH5_3HypqpG-fAQAA/notregistered">
                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="image1.jpeg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="mx-1">Comprar</span>
                            </button>
                            </Link>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                        <Link href="productes">
                            <Image className="object-cover w-full rounded-md h-72 xl:h-80" src="espe1/espe2.jpg" alt="T-Shirt"></Image>
                            </Link>
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> Espejo Quincho</h4>
                            <p className="text-blue-500">$13500</p>
                            <Link
                                href="https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEA22Q3UvDMBTF_5fA-tSuqx9sFops-MF080lREQlZetvGpk1Nblbr2P_u3UB8EfKSc8_53cvZMW1K1XIcOmAp2_iBhazTAgtjG65y0hpNklMIv19xsAgrGkCwjqW7A6OEfAEUOlAKoR2QSXiseKFNT9pxDWnKcfiiXCs072GzVUDTYyBkpSFjhdi5NI77vh83YKXIjVYbC2NpmrGwcfkdywpkbTzGdO5lY3LIOlFCIE2LxM62qgvoPmiRe6uzI3B0Oh-d3NATFpX02vzHpvF6NY-SZHaRTKZnk0kEroMPE-XKQWsifrcOPr1oUeGQJQGXzhbZGh9r-WzOIysL-zq9Wl771aJ5mc3lfb2E6vbpYZgF1N6hzYzwf3S2D6kqhxytkDVL0XoIWQ5Sqxao-bf3_Q-VAgtVnwEAAA/notregistered">
                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span  className="mx-1">Comprar</span>
                            </button>
                            </Link>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                        <Link href="productesA">
                            <Image className="object-cover w-full rounded-md h-72 xl:h-80" src="espe1/espe3.jpg" alt="T-Shirt"></Image>
                            </Link>
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Espejo Baño</h4>
                            <p className="text-blue-500">$12500</p>
                            <Link
                                href="https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEA21QwUrDQBD9l4XmlDRNxNoGgtSCBzHgQQQRWbabSbp2sxt3J03S0n93UhAvwlzmzXvzZt6ZaVsrw3FsgWVs140sZK0WWFnXcFUS1miCvEL4bcVEEU40gOA8y87TjhrKByDRtKUS2gORRId7XmnbE3a1IUx5DgPpjNC8h91RAU2vgpDVloh7xNZncdz3_bwBJ0Vptdo5mEvbzIWL61Ms9yAPtsOYzr3n0rsqH8Z0WIzbIeKVKl-benxLzcmod7lpl8f1y7ZYiiKgo8Eg75zOry6zm80sfaQSDpXstP3PkMbF8yZKktU6WdzdrtIIfAtfNiqVB2Mj_lQE0hqkr_KjagMKagouJ9GfJmhsCXkragi-O2FQ4Zgn7BJSVB45OiEPLEPXQchKkFoZoOQ_Pi8_k4TgpZ8BAAA/notregistered">
                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="mx-1">Comprar</span>
                            </button>
                            </Link>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <Link href="productesB">
                            <Image className="object-cover w-full rounded-md h-72 xl:h-80" src="espe1/espe4.jpg" alt="T-Shirt"/>
                            </Link>
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Espejo Flex</h4>
                            <p className="text-blue-500">$14700</p>
                            <Link href="https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEA22QXUvDMBSG_0tgvWpXOp1uhSLrhd8DEQRBJGTpaZstTbrkdLWO_XdPB-KNkJu8533Ox3tk2lbKcBxaYCnbdAMLWasFltY1XBWkNZokrxB-v2K0CCcaQHCepcexRwVFDgSNXUqhPZBJdFjzUtuetPMY0pTn8EWcEZr3sDkooOoZCFllyVgjtj6N477vpw04KQqr1cbBVNpmKlxcfceyBrmzHca07s2-EwYVDlkScOldmdXJS16-7-dR76ypl3Z4upfbKMmvX6_uity9Qd09BI0tIGtFBQFdAgZ553R2Hj25WE1mt_SEQyU7bf_bgsrr51WUJIvlbHm5mM8i8C1sbVQoD8ZG_HEdSGuQTs0Oqg0ovTHNjKA_hp1CisojRyfkjqXoOghZAVIrA5T8x-fpB9PqFeqfAQAA/notregistered">
                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="mx-1">Comprar</span>
                            </button>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <Link href="producoC">
                            <Image className="object-cover w-full rounded-md h-72 xl:h-80" src="espe3/image.jpeg" alt="T-Shirt"/>
                            </Link>
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Espejo Flex</h4>
                            <p className="text-blue-500">$8500</p>
                            <Link href="https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEA21QS2vCQBD-LwvmlJhGPdhAKGnBQ1VKCy1CKcu6mcQ1m2y6O2t84H_vRCi9FOYy33wv5sK0qVTL8dQBS9nWn1jIOi2wNLbhqiCs0QQ5hfC7ioEirGgAwTqWXgaPCopHINHgUgrtgEjC446X2vSE3WIIU47DkXSt0LyH7UEBXW-CkFWGiDvEzqVx3Pf9uAErRWG02loYS9OMhY2rcyx3IGvjMaa6D1RsKJqtV3mSzO9ns-k8uQukaZFysoPqgm8vWlR4ypKAakOL3Fud3XJG03w0WdAIi0p6bf6LpDOZR3_uEbgO9iYqlIPWRPx5HTSmgKwTFQRcOltmh3IzXeTLZbQ5nlcLn79Js69N9VFOXrx-fYK2fq_ZNaRXOeRohaxZitZDyAqQWrVAn__8uv4Af8s5Yp8BAAA/notregistered">
                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="mx-1">Comprar</span>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
   
  </>
)
}
