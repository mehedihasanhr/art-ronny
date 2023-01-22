import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import Button from "@/components/Button/Button";
import { PriceCardType } from "@/services/store/slices/priceCardSlice";
const PriceCard = ({
    showPlanBtn = true,
    priceCardDetails,
}: {
    showPlanBtn?: boolean;
    priceCardDetails: PriceCardType;
}) => {
    const { title, price, description, features } = priceCardDetails;
    return (
        <div className="p-0.5 pb-0 bg-gradient-to-b from-[#BDCEF7] via-[#BDCEF7] to-indigo-500/5 rounded-md">
            <div className="w-full p-5 pb-10 rounded-md bg-[#000B1C] flex flex-col gap-2">
                <h6 className="text-base">{title}</h6>
                <h3 className="text-[24px]">${price}/Month</h3>
                <p className="text-white/50 text-sm">{description}</p>
                <h5>Features Included: </h5>
                <ul className="flex flex-col space-y-2 mt-3">
                    {features.map((feature, index) => (
                        <li className="flex items-center space-x-2" key={index}>
                            {feature.isAvailable ? (
                                <FiCheckCircle className="text-xl text-[#29C358]" />
                            ) : (
                                <MdOutlineCancel className="text-2xl text-red-500" />
                            )}
                            <span className="text-sm"> {feature.name} </span>
                        </li>
                    ))}
                </ul>

                {showPlanBtn && (
                    <Button
                        type="button"
                        aria-describedby="selectPlanButton"
                        className="border border-white rounded-full mt-10 hover:bg-[#01084D] hover:border-[#01084D] transition-color duration-300"
                    >
                        Select Plan
                    </Button>
                )}
            </div>
        </div>
    );
};

export default PriceCard;
