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
    const morePosts = allPosts.slice(1);


const images = [
  1,2,3,4,5,6,7,8,9,10,11,12
];

    return (
        <main>

            <div
                className="m-0 mb-0 flex h-fit flex-col-reverse items-center justify-center bg-black bg-cover bg-center bg-no-repeat object-cover sm:h-screen sm:flex-row bg-dark-gradient "

            >   <BackgroundGradientAnimation
                    gradientBackgroundStart='rgb(0,0,0)'
                    gradientBackgroundEnd='rgb(0,0,0)'

                    firstColor='20,184,166'
                    secondColor='255,255,255'
                    thirdColor='255,192,203'
                    fifthColor='56,189,248'
                    fourthColor='127,0,255'
                    pointerColor='20,184,166'

                    interactive={true}
                    size="40%">
                <div className="absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-left text-9xl text-white">
                    <h1 className="font-light tracking-tighter">
                        <p className='bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20'>
                        <span className="font-bold italic">Hi.</span>
                        <br />
                        <span className="italic">I'm Chris.</span>
                        </p>
                    </h1>
                </div>
                <Image
                className='contrast-more-50 filter brightness-200 opacity-30'
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
            <div className='flex flex-col text-white'>
            <Container>
            <h1 className='text-6xl font-bold'>Some tech I used</h1>
                <div className='flex flex-row gap-10 overflow-hidden h-[1650px] sm-h-[1700px]'>
                <ParallaxScroll images={images}/>
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
