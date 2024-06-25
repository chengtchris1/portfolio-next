'use client';
import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import Avatar from './avatar';
import CoverImage from './cover-image';
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
type Props = {
    title: string;
    coverImage: string | [string];
    author: Author;
    slug: string;
};

export function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) {
    return (
        <div>
            <div className="mb-5">
                {<CoverImage slug={slug} title={title} src={coverImage} />}

            </div>
            <h3 className="mb-3 text-3xl leading-snug">
                <Link href={`/posts/${slug}`} className="hover:underline">
                    {title}
                </Link>
            </h3>
            <div className="mb-4 text-lg">
                <DateFormatter dateString={date} />
            </div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
        </div>
    );
}
