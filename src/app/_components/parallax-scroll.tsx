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
const gradientStyle = {
    background: 'linear-gradient(to right, blue, purple)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    display: 'inline-block',
  };
const gradients = [
  'from-teal-400 to-green-500',
  'from-pink-500 to-orange-400',
  'from-indigo-500 to-purple-600',
  'from-red-500 to-yellow-500',
  'from-lime-500 to-emerald-500',
  'from-cyan-500 to-blue-500',
  'from-violet-500 to-pink-500',
  'from-fuchsia-500 to-purple-600',
  'from-orange-400 to-red-500',
  'from-green-500 to-lime-400',
  'from-blue-500 to-purple-500',
'from-yellow-400 to-orange-500',
  'from-purple-400 to-pink-500',
  'from-green-400 to-cyan-500',
  'from-blue-400 to-indigo-500',
  'from-red-400 to-pink-500',
  'from-teal-500 to-green-600',
  'from-purple-500 to-indigo-600',
];
let lastUsedGradientIndex = 0

const IconCard = ({ icon, label }: { icon: any; label: string }) => {
    const gradientBg= `flex h-[150px] max-w-4xl flex-col items-center justify-center rounded-b-xl bg-gradient-to-r ${gradients[lastUsedGradientIndex]} sm:h-[200px] text-white text-center`;

    lastUsedGradientIndex = (lastUsedGradientIndex + 1) % gradients.length;
    return (
        <div className='mockup-window border border-gray-600 drop-shadow-xl'>
            <div className={gradientBg}>
                <div className="text-5xl text-white drop-shadow-2xl p-0 m-0">{icon}</div>
                <div className='p-0'>{label}</div>
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
        [0, 200]
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
