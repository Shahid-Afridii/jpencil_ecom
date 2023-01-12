import React from 'react'
import Image from "next/image"; 
import Link from "next/link";


const Shop = () => {
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
                                      <p className='text-gray-500 font-poppins font-medium  '>
                                          Shop
                                      </p>
                                    </div>
                            </div>
                </div>
            {/* End Breadcrumbs */}

            {/* Start Wrapper */}

                <div className='container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative'>

          {/* Start Sidebar  */}

                  <div className='col-span-1 bg-gray-100 px-4 pt-4 pb-6 shadow-sm rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block'>
                    <div className='divide-gray-300 divide-y space-y-5 realtive'>

                      {/* Start category filter */}
                        <div className='relative '>
                            <div className='lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer'>

                            </div>
                            <h3 className='text-xl text-gray-800 font-poppins mb-3 uppercase font-medium'>Categories</h3>
                            <div className='space-y-2 '>
                                  {/* Single Category */}
                                  {/* Single Category */}
                            </div>
                        </div>
                      {/* End category filter */}

                    </div>
                  </div>

          {/* End Sidebar */}

                </div>

            {/* End Wrapper */}
    </>
  )
}

export default Shop