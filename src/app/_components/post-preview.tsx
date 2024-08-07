'use client';
import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import { FaChevronCircleRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CoverImageCarausel from './CoverImageCarausel';
import TechStack from './techStack';

type Props = {
    title: string;
    coverImage: string | [string];
    author: Author;
    slug: string;
    techStack: string[];
};

export function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    techStack,
}: Props) {
    return (
        <div className="group relative mt-4 rounded-2xl bg-gradient-to-bl from-black to-slate-900 border-2 border-slate-900 hover:border-slate-800 transition duration-300">
            <div className="mb-1 -mt-11">
                {
                    <CoverImageCarausel
                        slug={slug}
                        title={title}
                        src={coverImage}
                    />
                }
            </div>
            <h2 className="mx-4 mb-3 text-5xl leading-snug font-bold">
                <Link href={`/portfolio/${slug}`} className="hover:underline">
                    {title}
                </Link>
            </h2>

            <div className="m-4 text-lg">
                <TechStack techStack={techStack} />
            </div>
            <p className="m-4 pb-4 text-lg leading-relaxed mb-16 flex items-start justify-center h-full">
                {excerpt}
            </p>
            <div className="absolute bottom-0 right-0 m-4">
                <Link href={`/portfolio/${slug}`}>
                    <button className="rounded-2xl border p-2 text-sm transition duration-300 hover:bg-white hover:text-black">
                        <div className="flex items-center space-x-1 p-0.5">
                            <span>More details</span>
                            <FaChevronCircleRight />
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
}
