import * as React from 'react';
import AppLayout from "../components/AppLayout/AppLayout";
import Image from "next/image";
import PriceCard from "@/components/Card/PriceCard";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";



    const IsInclude = ({isIncluded=false} : {isIncluded: boolean}) => {
        return isIncluded ? <FiCheckCircle className="text-xl text-[#29C358] mx-auto" /> : <MdOutlineCancel className="text-xl text-red-500 mx-auto"/>
    }


    export default function PricePage(){
    return(
        <AppLayout>
            <div className="container">
                <div className="relative w-96 h-48 md:w-[650px] md:h-[315px] mx-auto">
                    <Image src={'/price-page-big-logo.svg'} alt={''} fill />
                </div>
                <div className="grid grid-cols-12 gap-y-10 md:gap-10 mt-32">
                    <div className=" col-span-12 md:col-span-6 lg:col-span-4">
                        <PriceCard />
                    </div>

                    <div className=" col-span-12 md:col-span-6 lg:col-span-4">
                        <PriceCard />
                    </div>

                    <div className=" col-span-12 md:col-span-6 lg:col-span-4">
                        <PriceCard />
                    </div>
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
                                    {[...Array(20)].map((item, index) => (
                                        <tr key={index}>
                                            <td className="text-center py-4">Social Media Cover Design</td>
                                            <td className="text-center py-4"><IsInclude isIncluded={true} /></td>
                                            <td className="text-center py-4"><IsInclude isIncluded={true} /></td>
                                            <td className="text-center py-4"><IsInclude isIncluded={false} /></td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            {/*    tags */}
                <div>
                    <h2 className="mb-2">General Pricing Sheet</h2>
                    <p className="text-white/50">You can purchase an order if you want singe design.</p>
                   <div className="flex items-center flex-wrap gap-4 py-4">
                       {
                           [...Array(30)].map((_, i) => (
                               <div key={i} className="py-1 px-2.5 border border-dashed border-white/60">
                                   Motion Post - $35
                               </div>
                           ))
                       }
                   </div>
                </div>
            </div>
        </AppLayout>
    )
}