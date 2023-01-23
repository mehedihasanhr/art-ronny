import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
    children?: React.ReactNode | undefined;
    href: string;
    title?: string;
};

const NavLink = ({ children, href = "/", title }: NavLinkProps) => {
    const { asPath } = useRouter();

    const isActive = asPath === href;

    return (
        <li className="nav__item">
            <Link href={href} className={`nav__link ${isActive ? "nav__link--active" : ""}`}>
                {children || title}
            </Link>
        </li>
    );
};

export default NavLink;
