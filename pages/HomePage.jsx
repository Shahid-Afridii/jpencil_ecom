import React from "react";
import Image from "next/image"; 
import Link from "next/link";
import banner from "../public/images/banner.jpeg"
import banner1 from "../public/images/banner1.jpeg"
import banner2 from "../public/images/banner2.jpeg"
import shipping from "../public/images/icons/delivery-van.svg"
import money from "../public/images/icons/money-back.svg"
import service from "../public/images/icons/service-hours.svg"
import gold from "../public/images/category/gold.jpeg"
import paintings from "../public/images/category/paint.jpeg"
import scul from "../public/images/category/scul.jpeg"
import decors from "../public/images/category/decor.jpeg"
import coin from "../public/images/category/coin.jpeg"
import trendy from "../public/images/category/trendy.jpeg"
import goldPd from "../public/images/products/gold.jpeg"
import goldPd2 from "../public/images/products/gold3.jpeg"
import goldPd3 from "../public/images/products/gold4.jpeg"
import goldPd4 from "../public/images/products/gold6.jpeg"
import Pd5 from "../public/images/products/prod7.jpeg"
import Pd6 from "../public/images/products/prod8.jpeg"
import Pd7 from "../public/images/products/pd10.jpeg"
import Pd8 from "../public/images/products/prd11.jpeg"
import offer from "../public/images/Ad8.gif"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomePage = () => {

  return (
    <>
      {/* Banner Start */}
      <div className="bg-cover bg-no-repeat bg-center">

      <Carousel autoPlay
            infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}>
                <div >
                    <Image src={banner} alt="data" className="w-full h-60 object-cover lg:h-auto" />
                  
                   
              
                  
                </div>
                <div>
                    <Image src={banner1} alt="data" className="w-full h-60 object-cover lg:h-auto" />
                 
                </div>
                <div>
                    <Image src={banner2} alt="data" className="w-full h-60 object-cover lg:h-auto" />
                   
                </div>
            </Carousel>
      </div>
      {/* Banner Ends */}

      {/* Start Features */}
      <div className="container py-16 lg:py-6 pb-16 ">
          <div className="lg:w-10/12 grid md:grid-cols-3  mx-auto lg:gap-6 gap-2 justify-center">
                <div className="border border-primary rounded-sm px-8 py-4 lg:px-3 lg:py-6 flex justify-center items-center gap-5 transition
                 hover:border-slate-400 hover:bg-gray-200 duration-300 ">
                        <Image src={shipping} alt="data" className="lg:w-12 w-10 h-12 object-contain" />
                        <div>
                          <h4 className="font-medium capitalize text-lg font-poppins">Free Shipping</h4>
                          <p className="text-gray-500 text-xs lg:text-sm">Order over ₹5,000</p>
                        </div>
                </div>
                <div className="border border-primary rounded-sm px-8 py-4 lg:px-3 lg:py-6 flex justify-center items-center gap-5 transition
                 hover:border-slate-400 hover:bg-gray-200 duration-300 ">
                        <Image src={money} alt="data" className="lg:w-12 w-10 h-12 object-contain" />
                        <div>
                          <h4 className="font-medium capitalize text-lg font-poppins">Money Returns</h4>
                          <p className="text-gray-500 text-xs lg:text-sm">30 Days Money Return</p>
                        </div>
                </div>
                <div className="border border-primary rounded-sm px-8 py-4 lg:px-3 lg:py-6 flex justify-center items-center gap-5 transition
                 hover:border-slate-400 hover:bg-gray-200 duration-300 ">
                        <Image src={service} alt="data" className="lg:w-12 w-10 h-12 object-contain" />
                        <div>
                          <h4 className="font-medium capitalize text-lg font-poppins">24/7 Support</h4>
                          <p className="text-gray-500 text-xs lg:text-sm">Customer Support</p>
                        </div>
                </div>
          </div>
      </div>
      {/* End Features */}


      {/* Start Category */}
          <div className="container pb-16">
            <h2 className="uppercase text-2xl md:text-3xl font-poppins  text-gray-800 mb-6 font-semibold flex justify-center lg:justify-start items-center">Shop by Category</h2>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
              {/* Start Single Category */}

              <div className="relative group rounded-lg  overflow:hidden  ">
              <Image src={gold} alt="" className="w-full   object-cover" />
              <Link href="#" className="absolute inset-0 bg-gray-600 bg-opacity-60 group-hover:bg-opacity-20 flex items-center justify-center text-xl
               text-white font-poppins font-medium tracking-wide transition">
                    Gold Jewellary
              </Link> 
              </div>

              {/* End Single Category */}
            
              {/* Start Single Category */}

              <div className="relative group rounded-lg  overflow:hidden  ">
              <Image src={paintings} alt="" className="w-full   object-cover" />
              <Link href="#" className="absolute inset-0 bg-gray-600 bg-opacity-60 group-hover:bg-opacity-20 flex items-center justify-center text-xl
               text-white font-poppins font-medium tracking-wide group-hover:text-gray-100 transition">
                      Paintings
              </Link> 
              </div>

              {/* End Single Category */}
            
              {/* Start Single Category */}

              <div className="relative group rounded-lg  overflow:hidden  ">
              <Image src={scul} alt="" className="w-full   object-cover" />
              <Link href="#" className="absolute inset-0 bg-gray-600 bg-opacity-60 group-hover:bg-opacity-20 flex items-center justify-center text-xl
               text-white font-poppins font-medium tracking-wide transition">
                      Sculpture
              </Link> 
              </div>

              {/* End Single Category */}
              {/* Start Single Category */}

              <div className="relative group rounded-lg  overflow:hidden  ">
              <Image src={decors} alt="" className="w-full   object-cover" />
              <Link href="#" className="absolute inset-0 bg-gray-600 bg-opacity-60 group-hover:bg-opacity-20 flex items-center justify-center text-xl
               text-white font-poppins font-medium tracking-wide transition">
                      Home Decors
              </Link> 
              </div>

              {/* End Single Category */}
              {/* Start Single Category */}

              <div className="relative group rounded-lg  overflow:hidden  ">
              <Image src={coin} alt="" className="w-full   object-cover" />
              <Link href="#" className="absolute inset-0 bg-gray-600 bg-opacity-60 group-hover:bg-opacity-20 flex items-center justify-center text-xl
               text-white font-poppins font-medium tracking-wide transition">
                     Coins
              </Link> 
              </div>

              {/* End Single Category */}
              {/* Start Single Category */}

              <div className="relative group rounded-lg  overflow:hidden  ">
              <Image src={trendy} alt="" className="w-full   object-cover" />
              <Link href="#" className="absolute inset-0 bg-gray-600 bg-opacity-60 group-hover:bg-opacity-20 flex items-center justify-center text-xl
               text-white font-poppins font-medium tracking-wide transition">
                      Trendy Silver
              </Link> 
              </div>

              {/* End Single Category */}
            

            </div>

          </div>
      {/* End Categories */}

    {/* Start Products */}
    <div className="container pb-16">
        <h2  className="uppercase text-2xl md:text-3xl font-poppins  text-gray-800 mb-6 font-semibold flex justify-center lg:justify-start items-center">Top New Arrival</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Gold Kasumalai</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 2,14,743.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 2,25,743.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd2} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Gold Haram</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 1,71,491.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 1,79,491.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd3} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Gold ANTIQUE  Haram</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 4,61,846.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 4,68,846.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd4} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">GOLD NAGAAS  HARAM</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold">  ₹ 6,68,529.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹  6,98,529.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={Pd5} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Party Wear Necklace</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹  15,236.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹  17,236.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={Pd6} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Stone Necklace</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 8,039.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹  9,039.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={Pd7} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">MARBLE PAINTING </h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 772.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 1000.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={Pd8} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">
10G SILVER COIN</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 573.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 633.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}

        </div>
    </div>
    {/* End Products */}
    {/* Start ad */}

    <div className="container pb-16 ">
        <Link href="#">
          <Image src={offer} alt="data" className="w-full object-cover shadow shadow-gray-400 rounded-lg" />
        </Link>
    </div>

    {/* End ad */}
        {/* Start Related Products */}
        <div className="container pb-16">
        <h2  className="uppercase text-2xl md:text-3xl font-poppins  text-gray-800 mb-6 font-semibold flex justify-center lg:justify-start items-center">Recommended For You</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Gold Kasumalai</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 2,14,743.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 2,25,743.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd2} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Gold Haram</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 1,71,491.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 1,79,491.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd3} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Gold ANTIQUE  Haram</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 4,61,846.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 4,68,846.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd4} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="/ProductDetails">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">GOLD NAGAAS  HARAM</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold">  ₹ 6,68,529.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹  6,98,529.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
     
      
        
     

        </div>
    </div>
    {/* End Related Products */}
    </>
  );
};

export default HomePage;
