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
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
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
                        <div className="mockup-window mb-6 flex h-full w-full items-center justify-center overflow-clip border border-gray-600 bg-slate-900">
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
