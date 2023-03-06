import React from "react";
import Image from "next/image";
import Link from "next/link";
const Checkout = () => {
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
            <p className="text-gray-500  font-medium uppercase  ">
              {" "}
              Checkout Page
            </p>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}
      {/*  Start Checkout Wrapper */}
      <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4 ">
       {/* <!-- ---- Checkout Form---> */}
       <div class="lg:col-span-8 border border-gray-300 px-4 py-4 rounded bg-gray-100">
          <form method="" action="" >
       <h3 class="text-lg font-medium capitalize mb-4"> Checkout </h3>

       <div class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4 ">
                 <div>
                      <label class="text-gray-600 mb-2 block">First Name <span class="text-primary">*</span>  
                      </label>
                      <input type="text" class="input-box" />
                 </div>

                 <div>
                    <label class="text-gray-600 mb-2 block">Last Name <span class="text-primary">*</span>  
                    </label>
                    <input type="text" class="input-box" />
               </div>

            </div>

 {/* <!-- ----Single Input ---> */}
 <div>
     <label class="text-gray-600 mb-2 block">Company Name  
     </label>
     <input type="text" class="input-box" />
</div>

  {/* <!-- ---- End Single Input---> */}


   {/* <!-- ----Single Input ---> */}
 <div>
     <label class="text-gray-600 mb-2 block">Country/Region <span class="text-primary">*</span>  
     </label>
     <input type="text" class="input-box" />
</div>

  {/* <!-- ---- End Single Input---> */}


   {/* <!-- ----Single Input ---> */}
 <div>
     <label class="text-gray-600 mb-2 block">Street Address  <span class="text-primary">*</span>  
     </label>
     <input type="text" class="input-box" />
</div>

  {/* <!-- ---- End Single Input---> */}


   {/* <!-- ----Single Input ---> */}
 <div>
     <label class="text-gray-600 mb-2 block">Town/City <span class="text-primary">*</span>  
     </label>
     <input type="text" class="input-box" />
</div>

  {/* <!-- ---- End Single Input---> */}


   {/* <!-- ----Single Input ---> */}
 <div>
     <label class="text-gray-600 mb-2 block">Zip Code <span class="text-primary">*</span>  
     </label>
     <input type="text" class="input-box" />
</div>

  {/* <!-- ---- End Single Input---> */}


   {/* <!-- ----Single Input ---> */}
 <div>
     <label class="text-gray-600 mb-2 block">Phone Number <span class="text-primary">*</span>  
     </label>
     <input type="text" class="input-box" />
</div>

  {/* <!-- ---- End Single Input---> */}


   {/* <!-- ----Single Input ---> */}
 <div>
     <label class="text-gray-600 mb-2 block">Email Address <span class="text-primary">*</span>  
     </label>
     <input type="email" class="input-box" />
</div>

  {/* <!-- ---- End Single Input--->  */}
       </div> 
          </form>
       </div> 
        {/* <!-- ---- End Checkout Form---> */}


 {/* <!-- ---- Order Summary ---> */}
 <div class="lg:col-span-4 border border-gray-300 px-4 py-4 rounded mt-6 lg:mt-0 bg-gray-100 ">
      <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase ">Order Summary</h4>

      <div class="space-y-2" >
           <div class=" flex justify-between">
                <div>
             <h5 class="text-gray-800 font-medium">Italia Shape Sofa</h5>
              <p class="text-sm text-gray-600">Size:M</p>
                </div>
                <p class="text-gray-600">x 3</p>
                <p class="text-gray-600 font-medium">$320</p>

           </div> 
      </div>


      <div class="flex justify-between border-b border-gray-300 mt-1">
          <h4 class="text-gray-800 font-medium my-3 uppercase">Subtotal</h4>
          <h4 class="text-gray-800 font-medium my-3 uppercase">$320</h4>
     </div>

     <div class="flex justify-between border-b border-gray-300 mt-1">
          <h4 class="text-gray-800 font-medium my-3 uppercase">Shipping</h4>
          <h4 class="text-gray-800 font-medium my-3 uppercase">Free</h4>
     </div>


     <div class="flex justify-between border-b border-gray-300 mt-1">
          <h4 class="text-gray-800 font-medium my-3 uppercase">Total</h4>
          <h4 class="text-gray-800 font-medium my-3 uppercase">$320</h4>
     </div>

     <div class="flex items-center mb-4 mt-2">
          <input type="checkbox" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3 " />
          <label for="agreement" class="text-gray-600 ml-3 cursor-pointer text-sm " > Agree to our <a href="#" class="text-primary" >terms & conditions</a> </label>

     </div>

     <Link href="/OrderSuccess" class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm w-full block text-center " >
          Place Order 
     </Link>

 </div>


  {/* <!-- ---- End Order Summary---> */}







 </div>
      {/*  End Checkout Wrapper */}
    </>
  );
};

export default Checkout;
