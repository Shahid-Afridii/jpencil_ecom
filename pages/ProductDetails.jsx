import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useState} from 'react';
import goldPd from "../public/images/products/gold.jpeg";
import goldPd2 from "../public/images/products/gold3.jpeg";
import goldPd3 from "../public/images/products/gold4.jpeg";
import goldPd4 from "../public/images/products/gold6.jpeg";
import Pd5 from "../public/images/products/prod7.jpeg";
import Pd6 from "../public/images/products/prod8.jpeg";
import Pd7 from "../public/images/products/pd12.jpeg";
import Pd13 from "../public/images/products/pd13.jpeg";
import Pd14 from "../public/images/products/pd14.jpeg";
import Pd15 from "../public/images/products/pd15.jpeg";
import Pd8 from "../public/images/products/prd11.jpeg";
const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(Pd13);
  const [count, setCount] = useState(1);

  const handlePlus = ()=>{
    if(count>=0){

      setCount(count+1);
    }
  }
  const handleMinus = ()=>{
    if(count>1){

      setCount(count-1);
    
    }
  }


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
            <p className="text-gray-500  font-medium  ">ProductDetails</p>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* Start Product View */}
      <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6 ">
        {/*Start Product Image */}

        <div>
          <div>
            <Image  src={activeImage} id="main-img" alt="data" className="w-full " />
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-4   gap-4 mt-4 ml-0 lg:ml-20 ">
            <div>
              <Image
                src={Pd13}
                alt="data"
                onClick={()=>  setActiveImage(Pd13)}
                className={activeImage === Pd13 ?"w-full cursor-pointer border-4 border-primary single-img":false}
              />
            </div>
            <div>
              <Image onClick={()=>  setActiveImage(Pd14)} src={Pd14} alt="data"  className={activeImage === Pd14?"w-full cursor-pointer border-4 border-primary single-img":false} />
            </div>
            <div>
              <Image src={Pd15} onClick={()=>  setActiveImage(Pd15)} alt="data"  className={activeImage === Pd15?"w-full cursor-pointer border-4 border-primary single-img":false} />
            </div>
          </div>
        </div>

        {/*End Product Image */}

        {/* Start Product Content */}

        <div>
        <h2 className="uppercase md:text-3xl text-2xl font-medium mb-2">
            22 Kt Gold Haram
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
            </div>
            <div className="text-xs text-gray-500 ml-3">
                (86 Reviews)
            </div>

          </div>

          <div className="space-y-2 ">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability:</span>
              <span className="text-green-600">InStock</span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Category:</span>
              <span  className="text-gray-600">Gold</span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2">
              <span>SKU:</span>
              <span  className="text-gray-600">AKHAGSHJ34</span>
            </p>

          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-primary font-semibold text-xl">₹ 4,11,777.00</span>
            <span className="text-gray-500 text-base line-through">₹ 4,18,777.00</span>
          </div>

          <p className="mt-4 text-gray-600 text-justify ">
          The wondrous design work in this haram is testament to the glory of traditional Indian jewellery.
          A delightful blend of ethnic and contemporary, this malai will complement any look! (Without Back Chain)
          </p>

 <div className="pt-4 hidden ">
  <h3 className='text-xl text-gray-800  mb-3 uppercase font-medium'> Size</h3>
    <div className="flex items-center gap-2">

          {/* Start Single Size */}
          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-s" />
            <label htmlFor="size-s" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >S</label>
          </div>
          {/* End Single Size */}
          {/* Start Single Size */}
          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-m" />
            <label htmlFor="size-m" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >M</label>
          </div>
          {/* End Single Size */}
          {/* Start Single Size */}
          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-L" />
            <label htmlFor="size-L" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >L</label>
          </div>
          {/* End Single Size */}
          {/* Start Single Size */}
          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-xL" />
            <label htmlFor="size-xL" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >XL</label>
          </div>
          {/* End Single Size */}
                                          {/* Start Single Size */}
                                          <div className='size-selector '>
            <input type="radio" name="size" className='hidden' id="size-xs" />
            <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >XS</label>
          </div>
          {/* End Single Size */}
    </div>
  </div>

          <div className='pt-4 hidden'>
<h3 className='text-xl text-gray-800  mb-3 uppercase font-medium '> Colors</h3>
<div className='flex items-center gap-2'>
<div className="color-selector">
{/* Start Single Colur Filter */}
  <input type="radio" name="color" className='hidden ' id="color-red" checked />
  <label htmlFor="color-red" style={{backgroundColor:"#FFD700"}} className="text-xs bodrer border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
{/* End Single Colour FIlter */}
</div>
<div className="color-selector">
{/* Start Single Colur Filter */}
  <input type="radio" name="color" className='hidden ' id="color-blue" checked />
  <label htmlFor="color-blue" style={{backgroundColor:"blue"}} className="text-xs bodrer border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
{/* End Single Colour FIlter */}
</div>
<div className="color-selector">
{/* Start Single Colur Filter */}
  <input type="radio" name="color" className='hidden ' id="color-blueviolet" checked />
  <label htmlFor="color-blueviolet" style={{backgroundColor:"blueviolet"}} className="text-xs bodrer border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"></label>
{/* End Single Colour FIlter */}
</div>

