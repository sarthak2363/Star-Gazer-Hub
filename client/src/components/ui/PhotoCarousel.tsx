"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
];

export default function PhotoCarousel() {
  return (
    <section className="py-20 bg-black">
      <h2 className="text-center text-3xl font-bold mb-10">
        Moments from Our Stargazing Experiences
      </h2>

      <Swiper spaceBetween={20} slidesPerView={1} className="max-w-4xl mx-auto">
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt="AstroParty"
              className="rounded-2xl w-full h-80 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
