import React from "react";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form";
import { uploadImage } from "@/services/firebase/storage/upload_image";
import { useTestimonialState } from "@/hooks/useTestimonialState";

export default function AddTestimonial() {
    const { addTestimonial, saving: loading } = useTestimonialState();

    // form state
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");
    const [formError, setFormError] = React.useState("");
    const [avatar, setAvatar] = React.useState("");
    const [videoUrl, setVideoUrl] = React.useState("");
    const [slug, setSlug] = React.useState("");
    const [name, setName] = React.useState("");
    const [rating, setRating] = React.useState(0);

    // upload progress
    const [uploadProgress, setUploadProgress] = React.useState(0);
    const [uploadAvatarProgress, setUploadAvatarProgress] = React.useState(0);

    // handle images
    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        uploadImage(file, setImage, setUploadProgress);
    };

    // handle avatar
    const handleAvatarChange = (e: any) => {
        const file = e.target.files[0];
        uploadImage(file, setAvatar, setUploadAvatarProgress);
    };

    // handle submit
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // check if all fields are filled
        if (title === "" || description === "" || avatar === "" || slug === "" || name === "") {
            setFormError("All fields are required");
            return;
        }

        // service object
        const testimonial = {
            title,
            description,
            image,
            avatar,
            videoUrl,
            slug,
            name,
            rating,
        };

        // add testimonial
        addTestimonial(testimonial);

        // reset form
        setTitle("");
        setDescription("");
        setImage("");
        setAvatar("");
        setVideoUrl("");
        setSlug("");
        setName("");
        setRating(0);
    };

    return (
        <div className="w-96 h-screen py-10 bg-[#000B1C] border-l border-dashed border-white/30">
            <div className="flex items-center justify-between border-b border-dashed border-white/30 pb-5 pl-8 pr-6">
                <h3>Add Testimonial</h3>
            </div>

            <div className="py-8 pl-8 pr-6">
                <form action="" className="flex flex-col gap-y-3">
                    <Label title="Title">
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title here..." />
                    </Label>

                    <Label title="Description">
                        <Textarea
                            rows={6}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="text-sm placeholder:text-sm"
                            placeholder="Write description.."
                        />
                    </Label>

                    <Label title="Upload Image">
                        <Input type="file" onChange={handleImageChange} />
                        {uploadProgress > 0 && <p className="text-xs">Uploaded {Math.floor(uploadProgress)}%</p>}
                    </Label>

                    <Label title="Video Url">
                        <Input
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            placeholder="Video url here..."
                        />
                    </Label>

                    <Label title="Name">
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Title here..." />
                    </Label>

                    <Label title="Slug">
                        <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Title here..." />
                    </Label>

                    <Label title="Rating">
                        <Input
                            type="number"
                            min={0}
                            max={5}
                            value={rating.toString()}
                            onChange={(e) => setRating(Number(e.target.value))}
                            placeholder="Title here..."
                        />
                    </Label>

                    <Label title="Avatar">
                        <Input type="file" onChange={handleAvatarChange} />
                        {uploadAvatarProgress > 0 && (
                            <p className="text-xs">Uploaded {Math.floor(uploadAvatarProgress)}%</p>
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
                            {loading ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
