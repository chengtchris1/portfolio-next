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
        <div>
            <div className="mb-1">
                {
                    <CoverImageCarausel
                        slug={slug}
                        title={title}
                        src={coverImage}
                    />
                }
            </div>
            <h2 className="mb-3 text-5xl leading-snug font-bold">
                <Link href={`/portfolio/${slug}`} className="hover:underline">
                    {title}
                </Link>
            </h2>

            <div className="mb-4 text-lg">
                <TechStack techStack={techStack} />
            </div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
            <div>
                <Link href={`/portfolio/${slug}`}>
                    <button className="rounded-2xl border p-2 text-sm transition duration-300 hover:bg-white hover:text-black">
                        <div className="flex items-center space-x-1">
                            <span>More details</span>
                            <FaChevronCircleRight />
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
}
