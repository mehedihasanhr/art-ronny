import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const PortfoliosSlider = ({ images }: { images: string[] }) => {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-slider",
                scrub: true,
            },
        });

        tl.from(".hero-slider", {
            x: "0%",
        });

        tl.to(".hero-slider", {
            x: "70%",
        });
    }, []);
    return (
        <div className="flex items-center gap-4 absolute left-0 hero-slider">
            {images
                ? images.map((img, idx) => (
                      <div key={idx} className="w-[180px] h-[120px] rounded-md relative">
                          <Image src={img} alt="" fill sizes="180px" />
                      </div>
                  ))
                : null}
        </div>
    );
};

export default PortfoliosSlider;