</div>
</div>

{/* Start quantity */}
    <div className="mt-4">
      <h3 className="text-base text-gray-800 mb-1">Quantity</h3>
          <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={handleMinus}>-</div>
            <div className="h-8 w-10 flex items-center justify-center">{count}</div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={handlePlus}>+</div>
          </div>
    </div>
{/* End quantity */}


    {/* Start cart Button */}
    <div className="flex gap-3 border-b border-gray-200 pb-6 mt-6">
      <Link href="#" className="bg-primary border border-primary text-white px-8 py-2 font-semibold rounded uppercase 
      hover:bg-transparent hover:text-primary transition text-xs lg:text-sm flex items-center">
          <span className="mr-2"><i className="fas fa-shopping-bag"></i></span>
          Add to cart
      </Link>
      <Link href="#" className="border border-gray-600 text-gray-600 px-8 py-2 font-semibold rounded uppercase 
      hover:bg-transparent hover:text-primary transition text-sm flex items-center">
          <span className="mr-2"><i className="fas fa-heart"></i></span>
         wishlist
      </Link>

    </div>
    {/* End cart Button */}

    {/* Start Social Share */}
    <div className="flex space-x-3 mt-4">
        <Link href="#" className="text-gray-400 hover:bg-blue-600 hover:text-gray-100 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="#" className="text-gray-400 hover:bg-blue-600 hover:text-gray-100 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fab fa-twitter"></i>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-gray-100 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fab fa-instagram"></i>
        </Link>
    </div>
    {/* End Social Share */}

        </div>

        {/* End Product Content */}



      </div>
      {/* End Product View */}
{/* Start Product Details */}


          <div className="container pb-16 ">
                <h3 className="border-b border-gray-200 font-poppins text-xl font-medium mt-6 pb-3">Product Details</h3>

                <div className="lg:w-4/5 xl:w-3/5 pt-6">
                  <div className="space-y-3 text-gray-600">
                          <p className="text-justify">
                          A must have for your traditional ensembles, this gorgeous haram is crafted in 22 karat yellow gold for the North Indian Bride.
                           This haram is suitable for you to attend special occasions, such as dinner party, birthday party.
                            The haram could go with any outfit you choose. You will surely get tons of compliments on multiple occasions.
                          
                          </p>
                          <p className="text-justify">
                          Ideal Valentine, Birthday, Anniversary gift your loved ones. Women love jewellery; specially traditional jewellery adore a women.
                             They wear it on different occasion They have special importance on ring ceremony, wedding and festive time. They can also wear it on regular basics.
                          </p>
                  </div>

                <table className="table-auto border-collapse w-full text-left text-gray-600 mt-6">
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-semibold">Dispatch Days </th>
                    <td className="py-2 px-4 border border-gray-300"> 20</td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-semibold">Tax </th>
                    <td className="py-2 px-4 border border-gray-300"> ₹ 6481.67</td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-semibold">Touch </th>
                    <td className="py-2 px-4 border border-gray-300"> ₹ 96.76</td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-semibold">Width Inches</th>
                    <td className="py-2 px-4 border border-gray-300">  5 Cm</td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-semibold">Weight </th>
                    <td className="py-2 px-4 border border-gray-300">   39.16</td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-semibold">Size </th>
                    <td className="py-2 px-4 border border-gray-300">    12 Inch</td>
                  </tr>
                </table>



                </div>
          </div>

{/* End Product Details */}


        {/*Start Related Products */}

        <div className="container pb-16">
        <h2  className="uppercase text-2xl md:text-3xl font-poppins  text-gray-800 mb-6 font-semibold flex justify-center lg:justify-start items-center">Related Products</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Gold Kasumalai</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 2,14,743.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 2,25,743.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd2} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Gold Haram</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 1,71,491.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 1,79,491.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd3} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">Gold ANTIQUE  Haram</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold"> ₹ 4,61,846.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹ 4,68,846.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
          {/* Start single Product */}
            <div className="group rounded bg-white shadow overflow-hidden ">
              <div className="relative">
                <Image src={goldPd4} alt="data"  className="w-full"/>
                <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center
                 justify-center gap-2 opacity-0 group-hover:opacity-80 transition">

                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                    <i className="fas fa-search"></i>
                  </Link>
                  <Link href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center ">
                  <i className="fas fa-heart"></i>
                  </Link>
                  
                </div>
              </div>

              <div className="pt-4 pb-3 px-4 ">
                    <Link href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 font-poppins hover:text-primary transition">GOLD NAGAAS  HARAM</h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-primary text-xl font-poppins font-semibold">  ₹ 6,68,529.00</p>
                    <p className="text-gray-400 text-sm font-poppins line-through"> ₹  6,98,529.00</p>
                    </div>
                    <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                </div>  
                <div className="text-sm text-gray-500 ml-3 ">
                    (45)
                </div>
            </div>
              </div>

              <Link href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
              
             font-medium rounded-b hover:bg-transparent hover:text-primary transition ">
                Add To Cart
              </Link>

            </div>
          {/* End single Product */}
        
       
        
        
        </div>
    </div>

        {/*End Related Products */}



      {/*Start  Product details */}
      {/*End  Product details */}
    </>
  );
};

export default ProductDetails;
