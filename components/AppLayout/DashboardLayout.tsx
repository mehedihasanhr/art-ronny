import React, { ReactNode } from "react";
import DashboardSidebar from "@/components/AppLayout/DashboardSidebar";


export default function DashboardLayout ({children}: {children: ReactNode| ReactNode[]}){
    return(
        <div className="flex">
            <DashboardSidebar />
            <div className="flex-1 p-10">
                {children}
            </div>
        </div>
    )
}