import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";

const EcoFriendliness = () => {
  return (
    <div>
      <Testimonial />
    </div>
  );
};

export default EcoFriendliness;
