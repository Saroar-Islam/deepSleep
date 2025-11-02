import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css";
import TestimonialsCard from "./TestimonialsCard";
import { testimonialsData } from "../data/Database";

export default function Testimonials() {
    return (
        <section className="py-20 px-5 bgCustom-1">
            <h2 className="text-4xl font-bold mb-20 font-playfair text-center">What Users Say</h2>

            <div className="px-4 sm:px-10 md:px-20 lg:px-30 xl:px-40 tracking-normal leading-6">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                    className="custom-swiper"
                >
                    {testimonialsData.map((testimonials, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialsCard {...testimonials} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
