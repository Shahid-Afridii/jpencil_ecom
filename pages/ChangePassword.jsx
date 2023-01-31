import React from "react";
import Image from "next/image";
import Link from "next/link";
// import user from "../public/images/user.jpeg";
const ChangePassword = () => {
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
            <p className="text-gray-500  font-medium uppercase  ">My Account</p>
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
                src=""
                className="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600">Hello..</p>
              <h4 className="text-gray-800 font-poppins capitalize font-semibold">
                Shahid Afridi...!
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
                className="hover:text-primary transition capitalize block  text-primary"
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
                href="/Wishlist"
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

        {/* Start Manage Address */}
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 bg-gray-100 mt-6 lg:mt-0">
          <form method="" action="">
            <h3 className="text-lg font-medium capitalize mb-4">
              Change Password
            </h3>
            <div className="space-y-4 max-w-lg ">
              <div className="">
                {/*Start Single Input */}
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block mt-3">
                    Current Password
                  </label>
                  <div className="relative">
                    <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                      <i className="far fa-eye-slash"></i>
                    </span>
                    <input
                      type="password"
                      className="input-box"
                      placeholder="Enter Current Password"
                    />
                  </div>
                </div>
                {/*End Single Input */}
                {/*Start Single Input */}
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block mt-3">
                    New Password
                  </label>
                  <div className="relative">
                    <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                      <i className="far fa-eye-slash"></i>
                    </span>
                    <input
                      type="password"
                      className="input-box"
                      placeholder="Enter New Password"
                    />
                  </div>
                </div>
                {/*End Single Input */}
                {/*Start Single Input */}
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block mt-3">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                      <i className="far fa-eye-slash"></i>
                    </span>
                    <input
                      type="password"
                      className="input-box"
                      placeholder="Enter Confirm Password"
                    />
                  </div>
                </div>
                {/*End Single Input */}
              </div>

              <div className="mt-6 ">
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 text-center text-white bg-primary border hover:font-semibold border-primary rounded
                                                            hover:bg-transparent hover:text-primary transition uppercase font-poppins font-medium  "
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* End Manage Address */}
      </div>
    </>
  );
};

export default ChangePassword;
