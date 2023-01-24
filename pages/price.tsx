import * as React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import Image from "next/image";
import PriceCard from "@/components/Card/PriceCard";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { usePriceCard } from "@/hooks/usePriceCard";
import Loading from "@/components/AppLayout/Loading";
import { usePriceTableState } from "@/hooks/usePriceTableState";
import { generalPricingSheet } from "@/data/generalPricingSheet";
import Clients from "@/components/Clients/Clients";
import { paymentMethods } from "@/data/paymentMethods";

const IsInclude = ({ isIncluded = false }: { isIncluded: boolean }) => {
    return isIncluded ? (
        <FiCheckCircle className="text-xl text-[#29C358] mx-auto" />
    ) : (
        <MdOutlineCancel className="text-xl text-red-500 mx-auto" />
    );
};

export default function PricePage() {
    const { priceCards, loading } = usePriceCard();
    const { priceTables } = usePriceTableState();

    if (loading) return <Loading />;
    return (
        <AppLayout>
            <div className="container">
                <div className="relative w-96 h-48 md:w-[650px] md:h-[315px] mx-auto">
                    <Image src={"/price-page-big-logo.svg"} alt={""} fill />
                </div>
                <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-16">
                    {priceCards?.map((priceCard, index) => (
                        <div className=" col-span-12 md:col-span-6 lg:col-span-4" key={priceCard.id}>
                            <PriceCard priceCardDetails={priceCard} />
                        </div>
                    ))}
                </div>

                <div>
                    {/*  Price describe table  */}
                    <div className="py-10">
                        <div className="py-10 overflow-y-hidden overflow-x-auto">
                            <table className="table-auto w-full min-w-[720px]">
                                <thead>
                                    <tr>
                                        <th>Service List</th>
                                        <th>Startup</th>
                                        <th>Standard </th>
                                        <th>Golden </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {priceTables.map((priceTable) => (
                                        <tr key={priceTable.id}>
                                            <td className="text-center py-4">{priceTable.title}</td>
                                            <td className="text-center py-4">
                                                <IsInclude isIncluded={priceTable.startup} />
                                            </td>
                                            <td className="text-center py-4">
                                                <IsInclude isIncluded={priceTable.standard} />
                                            </td>
                                            <td className="text-center py-4">
                                                <IsInclude isIncluded={priceTable.gold} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/*    tags */}
                <div>
                    <h2 className="mb-2 text-[24px] md:text-[30px]">General Pricing Sheet</h2>
                    <p className="text-white/50">You can purchase an order if you want singe design.</p>
                    <div className="flex items-center flex-wrap gap-4 py-4">
                        {generalPricingSheet.map((item, i) => (
                            <div
                                key={i}
                                className="py-1 px-2.5 border border-dashed text-base md:text-xl border-white/60"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/*   clients */}
                <div className="mt-[100px]">
                    <div className="mb-2 text-[24px] md:text-[30px]">Online Payment Method</div>
                    <p className="text-white/50 mb-4">
                        We also accept other payment services. Only we do not accept PayPal.
                    </p>

                    <div className="mt-[50px]">
                        <Clients
                            breakpoints={{
                                332: { slidesPerView: 2 },
                                576: { slidesPerView: 3 },
                                992: { slidesPerView: 5 },
                            }}
                        >
                            {paymentMethods.map((paymentMethod, index) => (
                                <div key={index} className="relative w-full h-16">
                                    <Image src={paymentMethod} alt={""} width={266} height={70} />
                                </div>
                            ))}
                        </Clients>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
