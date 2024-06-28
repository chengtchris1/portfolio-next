import { PostTitle } from '@/app/_components/post-title';
import { type Author } from '@/interfaces/author';
import CoverImageCarausel from './CoverImageCarausel';
import TechStack from './techStack';
type Props = {
    title: string;
    coverImage: string;
    date: string;
    author: Author;
    techStack?: string[];
};

export function PostHeader({
    title,
    coverImage,
    date,
    author,
    techStack,
}: Props) {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="hidden md:mb-0 md:block">
                {/*<Avatar name={author.name} picture={author.picture} />*/}
                <TechStack techStack={techStack ?? []} />
            </div>
            <div className="mb-2 sm:mx-0 md:mb-2">
                <CoverImageCarausel title={title} src={coverImage} />
            </div>
            <div className="mx-auto max-w-2xl">
                <div className="mb-6 block md:hidden">
                    {/*<Avatar name={author.name} picture={author.picture} />*/}
                    <TechStack techStack={techStack ?? []} />
                </div>
                {/*
                <div className="mb-0 text-lg">
                    <DateFormatter dateString={date} />
                </div>
                */}
            </div>
        </>
    );
}
