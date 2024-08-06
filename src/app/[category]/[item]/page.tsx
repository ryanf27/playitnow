"use client";

import Reactm, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { products } from "@/data/product";
import { FreeMode, Thumbs } from "swiper/modules";

const ItemPage = () => {
  const product = products[0];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row bg-white p-4 rounded-lg shadow-lg justify-around">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 max-h-52"
          >
            <SwiperSlide>
              <img src="https://media.guitarcenter.com/is/image/MMGS7/LTD-James-Hetfield-Snakebyte-Electric-Guitar-Satin-Black/J30027000001000-00-264x264.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={3}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper max-h-12"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <div className="text-2xl font-bold text-gray-800 mb-4">
              ${product.price}
            </div>
            <div className="text-gray-700 mb-4">{product.description}</div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-4">
            <button
              className="bg-[#611122] text-white py-2 px-4 rounded hover:bg-[#8b2b3d] transition duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
