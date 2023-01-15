import React from "react";

export const Input = ({
    ...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return (
        <input
            {...props}
            className="w-full p-4 bg-[#021C42] border-none rounded-md focus:outline-none text-base placholder text-white"
        />
    );
};
