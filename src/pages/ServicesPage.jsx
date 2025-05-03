import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GiSewingMachine, GiStitchedWound } from "react-icons/gi";
import { GiSpinningWheel } from "react-icons/gi";
import { RxStitchesLogo } from "react-icons/rx";
import { PiPackageFill } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";

const ServicesPage = () => {
  return (
    <div>
      <div
        className="relative bg-fixed  h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/31842963/pexels-photo-31842963/free-photo-of-colorful-assortment-of-pants-on-hangers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <p className="absolute -bottom-4 left-[150px] md:left-[550px] text-white text-3xl bg-green-400/90 px-4 py-2 rounded">
          Services
        </p>
      </div>

      <div>
        <div>
          <div className="text-center mt-9 ">
            <div>
              <p className="mb-3  text-2xl">Our Services</p>
              <div className="mx-auto w-28 h-1 bg-green-600 rounded"></div>{" "}
              {/* Underline */}
              <p className="text-2xl font-bold text-gray-700 mt-7">
                Delivering The Highest Quality Fabrics
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-1  md:grid-cols-3 gap-[80px] mb-8 px-[48px] mt-12">
            {/*1*/}
            <div className="relative h-[300px] overflow-hidden group">
              {/* Background effect */}
              <div className="absolute inset-0 bg-green-950 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>

              {/* Content */}
              <div className="absolute inset-0 px-8 flex flex-col justify-center text-black hover:text-white z-10">
                <GiSewingMachine className="text-5xl mb-4 text-green-300" />
                <p className="text-2xl font-bold  ">Fabric Weaving</p>
                <p className="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, totam.
                </p>
                <p className="mt-3 font-semibold">Read More</p>
              </div>
            </div>
            {/*21*/}
            <div className="relative h-[300px] overflow-hidden group">
              {/* Background effect */}
              <div className="absolute inset-0 bg-green-950 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>

              {/* Content */}
              <div className="absolute inset-0 px-8 flex flex-col justify-center text-black hover:text-white z-10">
                <GiSpinningWheel className="text-5xl mb-4 text-green-300" />
                <p className="text-2xl font-bold  ">Yarn Spinning</p>
                <p className="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, totam.
                </p>
                <p className="mt-3 font-semibold">Read More</p>
              </div>
            </div>
            {/*31*/}
            <div className="relative h-[300px] overflow-hidden group">
              {/* Background effect */}
              <div className="absolute inset-0 bg-green-950 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>

              {/* Content */}
              <div className="absolute inset-0 px-8 flex flex-col justify-center text-black hover:text-white z-10">
                <RxStitchesLogo className="text-5xl mb-4 text-green-300" />
                <p className="text-2xl font-bold  "> Garment Stitching</p>
                <p className="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, totam.
                </p>
                <p className="mt-3 font-semibold">Read More</p>
              </div>
            </div>

            {/*41*/}
            <div className="relative h-[300px] overflow-hidden group">
              {/* Background effect */}
              <div className="absolute inset-0 bg-green-950 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>

              {/* Content */}
              <div className="absolute inset-0 px-8 flex flex-col justify-center text-black hover:text-white z-10">
                <GiStitchedWound className="text-5xl mb-4 text-green-300" />
                <p className="text-2xl font-bold  "> Quality Assurance</p>
                <p className="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, totam.
                </p>
                <p className="mt-3 font-semibold">Read More</p>
              </div>
            </div>

            {/*51*/}
            <div className="relative h-[300px] overflow-hidden group">
              {/* Background effect */}
              <div className="absolute inset-0 bg-green-950 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>

              {/* Content */}
              <div className="absolute inset-0 px-8 flex flex-col justify-center text-black hover:text-white z-10">
                <PiPackageFill className="text-5xl mb-4 text-green-300" />
                <p className="text-2xl font-bold  "> Packaging & Delivery</p>
                <p className="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, totam.
                </p>
                <p className="mt-3 font-semibold">Read More</p>
              </div>
            </div>

            {/*61*/}
            <div className="relative h-[300px] overflow-hidden group">
              {/* Background effect */}
              <div className="absolute inset-0 bg-green-950 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>

              {/* Content */}
              <div className="absolute inset-0 px-8 flex flex-col justify-center text-black hover:text-white z-10">
                <MdDesignServices className="text-5xl mb-4 text-green-300" />
                <p className="text-2xl font-bold  "> Custom Design Creation</p>
                <p className="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, totam.
                </p>
                <p className="mt-3 font-semibold">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-9 ">
        {" "}
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

export default ServicesPage;
