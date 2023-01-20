import Logo from "@/components/AppLayout/Logo";
import Link from "next/link";


export default function DashboardSidebar(){
    return(
        <div className="w-72 border-r border-dashed border-white/30 h-screen">
            <div className="py-4 px-5 border-b border-dashed border-white/30">
                <Logo/>
            </div>

            <div className="flex flex-col gap-4 flex-1 h-full py-8 px-4">
                <Link href="/dashboard/portfolio" className="py-2 hover:bg-indigo-500/10 px-3 rounded-md">Portfolio</Link>
                <Link href="/dashboard/service" className="py-2 hover:bg-indigo-500/10 px-3 rounded-md">Services</Link>
                <Link href="/dashboard/testimonial" className="py-2 hover:bg-indigo-500/10 px-3 rounded-md">Testimonial</Link>
                <Link href="/dashboard/client" className="py-2 hover:bg-indigo-500/10 px-3 rounded-md">Client</Link>
                <Link href="/dashboard/price" className="py-2 hover:bg-indigo-500/10 px-3 rounded-md">Price</Link>
                <Link href="/dashboard/hero-slider" className="py-2 hover:bg-indigo-500/10 px-3 rounded-md">Hero Slider</Link>
            </div>
        </div>
    )
}