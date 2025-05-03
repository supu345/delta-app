import React from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import Fahim from "../assets/fahim.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Md.Fahim Al-Rashid",
      rating: 5,
      image: Fahim,
      text: "Broadway Tours & Travels provides excellent service for performing Hajj and Umrah. We highly recommend them for anyone looking to undertake these sacred journeys.",
      title: "Senior RM",
    },
    {
      id: 2,
      name: "Md.Ahmed Khan",
      rating: 4,
      image:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "I completely agree! Broadway Tours & Travels ensured every aspect of our journey was seamless and spiritually fulfilling. Highly recommend them!",
    },
    {
      id: 3,
      name: "Md.Rashid Khan",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Their attention to detail and customer care are truly commendable. The arrangements for Hajj were extraordinary.",
      title: "Senior RM",
    },
    {
      id: 4,
      name: "Md.Omar Malik",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "I had an amazing experience with Broadway Tours & Travels. They made the entire Umrah trip stress-free and memorable. Kudos to the team",
    },
    {
      id: 5,
      name: "Md.Hasan",
      rating: 4,
      image:
        "https://images.pexels.com/photos/7793741/pexels-photo-7793741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Broadway Tours & Travels exceeded my expectations. From accommodations to guides, everything was perfectly organized. A trustworthy choice!",
    },
  ];

  return (
    <div
      className="px-6 py-9 relative bg-cover bg-fixed bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/20881520/pexels-photo-20881520/free-photo-of-close-up-of-a-globe.jpeg')",
      }}
    >
      <div className=" px-6 py-9 rounded-xl">
        <div className="max-w-6xl mx-auto py-10 px-5">
          <div className="relative flex flex-col items-center">
            <p className="text-center text-white text-4xl font-bold">
              Testimonials
            </p>
            <p className="text-white mb-9">
              1,450 Satisfied Clients Over The Globe
            </p>
          </div>
          <Swiper
            style={{
              "--swiper-pagination-color": "#00C400",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            className="mySwiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border h-[320px] border-gray-200 shadow-lg rounded-lg flex flex-col p-4 bg-green-700/40">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`${
                          index < item.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="py-3 text-white">{item.text}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <img
                        src={item.image}
                        alt="photo1"
                        className="h-[70px] cursor-pointer w-[70px] object-cover rounded-full transform  transition duration-300 ease-in-out hover:scale-110 !important"
                      />

                      <h3 className="font-semibold text-green-200 text-lg">
                        {item.name}
                      </h3>
                    </div>
                    <Quote className="text-green-400" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination my-10 flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
