import { Post } from '@/interfaces/post';
import { PostPreview } from './post-preview';

type Props = {
    posts: Post[];
};

export function MoreStories({ posts }: Props) {
    return (
        <section>
            <h2 className="mt-4 text-6xl font-bold leading-tight tracking-tighter sm:mb-[-10px] sm:mt-8">
                Portfolio
            </h2>
            <div className="mb-32 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:gap-x-32">
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                        techStack={post.techStack}
                    />
                ))}
            </div>
        </section>
    );
}
