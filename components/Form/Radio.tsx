import * as React from "react";

export const Radio = ({
    label,
    ...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { label: string }) => {
    return (
        <label className="flex items-center gap-1">
            <input {...props} type="radio" className="w-4 h-4 border border-gray-500 rounded-md focus:outline-none" />
            <span className="ml-2 text-base font-medium text-gray-200 empty:hidden">{label}</span>
        </label>
    );
};
