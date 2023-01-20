import React from "react";

type NavProps = {
    children: React.ReactNode | React.ReactNode[];
};

const Nav = ({ children }: NavProps) => {
    return (
        <div className="flex items-center justify-between md:justify-start gap-10 flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto md:left-auto md:top-auto overflow-hidden py-10 md:py-0 z-[100]">
            {children}
            <div className="pointer-events-none w-72 h-72 absolute top-0 left-0 shadow-effect block md:hidden" />
        </div>
    );
};

export default Nav;
