"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slide: React.FC = () => {
  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto my-20 overflow-hidden rounded-3xl ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <Image src="/2.svg" alt="Slide 2" width={1200} height={400} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image src="/3.svg" alt="Slide 3" width={1200} height={400} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image src="/4.svg" alt="Slide 4" width={1200} height={400} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image src="/5.svg" alt="Slide 5" width={1200} height={400} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image src="/6.svg" alt="Slide 6" width={1200} height={400} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slide;
