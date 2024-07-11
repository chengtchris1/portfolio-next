'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function HeaderNavbar(ref) {
    const { scrollYProgress } = useScroll();
    const path = usePathname();
    const isHome = path === '/';
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.12, 0.15],
        ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']
    );
    return (
        <div className="fixed h-10 w-screen px-0 mx-0 z-[1000]">
            <motion.div
                className="mx-0 w-full py-5 px-10 z-[1000] flex-row flex justify-between items-center backdrop-blur-none grid-cols-3 gap-0 drop-shadow"
                style={{ backgroundColor }}
            >
                <div className="ml-0 sm:ml-10 w-full col-span-1">
                    <Link href={'/'}>
                        <span className="hidden sm:flex text-2xl font-bold font-mono  hover:no-underline">
                            Chris Cheng._
                        </span>
                        <span className="flex sm:hidden text-xl font-bold font-mono  hover:no-underline min-w-36">
                            Chris Cheng._
                        </span>
                    </Link>
                </div>
                <div className="flex items-center justify-end sm:justify-center font-mono w-full col-span-2 sm:col-span-1 ">
                    <div className="hidden sm:flex justify-center m;-3 sm:ml-5">
                        <Link href="/#aboutme" scroll>
                            //About
                        </Link>
                    </div>
                    <div className="flex justify-center ml-3 sm:ml-5">
                        <Link href="/#portfolio" scroll>
                            //Portfolio
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 w-full hidden md:flex"></div>
            </motion.div>
        </div>
    );
}
export default HeaderNavbar;
