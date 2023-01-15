import Image from "next/image";
import React from "react";

type props = {
    service1?: {
        image: string;
        title: string;
        desc: string;
    };
    service2?: {
        image: string;
        title: string;
        desc: string;
    };
};

const Service = ({ service1, service2 }: props) => {
    return (
        <div className="p-4 w-full col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-y-5">
            {service1 && (
                <div className="p-0.5 pb-0 bg-gradient-to-b from-indigo-500 to-[#000B1C] rounded-xl">
                    <div className="w-full px-4 py-6  md:h-96 rounded-xl bg-[#000B1C] text-center">
                        <div className="flex items-center gap-4 flex-col">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center">
                                <Image
                                    src={service1?.image}
                                    alt={service1?.title}
                                    width={50}
                                    height={50}
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-xl font-semibold whitespace-nowrap"> {service1?.title} </h3>
                            <p className="text-xs md:text-base">{service1?.desc}</p>
                        </div>
                    </div>
                </div>
            )}

            {service2 && (
                <div className="p-0.5 pt-0 bg-gradient-to-t from-indigo-500 to-[#000B1C] rounded-xl">
                    <div className="w-full px-4 py-6  md:h-96 rounded-xl bg-[#000B1C] text-center">
                        <div className="flex items-center gap-4 flex-col">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center">
                                <Image
                                    src={service2?.image}
                                    alt={service2?.title}
                                    width={50}
                                    height={50}
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-xl font-semibold"> {service2?.title} </h3>
                            <p className="text-xs md:text-base">{service2?.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Service;
