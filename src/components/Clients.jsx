import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Clients = () => {
  return (
    <div className="mb-9">
      <div className="px-6 text-center py-9">
        <p className="text-4xl font-bold uppercase"> Clients</p>
      </div>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1} // Default for small screens
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2, // 1 slide for small devices
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // 2 slides for medium devices
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4, // 3 slides for large devices
              spaceBetween: 30,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-[200px] bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/http://assets.designhill.com/design-blog/wp-content/uploads/2019/04/10.png"
                alt="image1"
                className="object-cover h-[200px] w-full"
              />
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="h-[200px] bg-green-500 flex items-center justify-center text-white text-xl font-bold">
              <img
                src="https://media.licdn.com/dms/image/v2/C560BAQFoQR8sX_3bFA/company-logo_200_200/company-logo_200_200/0/1676944616102/esprit_logo?e=2147483647&v=beta&t=WwbH92-CSXXzE_OlvSpXBTGmgWK2I4XvFLzg3oW3fBU"
                alt="image2"
                className="object-cover h-[200px] w-full"
              />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="h-[200px] bg-red-500 flex items-center justify-center text-white text-xl font-bold">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uVEORl_jkh30cOch-1J2LO4Um3zLB-GNPA&s"
                alt="image3"
                className="object-cover h-[200px] w-full"
              />
            </div>
          </SwiperSlide>
          {/* Slide 4 */}
          <SwiperSlide>
            <div className="h-[200px] bg-yellow-500 flex items-center justify-center text-white text-xl font-bold">
              <img
                src="https://primedia.primark.com/i/primark/We-Are-Primark-Thumbnail"
                alt="primark"
                className="object-cover h-[200px] w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[200px] bg-white flex items-center justify-center text-white text-xl font-bold">
              <img
                src="https://download.logo.wine/logo/Inditex/Inditex-Logo.wine.png"
                alt="Inditex"
                className="object-cover h-[200px] w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[200px] bg-white flex items-center justify-center text-white text-xl font-bold">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HcvDVZOoyD3_nNIqHuC9_5qAOzvnNZCQTw&s"
                alt="Next"
                className="object-cover h-[200px] w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>{" "}
    </div>
  );
};

export default Clients;
