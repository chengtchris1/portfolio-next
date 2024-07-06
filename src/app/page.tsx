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
import Hero from './_components/hero';
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
            <div className="bg-dark-gradient m-0 flex h-full flex-col-reverse items-center justify-center bg-sky-600 bg-cover bg-center bg-no-repeat object-cover sm:flex-row mb-0">
                <Hero />
            </div>

            <div className="w-full bg-white text-black">
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
