'use client';
import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import Avatar from './avatar';
import CoverImageCarausel from './CoverImageCarausel';
import DateFormatter from './date-formatter';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Navigation,
    Pagination,
    Scrollbar,
    EffectCoverflow,
    Autoplay,
    EffectCards,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
            <h3 className="mb-3 text-3xl leading-snug">
                <Link href={`/portfolio/${slug}`} className="hover:underline">
                    {title}
                </Link>
            </h3>

            <div className="mb-4 text-lg">
                <TechStack techStack={techStack} />
            </div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
        </div>
    );
}
