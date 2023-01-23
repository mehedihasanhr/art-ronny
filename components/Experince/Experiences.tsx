import { useExperienceState } from "@/hooks/useExperienceState";
import { ExperienceType } from "@/services/store/slices/experienceSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { experience } from "./data";

const Experiences = () => {
    const [expShow, setExpShow] = React.useState(false);
    const { experiences } = useExperienceState();
    return (
        <section id="experience">
            <div className="container pt-[120px]">
                <div className="flex flex-col gap-y-14">
                    <h3>Experience</h3>
                    <div className={`overflow-hidden p-4 relative ${expShow ? "" : "h-[550px]"}`}>
                        <div className="grid grid-cols-12 gap-x-6">
                            {experiences.length > 0
                                ? experiences.map((exp: ExperienceType) => (
                                      <div
                                          key={exp.id}
                                          className="border-l-2 pb-10 border-gray-700 col-span-12 lg:col-span-6 relative before:absolute before:top-0 before:-left-[6px] before:w-3 before:h-3 before:bg-indigo-500"
                                      >
                                          <div className="flex flex-col gap-2 px-6">
                                              <span className="block text-sm">{`${exp.duration.start} - ${exp.duration.end}`}</span>
                                              <span className="block text-sm ">{exp.location}</span>
                                              <h5 className="-mt-1">{exp.position}</h5>
                                              <h3>{exp.company}</h3>
                                              <p>{exp.description}</p>
                                          </div>
                                      </div>
                                  ))
                                : null}
                        </div>
                        {!expShow && (
                            <div className="absolute bottom-0 left-0 w-full z-10 h-28 bg-gradient-to-t from-[#000B1C] to-transparent" />
                        )}
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            onClick={() => setExpShow(!expShow)}
                            className="flex items-center py-1 px-4 rounded-full gap-x-2.5 border border-white/10 text-white/70 hover:text-indigo-500 hover:border-indigo-500 transition-colors duration-300"
                        >
                            {expShow ? "Show Less" : "Show More"}
                            <i className="fi fi-rr-mouse -mb-2" />
                        </button>
                    </div>

                    {/* banner */}
                    <div className="bg-indigo-600 rounded-lg relative py-4">
                        {/* image */}
                        <div className="absolute top-0 left-0 w-full h-full mx-auto opacity-10 pointer-events-none">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/banner-bg.png"
                                    alt=""
                                    fill
                                    sizes="
                                    (max-width: 640px) 640px,
                                    (max-width: 768px) 768px,
                                    (max-width: 1024px) 1024px,
                                "
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full h-full z-10 flex items-center justify-between flex-col lg:flex-row gap-6 px-8 py-6">
                            <h1 className="text-white text-2xl lg:text-4xl">
                                Let’s Talk About <br /> Your Next Project
                            </h1>

                            <div className="flex items-center gap-x-6 lg:gap-x-10">
                                <Link href="#" className="border px-5 py-2 rounded-md">
                                    Hire Me
                                </Link>
                                <Link
                                    href="#"
                                    className="block shadow bg-green-600 hover:bg-green-700 border border-green-600 text-sm lg:text-base px-4 py-2 rounded-md"
                                >
                                    Download CV
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
