import { motion, useTransform, type MotionValue } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
import { BsFillPersonVcardFill } from "react-icons/bs";
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
            className="fixed bottom-0 z-[1000] flex h-10 w-screen items-center sm:justify-start justify-center sm:pl-16"
            style={
                isHome
                    ? { backgroundColor }
                    : { backgroundColor: 'rgba(0, 0, 0, 1)' }
            }
        >
            <Container className="flex justify-between items-center font-semibold uppercase text-sm px-0 sm:px-0 lg:px-0 ml-0 mr-0 w-full tracking-widest">
                <div className="flex flex-row items-center justify-start">

                        <div className="flex items-center justify-center mr-2  mx-10 sm-ml-0">

                                <span className="hidden sm:flex -mt-0.5 ml-3 sm:ml-0 mr-1 hover:no-underline">
                                    ※
                                </span>
                            <Link href={'https://www.linkedin.com/in/chengtchris/'} target="_blank" rel="noopener noreferrer" className='flex'>
                                <span className='hidden sm:flex'>LinkedIn</span>

                            <FaLinkedin className="ml-1 text-xl" />
                            </Link>
                        </div>


                        <div className="flex flex-row items-center justify-center ml-1 sm:ml-6">

                                <span className="hidden sm:flex -mt-0.5 mr-1 hover:no-underline">※</span>
                            <Link href={'https://github.com/chengtchris1'} target="_blank" rel="noopener noreferrer" className='flex'>
                                <span className='hidden sm:flex'>Github</span>
                                <LuGithub className="ml-1 text-xl" />
                            </Link>

                        </div>

                </div>
                <div className='flex flex-row items-center justify-start mr-7'>

                        <div className="flex items-center justify-center">
                            <span className='hidden sm:flex -mt-0.5 mr-1 hover:no-underline'>※</span>
                            <Link href={'/resume.pdf'} target="_blank" rel="noopener noreferrer" className='flex'>
                            Resume
                            <BsFillPersonVcardFill className="ml-1 mr-6 sm:mr-3 text-xl" />
                            </Link>
                        </div>

                </div>
            </Container>
        </motion.div>
    );
}
