import * as React from "react";

export const Textarea = ({
    ...props
}: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => {
    return (
        <textarea
            {...props}
            className="w-full py-2 px-4 bg-[#021C42] border-none text-sm rounded-md focus:outline-none placholder:text-sm text-white"
        />
    );
};
