"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

const Category: React.FC = () => {
  const categories = [
    {
      title: "Electric Guitars",
      imageUrl:
        "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGd1aXRhciUyMGVsZWN0cmljfGVufDB8fDB8fHww",
      link: "/category/nature-1",
    },
    {
      title: "Keyboards",
      imageUrl:
        "https://images.unsplash.com/photo-1672492897710-14b2de3b4089?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2V5Ym9hcmRzfGVufDB8fDB8fHww",
      link: "/category/nature-2",
    },
    {
      title: "Acoustic Guitars",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1693169973609-342539dea9dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3VpdGFyfGVufDB8MHwwfHx8MA%3D%3D",
      link: "/category/nature-3",
    },
    {
      title: "Recording",
      imageUrl:
        "https://images.unsplash.com/photo-1563330232-57114bb0823c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY29yZGluZyUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D",
      link: "/category/nature-4",
    },
    {
      title: "Amps",
      imageUrl:
        "https://images.unsplash.com/photo-1510104183447-b598400bb62c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/category/nature-5",
    },
    {
      title: "Effects",
      imageUrl:
        "https://images.unsplash.com/photo-1687586370612-2cc016d3b318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyJTIwZWZmZWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      link: "/category/nature-6",
    },
    {
      title: "Drums",
      imageUrl:
        "https://images.unsplash.com/photo-1457523054379-8d03ab9fc2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRydW1zfGVufDB8fDB8fHww",
      link: "/category/nature-7",
    },
    {
      title: "Basses",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1669374470059-f7c87c1ae070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhc3N8ZW58MHx8MHx8fDA%3D",
      link: "/category/nature-7",
    },
    {
      title: "Accessories",
      imageUrl:
        "https://images.unsplash.com/photo-1672830597614-86e4094059b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyJTIwYWNjZXNzb3JpZXN8ZW58MHwwfDB8fHww",
      link: "/category/nature-7",
    },
    {
      title: "Live Sound",
      imageUrl:
        "https://images.unsplash.com/photo-1457689146074-bd667e343a9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmUlMjBzb3VuZHxlbnwwfDB8MHx8fDA%3D",
      link: "/category/nature-7",
    },
    {
      title: "Used",
      imageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGd1aXRhcnxlbnwwfDB8MHx8fDA%3D",
      link: "/category/nature-7",
    },
  ];

  return (
    <>
      <div className="w-full max-w-6xl mx-auto my-28 overflow-hidden">
        <Swiper
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="w-1/5">
              <Link
                href={category.link}
                className="block relative w-full h-full"
              >
                <Image
                  width={400}
                  height={400}
                  src={category.imageUrl}
                  alt={category.title}
                  className="rounded-md "
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                  {category.title}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Category;
