import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const TestimonialSlider = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
    const childs = React.Children.toArray(children);

    if (childs.length === 0) return <></>;

    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            spaceBetween={16}
            modules={[Autoplay, Pagination]}
            className="w-full testimonial-slider"
        >
            {childs.map((child, index) => (
                <SwiperSlide key={index}>
                    {({ isActive, isPrev, isNext }: any) => (
                        <div className={`w-full h-full rounded-lg relative pb-14 lg:pb-20`}>{child}</div>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialSlider;
