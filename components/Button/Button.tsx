import * as React from 'react';

type extendPropsType = {
    label?:string;
    children?: string | React.ReactNode;
}


type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & extendPropsType



export default function Button({children, label, className, type, onClick, ...props}:ButtonProps){
    return(
        <button
            type={type || "button"}
            className={`py-2 ${className}`}
            onClick={(e:React.MouseEvent<HTMLButtonElement>) => onClick && onClick(e) }
            {...props}
        >
            {children || label}
        </button>
    )
}