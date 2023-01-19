import React from 'react'
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/flogo.jpeg";
import payment from "../public/images/p3.png";
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
{/* Start Footer */}
<footer className='bg-secondary pt-5 pb-12 border-t border-gray-100'>
        <div className="container">
            {/* Start section 1 */}
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className='space-y-8 xl:col-span-1'>
                        <Image src={logo} alt="logo" className='w-2/3' />
                        <p className='text-gray-300 text-base font-poppins'>Start a business and design your ecommerce pattern  you want - All in one Place </p>
                        <div className="flex space-x-5 mt-3">
              <Link
                href=""
                className="w-8 h-8 rounded flex items-center 
              justify-center border border-gray-300 text-base text-gray-300 font-semibold hover:bg-blue-400 hover:text-white  
          "
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 rounded flex items-center 
              justify-center border border-gray-300 text-base text-gray-300 font-semibold hover:bg-blue-400 hover:text-white  
          "
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 rounded flex items-center 
              justify-center border border-gray-300 text-base text-gray-300 font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:font-bold 
          "
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 rounded flex items-center 
              justify-center border border-gray-300 text-base text-gray-300 font-semibold hover:bg-red-500 hover:text-white  
          "
              >
                <i className="fab fa-pinterest-p"></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 rounded flex items-center 
              justify-center border border-gray-300 text-base text-gray-300 font-semibold hover:bg-blue-500 hover:text-white  
          "
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
                        </div>
                        {/* End section 1 */}

        {/* Start Footer link */}
                            <div className='mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2'>
                                            <div className='md:grid md:grid-cols-2 md:gap-8'>
                                                    <div>
                                                        <h3 className='text-sm font-semibold text-gray-400 tracking-wide font-poppins uppercase '>Solutions</h3>
                                                        <div className='mt-4 space-y-4'>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Ecommerce</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>SEO</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Marketing</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Analytics</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Insights</Link>
                                                        </div>
                                                    </div>
                                                    <div className='mt-12 md:mt-0'>
                                                        <h3 className='text-sm font-semibold text-gray-400 tracking-wide font-poppins uppercase '>Support</h3>
                                                        <div className='mt-4 space-y-4'>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Pricing</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Documentation</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Guides</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Api status</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Configurations</Link>
                                                        </div>
                                                    </div>
                                                   
                                            </div>
                                            <div className='md:grid md:grid-cols-2 md:gap-8'>
                                                    <div>
                                                        <h3 className='text-sm font-semibold text-gray-400 tracking-wide font-poppins uppercase '>Company</h3>
                                                        <div className='mt-4 space-y-4'>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>About</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Blogs</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Jobs</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Products</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Contact</Link>
                                                        </div>
                                                    </div>
                                                    <div className='mt-12 md:mt-0'>
                                                        <h3 className='text-sm font-semibold text-gray-400 tracking-wide font-poppins uppercase '>legal</h3>
                                                        <div className='mt-4 space-y-4'>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Claim</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Privacy</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Policy</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Terms</Link>
    <Link href="#" className='text-base text-gray-300 font-poppins hover:text-gray-100 block'>Cancellation</Link>
                                                        </div>
                                                    </div>
                                                   
                                            </div>
                                            
                            </div>

        {/* End Footer link */}

                </div>
        </div>
</footer>
{/* End Footer */}

{/* Start Copyright */}
    <div className='bg-pink-500 py-4'>
                <div className='container flex items-center justify-between'>
                                <p className='text-white font-semibold font-poppins'>
                                ⓒ JPencil Pvt Ltd {currentYear}
                                </p>
                                <div className='w-4/12'>
                                <Image src={payment} alt="data" className='' />
                                </div>
                </div>
    </div>  
{/* End Copyright */}
    </>
  )
}

export default Footer