import Container from '@/app/_components/container';
import { HeroPost } from '@/app/_components/hero-post';
import { Intro } from '@/app/_components/intro';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts } from '@/lib/api';
import Hero3DCanvas from '@/app/_components/hero3d';
import Carausel from './_components/carausel';
import Image from 'next/image';
import bg from '@/assets/hero-bg.png';
import { BackgroundGradientAnimation } from './_components/animatedGradient';
import { ParallaxScroll } from './_components/parallax-scroll';
export default function Index() {
    const allPosts = getAllPosts();
    const heroPost = allPosts[0];
    const morePosts = allPosts;
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
                    thirdColor="255,192,203"
                    fifthColor="56,189,248"
                    fourthColor="127,0,255"
                    pointerColor="20,184,166"
                    interactive={true}
                    blendingValue="color-burn"
                    //size="100%"
                >
                    <div className="absolute left-[40%] top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform text-left text-9xl text-white md:left-[50%]">
                        <h1 className="font-light tracking-tighter">
                            <div className="bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-transparent mix-blend-color-dodge drop-shadow-2xl">
                                <div className="font-bold italic">Hi.</div>
                                <div className="italic">I'm Chris.</div>
                            </div>
                        </h1>
                    </div>
                    <Image
                        className="opacity-80"
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
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </div>
        </main>
    );
}
