import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Products = () => {
  return (
    <div className="px-6 py-9">
      <div className="pl-[10px] mt-7">
        <p className="mb-3">Our Products</p>
        <div className=" border-green-700 border-2  w-[105px] "></div>
        <p className="py-5 w-full md:w-1/2">
          Explore premium knit and woven apparels crafted with quality fabrics,
          offering unmatched style, comfort, and durability for every occasion.
        </p>
      </div>
      {/*knit*/}
      <div>
        <p className="text-6xl font-bold px-1 mb-8">Knit Product</p>
      </div>
      <div>
        <div className=" ">
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
                slidesPerView: 1, // 1 slide for small devices
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2, // 2 slides for medium devices
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, // 3 slides for large devices
                spaceBetween: 30,
              },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="h-[500px] bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
                <img
                  src="https://images.pexels.com/photos/13381986/pexels-photo-13381986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image1"
                  className="object-cover h-[500px] w-full"
                />
              </div>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="h-[500px] bg-green-500 flex items-center justify-center text-white text-xl font-bold">
                <img
                  src="https://images.pexels.com/photos/30014667/pexels-photo-30014667/free-photo-of-close-up-of-colorful-crochet-vest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image2"
                  className="object-cover h-[500px] w-full"
                />
              </div>
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide>
              <div className="h-[500px] bg-red-500 flex items-center justify-center text-white text-xl font-bold">
                <img
                  src="https://images.pexels.com/photos/8386641/pexels-photo-8386641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image3"
                  className="object-cover h-[500px] w-full"
                />
              </div>
            </SwiperSlide>
            {/* Slide 4 */}
            <SwiperSlide>
              <div className="h-[500px] bg-yellow-500 flex items-center justify-center text-white text-xl font-bold">
                <img
                  src="https://images.pexels.com/photos/6995898/pexels-photo-6995898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image4"
                  className="object-cover h-[500px] w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>{" "}
      </div>
      {/*Woven*/}
      <div>
        <p className="text-7xl font-bold px-1 py-15">Woven Product</p>
      </div>

      <div>
        {" "}
        <div className=" ">
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
                slidesPerView: 1, // 1 slide for small devices
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2, // 2 slides for medium devices
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, // 3 slides for large devices
                spaceBetween: 30,
              },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="h-[500px] bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
                <img
                  src="https://images.pexels.com/photos/13623433/pexels-photo-13623433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image1"
                  className="object-cover h-[500px] w-[500px]"
                />
              </div>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="h-[500px] bg-green-500 flex items-center justify-center text-white text-xl font-bold">
                <img
                  src="https://images.pexels.com/photos/7219494/pexels-photo-7219494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image2"
                  className="object-cover h-[500px] w-full"
                />
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="h-[500px] bg-red-500 flex items-center justify-center text-white text-xl font-bold">
                <img
                  src="https://images.pexels.com/photos/14581401/pexels-photo-14581401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image3"
                  className="object-cover h-[500px] w-full"
                />
              </div>
            </SwiperSlide>
            {/* Slide 4 */}
            <SwiperSlide>
              <div className="h-[500px] bg-yellow-500 flex items-center justify-center text-white text-xl font-bold">
                <img
                  src="https://images.pexels.com/photos/19230342/pexels-photo-19230342/free-photo-of-red-blazer-on-a-mannequin-in-a-shop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image3"
                  className="object-cover h-[500px] w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Products;
