import React from "react";
import Service from "./Service";

const Services = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [serviceIsExt, setServiceIsExt] = React.useState(false);


    React.useEffect(() => {
        if (window.innerWidth > 768) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }

        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <section id="section">
            <div className="container pt-[120px]">
                <div className="flex flex-wrap gap-y-2 items-center justify-between mb-8">
                    <h1 className="text-xl md:text-4xl md:w-72">Services we can help you.</h1>
                    <p className="md:max-w-[300px] text-sm md:text-base md:text-right">
                        There are many variations of passages of Lorem Ipsum available
                    </p>
                </div>

                <div className={`relative overflow-hidden ${isMobile && !serviceIsExt ? 'max-h-[800px]' : 'max-h-fit'}`}>
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

                    {/* shadow effect */}

                    { isMobile && !serviceIsExt && (
                        <div className="absolute bottom-0 left-0 w-full z-10 h-28 bg-gradient-to-t from-[#000B1C] to-transparent" />
                    )}
                </div>
                { isMobile && !serviceIsExt && (
                <div className="flex items-center justify-center mt-10">
                    <button
                        type="button"
                        onClick={() => setServiceIsExt(!serviceIsExt)}
                        className="flex items-center py-1 px-4 rounded-full gap-x-2.5 border border-white/10 text-white/70 hover:text-indigo-500 hover:border-indigo-500 transition-colors duration-300"
                    >
                        {serviceIsExt ? "Show Less" : "Show More"}
                        <i className="fi fi-rr-mouse -mb-2" />
                    </button>
                </div>
                )}
            </div>
        </section>
    );
};

export default Services;
