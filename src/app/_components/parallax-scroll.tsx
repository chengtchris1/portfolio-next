'use client';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DiMysql } from 'react-icons/di';
import { FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa6';
import { GrSwift } from 'react-icons/gr';
import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import {
    SiAlteryx,
    SiAxios,
    SiDask,
    SiExpress,
    SiFramer,
    SiMongodb,
    SiPowerautomate,
    SiRailway,
    SiStyledcomponents,
    SiSupabase,
    SiTailwindcss,
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

let gradients = [
    'from-purple-600 to-indigo-800', // Purple to Indigo
    'from-cyan-600 to-blue-800', // Cyan to Blue
    'from-teal-500 to-green-800', // Teal to Green
    'from-pink-600 to-purple-800', // Pink to Purple
    'from-sky-500 to-cyan-700', // Sky to Cyan
    'from-red-500 to-pink-700',
    'from-cyan-500 to-blue-700', // Cyan to Blue
    'from-blue-500 to-purple-600', // Orange to Red //Express
    'from-lime-500 to-green-700', // Lime to Green
    'from-purple-500 to-pink-800', // Purple to Pink
    'from-blue-700 to-sky-800', // Teal to Cyan
    'from-yellow-500 to-orange-700',
    'from-blue-500 to-indigo-700', // Blue to Indigo
    'from-purple-400 to-orange-600', // Yellow to Orange
    'from-purple-600 to-indigo-800', // Purple to Indigo
    'from-green-500 to-teal-700', // Green to Teal
    'from-pink-500 to-purple-700', // Pink to Purple
    'from-cyan-600 to-blue-700', // Cyan to Blue
    'from-red-500 to-pink-600', // Orange to Red
    'from-blue-600 to-teal-700', // Teal
];

const IconCard = ({
    icon,
    label,
    color,
}: {
    icon: any;
    label: string;
    color: string;
}) => {
    const gradientBg = `flex h-[150px] max-w-4xl flex-col items-center justify-center rounded-b-xl bg-gradient-to-r ${color} sm:h-[200px] text-white text-center`;

    return (
        <div className="group rounded-xl  bg-slate-900 drop-shadow-xl border-black border-2 hover:border-slate-800 transition duration-300">
            <div className="flex items-start justify-start gap-[0.33rem] py-[.66rem] sm:gap-2 p-2 pl-[.85rem] sm:p-4 sm:pl-5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 group-hover:bg-red-500 transition duration-300 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 group-hover:bg-yellow-500 transition duration-300 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 group-hover:bg-green-500 rounded-full transition duration-300 "></div>
            </div>
            <div className={gradientBg}>
                <div className="m-0 p-0 text-5xl text-white drop-shadow-2xl">
                    {icon}
                </div>
                <div className="flex px-[0.75rem] sm:px-0 sm:p-0">{label}</div>
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
        [0.18, 0.7],
        [0, -200]
    );
    const translateSecond = useTransform(
        scrollYProgress,
        [0.18, 0.7],
        [0, 151]
    );
    const translateThird = useTransform(
        scrollYProgress,
        [0.18, 0.7],
        [0, -200]
    );
    const firstPart = icons.slice(0, 7);
    const secondPart = icons.slice(7, 13);
    const thirdPart = icons.slice(13);
    const gradients1 = gradients.slice(0, 7);
    const gradients2 = gradients.slice(7, 13);
    const gradients3 = gradients.slice(13);

    return (
        <div
            id="parallax-scroll"
            className={cn('h-[80rem] w-full items-start', className)}
        >
            <div className="lg:gap:10 mx-auto grid max-w-5xl grid-cols-3 items-start gap-[5px] md:gap-5">
                <div className="lg:gap:10 grid gap-[5px] p-0 md:gap-5">
                    {firstPart.map((el, idx) => {
                        return (
                            <motion.div
                                style={{ y: translateFirst }} // Apply the translateY motion value here
                                key={'grid-1' + idx}
                            >
                                <IconCard
                                    icon={el.component}
                                    label={el.name}
                                    color={gradients1[idx]}
                                />
                            </motion.div>
                        );
                    })}
                </div>
                <div className="lg:gap:10 grid gap-[5px] p-0 md:gap-5">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={'grid-2' + idx}
                        >
                            <IconCard
                                icon={el.component}
                                label={el.name}
                                color={gradients2[idx]}
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="lg:gap:10 grid gap-[5px] p-0 md:gap-5">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={'grid-3' + idx}
                        >
                            <IconCard
                                icon={el.component}
                                label={el.name}
                                color={gradients3[idx]}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
