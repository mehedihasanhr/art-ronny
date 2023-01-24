import React from "react";
import { Input, Label, Radio, Textarea } from "../Form";
import { IoIosCall } from "react-icons/io";
import { IoLogoWechat } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";

export const ContactForm = () => {
    const ref = React.useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const form = ref.current;
        if (form) {
            const submitButton = document.getElementById("sumbitContactForm");
            if (submitButton) {
                submitButton.click();
            }
        }
    };
    return (
        <>
            <div className="col-span-12 md:col-span-7 md:row-span-3 order-2 md:order-1">
                <div className="w-full max-w-[550px] bg-[#0B152A] p-4 md:p-8 rounded-lg">
                    <h3 className="text-white mb-4">Feel free to contact me</h3>
                    <form
                        className="flex flex-col gap-y-4"
                        action="https://formsubmit.io/send/fdce49c0-b3a7-4861-95f7-ada64714d054"
                        method="POST"
                        id="contactform"
                        ref={ref}
                    >
                        <input name="_redirect" type="hidden" id="name" value="https://art-ronny.vercel.app/" />
                        <Label title="Email" required={true} icon={<MdAttachEmail className="text-xl text-white" />}>
                            <Input type="text" name="email" placeholder="Your Email" />
                        </Label>

                        <Label title="Phone" required={true} icon={<IoIosCall className="text-xl text-white" />}>
                            <Input type="text" name="phone" placeholder="Your Phone" />
                        </Label>

                        <Label title="Subject" required={true} childClassName="bg-transparent">
                            <div className="flex items-center gap-2 flex-wrap">
                                <Radio name="subject" value="General" label="General" defaultChecked={true} />
                                <Radio name="subject" value="project-review" label="Project Review" />
                                <Radio name="subject" value="hire-me" label="Hire Me" />
                            </div>
                        </Label>

                        <Label
                            title="Message"
                            required={true}
                            childClassName="flex items-start"
                            icon={<IoLogoWechat className="text-xl text-white" />}
                        >
                            <Textarea rows={5} name="message" placeholder="Your message here..." />
                        </Label>
                        <input name="contactform" type="text" style={{ display: "none" }} />
                        <button type="submit" id="sumbitContactForm" className="hidden" />
                    </form>
                </div>
            </div>
            <div className="col-span-12 md:col-span-5  order-3  md:row-span-1 mt-5">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full p-4 bg-blue-600 whitespace-nowrap font-medium rounded-md"
                >
                    Send Now →
                </button>
            </div>
        </>
    );
};
