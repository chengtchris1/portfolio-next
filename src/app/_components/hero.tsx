import bg from '@/assets/hero-bg.png';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './animatedGradient';
import { FlipWords } from './filpWords';
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
        <div className="flex items-start justify-center h-screen overflow-hidden">
            <div className="absolute left-[56%] top-[60%] z-50 -translate-x-1/2 -translate-y-1/2 transform text-left text-6xl text-white mix-blend-screen md:left-[60%] lg:left-[60%] md:text-8xl lg:text-9xl w-[90%] max-w-[80%] px-0 mx-0">
                <div className="font-light tracking-tighter">
                    <div className="bg-transparent bg-clip-text text-transparent drop-shadow-2xl">
                        {/*<div className="font-bold text-blue italic ">
                            <FlipWords
                                className="opacity-60 "
                                words={greetings}
                                duration={500}
                            />
                        </div>
                        <div className="bg-gradient-to-b from-teal-400/95 to-indigo-500/95  bg-clip-text text-transparent drop-shadow-2xl">
                            <div className="px-2 font-bold">I'm Chris.</div>
                        </div>
*/}
                    </div>
                </div>
            </div>
            <div className="absolute w-full bg-gradient-to-b from-blue-600 to-black  flex items-center justify-center bg-clip-content">
                <div className="flex items-center justify-center w-5/6 mt-28 overflow-hidden  relative rounded-t-xl flex-col drop-shadow-2xl">
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
                            <Image
                                src={bg}
                                quality={100}
                                priority={true}
                                className="absolute h-full w-full object-fill mix-blend-screen opacity-90"
                                alt={'hero bg'}
                            />
                            <div className="flex text-white items-center justify-center h-full">
                                <div className="absolute inset-0 bg-gradient-to-t from-black from-25% to-transparent text-white flex flex-col justify-center items-center  first-letter:  z-30 text-5xl sm:text-7xl lg:text-9xl mix-blend-screen w-full bg-red-700">
                                    <div className="font-bold m-0   bg-transparent -mt-96 sm:-mt-96 px-8 sm:px-32 p-2 w-full bg-green-500 flex flex-col items-center justify-center">
                                      <div className='flex flex-col items-start w-5/6'>
                                        <FlipWords
                                            className="opacity-60 "
                                            words={greetings}
                                            duration={500}
                                        />
                                        <div className="bg-gradient-to-b from-teal-400/95 to-indigo-500/95  bg-clip-text text-transparent drop-shadow-2xl">
                                            <div className="px-2 font-bold">
                                                I'm Chris.
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BackgroundGradientAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}
