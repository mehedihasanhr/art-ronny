import Image from 'next/image';

const Logo = () => {
    return (
        <div className="w-24 h-auto md:w-auto md:h-auto">
            <Image src="/logo.svg" alt="logo" priority width={168} height={54} />
        </div>
    );
};

export default Logo;
