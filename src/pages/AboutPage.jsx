import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import CountUp from "react-countup";
import { MdSettingsPhone } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import Team from "../components/Team";

const AboutPage = () => {
  return (
    <div>
      <div
        className="relative bg-fixed h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/31842963/pexels-photo-31842963/free-photo-of-colorful-assortment-of-pants-on-hangers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* <div className="relative flex flex-col items-center ">
          <p className="text-center text-white text-7xl bg-green-400 p-7  font-bold">
            About
          </p>
        </div> */}

        <p className="absolute -bottom-4 md:left-[550px] text-white text-3xl bg-green-400/90 px-4 py-2 rounded">
          About Us
        </p>
      </div>
      {/*About Us */}
      {/* Left side */}
      <div className="flex flex-col md:flex-row gap-12 mt-[50px] px-7 py-9">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 h-auto">
          {/* Larger background image */}
          <img
            src="https://images.pexels.com/photos/4621896/pexels-photo-4621896.jpeg"
            alt="photo"
            className="w-full md:w-[500px] h-[350px] md:h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* Smaller image positioned over the larger one */}
          <img
            src="https://images.pexels.com/photos/4621910/pexels-photo-4621910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            className="absolute w-[200px] md:w-[350px] h-[300px] md:h-[450px] object-cover top-12 md:top-15 left-10 md:left-70 border-[10px] md:border-[20px] border-white shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 pl-0 md:pl-[80px]">
          <p className="mb-3 text-center md:text-left">About Apparel</p>
          <div className="border-green-700 border-2 w-[80px] md:w-[105px] mx-auto md:mx-0"></div>
          <p className="text-xl md:text-4xl font-semibold mt-6 md:mt-9 text-gray-700 text-center md:text-left">
            We Provide The Best Apparel Industry Since 2005
          </p>
          <p className="text-md md:text-lg text-gray-700 mt-5 md:mt-7 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-9">
            {/* Left card */}
            <div className="w-full md:w-1/2 bg-emerald-900 text-center">
              <LiaCertificateSolid className="mx-auto text-emerald-200 mt-9 text-4xl md:text-6xl" />
              <div className="mt-6">
                <p className="text-3xl md:text-5xl text-teal-50 font-bold">
                  <CountUp
                    start={0}
                    end={20}
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                  <span className="text-emerald-300 text-xl md:text-2xl">
                    {" "}
                    +{" "}
                  </span>
                </p>
                <p className="text-teal-50 mt-3">Years Of Experiences</p>
              </div>
            </div>

            {/* Right card */}
            <div className="w-full md:w-1/2 mt-4 md:mt-5">
              <div>
                {[
                  "Best Quality Standards",
                  "100% Satisfaction Guarantee",
                  "Quality Control System",
                  "Commitment to Customers",
                  "Highly Professional Team",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-3 items-center mb-2"
                  >
                    <BsArrowUpRightCircleFill className="text-emerald-400" />
                    <p className="text-sm md:text-md text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center md:items-start">
            <img
              src="https://images.pexels.com/photos/6764941/pexels-photo-6764941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="w-[50px] h-[50px] md:w-17 md:h-17 rounded-full object-cover"
            />
            <div className="ml-0 md:ml-5 mt-3 md:mt-0 text-center md:text-left">
              <p className="font-bold text-sm md:text-md text-gray-700">
                John Deo
              </p>
              <p className="text-sm text-gray-600">Founder Textilery</p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-12">
              <button className="bg-emerald-500 p-3 px-6 text-amber-50 hover:bg-white hover:text-gray-800 hover:border">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Our Process */}
      <div>
        <div className="text-center">
          <div>
            <p className="mb-3  text-2xl">Our Process</p>
            <div className="mx-auto w-28 h-1 bg-green-600 rounded"></div>{" "}
            {/* Underline */}
            <p className="text-3xl font-bold text-gray-700 mt-7">
              How We Works
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1  md:grid-cols-3 gap-[80px] px-[48px] mt-12">
          <div className="">
            <img
              src="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image1"
              className="w-full h-[300px] object-cover"
            />
            <p className="text-center mt-5 text-2xl font-bold">
              Start Consultation
            </p>
            <p className="text-center mt-2  ">
              Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className=" ">
            <img
              src="https://images.pexels.com/photos/19431980/pexels-photo-19431980/free-photo-of-jacket-on-clothing-store-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image2"
              className="w-full h-[300px] object-cover"
            />
            <p className="text-center mt-5 text-2xl font-bold">
              Choose The Best Material
            </p>
            <p className="text-center mt-2  ">
              Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className=" ">
            <img
              src="https://images.pexels.com/photos/30606569/pexels-photo-30606569/free-photo-of-colorful-dresses-on-hangers-in-fashion-boutique.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image1"
              className="w-full h-[300px] object-cover"
            />
            <p className="text-center mt-5 text-2xl font-bold">
              Ready To Export
            </p>
            <p className="text-center mt-2  ">
              Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className=" ">
            <img
              src="https://images.pexels.com/photos/14534753/pexels-photo-14534753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image1"
              className="w-full h-[300px] object-cover"
            />
            <p className="text-center mt-5 text-2xl font-bold">
              Design & Approval
            </p>
            <p className="text-center mt-2  ">
              Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className=" ">
            <img
              src="https://images.pexels.com/photos/15121228/pexels-photo-15121228/free-photo-of-mannequins-wearing-a-beige-jacket-and-a-hoodie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image1"
              className="w-full h-[300px] object-cover"
            />
            <p className="text-center mt-5 text-2xl font-bold">
              Precision Manufacturing
            </p>
            <p className="text-center mt-2  ">
              Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className=" ">
            <img
              src="https://images.pexels.com/photos/14903440/pexels-photo-14903440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image1"
              className="w-full h-[300px] object-cover"
            />
            <p className="text-center mt-5 text-2xl font-bold">
              Quality Inspection
            </p>
            <p className="text-center mt-2  ">
              Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
      {/*Contact us */}
      <div
        className="relative bg-fixed h-[500px] bg-cover mt-9 bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6461144/pexels-photo-6461144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative flex flex-col items-center">
          <p className="text-center text-white text-4xl ">
            Have questions? We're here to help!
          </p>
          <p className="w-1/2 text-white mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            numquam alias voluptate natus inventore
          </p>
          <div className="mt-5 flex flex-row gap-8">
            <div className="flex flex-row gap-3 items-center">
              <MdSettingsPhone className="text-green-400 text-5xl" />
              <div className="text-white">
                <p className="text-2xl">Contact Us</p>
                <p>01911051199</p>
              </div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <SiMinutemailer className="text-green-400 text-5xl" />
              <div className="text-white">
                <p className="text-2xl">Mail Us</p>
                <p>support@domain.com</p>
              </div>
            </div>
          </div>
          <p className="mt-6 p-4 bg-green-400 px-4 text-white text-xl">
            Contact us
          </p>
        </div>

        {/* <p className="absolute bottom-4 left-4 text-white text-2xl bg-black/80 px-4 py-2 rounded">
          Home / HajjPackages
        </p> */}
      </div>

      {/*Team */}
      <Team />
    </div>
  );
};

export default AboutPage;
