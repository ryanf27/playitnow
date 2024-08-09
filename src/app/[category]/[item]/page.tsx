"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { products } from "@/data/product";
import { Product } from "@/types";

import { CiHeart } from "react-icons/ci";

const ItemPage = () => {
  const pathname = usePathname();
  const id = pathname?.split("/").pop();
  const product: Product | undefined = products.find(
    (product) => product.id === Number(id)
  );

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row bg-white px-4 rounded-lg shadow-lg justify-around">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 max-h-[80%]"
          >
            {product.collectImg?.map((img: string, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={product.name}
                  layout="responsive"
                  width={264}
                  height={264}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={2}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper max-h-[12%] "
          >
            {product.collectImg?.map((img: string, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`${product.name} Thumbnail`}
                  width={60}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full lg:w-1/3 lg:pl-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <div className="text-2xl tracking-wide text-gray-800 mb-4">
              ${product.price.toFixed(2)}
            </div>
            <div className="text-gray-700 mb-4">{product.description}</div>
          </div>

          <div className="flex items-center mb-4">
            <button className=" hover:text-red-500 px-2 py-3 text-3xl  mr-4 align-middle">
              <CiHeart />
            </button>
            <button
              className="bg-[#611122] text-white py-2 px-4 rounded hover:bg-[#8b2b3d] transition duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <div className="ml-4 flex items-center">
              <select
                className="border rounded py-2 px-3"
                aria-label="quantity selector"
                defaultValue="1"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div className="flex items-center my-2">
            <div className="flex items-center mr-2 py-1 px-2 bg-[#2d2d2d] text-white">
              <p className="text-xs font-bold">Top-Seller</p>
            </div>
            <div
              aria-label="Rated 4.5 out of 5 stars"
              className="flex items-center"
            >
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  viewBox="64 64 896 896"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
              ))}
              <svg
                viewBox="64 64 896 896"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <span className="mx-2">(14)</span>
              <span>|</span>
              <span className="mx-2">Q&A</span>
              <span>|</span>
              <span className="mx-2">Item #: 1500000002229</span>
            </div>
          </div>

          <div className="my-2 flex">
            <div className="flex items-center my-4">
              <div className="flex items-center mr-2 py-1 px-2 bg-[#2d2d2d] text-white">
                <p className="text-xs font-bold">Free Delivery</p>
              </div>
            </div>
            <div className="flex items-center my-4">
              <div className="flex items-center mr-2 py-1 px-2 bg-[#2d2d2d] text-white">
                <p className="text-xs font-bold">Free Warranty</p>
              </div>
            </div>
            <div className="flex items-center my-4">
              <div className="flex items-center mr-2 py-1 px-2 bg-[#2d2d2d] text-white">
                <p className="text-xs font-bold">45 Day Returns</p>
              </div>
            </div>
          </div>

          <div className="my-6">
            <div className="text-base font-bold">Protect your gear</div>
            <div className="text-sm font-light mb-2">
              Cover drops, spills or cracks with Pro Coverage
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" /> 60 MONTH Pro Coverage{" "}
              <span className="ml-auto">$319.99</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" /> 36-MONTH Pro Coverage{" "}
              <span className="ml-auto">$199.99</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" /> 24-MONTH Pro Coverage{" "}
              <span className="ml-auto">$149.99</span>
            </div>
          </div>

          <div className="my-6">
            <div className="text-xs font-bold mb-4">Need Help?</div>
            <div className="flex items-center mb-4">
              <div className="rounded-full w-16 h-16 overflow-hidden">
                <Image
                  src="https://static.guitarcenter.com/static/gc/selects/2023/d-dept/guitars-help-icon.jpg"
                  alt="help avatar icon"
                  width={64}
                  height={64}
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold mb-1">
                  Save on orders $199+ and get advice on guitars
                </p>
                <div className="flex flex-wrap mb-4">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-gray-700 bg-gray-200 rounded">
                    Beginners
                  </span>
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-gray-700 bg-gray-200 rounded">
                    Set up
                  </span>
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-gray-700 bg-gray-200 rounded">
                    Effects
                  </span>
                </div>
                <div className="flex">
                  <a
                    href="tel:855-697-0864"
                    className="text-sm font-bold text-primaryColor hover:underline mr-4"
                  >
                    855-697-0864
                  </a>
                  <button className="text-sm font-bold text-primaryColor hover:underline">
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6">
            <a
              href="/ESP/Solid-Body-Electric-Guitars.gc"
              className="block text-sm no-underline cursor-pointer hover:underline text-primaryColor font-bold"
            >
              See All ESP Solid Body Electric Guitars
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
