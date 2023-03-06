import React from 'react'
import Image from "next/image";
import Link from "next/link";
import order from "../public/images/complete.png"
const OrderSuccess = () => {
  return (
    <>
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
              Order Success
            </p>
          </div>
        </div>
      </div>


      {/* Start Order Complete */}
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24 text-center">
            <div className="mb-8">
                <Image src={order   } className="w-16 inline-block"/>
            </div>
            <h2 className='text-gray-800 font-medium  text-3xl mb-3'>
                YOUR ORDER IS COMPLETED
            </h2>
            <p className='text-gray-600 '>
                Thank you for your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed. 
            </p>

            <div className='mt-10'>
                <Link href="/Shop" className='bg-primary border border-primary px-6 py-3 text-white font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-center'>
                        Continue Shopping
                </Link>
            </div>
      </div>
      {/* End Order Complete */}

    </>
  )
}

export default OrderSuccess