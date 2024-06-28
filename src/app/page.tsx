import Container from '@/app/_components/container';
import { HeroPost } from '@/app/_components/hero-post';
import { Intro } from '@/app/_components/intro';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPortfolio } from '@/lib/api';
import Hero3DCanvas from '@/app/_components/hero3d';
import Carausel from './_components/carausel';
import Image from 'next/image';
import bg from '@/assets/hero-bg.png';
import { BackgroundGradientAnimation } from './_components/animatedGradient';
import { ParallaxScroll } from './_components/parallax-scroll';
import { Metadata } from 'next';
export default function Index() {
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
                    size="100%"
                >
                    <div className="absolute left-[40%] top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform text-left text-8xl text-white mix-blend-screen md:left-[42%] lg:left-[50%] lg:text-9xl">
                        <div className="font-light tracking-tighter">
                            <div className="bg-gradient-to-t from-teal-400/95 to-indigo-500/95 bg-clip-text text-transparent drop-shadow-2xl">
                                <div className="font-bold italic">Hi.</div>
                                <div className="italic">I'm Chris.</div>
                            </div>
                        </div>
                    </div>
                    <Image
                        className="opacity-90"
                        src={bg}
                        quality={100}
                        priority={true}
                        fill
                    />
                </BackgroundGradientAnimation>
            </div>

            <div className="w-full bg-white text-black">
                <Container>
                    <Intro />
                </Container>
            </div>
            <div className="flex flex-col text-white">
                <Container>
                    <h1 className="text-6xl font-bold">Some tech I used</h1>
                    <div className="relative flex h-[900px] flex-row items-center justify-center overflow-hidden sm:h-[1050px]">
                        <ParallaxScroll images={images} />
                        <div className="absolute inset-0 h-1/6 bg-gradient-to-b from-black"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black"></div>
                    </div>
                </Container>
            </div>
            <div className="bg-black text-white">
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
