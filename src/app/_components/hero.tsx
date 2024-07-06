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
        <div className="flex items justify-center h-[100vh] overflow-hidden">
            <div className="absolute w-full h-full bg-transparent from-blue-600 to-black flex items-center justify-center bg-clip-content">
                <div className="flex items-center justify-center w-5/6 h-5/6 overflow-hidden relative rounded-xl flex-col drop-shadow-2xl">
                    <div className="bg-slate-950 flex items-start justify-start py-[1rem] gap-2 p-4 pl-5 w-full mt-36 sm:mt-6 rounded-t-2xl">
                        <div className="w-3 h-3  bg-red-500 transition duration-300 rounded-full"></div>
                        <div className="w-3 h-3   bg-yellow-500 transition duration-300 rounded-full"></div>
                        <div className="w-3 h-3   bg-green-500 rounded-full transition duration-300 "></div>
                    </div>
                    <div className="">
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
                            blendingValue="screen "
                            size="70%"
                            containerClassName='h-[50vh] sm:[75vh] w-screen'
                        >
                            <div className='max-h-1/4'>
                            <Image
                                src={bg}
                                quality={100}
                                priority={true}
                                className="absolute object-fill mix-blend-screen opacity-100"
                                alt={'hero bg'}
                            />
                            </div>
                            <div className='absolute w-full h-full bg-gradient-to-b from-transparent to-black mix-blend-screen'></div>
                            <div className="flex text-white items-center justify-center h-full">

                                <div className="absolute inset-0 bg-gradient-to-t from-black from-0% to-transparent  text-white flex flex-col justify-center items-center z-30 text-6xl sm:text-7xl lg:text-9xl w-full mix-blend-screen bg-red-500">

                                      <div className='flex flex-col items-start justify-start w-5/6 tracking-tighter px:4 sm:px-24 font-bold'>
                                        <FlipWords
                                            className="opacity-60 tracking-[-0.07em]"
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
                        </BackgroundGradientAnimation>
                    </div>
                </div>
                <Image
                                src={bg}
                                quality={100}
                                priority={true}
                                className="-z-10"
                                alt={'hero bg'}
                                fill
                            />
            </div>
        </div>
    );
}

