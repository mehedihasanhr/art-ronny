import React from 'react';

type HamburgerButtonProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const HamburgerButton = ({ isOpen, setIsOpen }: HamburgerButtonProps) => {
    return (
        <div
            className={`hamburger ${isOpen ? 'hamburger--active' : ''} md:hidden`}
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <div className="hamburger__line hamburger__line--1" />
            <div className="hamburger__line hamburger__line--2" />
            <div className="hamburger__line hamburger__line--3" />
        </div>
    );
};

export default HamburgerButton;
