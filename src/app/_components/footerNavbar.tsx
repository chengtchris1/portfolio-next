'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
import Container from './container';
export default function FooterNavbar() {
    const { scrollYProgress } = useScroll();
    const path = usePathname();
    const isHome = path === '/';
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.05],
        ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']
    );
    return (
        <motion.div
            className="fixed bottom-0 z-[1000] flex h-10 w-screen flex-row items-center justify-end "
            style={
                isHome
                    ? { backgroundColor }
                    : { backgroundColor: 'rgba(0, 0, 0, 1)' }
            }
        >
            <Container>
                <div className="flex flex-row items-center justify-end">
                    <Link href={'https://www.linkedin.com/in/chengtchris/'}>
                        <FaLinkedin className="mx-2" />
                    </Link>
                    <Link href={'https://github.com/chengtchris1'}>
                        <LuGithub className="mx-2" />
                    </Link>
                </div>
            </Container>
        </motion.div>
    );
}
