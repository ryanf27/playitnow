"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slide: React.FC = () => {
  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto my-20 overflow-hidden rounded-3xl ">
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
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
