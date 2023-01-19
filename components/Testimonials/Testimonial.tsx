import Image from "next/image";
import React from "react";
import Rating from "../Rating";

const Testimonial = () => {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
                <div className="flex items-center h-full">
                    <div className="flex flex-col gap-5 justify-between h-full">
                        <h5>The Way Customers Do it</h5>
                        <p className="max-w-[500px] text-sm md:text-base">
                            The seller artronny did an amazing job with a quick turnaround job. We have our favorites on
                            here with Fiverr, and based on the first job, I am very pleased. I will use him again and
                            hope to see his freelance career take off. You {"won't"} be disappointed.
                        </p>
                        <div className="flex items-center gap-2">
                            <Rating rating={4.5} />
                            <span className="text-sm font-semibold text-orange-300">(4.5)</span>
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <div>
                                <div className="relative w-12 h-12 rounded-full">
                                    <Image src="/ronny.png" alt="Ronny" fill />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h6>Adella Johnston</h6>
                                <span>Medication</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className="relative w-full max-w-[528px] h-80 md:h-[388px]">
                    <Image src="/portfolio1.png" alt="portfolio" fill />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
