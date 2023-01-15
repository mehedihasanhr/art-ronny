import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const PortfoliosSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
                delay: 0,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            }}
            breakpoints={{
                320: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
            }}
            speed={3000}
            modules={[Autoplay]}
            className="w-full portfolio-slider"
        >
            {[...Array(30)].map((_, index) => (
                <SwiperSlide key={index} className="border">
                    {({ isActive, isPrev, isNext }: any) => (
                        <div className={`w-full h-32 rounded-full relative`}>
                            <img src="/portfolio.png" alt="ronny" className="w-full h-full" />
                        </div>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PortfoliosSlider;
