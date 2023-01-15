import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { Client } from "./Client";
const ClientLogoSlider = dynamic(() => import("../Sliders/ClientLogoSlider"), { ssr: false });

const Clients = ({ images }: { images: string[] }) => {
    return (
        <div className="container">
            <ClientLogoSlider>
                {images.map((image, index) => (
                    <Client key={index} src={image} />
                ))}
            </ClientLogoSlider>
        </div>
    );
};

export default Clients;
