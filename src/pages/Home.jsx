import React from "react";
import Slider from "../components/Slider";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import CountUp from "react-countup";
import Products from "../components/Products";
import Clients from "../components/Clients";
import EcoFriendliness from "../components/EcoFriendliness";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
const Home = () => {
  return (
    <div>
      <Slider />
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

      {/*Our service */}
      <div className="">
        <div className="relative bg-[url('https://img.freepik.com/free-vector/fashion-clothes-accessories-seamless-pattern_1284-3636.jpg?t=st=1745922180~exp=1745925780~hmac=6a225c7bf451a6b7cc53c918a19b602c3d4202988f59298a957008bcfa8e56d0&w=900')] bg-cover bg-center bg-no-repeat text-black">
          {/* Black Overlay */}
          {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
          <div className="absolute inset-0 bg-white opacity-90"></div>
          {/* Content */}
          <div className="relative  flex flex-col py-9 pt-12 px-7 ">
            {/* Logo and About Section */}
            <div className=" flex flex-col md:flex-row gap-6">
              <div className="text-start w-full md:w-1/2">
                <div className="flex flex-col gap-3 mt-7 ">
                  <p className="">Our Services</p>
                  <div className=" border-green-700 border-2  w-[105px] "></div>
                  <p className="text-4xl font-bold text-gray-700 ">
                    Delivering The Highest Quality Fabrics
                  </p>
                </div>
              </div>
              <div className="text-start w-1/2 mt-7">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet
                  <br />
                  nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
                  vel, nisi.
                </p>
                <div className="py-6">
                  <button className="bg-emerald-500 p-3 px-9 text-amber-50 hover:bg-white hover:text-gray-800 hover:border">
                    All Services
                  </button>
                </div>
              </div>
            </div>
            {/* 3 div */}
            {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative h-[300px] bg-amber-500 overflow-hidden group">
                <div className="absolute inset-0 bg-amber-900 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 flex items-center justify-center"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold transition-colors duration-500 group-hover:text-black">
                    Fabric Dying
                  </p>
                </div>
              </div>

              <div>1</div>
              <div>1</div>
            </div> */}

            <div className="flex min-h-screen items-center justify-center ">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72 bg-white">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src="https://images.pexels.com/photos/6996083/pexels-photo-6996083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">
                      Beauty
                    </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis dolore adipisci placeat.
                    </p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src="https://images.pexels.com/photos/5656671/pexels-photo-5656671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">
                      Beyond Builder
                    </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis dolore adipisci placeat.
                    </p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src="https://images.pexels.com/photos/15170519/pexels-photo-15170519/free-photo-of-close-up-of-colorful-sweaters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">
                      Shooting Star
                    </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis dolore adipisci placeat.
                    </p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why choose us */}
      <div className="flex flex-col  md:flex-row  mb-5">
        <div className="w-full md:w-1/2  relative ">
          <img
            src="https://images.pexels.com/photos/5788299/pexels-photo-5788299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="pl-[20px] mt-7">
            <p className="mb-3">Why Choose Us</p>
            <div className=" border-green-700 border-2  w-[105px] "></div>
            <p className="text-6xl font-thin mt-9 text-gray-700">
              Quality You Can Feel, Trust You Can Wear with Premium.
            </p>
          </div>
          <div className="bg-black mt-7">
            <div className="text-white px-7 py-7 ml-9">
              <p className="text-3xl font-thin mt-7">
                Premium Quality Materials
              </p>
              <p className="w-3/4 mt-5 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                tempora voluptatibus sunt saepe quod accusantium fugiat
              </p>
            </div>
            <div className="text-white px-7 py-7 ml-9">
              <p className="text-3xl font-thin mt-7">
                Premium Quality Materials
              </p>
              <p className="w-3/4 mt-5 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                tempora voluptatibus sunt saepe quod accusantium fugiat
              </p>
            </div>
            <div className="text-white px-7 py-7 ml-9">
              <p className="text-3xl font-thin mt-7">
                Premium Quality Materials
              </p>
              <p className="w-3/4 mt-5 mb-3 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                tempora voluptatibus sunt saepe quod accusantium fugiat
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Product */}
      <Products />

      <Clients />

      <EcoFriendliness />
      <Gallery />
      <ContactForm />
    </div>
  );
};

export default Home;
