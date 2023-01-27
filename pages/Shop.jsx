import React from 'react'
import Image from "next/image"; 
import Link from "next/link";
import goldPd from "../public/images/products/gold.jpeg"
import goldPd2 from "../public/images/products/gold3.jpeg"
import goldPd3 from "../public/images/products/gold4.jpeg"
import goldPd4 from "../public/images/products/gold6.jpeg"
import Pd5 from "../public/images/products/prod7.jpeg"
import Pd6 from "../public/images/products/prod8.jpeg"
import Pd7 from "../public/images/products/pd10.jpeg"
import Pd8 from "../public/images/products/prd11.jpeg"

const Shop = () => {
  const handleFilter = ()=>{
    var menu = document.getElementById("filterMenu");
       
    // console.log("menuClick", menu.classList);
    if(menu?.classList.contains('hidden')){
      menu?.classList.remove('hidden')

    } 
  }
  const filterCloseMenu = ()=>{
    var menu = document.getElementById("filterMenu");
    var close = document.getElementById("filterCloseMenu");
    if(!close?.classList.contains("hidden")){
        menu?.classList.add('hidden');
    }
}
  return (
    <>
            {/* Start Breadcrumbs */}
                <div className='container py-4 flex justify-between '>
                            <div className='flex gap-3 items-center'>
                                      <Link href="/" className='text-primary text-base'>
                                              <i className='fas fa-home'></i>
                                      </Link>
                                    <div className='flex gap-3 items-center mt-1'>
                                    <span className='text-sm text-gray-500'>
                                              <i className='fas fa-chevron-right '></i>
                                      </span>
                                      <p className='text-gray-500  font-medium  '>
                                          Shop
                                      </p>
                                    </div>
                            </div>
                </div>
            {/* End Breadcrumbs */}

            {/* Start Wrapper */}

                <div className='container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative'>

                       

          {/* Start Sidebar  */}

                  <button className='bg-primary text-white w-full px-3 py-2 rounded hover:bg-transparent hover:border border-primary transition hover:text-primary block lg:hidden' onClick={handleFilter}>Filter</button>
                  <div className='col-span-1 bg-gray-100 px-4 pt-4 pb-6 shadow-sm rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full  lg:block hidden' id="filters">
                    <div className='divide-gray-300 divide-y space-y-5 realtive '>

                      {/* Start category filter */}
                        <div className='relative '>
                            <div className='lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer'>

                            </div>
                            <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Filter By Categories</h3>
                            <div className='space-y-2 '>
                                  {/* Start Single Category */}
                                    <div className="flex items-center">
                                        <input type="checkbox" id="Gold" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                        <label htmlFor="Gold" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Gold</label>
                                        <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                    </div>
                                  {/*End  Single Category */}
                                  {/* Start Single Category */}
                                    <div className="flex items-center">
                                        <input type="checkbox" id="Silver" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                        <label htmlFor="Silver" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Silver</label>
                                        <div className='ml-auto text-gray-600 text-sm'>(45)</div>
                                    </div>
                                  {/*End  Single Category */}
                                  {/* Start Single Category */}
                                  <div className="flex items-center">
                                        <input type="checkbox" id="Coins" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                        <label htmlFor="Coins" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Coins</label>
                                        <div className='ml-auto text-gray-600 text-sm'>(25)</div>
                                    </div>
                                    
                                  {/*End  Single Category */}
                                  {/* Start Single Category */}
                                    <div className="flex items-center">
                                        <input type="checkbox" id="Trends" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                        <label htmlFor="Trends" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Trends</label>
                                        <div className='ml-auto text-gray-600 text-sm'>(65)</div>
                                    </div>
                                  {/*End  Single Category */}
                            </div>
                        </div>
                      {/* End category filter */}

                      {/* Start Second Category Filter */}

                        <div className='pt-4'>
 {/* <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Categories</h3> */}
                            <div className='space-y-2 '>
                                  {/* Start Single Category */}
                                    <div className="flex items-center">
                                        <input type="checkbox" id="Sculpture" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                        <label htmlFor="Sculpture" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Sculpture</label>
                                        <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                    </div>
                                  {/*End  Single Category */}
                                  {/* Start Single Category */}
                                    <div className="flex items-center">
                                        <input type="checkbox" id="HomeDecors" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                        <label htmlFor="HomeDecors" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>HomeDecors</label>
                                        <div className='ml-auto text-gray-600 text-sm'>(45)</div>
                                    </div>
                                  {/*End  Single Category */}
                                  {/* Start Single Category */}
                                  <div className="flex items-center">
                                        <input type="checkbox" id="Paintings" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                        <label htmlFor="Paintings" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Paintings</label>
                                        <div className='ml-auto text-gray-600 text-sm'>(25)</div>
                                    </div>
                                  {/*End  Single Category */}
                                  {/* Start Single Category */}
                                    <div className="flex items-center">
                                        <input type="checkbox" id="Trendy Silver" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                        <label htmlFor="Trendy Silver" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Trendy Silver</label>
                                        <div className='ml-auto text-gray-600 text-sm'>(65)</div>
                                    </div>
                                  {/*End  Single Category */}
                            </div>
                        </div>

                      {/* End Second Category Filter */}

                      {/* Start Price Filter */}

                          <div className='pt-4'>
                          <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Filter By Price</h3>
                          <div className='mt-4 flex items-center'>
                              <input type="text" className='w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded transition ' placeholder='Min' />
                              <span className='mx-3 text-gray-500'>-</span>
                              <input type="text" className='w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded transition ' placeholder='Max' />
                          </div>
                          </div>


                      {/* End Price Filter */}

                    {/* Start Size Filter */}

                        <div className="pt-4 hidden">
                        <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Filter By Size</h3>
                          <div className="flex items-center gap-2">

                                {/* Start Single Size */}
                                <div className='size-selector '>
                                  <input type="radio" name="size" className='hidden' id="size-s" />
                                  <label htmlFor="size-s" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >S</label>
                                </div>
                                {/* End Single Size */}
                                {/* Start Single Size */}
                                <div className='size-selector '>
                                  <input type="radio" name="size" className='hidden' id="size-m" />
                                  <label htmlFor="size-m" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >M</label>
                                </div>
                                {/* End Single Size */}
                                {/* Start Single Size */}
                                <div className='size-selector '>
                                  <input type="radio" name="size" className='hidden' id="size-L" />
                                  <label htmlFor="size-L" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >L</label>
                                </div>
                                {/* End Single Size */}
                                {/* Start Single Size */}
                                <div className='size-selector '>
                                  <input type="radio" name="size" className='hidden' id="size-xL" />
                                  <label htmlFor="size-xL" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >XL</label>
                                </div>
                                {/* End Single Size */}
                                                                {/* Start Single Size */}
                                                                <div className='size-selector '>
                                  <input type="radio" name="size" className='hidden' id="size-xs" />
                                  <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >XS</label>
                                </div>
                                {/* End Single Size */}
                          </div>
                        </div>


                    {/* End Size Filter */}

          {/* Start Colour Filter */}

              <div className='pt-4'>
              <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Filter By Colors</h3>
              <div className='flex items-center gap-2'>
                  <div className="color-selector">
                      {/* Start Single Colur Filter */}
                        <input type="radio" name="color" className='hidden ' id="color-red" checked />
                        <label htmlFor="color-red" style={{backgroundColor:"#FFD700"}} className="text-xs bodrer border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
                      {/* End Single Colour FIlter */}
                  </div>
                  <div className="color-selector">
                      {/* Start Single Colur Filter */}
                        <input type="radio" name="color" className='hidden ' id="color-blue" checked />
                        <label htmlFor="color-blue" style={{backgroundColor:"blue"}} className="text-xs bodrer border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
                      {/* End Single Colour FIlter */}
                  </div>
                  <div className="color-selector">
                      {/* Start Single Colur Filter */}
                        <input type="radio" name="color" className='hidden ' id="color-blueviolet" checked />
                        <label htmlFor="color-blueviolet" style={{backgroundColor:"blueviolet"}} className="text-xs bodrer border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
                      {/* End Single Colour FIlter */}
                  </div>

              </div>
              </div>

          {/* End Colour Filter */}

                    </div>
                  </div>

          {/* End Sidebar */}

          {/* Start Product */}


          <div className='col-span-3 '>
            {/* Start Sorting */}

            <div className='mb-4 flex items-center'>
                <select className='w-44 text-sm text-gray-600 px-4 py-3 border border-gray-300 shadow-sm rounded
                focus:ring-primary focus:border-primary'>
                      <option value="">Default Sorting</option>
                      <option value="">Low - High</option>
                      <option value="">High - Low</option>
                      <option value="">Latest Product</option>
                </select>
                <div className="flex gap-2 ml-auto">
                    <div className='border border-primary w-10 h-9 shadow-sm flex items-center justify-center text-white bg-primary rounded cursor-pointer'>
                        <i className='fas fa-th'></i>
                    </div>
                    <div className='border border-gray-300 shadow-sm w-10 h-9 flex items-center justify-center text-gray-600  rounded cursor-pointer'>
                        <i className='fas fa-list'></i>
                    </div>
                    </div>
            </div>
            {/* End Sorting */}


            {/* Start Product Wrapper */}

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
                <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
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

              <Link href="/ProductDetails" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
               {/* Start single Product */}
               <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd3} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
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

              <Link href="/ProductDetails" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
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

                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
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

              <Link href="/ProductDetails" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
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

                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
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

              <Link href="/ProductDetails" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
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

                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
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

              <Link href="/ProductDetails" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
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

                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="/ProductDetails" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
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

              <Link href="/ProductDetails" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
                </div>




            {/*End  Product Wrapper */}

          </div>




          {/* End Product */}

                </div>

            {/* End Wrapper */}








             {/* Start Mobile Filter Menu */}
             <div className="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 
                shadow hidden   " id="filterMenu" >
                                    <div className='absolute left-0 top-0 w-full h-full z-50 bg-white shadow max-h-screen overflow-y-auto flex-grow'>
                                            <div className='text-gray-200 font-bold font-poppins hover:text-primary text-lg absolute right-3 top-4 cursor-pointer' id="filterCloseMenu" onClick={filterCloseMenu}>
                                                    <i className='fas fa-times'></i>
                                            </div>
                                            <h3 className='text-xl font-semibold text-white font-poppins mb-2 pl-4 pt-4 pb-4 bg-primary'>Filters</h3>
                                            <div className='p-5 divide-gray-300 divide-y space-y-5 realtive '>

{/* Start category filter */}
  <div className='relative '>
      <div className='lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer'>

      </div>
      <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Filter By Categories</h3>
      <div className='space-y-2 '>
            {/* Start Single Category */}
              <div className="flex items-center">
                  <input type="checkbox" id="Gold" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                  <label htmlFor="Gold" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Gold</label>
                  <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
            {/*End  Single Category */}
            {/* Start Single Category */}
              <div className="flex items-center">
                  <input type="checkbox" id="Silver" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                  <label htmlFor="Silver" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Silver</label>
                  <div className='ml-auto text-gray-600 text-sm'>(45)</div>
              </div>
            {/*End  Single Category */}
            {/* Start Single Category */}
            <div className="flex items-center">
                  <input type="checkbox" id="Coins" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                  <label htmlFor="Coins" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Coins</label>
                  <div className='ml-auto text-gray-600 text-sm'>(25)</div>
              </div>
              
            {/*End  Single Category */}
            {/* Start Single Category */}
              <div className="flex items-center">
                  <input type="checkbox" id="Trends" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                  <label htmlFor="Trends" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Trends</label>
                  <div className='ml-auto text-gray-600 text-sm'>(65)</div>
              </div>
            {/*End  Single Category */}
      </div>
  </div>
{/* End category filter */}

{/* Start Second Category Filter */}

  <div className='pt-4'>
{/* <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Categories</h3> */}
      <div className='space-y-2 '>
            {/* Start Single Category */}
              <div className="flex items-center">
                  <input type="checkbox" id="Sculpture" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                  <label htmlFor="Sculpture" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Sculpture</label>
                  <div className='ml-auto text-gray-600 text-sm'>(15)</div>
              </div>
            {/*End  Single Category */}
            {/* Start Single Category */}
              <div className="flex items-center">
                  <input type="checkbox" id="HomeDecors" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                  <label htmlFor="HomeDecors" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>HomeDecors</label>
                  <div className='ml-auto text-gray-600 text-sm'>(45)</div>
              </div>
            {/*End  Single Category */}
            {/* Start Single Category */}
            <div className="flex items-center">
                  <input type="checkbox" id="Paintings" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                  <label htmlFor="Paintings" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Paintings</label>
                  <div className='ml-auto text-gray-600 text-sm'>(25)</div>
              </div>
            {/*End  Single Category */}
            {/* Start Single Category */}
              <div className="flex items-center">
                  <input type="checkbox" id="Trendy Silver" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                  <label htmlFor="Trendy Silver" className='text-gray-600 font-roboto ml-3 cursor-pointer tracking-wide'>Trendy Silver</label>
                  <div className='ml-auto text-gray-600 text-sm'>(65)</div>
              </div>
            {/*End  Single Category */}

      </div>
  </div>

{/* End Second Category Filter */}

{/* Start Price Filter */}

    <div className='pt-4'>
    <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Filter By Price</h3>
    <div className='mt-4 flex items-center'>
        <input type="text" className='w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded transition ' placeholder='Min' />
        <span className='mx-3 text-gray-500'>-</span>
        <input type="text" className='w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded transition ' placeholder='Max' />
    </div>
    </div>


{/* End Price Filter */}

{/* Start Size Filter */}

  <div className="pt-4 hidden">
  <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Filter By Size</h3>
    <div className="flex items-center gap-2">

          {/* Start Single Size */}
          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-s" />
            <label htmlFor="size-s" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >S</label>
          </div>
          {/* End Single Size */}
          {/* Start Single Size */}
          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-m" />
            <label htmlFor="size-m" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >M</label>
          </div>
          {/* End Single Size */}
          {/* Start Single Size */}
          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-L" />
            <label htmlFor="size-L" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >L</label>
          </div>
          {/* End Single Size */}
          {/* Start Single Size */}
          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-xL" />
            <label htmlFor="size-xL" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >XL</label>
          </div>
          {/* End Single Size */}
                                          {/* Start Single Size */}
                                          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-xs" />
            <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >XS</label>
          </div>
          {/* End Single Size */}
    </div>
  </div>


{/* End Size Filter */}

{/* Start Colour Filter */}

<div className='pt-4'>
<h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'>Filter By Colors</h3>
<div className='flex items-center gap-2'>
<div className="color-selector">
{/* Start Single Colur Filter */}
  <input type="radio" name="color" className='hidden ' id="color-red" checked />
  <label htmlFor="color-red" style={{backgroundColor:"#FFD700"}} className="text-xs bodrer border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
{/* End Single Colour FIlter */}
</div>
<div className="color-selector">
{/* Start Single Colur Filter */}
  <input type="radio" name="color" className='hidden ' id="color-blue" checked />
  <label htmlFor="color-blue" style={{backgroundColor:"blue"}} className="text-xs bodrer border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
{/* End Single Colour FIlter */}
</div>
<div className="color-selector">
{/* Start Single Colur Filter */}
  <input type="radio" name="color" className='hidden ' id="color-blueviolet" checked />
  <label htmlFor="color-blueviolet" style={{backgroundColor:"blueviolet"}} className="text-xs bodrer border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
{/* End Single Colour FIlter */}
</div>

</div>
</div>


{/* End Colour Filter */}

</div>
                      

                                    </div>
                </div>
                {/* End Mobile Filter Menu*/}
    </>
  )
}

export default Shop