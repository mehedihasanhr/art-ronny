import DashboardLayout from "@/components/AppLayout/DashboardLayout";
import AddTestimonial from "@/components/Testimonials/AddTestimonial";
import TestimonialCard from "@/components/Testimonials/TestimonialCard";
import { useTestimonialState } from "@/hooks/useTestimonialState";
import React from "react";

export default function Testimonial() {
    const { testimonials, loading, error, fetchTestimonials } = useTestimonialState();

    React.useEffect(() => {
        fetchTestimonials();
    }, []);

    return (
        <DashboardLayout>
            <div className="flex items-start">
                <div className="flex-1 pt-10">
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-dashed border-white/30 px-8">
                        <h3>Testimonial</h3>
                    </div>
                    {/* Card */}
                    <div className="overflow-y-auto max-h-[830px] scroll">
                        <div className="flex flex-wrap gap-4 px-8">
                            {loading ? (
                                <h4>Loading...</h4>
                            ) : (
                                testimonials.length > 0 &&
                                testimonials.map((testimonial) => (
                                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Add testimonial */}
                <AddTestimonial />
            </div>
        </DashboardLayout>
    );
}
