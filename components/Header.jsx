import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/jpencil.png";
const Header = () => {
  return (
    <>
      {/* Start Header */}
      <header className="sticky top-0 z-50 py-4 shadow-sm bg-violet-100 lg:bg-white">
        <div className="container flex items-center justify-between">
          {/* Start Logo */}
          <Link href="" className="block w-40">
            <Image src={logo} alt="data" className="full" />
          </Link>
          {/* End Logo */}

          {/* Start Search Bar */}

            <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                        <span className="absolute left-4 top-3 text-lg text-gray-400">
                                <i className="fas fa-search"></i>
                        </span>
                        <input type="text" className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary" placeholder="Search" />
                        <button type="submit" className="bg-primary border border-primary text-white px-8 
                        font-medium rounded-r-md font-poppins hover:bg-transparent hover:text-primary transition">Search</button>
            </div>
          {/* End Search Bar */}

            {/* Start Navicons */}

                <div className="space-x-4 flex items-center">
                    <Link href="#" className="block text-center text-gray-700 hover:text-primary transition relative " >
                        <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        5
                        </span>
                        <div className="text-2xl ">
                <i className="far fa-heart"></i>
                        </div>
                        <div className="text-sm leading-3 font-semibold font-poppins">
                            Wishlist
                        </div>
                    </Link>

                    <Link href="#" className="hidden lg:block text-center text-gray-700 hover:text-primary transition relative " >
                        <span className="absolute -right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        5
                        </span>
                        <div className="text-2xl ">
                <i className="fas fa-shopping-bag"></i>
                        </div>
                        <div className="text-sm leading-3 font-semibold font-poppins">
                            Cart
                        </div>
                    </Link>
                    <Link href="/User" className="text-center text-gray-700 hover:text-primary transition relative " >
                        
                        <div className="text-2xl ">
                <i className="fas fa-user"></i>
                        </div>
                        <div className="text-sm leading-3 font-semibold font-poppins">
                            Account
                        </div>
                    </Link>
                </div>

            {/* End Navicons */}

        </div>
      </header>

      {/* End Header */}
    </>
  );
};

export default Header;
