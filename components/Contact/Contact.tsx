import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContactForm } from "./ContactForm";
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="pt-[60px]">
            <div className="container">
                <div className="grid grid-cols-12 md:grid-rows-3 gap-6">
                    <ContactForm />

                    <div className="col-span-12 md:col-span-5 md:row-span-2 order-1 md:order-2 h-fit">
                        <div className="flex flex-col gap-y-4 w-full max-w-[450px] mt-10">
                            <h2>{"Let's"} Work Together</h2>
                            <h4>Get in touch with me</h4>
                            <p className="text-sm md:text-base">
                                {"I’m"} interested in freelance opportunities especially ambitious or large projects.
                                However, if you have other request or question, {"don’t"} hesitate to use the form
                                below.
                            </p>

                            <div className="relative w-full h-12">
                                <Image src="/wave.svg" alt="" fill sizes="100vw" />
                            </div>

                            <div>
                                <h6>Follow Me</h6>
                                <div className="flex items-center gap-3 flex-wrap mt-3">
                                    <Link
                                        href="/"
                                        className="rounded-full w-10 h-10 text-xl bg-white flex items-center justify-center text-[#000B1C]"
                                    >
                                        <FaFacebookF />
                                    </Link>

                                    <Link
                                        href="/"
                                        className="rounded-full w-10 h-10 text-xl bg-white flex items-center justify-center text-[#000B1C]"
                                    >
                                        <FaInstagram />
                                    </Link>

                                    <Link
                                        href="/"
                                        className="rounded-full w-10 h-10 text-xl bg-white flex items-center justify-center text-[#000B1C]"
                                    >
                                        <FaLinkedinIn />
                                    </Link>

                                    <Link
                                        href="/"
                                        className="rounded-full w-10 h-10 text-xl bg-white flex items-center justify-center text-[#000B1C]"
                                    >
                                        <FaPinterestP />
                                    </Link>

                                    <Link
                                        href="/"
                                        className="rounded-full w-10 h-10 text-xl bg-white flex items-center justify-center text-[#000B1C]"
                                    >
                                        <FaBehance />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
