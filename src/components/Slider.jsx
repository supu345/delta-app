import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      src: "https://images.pexels.com/photos/31591496/pexels-photo-31591496/free-photo-of-textile-worker-operating-sewing-machine-in-factory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Cozy Comfort: Knit Collection",
      description:
        "Wrap yourself in warmth and style with our premium knitwear, crafted for every season.",
    },
    {
      src: "https://images.pexels.com/photos/16430929/pexels-photo-16430929/free-photo-of-sewing-machines-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Effortless Elegance: Woven Styles",
      description:
        "Discover timeless sophistication with our woven apparel, designed for both work and play.",
    },
    {
      src: "https://images.pexels.com/photos/31212942/pexels-photo-31212942/free-photo-of-textile-factory-worker-operating-machinery-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Blend of Knit & Woven",
      description:
        "Experience the perfect harmony of texture and design in our exclusive knit and woven ensembles.",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{
        delay: 3000, // Time before sliding to the next slide
        disableOnInteraction: false, // Continue autoplay even after interaction
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000} // Transition speed in ms
      className="h-screen"
    >
      {slides.map(({ src, title, description }, index) => (
        <SwiperSlide key={index} className="relative h-screen">
          {/* Slide Image */}
          <img
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* Overlay for text */}
          <div className="absolute inset-0 mt-[300px] bg-opacity-40 flex flex-col text-white px-4 ml-[20px]">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 ">{title}</h2>
            <p className="text-lg md:text-xl w-1/2">{description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
