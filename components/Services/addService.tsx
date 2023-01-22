import React from "react";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form";
import { uploadImage } from "@/services/firebase/storage/upload_image";
import { useServicesState } from "@/hooks/useServicesState";

const AddService = () => {
    const { saving: loading, addService } = useServicesState();

    // form state
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
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

        // check if all fields are filled
        if (title === "" || description === "" || image === "") {
            setFormError("All fields are required");
            return;
        }

        // service object
        const service = {
            title,
            description,
            image,
        };

        // add service
        addService(service);

        // reset form
        setTitle("");
        setDescription("");
        setImage("");
    };

    return (
        <div className="w-96 h-screen py-10 bg-[#000B1C] border-l border-dashed border-white/30">
            <div className="flex items-center justify-between border-b border-dashed border-white/30 pb-5 pl-8 pr-6">
                <h3>Add Portfolio</h3>
            </div>

            <div className="py-8 pl-8 pr-6">
                <form action="" className="flex flex-col gap-y-3">
                    <Label title="Title">
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title here..." />
                    </Label>

                    <Label title="Description">
                        <Textarea
                            rows={10}
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
};

export default AddService;
