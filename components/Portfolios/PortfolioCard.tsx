import Image from "next/image";
import React from "react";

const Tag = ({ tag, className }: { tag: string; className: string }) => {
    return (
        <span className={`text-sm rounded-full px-2 whitespace-nowrap bg-black text-white ${className}`}>{tag}</span>
    );
};

const PortfolioCard = () => {
    return (
        <div className="p-4 md:p-8 bg-[#171F38]/60 rounded-lg">
            <h3 className="text-lg md:text-2xl">UI/UX Design</h3>
            <p className="text-xs md:text-sm lg:text-base mt-3 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et enim porro ab magnam facere eos ut quas.
                Nihil eaque cumque minus dolorem sunt totam. Tenetur nihil ab reiciendis beatae amet.
            </p>
            <div className="flex items-center gap-1 mt-3 flex-wrap">
                <Tag tag="UI Design" className="text-yellow-400" />
                <Tag tag="Motion Graphic" className="text-green-400" />
                <Tag tag="Social Media Design" className="text-sky-400" />
            </div>

            <div className="mt-4">
                <div className="relative w-full h-64 md:h-80 rounded-md overflow-hidden">
                    <Image src="/portfolio1.png" alt="" fill sizes="(max-width: 320px) 100vw, 320px" loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
