import Container from '@/app/_components/container';
import { Intro } from '@/app/_components/intro';
import { MoreStories } from '@/app/_components/more-stories';
import bg from '@/assets/hero-bg.png';
import { getAllPortfolio } from '@/lib/api';
import { Metadata } from 'next';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './_components/animatedGradient';
import { FlipWords } from './_components/filpWords';
import { ParallaxScroll } from './_components/parallax-scroll';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { cn } from '@/lib/utils';
export default function Index() {
    const greetings = [
        'Hello,', // English
        'Hola,', // Spanish
        'Bonjour,', // French
        '你好,',
        'こんにちは,', // Japanese
        '안녕하세요,', // Korean
        'Xin chào,', // Vietnamese
    ];
    const allPortfolioItems = getAllPortfolio();
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <main>
            <div className="bg-dark-gradient m-0 mb-0 flex h-fit flex-col-reverse items-center justify-center bg-black bg-cover bg-center bg-no-repeat object-cover sm:h-screen sm:flex-row">
                {' '}
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
                    blendingValue="color-dodge"
                    size="90%"
                >
                    <div className="absolute left-[58%] top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform text-left text-6xl text-white mix-blend-screen md:left-[70%] lg:left-[70%] md:text-8xl lg:text-9xl w-screen">
                        <div className="font-light tracking-tighter">
                            <div className="bg-transparent bg-clip-text text-transparent drop-shadow-2xl">
                                <div className={cn(inter.className, "font-bold text-blue italic")}>
                                    <FlipWords
                                        className="opacity-60"
                                        words={greetings}
                                        duration={500}
                                    />
                                </div>
                                <div className="bg-gradient-to-b from-teal-400/95 to-indigo-500/95  bg-clip-text text-transparent drop-shadow-2xl">
                                    <div className="px-2 font-bold">
                                        I'm Chris.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image
                        className="opacity-60"
                        src={bg}
                        quality={100}
                        priority={true}
                        fill
                    />
                </BackgroundGradientAnimation>
            </div>

            <div id="aboutme" className="w-full bg-white text-black">
                <Container className="mb-0 pb-0">
                    <Intro />
                </Container>
            </div>
            <Container>
                <div className="m-0 w-full p-0">
                    <h1 className="w-full p-5 pb-0 pl-0 pt-0 text-6xl font-bold leading-tight tracking-tighter md:w-auto md:min-w-96 md:pr-8">
                        Some Tech I Used
                    </h1>
                </div>
            </Container>
            <div className="flex flex-col text-white w-full overflow-hidden items-center justify-center">
                <Container className="pt-0 mt-0 pl-0 ml-[-0.7rem] sm:ml-0 w-[110%] sm:w-ful sm:m-0 sm:p-0 flex flex-col justify-center items-center">
                    <div className="relative flex h-[1220px] flex-row justify-center sm:h-[1700px] w-full">
                        <ParallaxScroll images={images} />
                        <div
                            style={{ pointerEvents: 'none' }}
                            className="z-20 absolute inset-0 h-1/6 bg-gradient-to-b from-black"
                        ></div>
                        <div
                            style={{ pointerEvents: 'none' }}
                            className="z-20 absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black"
                        ></div>
                    </div>
                </Container>
            </div>
            <div id="portfolio" className="bg-black text-white">
                <Container>
                    {/*<HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />*/}
                    {allPortfolioItems.length > 0 && (
                        <MoreStories posts={allPortfolioItems} />
                    )}
                </Container>
            </div>
        </main>
    );
}
export function generateMetadata({ params }: Params): Metadata {
    const title = `Chris Cheng | Fullstack Dev`;

    return {
        title,
    };
}
