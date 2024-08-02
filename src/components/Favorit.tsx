"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const gibsonProducts = [
  {
    title: "Gibson Les Paul Standard '50s P-90 Electric Guitar Gold Top",
    price: "2,599.00",
    imageUrl:
      "https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Standard-50s-P-90-Electric-Guitar-Gold-Top/L54576000001000-00-180x180.jpg",
    link: "/Gibson/Les-Paul-Standard-50s-P-90-Electric-Guitar-Gold-Top-1500000274115.gc",
  },
  {
    title: "Gibson J-45 Standard Acoustic-Electric Guitar Vintage Sunburst",
    price: "2,999.00",
    imageUrl:
      "https://media.guitarcenter.com/is/image/MMGS7/J-45-Standard-Acoustic-Electric-Guitar-Vintage-Sunburst/L28131000001000-00-180x180.jpg",
    link: "/Gibson/J-45-Standard-Acoustic-Electric-Guitar-Vintage-Sunburst-1500000224348.gc",
  },
  {
    title:
      "Gibson Custom Murphy Lab 1959 Les Paul Standard Reissue Ultra Light Aged Electric Guitar Southern Fade",
    price: "7,199.00",
    imageUrl:
      "https://media.guitarcenter.com/is/image/MMGS7/Murphy-Lab-1959-Les-Paul-Standard-Reissue-Ultra-Light-Aged-Electric-Guitar-Southern-Fade/L80267000002000-00-180x180.jpg",
    link: "/Gibson-Custom/Murphy-Lab-1959-Les-Paul-Standard-Reissue-Ultra-Light-Aged-Electric-Guitar-Southern-Fade-1500000338294.gc",
  },
  {
    title: "Gibson Non-Reverse Thunderbird Bass Guitar Sparkling Burgundy",
    price: "2,399.00",
    imageUrl:
      "https://media.guitarcenter.com/is/image/MMGS7/Non-Reverse-Thunderbird-Bass-Guitar-Sparkling-Burgundy/L83980000003000-00-180x180.jpg",
    link: "/Gibson/Non-Reverse-Thunderbird-Bass-Sparkling-Burgundy-1500000347743.gc",
  },
  {
    title: "Gibson Falcon 20 1x12 Tube Guitar Combo Amp Cream Bronco",
    price: "1,799.00",
    imageUrl:
      "https://media.guitarcenter.com/is/image/MMGS7/Falcon-20-1x12-Tube-Guitar-Combo-Amp-Cream-Bronco/M03971000001000-00-180x180.jpg",
    link: "/Gibson/Falcon-20-1x12-Tube-Guitar-Combo-Amp-Cream-Bronco-1500000404697.gc",
  },
];

const FavoritCarousel: React.FC = () => {
  return (
    <section id="scrollingCarousel2" className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white text-2xl">Gibson: Collector Favorites</h3>
          <div>
            <Link
              href="/"
              className="text-yellow-500 hover:underline flex items-center"
            >
              View All
            </Link>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {gibsonProducts.map((product, index) => (
            <SwiperSlide key={index} className="p-2">
              <div className="bg-gray-800 rounded-lg p-4 shadow-md flex flex-col justify-between">
                <div className="mb-4">
                  <div className="mb-4">
                    <Link href={product.link} legacyBehavior>
                      <Image
                        className="rounded-md mx-auto"
                        src={product.imageUrl}
                        alt={product.title}
                        width={180}
                        height={180}
                      />
                    </Link>
                  </div>
                  <div className="mb-4 text-center">
                    <Link href={product.link} className="text-gray-100 ">
                      {product.title}
                    </Link>
                  </div>
                  <div className="text-yellow-400 text-lg font-semibold text-center mb-4">
                    <strong>Now:</strong> <span>${product.price}</span>
                  </div>
                </div>
                <div className="text-center mb-2">
                  <Link
                    href={product.link}
                    className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                    aria-label={`Shop Now for ${product.title}`}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FavoritCarousel;
