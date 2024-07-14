'use client';
import { useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import FooterNavbar from './footerNavbar';
import HeaderNavbar from './headerNavbar';
export default function Navbars({ children }: { children: React.ReactNode }) {
    const path = usePathname();
    const { scrollYProgress } = useScroll();
    const [isHome, setIsHome] = useState<boolean | null>(null);
    useEffect(() => {
        setIsHome(window.location.pathname === '/');
    }, [path]);
    return (
        <>
            <HeaderNavbar scrollYProgress={scrollYProgress} isHome={isHome} />
            {children}
            <FooterNavbar scrollYProgress={scrollYProgress} isHome={isHome} />
        </>
    );
}
