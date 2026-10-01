"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    title: "Chittagong",
    hotels: "36 Hotels Available",
    image: "https://live.staticflickr.com/65535/50134153151_8ea81e7700_b.jpg",
  },
  {
    id: 2,
    title: "Dhaka",
    hotels: "43 Hotels Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlbn7zoWrof5zo_ccs2mZiOF0KNkIs6-I5Az0TXY5vekp7gxAoV17318&s=10",
  },
  {
    id: 3,
    title: "Sreemangal",
    hotels: "6 Hotels Available",
    image:
      "https://greenbelt.com.bd/wp-content/uploads/2025/09/%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%80%E0%A6%AE%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%B2-%E0%A6%9F%E0%A7%8D%E0%A6%AF%E0%A7%81%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%87%E0%A6%9C-Sreemangal-Tour-Package-9.webp",
  },
  {
    id: 4,
    title: "Gazipur",
    hotels: "12 Hotels Available",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Cox's Bazar",
    hotels: "52 Hotels Available",
    image:
      "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?q=80&w=1632&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Sylhet",
    hotels: "24 Hotels Available",
    image:
      "https://www.visit-bangladesh.net/wp-content/uploads/2026/03/gallery-img_2.jpg",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ExploreSection() {
  return (
    <section className="mx-auto max-w-7xl overflow-hidden px-4 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={headerVariants}
        className="mb-8 max-w-3xl"
      >
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 md:text-4xl">
          Explore Bangladesh
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-[#172536]">
          Prepare to experience Bangladesh&apos;s rich culture and explore the
          majestic beauty of Cox&apos;s Bazar, Sylhet, Bandarban, Sajek Valley,
          Rangamati, and more. Plan your trip now!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative"
      >
        <Link href={""}>
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="w-full pb-4"
          >
            {destinations.map((item) => (
              <SwiperSlide key={item.id} className="py-2">
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl sm:h-90 lg:h-95"
                >
                  <motion.img
                    src={item.image}
                    alt={`${item.title}, Bangladesh`}
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className="h-full w-full select-none object-cover"
                  />

                  {/* Tailwind v4 class. Use bg-gradient-to-t for Tailwind v3. */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

                  <motion.div
                    className="absolute bottom-5 left-5 right-5 text-white"
                    initial={{ opacity: 0.9, y: 0 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-bold tracking-wide drop-shadow-sm">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-xs font-normal text-slate-200 opacity-90">
                      {item.hotels}
                    </p>
                  </motion.div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>
        <div className="custom-swiper-pagination mt-6 flex items-center justify-center gap-2" />
      </motion.div>
    </section>
  );
}
