"use client"
import HeaderNavbar from "./headerNavbar";
import FooterNavbar from "./footerNavbar";
import { useScroll } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";
export default function Navbars({ children }: {children: React.ReactNode}) {
    const path = usePathname();
    const { scrollYProgress } = useScroll();
    const [isHome, setIsHome] = useState<boolean | null>(null);
    useEffect(() => {
        setIsHome(window.location.pathname === '/');
    }, [path]);
    return (
      <>
        <HeaderNavbar scrollYProgress={scrollYProgress} isHome={isHome}/>
            {children}
        <FooterNavbar scrollYProgress={scrollYProgress} isHome={isHome}/>
      </>
    );
}