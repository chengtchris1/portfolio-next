'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
import Container from './container';
export default function FooterNavbar() {
    const { scrollYProgress } = useScroll();
    const path = usePathname();
    const [isHome, setIsHome] = useState<boolean | null>(null);
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.02],
        ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']
    );
    useEffect(() => {
        setIsHome(window.location.pathname === '/');
    }, [path]);

    return (
        <motion.div
            className="fixed bottom-0 z-[1000] flex h-10 w-screen flex-row items-center justify-end "
            style={
                isHome
                    ? { backgroundColor }
                    : { backgroundColor: 'rgba(0, 0, 0, 1)' }
            }
        >
            <Container className="flex justify-end font-mono">
                <div className="flex flex-row items-center justify-end  ml-3 sm:ml-5 mr-6 sm:mr-16 md:mr-0">
                    <Link href={'https://www.linkedin.com/in/chengtchris/'}>
                        <div className="flex items-center justify-center mr-2">
                            <span className="ml-3">//Linkedin</span>
                            <FaLinkedin className="ml-1 text-xl" />
                        </div>
                    </Link>
                    <Link href={'https://github.com/chengtchris1'}>
                        <div className="flex items-center justify-center">
                            <span className="ml-3">//Github</span>
                            <LuGithub className="ml-1 text-xl" />
                        </div>
                    </Link>
                </div>
            </Container>
        </motion.div>
    );
}
