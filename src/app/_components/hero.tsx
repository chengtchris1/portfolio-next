import Image from 'next/image';
import { FlipWords } from './filpWords';
import { BackgroundGradientAnimation } from './animatedGradient';
import bg from '@/assets/hero-bg.png';
const greetings = [
    'Hello,', // English
    'Hola,', // Spanish
    'Bonjour,', // French
    '你好,',
    'こんにちは,', // Japanese
    '안녕하세요,', // Korean
    'Xin chào,', // Vietnamese
];
export default function Hero() {
    return (
        <div className="flex items-start justify-center h-screen">
            <div className="absolute left-[62%] top-[60%] z-50 -translate-x-1/2 -translate-y-1/2 transform text-left text-6xl text-white mix-blend-screen md:left-[70%] lg:left-[70%] md:text-8xl lg:text-9xl w-screen">
                <div className="font-light tracking-tighter">
                    <div className="bg-transparent bg-clip-text text-transparent drop-shadow-2xl">
                        <div className="font-bold text-blue italic">
                            <FlipWords
                                className="opacity-60"
                                words={greetings}
                                duration={500}
                            />
                        </div>
                        <div className="bg-gradient-to-b from-teal-400/95 to-indigo-500/95  bg-clip-text text-transparent drop-shadow-2xl">
                            <div className="px-2 font-bold">I'm Chris.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-full bg-gradient-to-b from-indigo-700 to-black  flex items-center justify-center bg-clip-content">
                <div className="flex items-center justify-center w-5/6 mt-28 overflow-hidden  relative rounded-t-xl flex-col drop-shadow-lg">
                    <div className="bg-slate-950 flex items-start justify-start py-[1rem] gap-2 p-4 pl-5 w-full">
                        <div className="w-3 h-3  bg-red-500 transition duration-300 rounded-full"></div>
                        <div className="w-3 h-3   bg-yellow-500 transition duration-300 rounded-full"></div>
                        <div className="w-3 h-3   bg-green-500 rounded-full transition duration-300 "></div>
                    </div>
                    <div className="h-[82vh]">
                        <BackgroundGradientAnimation
                            gradientBackgroundStart="rgb(0,0,0)"
                            gradientBackgroundEnd="rgb(0,0,0)"
                            firstColor="20,184,166"
                            // secondColor="255,255,255"
                            thirdColor="20,184,166"
                            fifthColor="56,189,248"
                            fourthColor="127,0,255"
                            //pointerColor="255, 255, 255"
                            interactive={true}
                            blendingValue="screen"
                            size="70%"
                        >
                          <div className='flex'>
                            <Image
                                src={bg}
                                quality={100}
                                priority={true}
                                className="absolute h-full w-full object-fill"
                                alt={"hero bg"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black from-25% to-transparent"></div>
                            </div>
                        </BackgroundGradientAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}
