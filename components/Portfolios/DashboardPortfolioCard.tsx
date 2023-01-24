import { PortfolioType } from "@/services/store/slices/portfolioSlice";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const DashboardPortfolioCard = ({
    portfolio,
    deleteExp,
}: {
    portfolio: PortfolioType;
    deleteExp: (id: string) => void;
}) => {
    return (
        <div className="w-72 p-4 flex flex-col gap-y-3 border border-gray-500 rounded-lg relative group">
            <Button
                type="button"
                aria-describedby="delete portfolio"
                onClick={() => deleteExp(portfolio.id)}
                className="bg-red-700 hover:bg-red-600 w-8 h-8 items-center justify-center rounded-sm absolute top-2 right-2 hidden group-hover:flex"
            >
                <i className="fi fi-rr-trash -mb-1" />
            </Button>
            <h4>{portfolio.title}</h4>
            <p className="text-xs text-white/70">
                {portfolio.description.length > 100
                    ? `${portfolio.description.slice(0, 100)}...`
                    : portfolio.description}
            </p>
            <div className="flex flex-wrap gap-3">
                {portfolio.tags?.map((tag, i) => (
                    <span key={i} className="py-0.5 rounded-full px-3 bg-gray-700 text-white text-xs font-medium">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="relative max-w-[300px] max-h-[300px]">
                {portfolio.image && <Image src={portfolio.image} alt="" width={300} height={300} />}
            </div>
        </div>
    );
};

export default DashboardPortfolioCard;
