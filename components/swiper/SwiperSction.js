"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import clsx from "clsx";
import { Icon } from "@iconify/react";

export default function SwiperSection() {
  const [swiperRef, setSwiperRef] = useState(null);
  const arr = [
    "https://measomarket.com/view/figma/banner-home2.jpg",
    "https://measomarket.com/view/figma/banner-home4.jpg",
    "https://measomarket.com/view/figma/banner-home3.jpg",
    "https://measomarket.com/view/figma/banner-home5.jpg",
  ];
  const nextHandler = () => {
    swiperRef.slideNext();
  };
  const prevHandler = () => {
    swiperRef.slidePrev();
  };
  return (
    <>
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
        onSwiper={(swiper) => setSwiperRef(swiper)}
        className="Swiper"
      >
        <div
          className={clsx(
            "absolute justify-center  left-2 z-10 flex items-center bg-main-snow w-[28px] h-[28px] rounded-full top-1/2"
          )}
        >
          <button
            onClick={() => nextHandler()}
            className="bg-white  flex justify-center items-center w-full h-full rounded-full shadow-xl focus:outline-none"
          >
            <Icon
              icon="grommet-icons:next"
              color="black"
              width="14"
              height="14"
              hFlip={true}
            />
          </button>
        </div>
        {arr.map((item, index) => {
          return (
            <SwiperSlide key={index + item}>
              <img className="w-fit h-[360px]" src={item} />
            </SwiperSlide>
          );
        })}
        <div
          className={clsx(
            "absolute justify-center   top-1/2 right-2 z-10 flex items-center bg-main-snow rounded-full w-[28px] h-[28px]"
          )}
        >
          <button
            onClick={prevHandler}
            className="bg-white  flex justify-center items-center w-full h-full rounded-full shadow-xl focus:outline-none"
          >
            <Icon
              icon="grommet-icons:next"
              color="black"
              width="14"
              height="14"
            />
          </button>
        </div>
      </Swiper>
    </>
  );
}
