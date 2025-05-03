import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <div className="py-9 ">
      {" "}
      {/*Our Process */}
      <div>
        <div className="text-center mt-9">
          <div>
            <p className="mb-3  text-2xl">Our Team</p>
            <div className="mx-auto w-28 h-1 bg-green-600 rounded"></div>{" "}
            {/* Underline */}
            <p className="text-3xl font-bold text-gray-700 mt-7">
              Work With Industry Experts
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1  md:grid-cols-3 gap-[80px] px-[48px] mt-12">
          {/*1*/}
          <div className="relative h-[400px] group">
            <img
              src="https://images.pexels.com/photos/6766377/pexels-photo-6766377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image1"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">John Doe</p>
              <p className="text-white mt-2">Account Manager</p>
              <div className="flex mt-4 space-x-4">
                <a
                  href="#"
                  className="text-white text-xl p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-white text-xl p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-white text-xl p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          {/*2 */}
          <div className="relative h-[400px] group">
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image1"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">John Doe</p>
              <p className="text-white mt-2">Account Manager</p>
              <div className="flex mt-4 space-x-4">
                <a
                  href="#"
                  className="text-white text-xl p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-white text-xl p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-white text-xl p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          {/*3 */}

          <div className="relative h-[400px] group">
            <img
              src="https://images.pexels.com/photos/7144178/pexels-photo-7144178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image1"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">John Doe</p>
              <p className="text-white mt-2">Account Manager</p>
              <div className="flex mt-4 space-x-4">
                <a
                  href="#"
                  className="text-white text-xl p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-white text-xl p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-white text-xl p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
