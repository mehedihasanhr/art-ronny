import React from "react";

export const Input = ({
    ...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return (
        <input
            {...props}
            className={`w-full px-4 py-2 bg-[#021C42] border-none rounded-md focus:outline-none placholder text-white text-sm ${props.className}`}
        />
    );
};
