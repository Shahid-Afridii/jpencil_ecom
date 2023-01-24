import React from 'react'
import Link from "next/link";
const SignIn = () => {
  return (
    <>
                {/* Start Login Form Wrapper */}
                <div className='container py-16 '>
                            <div className="max-w-lg mx-auto px-6 py-7 rounded overflow-hidden shadow">
                                <h2 className='text-2xl uppercase font-medium mb-1'>Login</h2>
                                <p className='text-gray-600 mb-6 text-sm'>Login if you are a returning customer</p>

                                <form action="">
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="" className='text-gray-600 mb-2 block'>Email Address <span className='text-primary'>*</span></label>
                                            <input type="email"  className='input-box' placeholder='example@mail.com' required/>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='text-gray-600 mb-2 block'>Password <span className='text-primary'>*</span></label>
                                            <input type="password"  className='input-box' placeholder='Type Password' required/>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                                <div className='flex items-center'>
                                                        <input type="checkbox"  id="agreement" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>
                                                        <label htmlFor="agreement" className='text-gray-600 ml-3 cursor-pointer'>Remember Me</label>
                                                </div>

                                                <Link href="#" className="text-primary text-sm lg:text-base ">Forgot Password?</Link>
                                    </div>

                                        <div className="mt-4">
                                            <button type="submit" className='block w-full  text-center py-2 text-white bg-primary font-sm border-2 border-primary rounded
                                            hover:bg-transparent hover:text-primary transition uppercase font-poppins shadow-sm'>Login</button>
                                        </div>

                                        {/* Start Login With social */}

                                                <div className="mt-6 flex justify-center relative hidden">
                                                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                                                    <div className='text-gray-600 uppercase px-3 bg-white relative z-10'>Or login with</div>
                                                </div>

                                                <div className='mt-4 flex gap-4 hidden'>
                                                            <Link href="#" className='block w-1/2 py-2 text-center text-white bg-blue-700 rounded uppercase
                                                            font-poppins font-medium text-sm hover:bg-transparent hover:border-2 hover:border-blue-700 hover:text-blue-600 hover:font-semibold'>
                                                                        facebook
                                                            </Link>
                                                            <Link href="#" className='block w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase
                                                            font-poppins font-medium text-sm hover:bg-transparent hover:border-2 hover:border-red-600 hover:text-red-600 hover:font-semibold'>
                                                                        google
                                                            </Link>
                                                </div>

                                                <p className='mt-4 text-gray-600 text-center'>
                                                        Don't have an account? <Link href="/Register " className='text-primary text-sm lg:text-base'>Register Now</Link>
                                                </p>

                                        {/*End Login With social */}

                                </form>
                                 </div>
                </div>
                {/* End Login Form Wrapper */}
    </>
  )
}

export default SignIn