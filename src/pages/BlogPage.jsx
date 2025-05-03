import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmail, MdWatchLater } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const BlogPage = () => {
  return (
    <div>
      <div
        className="relative bg-fixed h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2014/11/28/11/04/textile-548716_1280.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <p className="absolute -bottom-4 left-[150px] md:left-[550px] text-white text-3xl bg-green-400/90 px-4 py-2 rounded">
          Our Blog
        </p>
      </div>
      {/*blog */}
      <div className="flex flex-col  md:flex-row gap-9 mt-[100px] md:px-[100px] px-6">
        <div className=" md:w-[600px]">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/05/31/13/16/fabric-791711_1280.jpg"
              alt="image"
              className="w-[600px] h-[350px]"
            />
            <div>
              <p className="py-5 text-3xl font-bold">
                Can Textiles Lead The Way During The Pandemic?
              </p>
              <p>3rd May 2025</p>
              <p className="py-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                adipis amet similique ratione, officiis voluptas delectus
                pariatur maxime illum ipsa tempora nisi ducimus autem eius
                labore provident cumque repellat earum?...
              </p>

              <div className="flex flex-row w-[200px] items-center gap-4 text-white text-2xl p-2 rounded-md hover:bg-white hover:text-black hover:border bg-green-600">
                <button className="ml-3 ">Read More</button>
                <FaArrowRightLong className="mt-1" />
              </div>
            </div>
          </div>

          <div className="py-8">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/22/13/21/shop-1611902_1280.jpg"
              alt="image2"
              className="w-[600px] h-[350px]"
            />
            <div>
              <p className="py-5 text-3xl font-bold">
                Can Textiles Lead The Way During The Pandemic?
              </p>
              <p>3rd May 2025</p>
              <p className="py-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                adipis amet similique ratione, officiis voluptas delectus
                pariatur maxime illum ipsa tempora nisi ducimus autem eius
                labore provident cumque repellat earum?...
              </p>

              <div className="flex flex-row w-[200px] items-center gap-4 text-white text-2xl p-2 rounded-md hover:bg-white hover:text-black hover:border bg-green-600">
                <button className="ml-3 ">Read More</button>
                <FaArrowRightLong className="mt-1" />
              </div>
            </div>
          </div>

          <div className="py-8">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg"
              alt="image3"
              className="w-[600px] h-[350px]"
            />
            <div>
              <p className="py-5 text-3xl font-bold">
                Can Textiles Lead The Way During The Pandemic?
              </p>
              <p>3rd May 2025</p>
              <p className="py-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                adipis amet similique ratione, officiis voluptas delectus
                pariatur maxime illum ipsa tempora nisi ducimus autem eius
                labore provident cumque repellat earum?...
              </p>

              <div className="flex flex-row w-[200px] items-center gap-4 text-white text-2xl p-2 rounded-md hover:bg-white hover:text-black hover:border bg-green-600">
                <button className="ml-3 ">Read More</button>
                <FaArrowRightLong className="mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-6 w-[300px]">
          {/*title */}
          <div className="shadow-md px-8 py-6 ">
            <p className="text-xl font-bold py-4">Recent Posts</p>
            <p>Can Textiles Lead The Way During The Pandemic?</p>
            <div className="flex flex-row gap-2 items-center text-gray-500 py-1">
              <MdWatchLater />
              <p className="text-md">3rd May 2025</p>
            </div>

            <p className="mt-4">
              Can Textiles Lead The Way During The Pandemic?
            </p>
            <div className="flex flex-row gap-2 items-center text-gray-500 py-1">
              <MdWatchLater />
              <p className="text-md">3rd May 2025</p>
            </div>
            <p className="mt-4">
              Can Textiles Lead The Way During The Pandemic?
            </p>
            <div className="flex flex-row gap-2 items-center text-gray-500 py-1">
              <MdWatchLater />
              <p className="text-md">3rd May 2025</p>
            </div>
          </div>
          {/*question */}
          <div className="mt-12 relative">
            <img
              src="https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="photo"
              className="h-[300px] w-full object-cover"
            />
            <div className="absolute inset-0 flex items-start justify-start px-5  bg-black/50 ">
              <div>
                <h2 className="text-white text-2xl  mt-12">
                  Have Any Question?
                </h2>
                <p className="text-white mt-5 font-normal ">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>
                <div className="flex flex-row gap-2 items-center text-white mt-6 ">
                  <FaPhoneAlt className="text-green-400" />
                  <p>123456790</p>
                </div>

                <div className="flex flex-row gap-2 items-center text-white mt-3 ">
                  <MdEmail className="text-green-400" />
                  <p>exmple@domin.com</p>
                </div>
              </div>
            </div>
          </div>

          {/*title */}
          <div className="shadow-md px-8 py-6 ">
            <p className="text-xl font-bold py-4">Categories</p>

            <div className="flex flex-row gap-2 items-center text-gray-500 py-1">
              <FaAngleRight className="text-green-400" />
              <p className="text-md">Textiles</p>
            </div>
            <div className="flex flex-row gap-2 items-center text-gray-500 py-1">
              <FaAngleRight className="text-green-400" />
              <p className="text-md">Insight</p>
            </div>
            <div className="flex flex-row gap-2 items-center text-gray-500 py-1">
              <FaAngleRight className="text-green-400" />
              <p className="text-md"> Fashion</p>
            </div>
            <div className="flex flex-row gap-2 items-center text-gray-500 py-1">
              <FaAngleRight className="text-green-400" />
              <p className="text-md">Fabric</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
