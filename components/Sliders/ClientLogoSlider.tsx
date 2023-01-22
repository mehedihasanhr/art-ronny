import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const bp = {
    320: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
};

const ClientLogoSlider = ({ children, breakpoints }: { children: React.ReactNode[]; breakpoints: any }) => {
    const slides = React.Children.toArray(children);
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay: 0,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            }}
            breakpoints={breakpoints || bp}
            speed={5000}
            modules={[Autoplay]}
            className="w-full portfolio-slider"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="w-full">{slide}</div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ClientLogoSlider;
