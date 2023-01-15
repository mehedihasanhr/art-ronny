import Link from "next/link";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    close: () => void;
};

const NavLink = ({ href, children, close }: NavLinkProps) => {
    return (
        <li>
            <Link href={href} className="font-medium hover:text-indigo-300 z-10 text-lg md:text-base" onMouseUp={close}>
                {children}
            </Link>
        </li>
    );
};

export default NavLink;
