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
                                            <h4 className='text-gray-800 font-poppins capitalize font-semibold'>Shahid Afridi..!</h4>
                                        </div>
                                    </div>
                                    {/* End User Profile */}


                                    {/* Start Profile Link */}
                                      <div className='mt-6 bg-gray-100 shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600'> 
                                        {/* Start Single Link */}
                                        <div className="space-y-1 pl-8">
                                                <Link href="#" className='relative text-base font-medium capitalize hover:text-primary transition block text-primary'>
                                                  Manage Account
                                                  <span className="absolute -left-8 top-0 text-base">
                                                    <i className='far fa-address-card'></i>
                                                  </span>
                                                </Link>
                                             
                                                <Link href="/Address" className='hover:text-primary transition capitalize block'>
                                                 Manage Address
                                                </Link>
                                                <Link href="/ChangeAddress" className='hover:text-primary transition capitalize block'>
                                                  Change Password
                                                </Link>
                                        </div>
                                        {/*  End Single Link */}
                                        {/* Start Single Link */}
                                        <div className="space-y-1 pl-8 pt-4">
                                                <Link href="#" className='relative text-base font-medium capitalize hover:text-primary transition block text-primary'>
                                                 My Order History
                                                  <span className="absolute -left-8 top-0 text-base">
                                                    <i className='fas fa-gift'></i>
                                                  </span>
                                                </Link>
                                                <Link href="#" className='hover:text-primary transition capitalize block'>
                                                  My Returns
                                                </Link>
                                                <Link href="#" className='hover:text-primary transition capitalize block'>
                                               My Cancellations
                                                </Link>
                                                <Link href="#" className='hover:text-primary transition capitalize block'>
                                                  My Reviews
                                                </Link>
                                        </div>
                                        {/*  End Single Link */}
                                        {/* Start Single Link */}
                                        <div className="space-y-1 pl-8 pt-4">
                                                <Link href="#" className='relative text-base font-medium capitalize hover:text-primary transition block text-primary'>
                                               Payment Methods
                                                  <span className="absolute -left-8 top-0 text-base">
                                                    <i className='far fa-credit-card'></i>
                                                  </span>
                                                </Link>
                                                <Link href="#" className='hover:text-primary transition capitalize block'>
                                             Voucher
                                                </Link>
                                          
                                        </div>
                                        {/*  End Single Link */}
                                        {/* Start Single Link */}
                                        <div className="space-y-1 pl-8 pt-4">
                                                <Link href="/Wishlist" className='relative text-base font-medium capitalize hover:text-primary transition block text-primary'>
                                               My Wishlist
                                                  <span className="absolute -left-8 top-0 text-base">
                                                    <i className='far fa-heart'></i>
                                                  </span>
                                                </Link>
                                               
                                        </div>
                                        {/*  End Single Link */}
                                        {/* Start Single Link */}
                                        <div className="space-y-1 pl-8 pt-4">
                                                <Link href="#" className='relative text-base font-medium capitalize hover:text-primary transition block text-primary'>
                                               Logout
                                                  <span className="absolute -left-8 top-0 text-base">
                                                    <i className='fas fa-sign-out-alt'></i>
                                                  </span>
                                                </Link>
                                               
                                        </div>
                                        {/*  End Single Link */}
                                      </div>
                                    {/* End Profile Link */}
                                </div>
                                {/* End Sidebar  */}

                                {/* Start  Account content */}
                                <div className="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
                                  {/* Start Single Card  */}
                                  <div className="shadow rounded bg-gray-100 px-4 pt-6 pb-8"> 
                                  <div className="flex justify-between items-center mb-4">
                                          <h3 className='font-medium capitalize text-gray-800 text-lg'>Personal Profile</h3>
                                  <Link href="" className='text-primary font-poppins'>Edit</Link>
                                  </div>
                                  <div className='space-y-1'>
                                  <h3 className='text-gray-700 font-semibold font-poppins'>Shahid Afridi</h3>
                                  <p className='text-gray-800'>shahid@jpencil.com</p>
                                  <p className='text-gray-800'>(+91) 8056585599</p>
                                  </div>
                                  </div>
                                  {/*End Single Card  */}
                                  {/* Start Single Card  */}
                                  <div className="shadow rounded bg-gray-100 px-4 pt-6 pb-8"> 
                                  <div className="flex justify-between items-center mb-4">
                                          <h3 className='font-medium capitalize text-gray-800 text-lg'>Shipping Address</h3>
                                  <Link href="" className='text-primary font-poppins'>Edit</Link>
                                  </div>
                                  <div className='space-y-1'>
                                  {/* <h3 className='text-gray-700 font-semibold font-poppins'>Shahid Afridi</h3> */}
                                  <p className='text-gray-800'>Arunachala Towers, D.No. 6 3rd Floor, Nanjundapuram Rd, Nethaji Nagar, Ramanathapuram, Tamil Nadu 641036</p>
                                
                                  </div>
                                  </div>
                                  {/*End Single Card  */}
                                  {/* Start Single Card  */}
                                  <div className="shadow rounded bg-gray-100 px-4 pt-6 pb-8"> 
                                  <div className="flex justify-between items-center mb-4">
                                          <h3 className='font-medium capitalize text-gray-800 text-lg'>Billing Address</h3>
                                  <Link href="" className='text-primary font-poppins'>Edit</Link>
                                  </div>
                                  <div className='space-y-1'>
                                  {/* <h3 className='text-gray-700 font-semibold font-poppins'>Shahid Afridi</h3> */}
                                  <p className='text-gray-800'>Arunachala Towers, D.No. 6 3rd Floor, Nanjundapuram Rd, Nethaji Nagar, Ramanathapuram, Tamil Nadu 641036</p>
                                 
                                  </div>
                                  </div>
                                  {/*End Single Card  */}
                                </div>
                                {/* End  Account content */}
                    </div>

            {/*End Account Wrapper  */}
    </>
  )
}

export default User
