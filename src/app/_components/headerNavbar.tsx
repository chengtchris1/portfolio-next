import { motion, useTransform, type MotionValue } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
function HeaderNavbar({
    scrollYProgress,
    isHome,
}: {
    scrollYProgress: MotionValue<number>;
    isHome: boolean | null;
}) {
    const [isMounting, setIsMounting] = useState<boolean>(true);
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.11, 0.14],
        ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']
    );
    useEffect(() => {
        setIsMounting(false);
    }, []);
    return (
        <div className="fixed h-10 w-screen px-0 mx-0 -mt-0.5 z-[1000]">
            <motion.div
                className="mx-0 w-full py-5 px-10 z-[1000] flex-row flex justify-between items-center backdrop-blur-none grid-cols-3 gap-0 drop-shadow"
                style={
                    isMounting
                        ? { backgroundColor: 'rgba(0, 0, 0, 0)' }
                        : isHome
                          ? { backgroundColor }
                          : { backgroundColor: 'rgba(0, 0, 0, 1)' }
                }
            >
                <div className="ml-0 sm:ml-10 w-full col-span-1 small-caps font-bold">
                    <Link href={'/'}>
                        <span className="hidden md:flex text-3xl  hover:no-underline tracking-widest">
                            Chris Cheng._
                        </span>
                        <span className="flex md:hidden text-xl  hover:no-underline min-w-36 tracking-widest">
                            Chris Cheng._
                        </span>
                    </Link>
                </div>
                <div className="flex items-center justify-end sm:justify-center font-bold w-full col-span-2 sm:col-span-1 tracking-widest text-lg uppercase text-sm">
                    <div className="hidden sm:flex justify-center ml-3 sm:ml-5">
                        <Link href="/#aboutme" scroll>
                            <span className="tracking-[0.25rem]">//</span>About
                        </Link>
                    </div>
                    <div className="flex justify-center ml-3 sm:ml-5 small-caps">
                        <Link href="/#portfolio" scroll>
                            <span className="tracking-[0.25rem]">//</span>
                            Portfolio
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 w-full hidden md:flex"></div>
            </motion.div>
        </div>
    );
}
export default HeaderNavbar;
