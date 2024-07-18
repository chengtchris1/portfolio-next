'use client';
import bg from '@/assets/hero-bg.png';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { BackgroundGradientAnimation } from './animatedGradient';
import { FlipWords } from './filpWords';
const inter = Inter({ subsets: ['latin'] });
export default function Hero() {
    const greetings = [
        'Hello,', // English
        'Hola,', // Spanish
        'Bonjour,', // French
        '你好,',
        'こんにちは,', // Japanese
        '안녕하세요,', // Korean
        'Xin chào,', // Vietnamese
    ];
    const [isPaused, setIsPaused] = useState(false);
    return (
        <>
            <label className="swap ml-8 sm:ml-[4.5rem] mb-16 z-[10] absolute left-0 bottom-0 hover:bg-white hover:text-black py-1 px-2 rounded-xl transition duration-300">
                <input
                    type="checkbox"
                    checked={isPaused}
                    onChange={() => setIsPaused(!isPaused)}
                />
                <div className="swap-on flex items-center justify-center w-20 rounded-xl">
                    PLAY
                    <FaPlay className="ml-4" />
                </div>
                <div className="swap-off flex items-center justify-center w-20 rounded-xl">
                    PAUSE
                    <FaPause className="ml-4" />
                </div>
            </label>

            <BackgroundGradientAnimation
                gradientBackgroundStart="rgb(0,0,0)"
                gradientBackgroundEnd="rgb(0,0,0)"
                firstColor="20,184,166"
                // secondColor="255,255,255"
                thirdColor="20,184,166"
                fifthColor="56,189,248"
                fourthColor="127,0,255"
                //pointerColor="255, 255, 255"
                blendingValue="color-dodge"
                size="90%"
                isPaused={isPaused}
            >
                <div className="absolute left-[58%] top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform text-left text-6xl text-white mix-blend-screen md:left-[70%] lg:left-[70%] md:text-8xl lg:text-9xl w-screen">
                    <div className="font-light tracking-tighter">
                        <div className="bg-transparent bg-clip-text text-transparent drop-shadow-2xl">
                            <div
                                className={cn(
                                    inter.className,
                                    'font-bold text-blue italic'
                                )}
                            >
                                <FlipWords
                                    className="opacity-60"
                                    words={greetings}
                                    duration={500}
                                    isPaused={isPaused}
                                />
                            </div>
                            <div className="bg-gradient-to-b from-teal-400/95 to-indigo-500/95  bg-clip-text text-transparent drop-shadow-2xl">
                                <div className="px-2 font-bold">I'm Chris.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    className="opacity-60"
                    src={bg}
                    quality={100}
                    priority={true}
                    alt="Hero Background"
                    fill
                />
            </BackgroundGradientAnimation>
        </>
    );
}
