import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const PortfoliosSlider = dynamic(() => import("../Sliders/PortfoliosSlider"), { ssr: false });
const Hero = () => {
    return (
        <div className="container md:py-[60px] flex flex-col gap-y-14 lg:gap-y-32">
            {/* text section */}
            <div className="flex items-center flex-col gap-6 md:flex-row">
                {/* profile avatar */}
                <div>
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full relative">
                        <Image src="/ronny.png" alt="ronny" fill sizes="150px" />
                    </div>
                </div>

                {/* profile description */}
                <div className="flex flex-col items-center md:items-start gap-y-4 text-center md:text-left">
                    <p className="w-full max-w-[800px] text-base md:text-3xl">
                        Hello, {"I’m"} Artronny. Social media post design + Web UX/UI Designer bringing fun, flexible
                        collaboration to in-house marketing teams.
                    </p>

                    <Link
                        href="/"
                        className="py-1 px-4 border text-sm md:text-base border-green-800 w-fit rounded-full"
                    >
                        Available for freelance work →
                    </Link>
                </div>
            </div>

            {/* profile info & portfolios */}
            <div className="flex items-center flex-col lg:flex-row gap-8">
                {/* profile slug */}
                <div>
                    <div className="w-full md:w-[500px]">
                        <p className="text-base md:text-xl">
                            We create Minimal, Creative design and i hope to make awesome designs and also we create
                            UI/Ux Design.
                        </p>
                    </div>
                </div>

                {/* profile portfolios */}
                <div className="flex-1 w-full">
                    <PortfoliosSlider />
                </div>
            </div>

            {/*  experience year and gmail contact */}
            <div className="flex items-center md:justify-between flex-col md:flex-row md:mt-24">
                {/* experiences */}
                <div className="w-full flex items-center gap-6 md:gap-20">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl lg:text-6xl font-medium">06</h1>
                        <p className="text-sm md:text-base">
                            Years <br />
                            Experience
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl lg:text-6xl font-medium">400+</h1>
                        <p className="text-sm md:text-base">
                            Project Completed <br />
                            in 27+ Countries
                        </p>
                    </div>
                </div>

                {/* gmail contact */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="text-left md:text-right">
                        <span className="block text-sm text-white/50">GET IN TOUCH</span>
                        <a
                            href="mailto:info.artonny@gmail.com"
                            className="text-white font-medium hover:text-indigo-500"
                        >
                            info.artronny@gmail.com
                        </a>
                    </div>
                    {/*  */}
                    <div className="w-10 h-10 relative">
                        <Image src="/mail.svg" alt="gmail" fill sizes="32px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
