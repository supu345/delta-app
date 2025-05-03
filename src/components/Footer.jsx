import React from "react";
import Logo from "../assets/delta1-logo.png";
import AppStore from "../assets/app-store.png";
import GooglePlay from "../assets/google-play.png";
import Payment from "../assets/payment.png";
import { HiOutlineMapPin } from "react-icons/hi2";
import { RiPhoneLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowUp, FaFacebookF, FaTwitter } from "react-icons/fa";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { motion } from "framer-motion";
import { SlideUp } from "../../src/utiliy/animation";
const Footer = () => {
  const scrollTop = () => {
    const scrollStep = -window.scrollY / 50;
    const delay = 10;

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, delay);
  };
  return (
    <motion.footer
      variants={SlideUp(0.4)}
      initial="initial"
      whileInView="animate"
    >
      <div className="bg-black px-4 py-[60px] text-gray-400 ">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4 sm:text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <img src={Logo} alt="RB-Motors" className="h-[80px] w-[80px]" />
              <p className="text-2xl font-bold text-green-400">
                The New Delta Apparels Ltd
              </p>
            </div>
            <p className="text-slate-300 mt-4">
              Welcome to our store, where we pride ourselves on providing
              exceptional products and unparalleled customer service with style
              and innovation.
            </p>
            <div className="flex gap-3 mt-6 justify-center lg:justify-start">
              <img src={AppStore} alt="AppStore" className="h-8 w-24" />
              <img src={GooglePlay} alt="GooglePlay" className="h-8 w-24" />
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:w-1/4 sm:text-center  lg:text-left">
            <p className="text-xl font-bold mb-4 sm:text-center">Quick Links</p>
            <ul className="sm:text-center">
              <li className="py-1">About Us</li>
              <li className="py-1">Redeem Voucher</li>
              <li className="py-1">Contact Us</li>
              <li className="py-1">Latest News</li>
              <li className="py-1">Shipping</li>
              <li className="py-1">Payment</li>
            </ul>
          </div>

          {/* Your Account Section */}
          <div className="lg:w-1/4  sm:text-center lg:text-left">
            <p className="text-xl font-bold mb-4 sm:text-center">
              Your Account
            </p>
            <ul className="sm:text-center">
              <li className="py-1">Product Support</li>
              <li className="py-1">Checkout</li>
              <li className="py-1">License Policy</li>
              <li className="py-1">Affiliate</li>
              <li className="py-1">Locality</li>
              <li className="py-1">Order Tracking</li>
            </ul>
          </div>

          {/* About Information Section */}
          <div className="lg:w-1/4 sm:text-center lg:text-left">
            <p className="text-xl font-bold mb-4 sm:text-center">
              About Information
            </p>
            <div>
              <div className="flex md:flex-row md:items-center sm:flex-col sm:items-center lg:items-start gap-2">
                <HiOutlineMapPin className="mt-1" />
                <p>Delta Tower Plot-6, 8 & 10, Road-1/A,</p>
              </div>

              <div className="flex md:flex-row md:items-center sm:flex-col sm:items-center lg:items-start gap-2 pt-4">
                <HiOutlineMapPin className="mt-1" />
                <p>Turag Housing, Mohammadpur, Dhaka-1207</p>
              </div>
              <div className="flex md:flex-row md:items-center sm:flex-col sm:items-center lg:items-start gap-2 pt-4">
                <RiPhoneLine className="mt-1" />
                <p>Call: (+880) 01911264165</p>
              </div>
              <div className="flex md:flex-row md:items-center sm:flex-col sm:items-center lg:items-start gap-2 pt-4">
                <MdOutlineMailOutline className="mt-1" />
                <p>Email: hera@thenewdelta.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8"></div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-8 gap-4">
          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <FaFacebookF className="bg-gray-200 text-black rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
            <FaTwitter className="bg-gray-200 text-black rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
            <SlSocialYoutube className="bg-gray-200 text-black rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
            <SlSocialInstagram className="bg-gray-200 text-black rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
            <TiSocialPinterestCircular className="bg-gray-200 text-black rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
          </div>

          {/* Copyright Text */}
          <p className="text-center">© The New Delta Apparels Ltd</p>

          {/* Payment Image */}
          <img src={Payment} alt="Payment methods" className="h-8 w-auto" />
        </div>
        <div
          onClick={scrollTop}
          id="scroll"
          className="fixed bottom-4 right-4 cursor-pointer"
        >
          <button className="bg-slate-300 p-3 rounded-md shadow-md">
            <span>
              <FaArrowUp className="text-black" />
            </span>
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
