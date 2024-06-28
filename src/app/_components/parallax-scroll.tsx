'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
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

let gradients = [
    'from-blue-600 to-teal-700', // Teal
    'from-orange-400 to-red-700', // Orange to Red
    'from-cyan-600 to-blue-700', // Cyan to Blue
    'from-pink-500 to-purple-700', // Pink to Purple
    'from-lime-500 to-green-700', // Lime to Green
    'from-purple-600 to-indigo-800', // Purple to Indigo
    'from-purple-400 to-orange-600', // Yellow to Orange
    'from-blue-500 to-indigo-700', // Blue to Indigo
    // Red to Pink ///
    'from-yellow-500 to-orange-700',
    'from-blue-700 to-sky-800', // Teal to Cyan
    'from-purple-500 to-pink-800', // Purple to Pink
    'from-green-500 to-teal-700', // Green to Teal
    'from-blue-500 to-purple-600', // Orange to Red //Express
    'from-cyan-500 to-blue-700', // Cyan to Blue

    'from-red-500 to-pink-700',

    // Yellow to Orange ///
    'from-sky-500 to-cyan-700', // Sky to Cyan
    'from-pink-600 to-purple-800', // Pink to Purple
    'from-teal-500 to-green-800', // Teal to Green
    'from-cyan-600 to-blue-800', // Cyan to Blue
    'from-purple-600 to-indigo-800', // Purple to Indigo
].reverse();


let lastUsedGradientIndex = 0;

const IconCard = ({ icon, label }: { icon: any; label: string }) => {
    const gradientBg = `flex h-[150px] max-w-4xl flex-col items-center justify-center rounded-b-xl bg-gradient-to-r ${gradients[lastUsedGradientIndex]} sm:h-[200px] text-white text-center`;

    lastUsedGradientIndex = (lastUsedGradientIndex + 1) % gradients.length;
    return (
        <div className="mockup-window border border-gray-600 bg-slate-900 drop-shadow-xl">
            <div className={gradientBg}>
                <div className="m-0 p-0 text-5xl text-white drop-shadow-2xl">
                    {icon}
                </div>
                <div className="p-0">{label}</div>
            </div>
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
    const icons = [
        {
            component: <IoLogoJavascript className="" />,
            name: 'JavaScript',
        },
        { component: <IoLogoReact className="" />, name: 'React' },
        { component: <FaJava className="" />, name: 'Java' },
        { component: <FaPython className="" />, name: 'Python' },
        {
            component: <SiDask className="" />,
            name: 'Dask Dataframe',
        },
        { component: <GrSwift className="" />, name: 'Swift' },
        {
            component: <SiTailwindcss className="" />,
            name: 'Tailwind CSS',
        },
        {
            component: <SiExpress className="" />,
            name: 'Express.js',
        },
        { component: <SiMongodb className="" />, name: 'MongoDB' },
        { component: <SiAxios className="" />, name: 'Axios' },
        {
            component: <SiFramer className="" />,
            name: 'Framer Motion',
        },
        { component: <FaAws className="" />, name: 'AWS' },
        { component: <FaGitAlt className="" />, name: 'Git' },
        { component: <DiMysql className="" />, name: 'MySQL' },
        { component: <SiAlteryx className="" />, name: 'Alteryx' },
        {
            component: <SiPowerautomate className="" />,
            name: 'Power Automate',
        },
        {
            component: <SiStyledcomponents className="" />,
            name: 'Styled\nComponents',
        },
        {
            component: <SiSupabase className="" />,
            name: 'Supabase',
        },
        {
            component: <SiRailway className="" />,
            name: 'Railway',
        },
        {
            component: <TbBrandThreejs className="" />,
            name: 'Three.js',
        },
    ];
    const translateFirst = useTransform(
        scrollYProgress,
        [0.23, 0.7],
        [0, -200]
    );
    const translateSecond = useTransform(
        scrollYProgress,
        [0.23, 0.7],
        [0, 152]
    );
    const translateThird = useTransform(
        scrollYProgress,
        [0.23, 0.7],
        [0, -200]
    );

    const third = Math.ceil(images.length / 3);

    const firstPart = icons.slice(0, 7);
    const secondPart = icons.slice(7, 13);
    const thirdPart = icons.slice(13);

    return (
        <div
            id="parallax-scroll"
            className={cn('h-[80rem] w-full items-start', className)}
        >
            <div className="lg:gap:10 mx-auto grid max-w-5xl grid-cols-3 items-start gap-[5px] md:gap-5">
                <div className="lg:gap:10 grid gap-[5px] p-0 md:gap-5">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={'grid-1' + idx}
                        >
                            <IconCard icon={el.component} label={el.name} />
                        </motion.div>
                    ))}
                </div>
                <div className="lg:gap:10 grid gap-[5px] p-0 md:gap-5">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={'grid-2' + idx}
                        >
                            <IconCard icon={el.component} label={el.name} />
                        </motion.div>
                    ))}
                </div>
                <div className="lg:gap:10 grid gap-[5px] p-0 md:gap-5">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={'grid-3' + idx}
                        >
                            <IconCard icon={el.component} label={el.name} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
