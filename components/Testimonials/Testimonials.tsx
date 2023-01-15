import Link from "next/link";
import React from "react";
import TestimonialSlider from "../Sliders/TestimonialSlider";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    return (
        <section id="testimonial">
            <div className="container pt-[120px]">
                <h5 className="text-white/50">Testimonials</h5>
                <div className="flex items-center justify-between">
                    <h3 className="text-white"> What Do They Say About Us? </h3>
                </div>

                <div className="py-10">
                    <TestimonialSlider>
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <Testimonial key={item}></Testimonial>
                        ))}
                    </TestimonialSlider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
