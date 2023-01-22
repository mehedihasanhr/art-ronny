import React from "react";
import DashboardLayout from "@/components/AppLayout/DashboardLayout";
import { useClientState } from "@/hooks/useClientState";
import Image from "next/image";
import { uploadImage } from "@/services/firebase/storage/upload_image";
import { Input, Label } from "@/components/Form";
import Button from "@/components/Button/Button";
import { useHeroSliderState } from "@/hooks/useHeroSliderState";

export default function HeroSlider() {
    const { heroSliders, loading, error, saving, fetchHeroSlider, addSlider } = useHeroSliderState();
    const [image, setImage] = React.useState("");
    const [formError, setFormError] = React.useState("");

    // upload progress
    const [uploadProgress, setUploadProgress] = React.useState(0);

    // handle images
    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        uploadImage(file, setImage, setUploadProgress);
    };

    // handle submit
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (image === "") {
            setFormError("All fields are required");
            return;
        }

        // portfolio object
        addSlider(image);

        // reset form
        setImage("");
    };

    return (
        <DashboardLayout>
            <div className="flex items-start">
                <div className="flex-1 pt-10">
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-dashed border-white/30 px-8">
                        <h3>Hero Sliders</h3>
                    </div>
                    {/* Card */}
                    <div className="overflow-y-auto max-h-[830px] scroll">
                        <div className="flex flex-wrap gap-3 px-7">
                            {loading ? (
                                <h5>Loading...</h5>
                            ) : (
                                heroSliders.map((slider) => {
                                    return (
                                        <div
                                            key={slider.id}
                                            className="overflow-hidden flex items-center border rounded-lg border-white/30"
                                        >
                                            <div className="w-[180px] h-[120px] relative">
                                                <Image src={slider.image} fill sizes="180px" alt="" />
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-96 h-screen py-10 bg-[#000B1C] border-l border-dashed border-white/30">
                    <div className="flex items-center justify-between border-b border-dashed border-white/30 pb-5 pl-8 pr-6">
                        <h3>Add Slider</h3>
                    </div>

                    <div className="py-8 pl-8 pr-6">
                        <form action="" className="flex flex-col gap-y-3">
                            <Label title="Upload Image">
                                <Input type="file" onChange={handleImageChange} />
                                {uploadProgress > 0 && (
                                    <p className="text-xs">Uploaded {Math.floor(uploadProgress)}%</p>
                                )}
                            </Label>

                            <div className="mt-5 w-full">
                                {formError && <p className="text-red-500 text-base">{formError}</p>}
                                <Button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="bg-indigo-500 rounded-md hover:bg-indigo-600 w-full"
                                >
                                    {saving ? "Saving..." : "Save"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
