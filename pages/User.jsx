import React from 'react'
import Image from "next/image"; 
import Link from "next/link";
import user from "../public/images/user.jpeg"
const User = () => {
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
                                      <p className='text-gray-500  font-medium uppercase  '>
                                          My Account
                                      </p>
                                    </div>
                            </div>
                </div>
            {/* End Breadcrumbs */}

            {/*Start Account Wrapper  */}

                    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
                                {/* Start Sidebar  */}
                                <div className="col-span-3">
                                    {/* Start User Profile */}
                                    <div className='px-4 py-3 shadow flex bg-gray-100 items-center gap-4'>
                                        <div className="flex-shrink-0">
                                            <Image src={user} className="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"/>
                                        </div>
                                        <div>
                                            <p className='text-gray-600'>Hello..</p>
                                            <h4 className='text-gray-800 font-poppins capitalize font-semibold'>Shahid Afridi</h4>
                                        </div>
                                    </div>
                                    {/* End User Profile */}
                                </div>
                                {/* End Sidebar  */}
                    </div>

            {/*End Account Wrapper  */}
    </>
  )
}

export default User
