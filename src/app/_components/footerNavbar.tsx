import { motion, useTransform, type MotionValue } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
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
            className="fixed bottom-0 z-[1000] flex h-10 w-screen flex-row items-center justify-end "
            style={
                isHome
                    ? { backgroundColor }
                    : { backgroundColor: 'rgba(0, 0, 0, 1)' }
            }
        >
            <Container className="flex justify-end font-semibold tracking-widest uppercase text-sm">
                <div className="flex flex-row items-center justify-end  ml-3 sm:ml-5 mr-6 sm:mr-16 md:mr-0">
                    <Link href={'https://www.linkedin.com/in/chengtchris/'}>
                        <div className="flex items-center justify-center mr-2">
                            <span className="ml-3"><span className='tracking-[0.25rem] up'>//</span>LinkedIn</span>
                            <FaLinkedin className="ml-1 text-xl" />
                        </div>
                    </Link>
                    <Link href={'https://github.com/chengtchris1'}>
                        <div className="flex items-center justify-center">
                            <span className="ml-3"><span className='tracking-[0.25rem]'>//</span>Github</span>
                            <LuGithub className="ml-1 text-xl" />
                        </div>
                    </Link>
                </div>
            </Container>
        </motion.div>
    );
}
