import * as React from "react";
import DashboardLayout from "@/components/AppLayout/DashboardLayout";
import Service from "@/components/Services/Service";
import { useServicesState } from "@/hooks/useServicesState";
import AddService from "@/components/Services/addService";
import { serviceGroup } from "@/utils/ServiceArray";

export default function Services() {
    const { services, loading, error, setAllServices } = useServicesState();
    const [servicesData, setServicesData] = React.useState([]);
    React.useEffect(() => {
        setAllServices();
    }, []);

    React.useEffect(() => {
        if (services.length > 0) {
            setServicesData(serviceGroup(services));
        }
    }, [services]);

    return (
        <DashboardLayout>
            <div className="flex items-start">
                <div className="flex-1 pt-10">
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-dashed border-white/30 px-8">
                        <h3>Services</h3>
                    </div>
                    {/* Card */}
                    <div className="overflow-y-auto max-h-[830px] scroll">
                        <div className="grid grid-cols-12 gap-3 px-7">
                            {loading ? (
                                <h4>Loading...</h4>
                            ) : servicesData && servicesData.length > 0 ? (
                                servicesData.map((service, index) => (
                                    <Service key={index} service1={service[0]} service2={service[1]} />
                                ))
                            ) : (
                                <div className="col-span-12">No services found</div>
                            )}
                        </div>
                    </div>
                </div>
                <AddService />
            </div>
        </DashboardLayout>
    );
}
