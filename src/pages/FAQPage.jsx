import React, { useState } from "react";
import { MdSettingsPhone } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmail, MdWatchLater } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item open
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm or yarn.",
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks like HTML.",
    },
    {
      question: "What are React hooks?",
      answer:
        "Hooks are functions that let you use React features in functional components.",
    },
    {
      question: "What is state in React?",
      answer: "State is an object that represents dynamic data in a component.",
    },
    {
      question: "What is a component?",
      answer: "A component is a reusable piece of UI in React.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <div
        className="relative bg-fixed  h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/250288/pexels-photo-250288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <p className="absolute -bottom-4 left-[150px] md:left-[550px] text-white text-3xl bg-green-400/90 px-4 py-2 rounded">
          FAQ
        </p>
      </div>
      {/*faq*/}
      <div className="max-w-5xl mx-auto mt-[100px]">
        <div className="text-center">
          <div>
            <p className="mb-3  text-2xl">Our Process</p>
            <div className="mx-auto w-28 h-1 bg-green-600 rounded"></div>{" "}
            {/* Underline */}
            <p className="text-3xl font-bold text-gray-700 mt-7">
              How We Works
            </p>
            <p className="text-lg text-gray-700 mt-4  mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
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
      {/*blog */}
      <div className="text-center">
        <div>
          <p className="mb-3  text-2xl">Our Blogs</p>
          <div className="mx-auto w-28 h-1 bg-green-600 rounded"></div>{" "}
          {/* Underline */}
          <p className="text-3xl font-bold text-gray-700 mt-7">
            Latest Blog & Articles
          </p>
          <p className="text-lg text-gray-700 mt-4  mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt
          </p>
        </div>
      </div>
      <div className="mt-9 flex flex-col  md:flex-row gap-7 px-[40px] py-8">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/05/31/13/16/fabric-791711_1280.jpg"
            alt="image"
            className="w-[600px] h-[300px]"
          />
          <div>
            <p className="py-5 text-2xl font-bold">
              Can Textiles Lead The Way During The Pandemic?
            </p>
            <p>3rd May 2025</p>
            <p className="py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              adipis amet similique ratione, officiis voluptas delectus pariatur
              maxime illum ipsa tempora nisi ducimus autem eius labore provident
              cumque repellat earum?...
            </p>

            <div className="flex flex-row w-[200px] items-center gap-4 text-white text-2xl p-2 rounded-md hover:bg-white hover:text-black hover:border bg-green-400">
              <button className="ml-3 text-xl ">Read More</button>
              <FaArrowRightLong className="mt-1" />
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="w-[600px] h-[300px]"
          />
          <div>
            <p className="py-5 text-2xl font-bold">
              Can Textiles Lead The Way During The Pandemic?
            </p>
            <p>3rd May 2025</p>
            <p className="py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              adipis amet similique ratione, officiis voluptas delectus pariatur
              maxime illum ipsa tempora nisi ducimus autem eius labore provident
              cumque repellat earum?...
            </p>

            <div className="flex flex-row w-[200px] items-center gap-4 text-white text-2xl p-2 rounded-md hover:bg-white hover:text-black hover:border bg-green-400">
              <button className="ml-3 text-xl ">Read More</button>
              <FaArrowRightLong className="mt-1" />
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/7857552/pexels-photo-7857552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="w-[600px] h-[300px]"
          />
          <div>
            <p className="py-5 text-2xl font-bold">
              Can Textiles Lead The Way During The Pandemic?
            </p>
            <p>3rd May 2025</p>
            <p className="py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              adipis amet similique ratione, officiis voluptas delectus pariatur
              maxime illum ipsa tempora nisi ducimus autem eius labore provident
              cumque repellat earum?...
            </p>

            <div className="flex flex-row w-[200px] items-center gap-4 text-white text-2xl p-2 rounded-md hover:bg-white hover:text-black hover:border bg-green-400">
              <button className="ml-3 text-xl ">Read More</button>
              <FaArrowRightLong className="mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQPage;
