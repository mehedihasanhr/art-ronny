import Image from "next/image";
import React from "react";
import {  MdOutlineCancel } from "react-icons/md";
import { FiCheckCircle } from 'react-icons/fi'
import Button from "@/components/Button/Button";
const PriceCard = () => {
    return(
        <div className="p-0.5 pb-0 bg-gradient-to-b from-indigo-500 via-indigo-500 to-indigo-500/5 rounded-md">
            <div className="w-full p-5 pb-10 rounded-xl bg-[#000B1C] flex flex-col gap-2">
                <h6 className="text-base">Startup Plan</h6>
                <h3 className="text-[24px]">$399/Month</h3>
                <p className="text-white/50 text-sm">Create all of your everyday designs. Best for beginning businesses.</p>
                <h5>Features Included: </h5>
                <ul className="flex flex-col space-y-2 mt-3">
                    <li className="flex items-center space-x-2">
                        {true ? <FiCheckCircle className="text-xl text-[#29C358]" /> : <MdOutlineCancel/>}
                        <span className="text-sm"> Unlimited Requests </span>
                    </li>

                    <li className="flex items-center space-x-2">
                        {false ? <FiCheckCircle className="text-xl text-[#29C358]" /> : <MdOutlineCancel  className="text-xl text-red-500"/>}
                        <span className="text-sm"> Unlimited Requests </span>
                    </li>

                    <li className="flex items-center space-x-2">
                        {true ? <FiCheckCircle className="text-xl text-[#29C358]" /> : <MdOutlineCancel/>}
                        <span className="text-sm"> Unlimited Requests </span>
                    </li>

                    <li className="flex items-center space-x-2">
                        {false ? <FiCheckCircle className="text-xl text-[#29C358]" /> : <MdOutlineCancel  className="text-xl text-red-500"/>}
                        <span className="text-sm"> Unlimited Requests </span>
                    </li>

                    <li className="flex items-center space-x-2">
                        {true ? <FiCheckCircle className="text-xl text-[#29C358]" /> : <MdOutlineCancel/>}
                        <span className="text-sm"> Unlimited Requests </span>
                    </li>
                </ul>


                <Button
                    type="button"
                    aria-describedby="selectPlanButton"
                    className="border border-white rounded-full mt-10 hover:bg-[#01084D] hover:border-[#01084D] transition-color duration-300"
                >
                    Select Plan
                </Button>
            </div>
        </div>
    )
}

export default PriceCard;