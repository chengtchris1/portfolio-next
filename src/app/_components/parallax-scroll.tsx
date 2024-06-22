'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiFramer,
    SiAlteryx,
    SiPowerautomate,
    SiStyledcomponents,
    SiAxios,
    SiSupabase,
    SiRailway,
    SiDask,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { DiMysql } from 'react-icons/di';
import { GrSwift } from 'react-icons/gr';
import { TbBrandThreejs } from 'react-icons/tb';

const icons = [{ icon: SiTailwindcss, label: 'TailwindCSS' }];

const IconCard = ({ icon, label }: { icon: any; label: string }) => {
    return (
        <div className="flex h-[300px] max-w-4xl items-center justify-center rounded-xl bg-white text-black">
            Test
        </div>
    );
};

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll({
        offset: ['start start', 'end start'], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0.3, 1], [0, -300]);
    const translateSecond = useTransform(scrollYProgress, [0.3, 1], [0, 300]);
    const translateThird = useTransform(scrollYProgress, [0.3, 1], [0, -300]);

    const third = Math.ceil(images.length / 3);

    const firstPart = [1, 2, 3];
    const secondPart = [1, 2];
    const thirdPart = [1, 2, 3];

    return (
        <div
            id="parallax-scroll"
            className={cn('h-[40rem] w-full items-start', className)}
        >
            <div className="mx-auto grid max-w-5xl items-start gap-1 md:gap-5 lg:gap:10 sm:px-10 pt-20 grid-cols-3">
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={'grid-1' + idx}
                        >
                            <IconCard />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={'grid-2' + idx}
                        >
                            <IconCard />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={'grid-3' + idx}
                        >
                            <IconCard />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
