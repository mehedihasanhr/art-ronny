import dynamic from "next/dynamic";
import React from "react";
import { Client } from "./Client";
const ClientLogoSlider = dynamic(() => import("../Sliders/ClientLogoSlider"), { ssr: false });

const Clients = ({ children, breakpoints }: any) => {
    const childs = React.Children.toArray(children);
    return (
        <div className="container">
            <ClientLogoSlider breakpoints={breakpoints}>
                {childs.map((child, index) => (
                    <Client key={index}>
                        <div className="relative w-full h-[70px]">{child}</div>
                    </Client>
                ))}
            </ClientLogoSlider>
        </div>
    );
};

export default Clients;
