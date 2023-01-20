import Link from "next/link";
import React from "react";
import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";
import Nav from "./Nav";
import NavLink from "./NavLink";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [sticky, setSticky] = React.useState(false);
    const [mobileNav, setMobileNav] = React.useState(false);

    // initial isNavOpen state is true | false
    React.useEffect(() => {
        if (window.innerWidth > 768) {
            setIsOpen(false);
            setMobileNav(false);
        } else {
            setMobileNav(true);
            setIsOpen(false);
        }

        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(true);
                setMobileNav(false);
            } else {
                setIsOpen(false);
                setMobileNav(true);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // console.log(sticky);

    React.useEffect(() => {
        const handleScroll = () => {
            // scrolling uper side
            if (window.pageYOffset > 0) {
                setSticky(true);
            }
            // scrolling downer side
            if (window.pageYOffset === 0) {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${sticky ? "sticky top-0 left-0 w-full z-[50]" : ""} max-w-screen z-20`}>
            <div
                className={`bg-[#000B1C] z-20 w-full overflow-x-hidden h-auto md:h-auto top-0 left-0  ${
                    mobileNav && isOpen ? "h-full fixed md:relative" : "overflow-hidden h-auto"
                }`}
            >

                <div className="relative w-full navbar">
                    <div className="container">
                        <div className="py-4 md:py-6 flex items-center justify-between">
                            <Link href="/">
                                <Logo />
                            </Link>

                            <Nav>
                                {/* nav link */}
                                <ul className="flex items-center justify-center md:justify-start gap-8 flex-col md:flex-row ">
                                    <NavLink close={() => setIsOpen(false)} href="/">
                                        Home
                                    </NavLink>
                                    <NavLink close={() => setIsOpen(false)} href="/#experience">
                                        Experience
                                    </NavLink>
                                    <NavLink close={() => setIsOpen(false)} href="/#section">
                                        Service
                                    </NavLink>
                                    <NavLink close={() => setIsOpen(false)} href="/price">
                                        Price
                                    </NavLink>
                                    <NavLink close={() => setIsOpen(false)} href="/#portfolio">
                                        Protfolio
                                    </NavLink>
                                    <NavLink close={() => setIsOpen(false)} href="/#testimonial">
                                        Testimonials
                                    </NavLink>
                                </ul>
                            </Nav>

                            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
