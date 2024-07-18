'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCards, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './carauselStyles.css';
type Props = {
    title: string;
    src: string | [string];
    slug?: string;
};

const CoverImageCarausel = ({ title, src, slug }: Props) => {
    const images = Array.isArray(src) ? src : [src];
    const carausel = (
        <Swiper
            className="flex w-full items-center justify-center"
            effect={'cards'}
            modules={[Pagination, Scrollbar, EffectCards]}
            pagination={{ clickable: true }}
            loop={false}
            autoHeight={true}
            grabCursor={true}
            cardsEffect={{
                slideShadows: false,
                perSlideOffset: 1,
                perSlideRotate: 0,
                rotate: true,
            }}

            // scrollbar={{ draggable: true }}
        >
            {images.map((src, i) => {
                return (
                    <SwiperSlide key={i}>
                        <div className="mb-6 flex flex-col rounded-xl h-full w-full items-center justify-center overflow-clip border border-none bg-slate-900">
                            <div className="flex w-full items-start justify-start gap-2 p-4 pl-5">
                                <div className="w-3 h-3 bg-gray-500 group-hover:bg-red-500 transition duration-300 rounded-full"></div>
                                <div className="w-3 h-3 bg-gray-500 group-hover:bg-yellow-500 transition duration-300 rounded-full"></div>
                                <div className="w-3 h-3 bg-gray-500 group-hover:bg-green-500 rounded-full transition duration-300 "></div>
                            </div>
                            <div className="aspect-[2/1] overflow-hidden">
                                <Image
                                    src={src}
                                    alt={title}
                                    width={1300}
                                    height={630}
                                    style={{
                                        objectFit: 'fill',
                                        padding: '1px',
                                    }}
                                    priority
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );

    return (
        <div className="sm:mx-0">
            {slug ? <>{carausel}</> : <>{carausel}</>}
        </div>
    );
};

export default CoverImageCarausel;
