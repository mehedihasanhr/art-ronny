import React from "react";
import Logo from "../AppLayout/Logo";
import HamburgerButton from "./HamburgerButton";
import NavLink from "./NavLink";

const Navbar = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSticky, setIsSticky] = React.useState(false);

    // CONTROL MOBILE NAVBAR
    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // HANDLE SCROLL
    const handleScroll = React.useCallback(() => {
        if (window.pageYOffset > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }, [setIsSticky]);

    // CONTROL STICKY NAVBAR ON SCROLL
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    // HEADER CLASSNAME
    const getClassNames = () => {
        let classNames = "navbar";
        if (isSticky) {
            classNames += " navbar__sticky";
        }
        return classNames;
    };

    // GET NAV CLASSNAMES
    const getNavClassNames = () => {
        let classNames = "nav";
        if (isMobile) {
            classNames += " nav__mobile";
        }

        if (isMenuOpen) {
            classNames += " nav__mobile--active";
        }

        return classNames;
    };

    return (
        <header className={getClassNames()}>
            <div className="container flex items-center justify-between">
                <div>
                    <Logo />
                </div>

                {/* NAV LINKS */}
                <nav>
                    <ul
                        className={getNavClassNames()}
                        onMouseUp={() => {
                            setIsMenuOpen(false);
                        }}
                    >
                        <NavLink title="Home" href="/" />
                        <NavLink title="Service" href="/#service" />
                        <NavLink title="Price" href="/price" />
                        <NavLink title="Portfolio" href="/#portfolio" />
                        <NavLink title="Testimonials" href="/#testimonial" />
                        <NavLink title="Contact" href="/#contact" />
                    </ul>
                </nav>

                {/* HAMBURGER BUTTON */}
                <HamburgerButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            </div>
        </header>
    );
};

export default Navbar;
