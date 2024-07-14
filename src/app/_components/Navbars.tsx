"use client"
import HeaderNavbar from "./headerNavbar";
import FooterNavbar from "./footerNavbar";
import { useScroll } from "framer-motion";
export default function Navbars({ children }: {children: React.ReactNode}) {
    const { scrollYProgress } = useScroll();
    return (
      <>
        <HeaderNavbar scrollYProgress={scrollYProgress}/>
            {children}
        <FooterNavbar scrollYProgress={scrollYProgress}/>
      </>
    );
}