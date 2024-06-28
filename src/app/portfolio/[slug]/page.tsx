import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPortfolio, getPortfolioBySlug } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';
import Container from '@/app/_components/container';
import Header from '@/app/_components/header';
import { PostBody } from '@/app/_components/post-body';
import { PostHeader } from '@/app/_components/post-header';

export default async function Post({ params }: Params) {
    const post = getPortfolioBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || '');

    return (
        <main className='p-10'>
            <Container>
                <Header text={'Portfolio.'} />
                <article className="mb-32">
                    <PostHeader
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        techStack={post.techStack}
                    />
                    <PostBody content={content} />
                </article>
            </Container>
        </main>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: Params): Metadata {
    const post = getPortfolioBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const title = `${post.title} | Chris Cheng's Portfolio`;

    return {
        title,
        openGraph: {
            title,
            images: [post.ogImage.url],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPortfolio();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
