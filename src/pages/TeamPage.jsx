import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const TeamPage = () => {
  return (
    <div>
      <div
        className="relative bg-fixed  h-[300px] md:h-[500px]  bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* <div className="relative flex flex-col items-center ">
          <p className="text-center text-white text-7xl bg-green-400 p-7  font-bold">
            About
          </p>
        </div> */}
        <p className="absolute -bottom-4 left-[150px] md:left-[550px] text-white text-3xl bg-green-400/90 px-4 py-2 rounded">
          Our Team
        </p>
      </div>

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

            {/*4 */}

            <div className="relative h-[400px] group">
              <img
                src="https://images.pexels.com/photos/6461198/pexels-photo-6461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            {/*5*/}

            <div className="relative h-[400px] group">
              <img
                src="https://images.pexels.com/photos/7148016/pexels-photo-7148016.jpeg?auto=compress&cs=tinysrgb&w=600"
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

            {/*6*/}

            <div className="relative h-[400px] group">
              <img
                src="https://images.pexels.com/photos/4622409/pexels-photo-4622409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
        {/*Our Project */}
        <div>
          <div className="text-center mt-9">
            <div>
              <p className="mb-3  text-2xl">Our Projects</p>
              <div className="mx-auto w-28 h-1 bg-green-600 rounded"></div>{" "}
              {/* Underline */}
              <p className="text-3xl font-bold text-gray-700 mt-7">
                Our Latest Projects
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-1  md:grid-cols-4 gap-[80px] px-[48px] mt-12">
            {/*1*/}
            <div className="relative h-[400px] group">
              <img
                src="https://images.pexels.com/photos/2096624/pexels-photo-2096624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image1"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-bold">Cotton Fabric</p>
                <p className="text-white mt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  minus?
                </p>
              </div>
            </div>
            {/*2 */}
            <div className="relative h-[400px] group">
              <img
                src="https://images.pexels.com/photos/1266139/pexels-photo-1266139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image1"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-bold">Cotton Fabric</p>
                <p className="text-white  mt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  minus?
                </p>
              </div>
            </div>
            {/*3 */}

            <div className="relative h-[400px] group">
              <img
                src="https://images.pexels.com/photos/365066/pexels-photo-365066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image1"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-bold">Cotton Fabric</p>
                <p className="text-white  mt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  minus?
                </p>
              </div>
            </div>
            {/*4 */}

            <div className="relative h-[400px] group">
              <img
                src="https://images.pexels.com/photos/3563554/pexels-photo-3563554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image1"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-bold">Cotton Fabric</p>
                <p className="text-white  mt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  minus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
