import * as React from "react";

export const Textarea = ({
    ...props
}: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => {
    return (
        <textarea
            {...props}
            className="w-full p-4 bg-[#021C42] border-none rounded-md focus:outline-none text-base placholder text-white"
        />
    );
};
