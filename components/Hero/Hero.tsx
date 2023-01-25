import { heroText } from "@/constants/heroText";
import { useHeroSliderState } from "@/hooks/useHeroSliderState";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const TypeingEffectText = dynamic(() => import("./TypingEffectText"), { ssr: false });
const PortfoliosSlider = dynamic(() => import("../Sliders/PortfoliosSlider"), { ssr: false });


const Hero = () => {
    const { heroSliders } = useHeroSliderState();
    const images = heroSliders.map((slider) => slider.image);

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
                    <p className="w-full max-w-[800px] lg:leading-[43px] text-base md:text-4xl optima">
                        {heroText.top}
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
                <div className="hidden lg:block">
                    <div className="w-full md:w-[500px]">
                        <p className="text-base md:text-2xl">
                            {heroText.bottom}
                            <span className="text-green-500">
                                <TypeingEffectText words={heroText.awesomeText} />
                            </span>
                        </p>
                    </div>
                </div>

                {/* profile portfolios */}
                <div className="w-full relative h-[120px] ">
                    <PortfoliosSlider images={images} />
                </div>
            </div>

            {/*  experience year and gmail contact */}
            <div className="flex items-center md:justify-between flex-col md:flex-row md:mt-24">
                {/* experiences */}
                <div className="w-full flex items-center gap-6 md:gap-20">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl lg:text-6xl font-medium">06</h1>
                        <p className="text-xs md:text-base">
                            Years <br />
                            Experience
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl lg:text-6xl font-medium">587+</h1>
                        <p className="text-xs md:text-base">
                            Project Completed <br />
                            in 37+ Countries
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
