import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import icon1 from "../public/images/icons/ring.gif"
import icon2 from "../public/images/icons/jewelry.gif"
import icon3 from "../public/images/icons/sculpture.gif"
import icon4 from "../public/images/icons/balloon.gif"
import icon6 from "../public/images/icons/jewelry.gif"
import icon5 from "../public/images/icons/save-money.gif"
import icon7 from "../public/images/icons/2023.gif"
const Navbar = () => {
  return (
    <>
      {/* Navbar Starts */}

      <nav className=" bg-secondary hidden lg:block">
            <div className="container ">
                <div className="flex">
                    {/* Start All Categories */}
                    <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                        <span className="text-white ">
                            <i className="fas fa-bars"></i>
                        </span>
                        <span className="capitalize ml-2 text-white  font-poppins  ">
                        all categories
                        </span>

                <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 
                group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed ">
                                        {/* Start Single Category */}
                                        <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon6} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Gold</span>
                                        </Link>
                                        <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon1} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Silver </span>
                                        </Link>
                                        <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon7} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Trends </span>
                                        </Link>
                                        <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon2} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Paintings</span>
                                        </Link>
                                        <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon3} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Sculpture</span>
                                        </Link>
                                        <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon4} alt="data" className="w-7 h-7  object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Home Decors </span>
                                        </Link>
                                        <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon5} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Coin</span>
                                        </Link>
                                       
                                        {/* End Single Category */}
                </div>

                    </div>
                        {/* End All Categories */}

                    {/* Start Navmenu  */}

                    <div className="flex items-center justify-between flex-grow pl-12">
                        <div className="flex items-center space-x-6 text-base capitalize">
                            <Link href="/" className="text-gray-200 hover:text-white transition font-poppins font-semibold">
                                        Home
                            </Link>
                            <Link href="/Shop" className="text-gray-200 hover:text-white transition font-poppins font-semibold">
                                        shop
                            </Link>
                            <Link href="/" className="text-gray-200 hover:text-white transition font-poppins font-semibold">
                                        about us
                            </Link>
                            <Link href="/" className="text-gray-200 hover:text-white transition font-poppins font-semibold">
                                        contact us
                            </Link>
                        </div>
                            <Link href="/SignIn" className="text-gray-200 ml-auto hover:text-white transition font-poppins font-semibold capitalize">
                                        login/register
                            </Link>
        

                    </div>

                    {/* End Navmenu  */}

                </div>

            </div>
      </nav>
      {/* Navbar Ends */}

               


    </>
  );
};

export default Navbar;
