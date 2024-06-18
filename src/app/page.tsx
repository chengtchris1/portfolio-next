import Container from '@/app/_components/container';
import { HeroPost } from '@/app/_components/hero-post';
import { Intro } from '@/app/_components/intro';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts } from '@/lib/api';
import Hero3DCanvas from '@/app/_components/hero3d';
import Carausel from './_components/carausel';
export default function Index() {
    const allPosts = getAllPosts();

    const heroPost = allPosts[0];

    const morePosts = allPosts.slice(1);

    return (
        <main>
            <div
                className="hero m-0 mb-0 flex h-fit flex-col-reverse items-center justify-center bg-black bg-cover bg-center bg-no-repeat object-cover sm:h-screen sm:flex-row"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0,0.1)), url(/assets/hero-bg.png)`,
                }}
            >
                <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform text-left text-9xl text-white">
                    <h1 className="font-light tracking-tighter">
                        <span className="font-bold italic">Hi.</span>
                        <br />
                        <span className="italic">I'm Chris.</span>
                    </h1>
                </div>

                <div className="z-1 h-screen w-screen cursor-move">
                    <Hero3DCanvas />
                </div>
            </div>

            <div className="w-full bg-white text-black">
                <Container>
                    <Intro />
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
