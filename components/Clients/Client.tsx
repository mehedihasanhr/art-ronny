import Image from "next/image";
import React from "react";

export const Client = ({ src }: { src: string }) => {
    return (
        <div className="w-full bg-[#0B152A] max-w-sm py-2 flex items-center justify-center rounded-md">
            <div className="relative w-44 h-16">
                <Image src={`/${src}`} alt="client" fill sizes="176px" loading="lazy" />
            </div>
        </div>
    );
};
