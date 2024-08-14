import { motion, useTransform, type MotionValue } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
import { MdContacts } from "react-icons/md";
import Container from './container';
export default function FooterNavbar({
    scrollYProgress,
    isHome,
}: {
    scrollYProgress: MotionValue<number>;
    isHome: boolean | null;
}) {
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.04],
        ['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 1)']
    );
    return (
        <motion.div
            className="fixed bottom-0 z-[1000] flex h-10 w-screen items-center sm:justify-start justify-center sm:ml-16"
            style={
                isHome
                    ? { backgroundColor }
                    : { backgroundColor: 'rgba(0, 0, 0, 1)' }
            }
        >
            <Container className="flex justify-between items-center font-semibold uppercase text-sm px-0 sm:px-0 lg:px-0 ml-0 mr-0 w-[90%]">
                <div className="flex flex-row items-center justify-start">
                    <Link href={'https://www.linkedin.com/in/chengtchris/'} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center justify-center mr-2">
                            <span className="ml-3">
                                <span className="tracking-[0.25rem]">
                                    ※
                                </span>
                                LinkedIn
                            </span>
                            <FaLinkedin className="ml-1 text-xl" />
                        </div>
                    </Link>
                    <Link href={'https://github.com/chengtchris1'} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center justify-center">
                            <span className="ml-3">
                                <span className="tracking-[0.25rem]">※</span>
                                Github
                            </span>
                            <LuGithub className="ml-1 text-xl" />
                        </div>
                    </Link>

                </div>
                <div className='flex flex-row items-center justify-start'>
                 <Link href={'/resume.pdf'} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center justify-center">
                            <span className="ml-0">
                                <span className="tracking-[0.25rem]">※</span>
                                Resume
                            </span>
                            <MdContacts className="ml-1 mr-6 sm:mr-3 text-xl" />
                        </div>
                    </Link>
                </div>
            </Container>
        </motion.div>
    );
}
