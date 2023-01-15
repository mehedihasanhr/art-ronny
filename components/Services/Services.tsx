import React from "react";
import Service from "./Service";

const Services = () => {
    return (
        <section id="section">
            <div className="container pt-[120px]">
                <div className="flex flex-wrap gap-y-2 items-center justify-between mb-8">
                    <h1 className="text-xl md:text-4xl md:w-72">Services we can help you.</h1>
                    <p className="md:max-w-[300px] text-sm md:text-base md:text-right">
                        There are many variations of passages of Lorem Ipsum available
                    </p>
                </div>

                <div className="grid grid-cols-12 w-full">
                    <Service
                        service1={{
                            title: "Graphice Design",
                            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                            image: "/print.svg",
                        }}
                        service2={{
                            title: "Web Development",
                            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                            image: "/layer.svg",
                        }}
                    />

                    <Service
                        service1={{
                            title: "Ui/Ux Design",
                            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                            image: "/ui.svg",
                        }}
                        service2={{
                            title: "Web Development",
                            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                            image: "/cloud.svg",
                        }}
                    />

                    <Service
                        service1={{
                            title: "Video Editing",
                            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                            image: "/vplay.svg",
                        }}
                        service2={{
                            title: "Service 1",
                            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                            image: "/cloud.svg",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
