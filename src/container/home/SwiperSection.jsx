import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../../assets/pics/images_home-page-campaign_milli-instagram.png";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React from "react";

function SwiperSection() {
  return (
    <div className=" w-[90%] h-52">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" rounded-xl" src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSection;
