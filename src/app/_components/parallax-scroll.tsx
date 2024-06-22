'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaJava, FaPython, FaGitAlt } from "react-icons/fa";
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
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { GrSwift } from "react-icons/gr";
import { TbBrandThreejs } from "react-icons/tb";


const IconCard = ({ icon, label }: { icon: any; label: string }) => {
    return (
        <div className="flex  flex-col h-[150px] sm:h-[300px] max-w-4xl items-center justify-center rounded-xl bg-white text-black">
            <div className='text-5xl'>{icon}</div>
            <div>{label}</div>
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
      component: <IoLogoJavascript className="mx-2 sm:mx-10" />,
      name: "JavaScript",
    },
    { component: <IoLogoReact className="mx-2 sm:mx-10" />, name: "React" },
    { component: <FaJava className="mx-2 sm:mx-10" />, name: "Java" },
    { component: <FaPython className="mx-2 sm:mx-10" />, name: "Python" },
    { component: <SiDask className="mx-2 sm:mx-10" />, name: "Dask Dataframe" },
    { component: <GrSwift className="mx-2 sm:mx-10" />, name: "Swift" },
    {
      component: <SiTailwindcss className="mx-2 sm:mx-10" />,
      name: "Tailwind CSS",
    },
    { component: <SiExpress className="mx-2 sm:mx-10" />, name: "Express.js" },
    { component: <SiMongodb className="mx-2 sm:mx-10" />, name: "MongoDB" },
    { component: <SiAxios className="mx-2 sm:mx-10" />, name: "Axios" },
    {
      component: <SiFramer className="mx-2 sm:mx-10" />,
      name: "Framer Motion",
    },
    { component: <FaAws className="mx-2 sm:mx-10" />, name: "AWS" },
    { component: <FaGitAlt className="mx-2 sm:mx-10" />, name: "Git" },
    { component: <DiMysql className="mx-2 sm:mx-10" />, name: "MySQL" },
    { component: <SiAlteryx className="mx-2 sm:mx-10" />, name: "Alteryx" },
    {
      component: <SiPowerautomate className="mx-2 sm:mx-10" />,
      name: "PowerAutomate",
    },
    {
      component: <SiStyledcomponents className="mx-2 sm:mx-10" />,
      name: "Styled-Components",
    },
    {
      component: <SiSupabase className="mx-2 sm:mx-10" />,
      name: "Supabase",
    },
    {
      component: <SiRailway className="mx-2 sm:mx-10" />,
      name: "Railway",
    },
    {
      component: <TbBrandThreejs className="mx-2 sm:mx-10" />,
      name: "Three.js",
    },
  ];
    const translateFirst = useTransform(scrollYProgress, [0.2, 1], [0, -300]);
    const translateSecond = useTransform(scrollYProgress, [0.2, 1], [0, 300]);
    const translateThird = useTransform(scrollYProgress, [0.2, 1], [0, -300]);

    const third = Math.ceil(images.length / 3);

    const firstPart = icons.slice(0, 7);
    const secondPart = icons.slice(7, 13);
    const thirdPart = icons.slice(13);

    return (
        <div
            id="parallax-scroll"
            className={cn('h-[80rem] w-full items-start', className)}
        >
            <div className="mx-auto grid max-w-5xl items-start gap-1 md:gap-5 lg:gap:10 sm:px-10 pt-20 grid-cols-3">
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={'grid-1' + idx}
                        >
                            <IconCard icon={el.component} label={el.name}/>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={'grid-2' + idx}
                        >
                             <IconCard icon={el.component} label={el.name}/>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={'grid-3' + idx}
                        >
                             <IconCard icon={el.component} label={el.name}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
