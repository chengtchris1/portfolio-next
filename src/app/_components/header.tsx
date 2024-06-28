'use server';
import Link from 'next/link';
import { RiArrowGoBackFill } from 'react-icons/ri';
const Header = ({ text }: { text: string }) => {
    return (
        <h2 className="mb-6 mt-5 text-2xl font-bold leading-tight tracking-tight md:mb-3 md:text-4xl md:tracking-tighter">
            <Link href="/">{text}</Link>
        </h2>
    );
};

export default Header;
