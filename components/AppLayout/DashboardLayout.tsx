import React, { ReactNode } from "react";
import DashboardSidebar from "@/components/AppLayout/DashboardSidebar";
import _ from "lodash";
import Loading from "./Loading";
import { useRouter } from "next/router";
import { useAuthState } from "@/hooks/useAuthState";

export default function DashboardLayout({ children }: { children: ReactNode | ReactNode[] }) {
    const { auth, loading, error } = useAuthState();
    const router = useRouter();

    // if auth not empty and loading is false, redirect to dashboard
    React.useEffect(() => {
        if (!loading && !auth) {
            router.push("/dashboard");
        }
    }, [auth, loading, error, router]);

    let content = null;

    if (loading && _.isEmpty(auth)) {
        content = <Loading />;
    } else if (error && _.isEmpty(auth)) {
        content = <div>Error: {error}</div>;
    } else if (!_.isEmpty(auth) && !loading) {
        content = (
            <div className="flex">
                <DashboardSidebar />
                <div className="flex-1">{children}</div>
            </div>
        );
    }

    return content;
}
