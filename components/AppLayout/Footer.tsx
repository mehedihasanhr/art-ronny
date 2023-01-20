import React from "react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <div className="container py-3 md:py-10 border-t border-[#4036BB]/30 flex flex-col md:flex-row items-center md:justify-between">
            <div className="flex flex-col items-center md:items-start gap-2">
                <Logo />
                <span>Copyright © 2022 Artronny.</span>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <div className="w-48 flex flex-col gap-2">
                    <h4>Address:</h4>
                    <address>Uttara, Sector-12, Dhaka-1230, Bangladesh</address>
                </div>

                <div className="flex flex-col gap-2">
                    <h4>Hit us up: </h4>
                    <div>
                        <a href="tel:+8801581268786" className="block hover:text-indigo-400">
                            +880 1581 268786
                        </a>
                        <a href="mailto:info.artronny@gmail.com" className="block hover:text-indigo-400">
                            info.artronny@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
