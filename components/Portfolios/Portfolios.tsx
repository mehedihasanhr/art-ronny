import { usePortfolioState } from "@/hooks/usePortfolioState";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const PortfolioCard = dynamic(() => import("./PortfolioCard"), { ssr: false });

const Portfolios = () => {
    const { portfolios } = usePortfolioState();
    return (
        <section id="portfolio">
            <div className="container pt-[120px]">
                <h5 className="text-white/50 text-sm md:text-lg">Portfolios</h5>
                <div className="flex items-center flex-wrap justify-between">
                    <h3 className="text-white text-lg md:text-2xl"> Some Of My Distinguished Work </h3>
                    <div className="flex items-center gap-4 mt-6 md:mt-0">
                        <Link href="#" className="text-sm md:text-base text-white/90 hover:cursor-pointer">
                            All Topics
                        </Link>
                        <Link
                            href="#"
                            className="text-sm md:text-base text-indigo-300 hover:text-white/90 cursor-pointer"
                        >
                            UI Design
                        </Link>
                        <Link
                            href="#"
                            className="text-sm md:text-base text-indigo-300 hover:text-white/90 cursor-pointer"
                        >
                            Social Media Design
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6 py-10">
                    {portfolios &&
                        portfolios.map((portfolio) => (
                            <div className="col-span-12 md:col-span-6 xl:col-span-4" key={portfolio.id}>
                                <PortfolioCard portfolio={portfolio} />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolios;
