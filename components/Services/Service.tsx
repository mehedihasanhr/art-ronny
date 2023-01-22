import Image from "next/image";
import React from "react";

type props = {
    service1?: {
        image: string;
        title: string;
        description: string;
    };
    service2?: {
        image: string;
        title: string;
        description: string;
    };
};

const Service = ({ service1, service2 }: props) => {
    return (
        <div className="w-full col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-y-5">
            {service1 && (
                <div className="p-0.5 pb-0 bg-gradient-to-b from-indigo-500 via-indigo-500 to-indigo-500/5 rounded-md">
                    <div className="w-full px-4 py-6 md:h-96 rounded-md bg-[#000B1C] text-center">
                        <div className="flex items-center gap-4 flex-col">
                            <div className="w-28 h-28 rounded-full flex items-center justify-center">
                                {service1?.image && (
                                    <Image
                                        src={service1?.image}
                                        alt={service1?.title}
                                        width={80}
                                        height={50}
                                        loading="lazy"
                                    />
                                )}
                            </div>
                            <h3 className="text-3xl font-semibold whitespace-nowrap"> {service1?.title} </h3>
                            <p className="text-xs md:text-base text-white/80">{service1?.description}</p>
                        </div>
                    </div>
                </div>
            )}

            {service2 && (
                <div className="p-0.5 pt-0 bg-gradient-to-t from-indigo-500 to-indigo-500/5 rounded-md">
                    <div className="w-full px-4 py-6  md:h-96 rounded-md bg-[#000B1C] text-center">
                        <div className="flex items-center gap-4 flex-col">
                            <div className="w-28 h-28 rounded-full flex items-center justify-center">
                                {service2?.image && (
                                    <Image
                                        src={service2?.image}
                                        alt={service2?.title}
                                        width={80}
                                        height={50}
                                        loading="lazy"
                                    />
                                )}
                            </div>
                            <h3 className="text-3xl font-semibold"> {service2?.title} </h3>
                            <p className="text-xs md:text-base text-white/80">{service2?.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Service;
