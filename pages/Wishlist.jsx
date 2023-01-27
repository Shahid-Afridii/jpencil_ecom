import React from 'react'
import Image from "next/image";
import Link from "next/link";
import prod1 from "../public/images/products/gold4.jpeg";
import prod2 from "../public/images/products/pd14.jpeg";
import user from "../public/images/user.jpeg";
const Wishlist = () => {
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
            <p className="text-gray-500  font-medium uppercase  "> Wishlist</p>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* Start Sidebar  */}
        <div className="col-span-3">
          {/* Start User Profile */}
          <div className="px-4 py-3 shadow flex bg-gray-100 items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src={user}
                className="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600">Hello..</p>
              <h4 className="text-gray-800 font-poppins capitalize font-semibold">
                Shahid Afridi..!
              </h4>
            </div>
          </div>
          {/* End User Profile */}

          {/* Start Profile Link */}
          <div className="mt-6 bg-gray-100 shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            {/* Start Single Link */}
            <div className="space-y-1 pl-8">
              <Link
                href="/User"
                className="relative text-base font-medium capitalize hover:text-primary transition block"
              >
                Manage Account
                <span className="absolute -left-8 top-0 text-base">
                  <i className="far fa-address-card"></i>
                </span>
              </Link>

              <Link
                href="/Address"
                className="hover:text-primary transition capitalize block "
              >
                Manage Address
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition capitalize block  "
              >
                Change Password
              </Link>
            </div>
            {/*  End Single Link */}
            {/* Start Single Link */}
            <div className="space-y-1 pl-8 pt-4">
              <Link
                href="#"
                className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
              >
                My Order History
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fas fa-gift"></i>
                </span>
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                My Returns
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                My Cancellations
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                My Reviews
              </Link>
            </div>
            {/*  End Single Link */}
            {/* Start Single Link */}
            <div className="space-y-1 pl-8 pt-4">
              <Link
                href="#"
                className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
              >
                Payment Methods
                <span className="absolute -left-8 top-0 text-base">
                  <i className="far fa-credit-card"></i>
                </span>
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition capitalize block"
              >
                Voucher
              </Link>
            </div>
            {/*  End Single Link */}
            {/* Start Single Link */}
            <div className="space-y-1 pl-8 pt-4">
              <Link
                href="#"
                className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
              >
                My Wishlist
                <span className="absolute -left-8 top-0 text-base">
                  <i className="far fa-heart"></i>
                </span>
              </Link>
            </div>
            {/*  End Single Link */}
            {/* Start Single Link */}
            <div className="space-y-1 pl-8 pt-4">
              <Link
                href="#"
                className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
              >
                Logout
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fas fa-sign-out-alt"></i>
                </span>
              </Link>
            </div>
            {/*  End Single Link */}
          </div>
          {/* End Profile Link */}
        </div>
        {/* End Sidebar  */}

        {/* Start Wishlist  */}
        <div className="col-span-9 mt-6 lg:mt-0 space-y-4">
                {/* Start Single Data */}
                <div className="flex flex-wrap md:flex-nowrap items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded  bg-gray-100">
                        <div className='w-24 flex-shrink-0'>
                            <Image src={prod1} className="w-full rounded object-cover" />
                        </div>
                        <div className='md:w-1/3 w-full'>
                                <h2 className='text-gray-800 mb-1 xl:text-xl text-lg font-medium uppercase'>Gold ANTIQUE  Haram</h2>
                                <p className='text-gray-600 text-sm'>Availability : <span className='text-green-600'>In Stock</span></p>
                        </div>
                        <div>
                            <p className='text-primary text-lg font-semibold'>₹ 4,61,846.00</p>
                        </div>
                        <Link href="#" className='ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary 
                        hover:bg-transparent hover:text-primary rounded transition uppercase font-poppins font-medium hover:border-2 hover:font-semibold'>Add to Cart</Link>

                        <div className='text-gray-700 hover:text-red-600 cursor-pointer'>
                                <i className='fas fa-trash'></i>
                        </div>
                </div>
                {/* End Single Data */}
                {/* Start Single Data */}
                <div className="flex flex-wrap md:flex-nowrap items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded  bg-gray-100">
                        <div className='w-24 flex-shrink-0'>
                            <Image src={prod2} className="w-full rounded object-cover" />
                        </div>
                        <div className='md:w-1/3 w-full'>
                                <h2 className='text-gray-800 mb-1 xl:text-xl text-lg font-medium uppercase'> 22 Kt Gold Haram</h2>
                                <p className='text-gray-600 text-sm'>Availability : <span className='text-red-600'>Out of Stock</span></p>
                        </div>
                        <div>
                            <p className='text-primary text-lg font-semibold'>₹4,11,777.00</p>
                        </div>
                        <Link href="#" className='ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary 
                       rounded  uppercase font-poppins font-medium h cursor-not-allowed bg-opacity-80'>Add to Cart</Link>

                        <div className='text-gray-700 hover:text-red-600 cursor-pointer'>
                                <i className='fas fa-trash'></i>
                        </div>
                </div>
                {/* End Single Data */}
        </div>
        {/* End  Wishlist */}
      </div>
    </>
  )
}

export default Wishlist