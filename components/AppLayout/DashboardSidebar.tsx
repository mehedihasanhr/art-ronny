import Logo from "@/components/AppLayout/Logo";
import { useAuthState } from "@/hooks/useAuthState";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import React from "react";

export default function DashboardSidebar() {
    const { auth, setAuthLogoutState } = useAuthState();
    const router = useRouter();

    return (
        <div className="w-72 border-r border-dashed border-white/30 h-screen flex flex-col">
            <div className="py-[19px] px-5 border-b border-dashed border-white/30">
                <Logo />
            </div>

            <div className="flex-1 flex flex-col gap-4 py-8 px-4 h-full">
                <SidebarLink href="/dashboard/portfolio" asPath={router.asPath} title="Portfolio" />
                <SidebarLink href="/dashboard/experiences" asPath={router.asPath} title="Experiences" />
                <SidebarLink href="/dashboard/services" asPath={router.asPath} title="Services" />
                <SidebarLink href="/dashboard/testimonial" asPath={router.asPath} title="Testimonial" />
                <SidebarLink href="/dashboard/client" asPath={router.asPath} title="Client" />
                <SidebarLink href="/dashboard/price" asPath={router.asPath} title="Price" />
                <SidebarLink href="/dashboard/hero-slider" asPath={router.asPath} title="Hero Slider" />
            </div>

            {/* profile */}
            <div className="h-20 border-t border-dashed border-white/30 mt-auto flex items-center px-4">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full relative overflow-hidden border-2 border-gray-400">
                        {auth?.photoURL && (
                            <Image
                                src={auth?.photoURL}
                                alt={auth?.displayName}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        )}
                    </div>
                    <div className="px-3">
                        <h5 className="leading-[20px]">{auth?.displayName}</h5>
                        <Button
                            type="button"
                            onClick={setAuthLogoutState}
                            className="py-0 hover:underline text-red-500 font-semibold"
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const SidebarLink = ({
    href = "",
    asPath,
    children,
    title,
}: {
    href: string;
    asPath: string;
    children?: React.ReactNode;
    title?: string;
}) => {
    const isActive = href === asPath;
    return (
        <Link href={href} className={`py-2 px-3 rounded-md ${isActive ? "bg-indigo-500" : "hover:bg-indigo-500/10"}`}>
            {children || title}
        </Link>
    );
};
