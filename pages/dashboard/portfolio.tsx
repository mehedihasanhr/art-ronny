import DashboardLayout from "@/components/AppLayout/DashboardLayout";
import Image from "next/image";


export default function Portfolio () {
    return(
        <DashboardLayout>
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-6">
                    {/* Card */}
                    <div className="w-72 p-6 flex flex-col gap-y-3 border border-gray-500 rounded-lg">
                        <h6>UI/UX Design</h6>
                        <p className="text-sm text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae doloribus earum et fugiat, harum id itaque laboriosam molestias nemo numquam possimus quae quam quis ratione repellendus reprehenderit rerum? Expedita, tempore?</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="py-0.5 rounded-full px-3 bg-black text-white text-xs font-medium"> Graphics design </span>
                        </div>
                        <div className="relative">
                            <Image src="/portfolio.png" alt="" fill />
                        </div>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}