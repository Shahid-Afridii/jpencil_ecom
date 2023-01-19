import React from 'react'
import Link from "next/link";
import Image from "next/image";
import icon1 from "../public/images/icons/ring.gif"
import icon2 from "../public/images/icons/paint-palette.gif"
import icon3 from "../public/images/icons/sculpture.gif"
import icon4 from "../public/images/icons/balloon.gif"
import icon6 from "../public/images/icons/jewelry.gif"
import icon5 from "../public/images/icons/save-money.gif"
import icon7 from "../public/images/icons/2023.gif"
import icon8 from "../public/images/house.gif"
import icon9 from "../public/images/shop.gif"
import icon10 from "../public/images/info.gif"
import icon11 from "../public/images/message.gif"
import home from "../public/images/home.gif"
import cat from "../public/images/cat.gif"
const MobileMenu = () => {

    // let menuBar = document.querySelector('#menuBar');
    // let mobileMenu = document.querySelector('#mobileMenu');
    // let closeMenu = document.querySelector('#closeMenu');

    


    // menuBar?.addEventListener('click',()=>{
    //     mobileMenu?.classList.remove('hidden')
    // })
    // closeMenu?.addEventListener('click',()=>{
    //     mobileMenu?.classList.add('hidden')
    // })

    const menuClick = () => {
        var menu = document.getElementById("mobileMenu");
       
        // console.log("menuClick", menu.classList);
        if(menu?.classList.contains('hidden')){
          menu?.classList.remove('hidden')

        } 
    }
    const catClick = () => {
        var menu = document.getElementById("catMenu");
       
        // console.log("menuClick", menu.classList);
        if(menu?.classList.contains('hidden')){
          menu?.classList.remove('hidden')

        } 
    }

    const closeMenu = ()=>{
        var menu = document.getElementById("mobileMenu");
        var close = document.getElementById("closeMenu");
        if(!close?.classList.contains("hidden")){
            menu?.classList.add('hidden');
        }
    }
    const catCloseMenu = ()=>{
        var menu = document.getElementById("catMenu");
        var close = document.getElementById("catCloseMenu");
        if(!close?.classList.contains("hidden")){
            menu?.classList.add('hidden');
        }
    }

  return (
    <>
 {/* Start Mobile Menu */}
 <div className="fixed w-full border-t border-gray-200 shadow-sm bg-secondary py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40 ">
                                <Link href="javascript:void(0)" className="block text-center text-gray-200 hover:text-primary transition relative">
                                    <div className="text-2xl" >
                                        
                                            <i className="fas fa-bars" onClick={menuClick}></i>
                                         
                                            {/* <Image src={home} alt="data" className='w-10' onClick={menuClick}/> */}
                                    </div>
                                    <div className="text-xs  font-poppins  leading-3 ">
                                        Menu
                                    </div>
                                </Link>
                                <Link href="javascript:void(0)" className="block text-center text-gray-200 hover:text-primary transition relative">
                                    <div className="text-2xl" >
                                            <i className="fas fa-list-ul" onClick={catClick}></i>
                                            {/* <Image src={cat} alt="data" className='w-10' /> */}
                                    </div>
                                    <div className="text-xs font-poppins fk  leading-3 ">
                                        Categories
                                    </div>
                                </Link>
                                <Link href="javascript:void(0)" className="block text-center text-gray-200 hover:text-primary transition relative">
                                    <div className="text-2xl" >
                                            <i className="fas fa-search"></i>
                                    </div>
                                    <div className="text-xs font-poppins  leading-3 ">
                                        Search
                                    </div>
                                </Link>
                                <Link href="javascript:void(0)" className="block text-center text-gray-200 hover:text-primary transition relative">
                                    <span className='absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
                                    5
                                    </span>
                                    <div className="text-2xl" >
                                            <i className="fas fa-shopping-bag"></i>
                                    </div>
                                    <div className="text-xs font-poppins  leading-3 ">
                                        Cart
                                    </div>
                                </Link>
                </div>
                {/* End Mobile Menu */}

                {/* Start Mobile Sidebar */}
                <div className="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 
                shadow hidden " id="mobileMenu">
                                    <div className='absolute left-0 top-0 w-72 h-full z-50 bg-white shadow'>
                                            <div className='text-gray-200 font-bold font-poppins hover:text-primary text-lg absolute right-3 top-4 cursor-pointer' id="closeMenu" onClick={closeMenu}>
                                                    <i className='fas fa-times'></i>
                                            </div>
                                            <h3 className='text-xl font-semibold text-white font-poppins mb-2 pl-4 pt-4 pb-4 bg-primary'>Menu</h3>
                                            <div>
                                            <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon8} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Home</span>
                                        </Link>
                                        <Link href="/Shop" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon9} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Shop </span>
                                        </Link>
                                        <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon10} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">About Us</span>
                                        </Link>
                                        <Link href="" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                            <Image src={icon11} alt="data" className="w-7 h-7 object-contain" />
                                            <span className="ml-6 text-gray-700  text-sm font-semibold font-poppins">Contact Us</span>
                                        </Link>

                                            </div>
                                    </div>
                </div>
                {/* End Mobile Sidebar */}
                {/* Start category Sidebar */}
                <div className="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 
                shadow hidden " id="catMenu">
                                    <div className='absolute left-0 top-0 w-72 h-full z-50 bg-white shadow'>
                                            <div className='text-gray-200 font-bold font-poppins hover:text-primary text-lg absolute right-3 top-4 cursor-pointer' id="catCloseMenu" onClick={catCloseMenu}>
                                                    <i className='fas fa-times'></i>
                                            </div>
                                            <h3 className='text-xl font-semibold text-white font-poppins mb-2 pl-4 pt-4 pb-4 bg-primary'>Categories</h3>
                                            <div>
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
                                            </div>
                                    </div>
                </div>
                {/* End Category Sidebar */}
    </>
  )
}

export default MobileMenu