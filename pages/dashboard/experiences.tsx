import * as React from "react";
import DashboardLayout from "@/components/AppLayout/DashboardLayout";
import Experience from "@/components/Experince/Experience";
import ExperienceForm from "@/components/Experince/ExperienceForm";
import { useExperienceState } from "@/hooks/useExperienceState";
import { ExperienceType } from "@/services/store/slices/experienceSlice";

export default function Experiences() {
    const { experiences, loading, removeExperienceFromDB } = useExperienceState();
    return (
        <DashboardLayout>
            <div className="flex items-start">
                <div className="flex-1 pt-10">
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-dashed border-white/30 px-8">
                        <h3>Experiences </h3>
                    </div>
                    {/* Card */}
                    <div className="overflow-y-auto max-h-[830px] scroll">
                        <div className="flex flex-wrap gap-3 px-7">
                            {/* EXPERIENCE CARD */}
                            {loading ? (
                                <h3>Loading...</h3>
                            ) : (
                                experiences.map((experience: ExperienceType) => (
                                    <Experience
                                        key={experience.id}
                                        experience={experience}
                                        deleteExp={removeExperienceFromDB}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <ExperienceForm />
            </div>
        </DashboardLayout>
    );
}
