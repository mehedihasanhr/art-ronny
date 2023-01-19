import { ReactNode } from "react";

export const Label = ({
    children,
    title,
    icon,
    required,
    childClassName = "items-center",
    ...props
}: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
    icon?: ReactNode | string;
    childClassName?: string;
    required?: boolean;
}) => {
    return (
        <label className="text-base font-medium text-gray-300 flex flex-col gap-y-2" {...props}>
            <span className="empty:hidden flex text-sm items-center">
                {title}
                {required && <sup className="text-red-500 text-lg block -mb-1.5">*</sup>}
            </span>
            {icon ? (
                <div className={`flex flex-nowrap bg-[#021C42] rounded-md ${childClassName}`}>
                    <span className="py-2 px-2 empty:hidden">{icon}</span>
                    {children}
                </div>
            ) : (
                children
            )}
        </label>
    );
};
