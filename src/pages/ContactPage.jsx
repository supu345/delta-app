import React from "react";
import { PiBuildingOffice } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { RiPhoneLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";
const ContactPage = () => {
  return (
    <div>
      <div
        className="relative bg-fixed h-[300px] md:h-[500px]  bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6358788/pexels-photo-6358788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* <div className="relative flex flex-col items-center ">
          <p className="text-center text-white text-7xl bg-green-400 p-7  font-bold">
            About
          </p>
        </div> */}

        <p className="absolute -bottom-4 left-[150px] md:left-[550px] text-white text-3xl bg-green-400/90 px-4 py-2 rounded">
          Contact Us
        </p>
      </div>
      <div className="mt-9">
        <div className="w-full px-15 py-8 mt-[100px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.464171484602!2d90.34286707533641!3d23.76647987865942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08318495821%3A0x7343a1a49666d2c1!2sThe%20New%20Delta%20Apparels%20Limited!5e0!3m2!1sen!2sbd!4v1746172732681!5m2!1sen!2sbd"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Form Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-10 px-4">
        {/* left Section */}
        <div className="bg-green-100 rounded-2xl w-full md:w-1/2 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 mb-6">
              <label className="uppercase text-sm">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex-1 mb-6">
              <label className="uppercase text-sm">Your Email Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 mb-6">
              <label className="uppercase text-sm">Your Phone Number</label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex-1 mb-6">
              <label className="uppercase text-sm">Location</label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Select location"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="uppercase text-sm">Comments / Questions</label>
            <textarea
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your description ..."
              rows="4"
            />
          </div>
          <button
            type="button"
            className="w-full md:w-[200px] font-bold bg-green-500 text-white rounded-full px-5 py-3 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit Message
          </button>
        </div>

        {/* Right Section */}

        <div className="w-full md:w-1/2">
          <div className="py-6 px-7">
            <p className="mb-1">Contact Us</p>
            <div className="w-20 h-1 bg-green-600 rounded"></div>{" "}
            <p className="text-4xl font-semibold mt-4">Get In Touch</p>
            <p className="mt-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Fusce
              vulputate sodales hendrerit. Nam ultrices euismod porta.
              Suspendisse sit amet dignissim.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-row gap-4 items-center ml-7">
              <PiBuildingOffice className="text-7xl bg-green-400 p-4 text-white" />

              <div>
                <p className="text-xl font-bold">Address</p>
                <p className="text-sm">
                  Delta Tower, <br />
                  Plot # 6, 8 & 10, Road # 1/A, <br />
                  Turag Housing, Mohammadpur
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center ml-7">
              <LuPhoneCall className="text-7xl bg-green-400 p-5 text-white" />
              <div>
                <p className="text-xl font-bold">Call Us</p>
                <p className="text-sm">01911264165</p>
              </div>
            </div>
          </div>
          <div className="flex  flex-row gap-2 mt-9 mr-[50px]">
            <div className="flex flex-row gap-4 items-center ml-7">
              <TfiEmail className="text-7xl bg-green-400 p-5 text-white" />

              <div>
                <p className="text-xl font-bold ">Email</p>
                <p className="text-sm">hera@thenewdelta.com</p>
              </div>
            </div>

            {/* <div className="flex flex-row gap-4 items-center ml-7">
              <PiBuildingOffice className="text-7xl bg-emerald-600 p-4 text-white" />

              <div>
                <p className="text-xl font-bold">Call Us</p>
                <p className="text-sm">123456789</p>
              </div>
            </div> */}
          </div>
          {/*  Our Social Media */}
          <div className="border border-gray-200 mt-8 ml-8"> </div>
          <div className=" mt-8 ml-8">
            <p className="text-2xl font-bold"> Our Social Media</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center lg:justify-start  md:ml-6  py-9">
            <FaFacebookF className="bg-blue-800 text-white rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
            <SlSocialYoutube className="bg-red-400 text-white rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
            <FaTwitter className="bg-blue-400 text-white rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
            <SlSocialInstagram className="bg-red-600 text-white rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
            <TiSocialPinterestCircular className="bg-red-200 text-white rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-red-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
