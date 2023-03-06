import React from 'react'
import Image from "next/image";
import Link from "next/link";
import prod1 from "../public/images/products/gold4.jpeg";
import prod2 from "../public/images/products/pd14.jpeg";
const Cart = () => {
  return (
    <>
      {/* Start Breadcrumbs */}
      <div className="container py-4 flex justify-between ">
        <div className="flex gap-3 items-center">
          <Link href="/" className="text-primary text-base">
            <i className="fas fa-home"></i>
          </Link>
          <div className="flex gap-3 items-center mt-1">
            <span className="text-sm text-gray-500">
              <i className="fas fa-chevron-right "></i>
            </span>
            <p className="text-gray-500  font-medium uppercase  ">
              {" "}
              Shopping Cart
            </p>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}
      {/*  Start Cart Wrapper */}
    
    <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
{/* Start Product Cart */}
            <div className='xl:col-span-9 lg:col-span-8 '>
            <div class="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex "> 
               <p class="text-gray-600 text-center" >Product </p>
               <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24 " >Quantity </p>
               <p class="text-gray-600 text-center" >Total </p> 
          </div>


                        <div className='space-y-4'>
                        {/* Start Single  Card  */}
                        <div class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap bg-gray-100 ">
            <div class="w-32 flex-shrink-0">
              <Image  className='w-full' src={prod2}/>
            </div>

            <div class="md:w-1/3 w-full ">
               <h2 class="text-gray-800 mb-3 xl:text-xl text-lg font-medium uppercase" >22 KT GOLD ANTIQUE HARAM</h2>
               <p class="text-primary font-semibold">₹ 4,61,846.00</p>
               <p class="text-gray-500">Size: L</p>
            </div>


            <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max ">
               <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"> -  </div>
               <div class="h-8 w-10 flex items-center justify-center"> 5 </div>
               <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"> +  </div>
     
          </div> 


          <div class="ml-auto md:ml-0">
               <p class="text-primary text-lg font-semibold ">₹ 4,61,846.00</p>
          </div>

          <div class="text-gray-600 hover:text-primary cursor-pointer ">
               <i class="fas fa-trash"></i>
          </div> 

       </div>
                        {/* End Single  Card  */}
                        {/* Start Single  Card  */}
                        <div class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap bg-gray-100 ">
            <div class="w-32 flex-shrink-0">
              <Image  className='w-full' src={prod1}/>
            </div>

            <div class="md:w-1/3 w-full ">
               <h2 class="text-gray-800 mb-3 xl:text-xl text-lg font-medium uppercase" >GOLD ANTIQUE HARAM</h2>
               <p class="text-primary font-semibold">₹ 4,41,846.00</p>
               <p class="text-gray-500">Size: L</p>
            </div>


            <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max ">
               <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"> -  </div>
               <div class="h-8 w-10 flex items-center justify-center"> 3 </div>
               <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"> +  </div>
     
          </div> 


          <div class="ml-auto md:ml-0">
               <p class="text-primary text-lg font-semibold ">₹ 4,41,846.00</p>
          </div>

          <div class="text-gray-600 hover:text-primary cursor-pointer ">
               <i class="fas fa-trash"></i>
          </div> 

       </div>
                        {/* End Single  Card  */}
                        </div>


            </div>

            {/* Start Order Summary */}
                        <div className='xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0'>
                            <h3 className='text-gray-800 text-lg mb-4 font-medium uppercase '>Order Summary</h3>

                            <div className='space-y-1 text-gray-600 pb-3 border-b border-gray-200'>
                                <div className='flex justify-between font-medium'>
                                        <p>Subtotal </p>
                                        <p>₹ 8,88,846.00 </p>

                                </div>
                                <div className='flex justify-between font-medium'>
                                        <p>Delivery </p>
                                        <p>Free </p>

                                </div>
                                <div className='flex justify-between font-medium'>
                                        <p>Tax </p>
                                        <p>₹ 15,000 </p>

                                </div>

                            </div>
                                    <div className='flex justify-between my-3 text-gray-800 font-semibold uppercase'>
                                            <h4>Total</h4>
                                            <h4>₹ 9,14,846.00</h4>
                                    </div>
                                    {/* Start Coupon code  */}
                                    <div className='flex mb-4 '> 
                                        <input type="text" className='pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm
                                        ' placeholder='Coupon' />
                          <button type="submit" className='bg-primary border border-primary text-white px-5 font-medium rounded-r-md 
                                        transition text-sm w-full block text-center' >Apply</button>
                                    </div>
                                    {/* End Coupon code  */}
                                    <Link href="/Checkout" className='bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm w-full block text-center'>
                                        Process to checkout
                                    </Link>
                        </div>
            {/* End Order Summary */}
{/* End Product Cart */}
    </div>


      {/*  End Cart Wrapper */}
    </>
  )
}

export default Cart