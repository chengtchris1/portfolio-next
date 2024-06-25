"use client"
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
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
import './carauselStyles.css';
import { useEffect } from 'react';
type Props = {
    title: string;
    src: string | [string];
    slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
const images = Array.isArray(src) ? src : [src];
const carausel = (<Swiper
            className="w-full flex items-center justify-center"
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
                {images.map((src, i) =>{
                return (<SwiperSlide>
                    <div className="flex h-full w-full overflow-clip items-center justify-center">
                    <div className='mb-12 w-[1300px] rounded-2xl overflow-clip'>
                            <Image
                                src={src}
                                alt={title}
                                width={1300}
                                height={630}
                                loading='lazy'
                                key={i}
                            />
                            </div>
                    </div>
                </SwiperSlide>)}
                )}


            </Swiper>
            )

    return (
        <div className="sm:mx-0">
            {slug ? (
                <>
                    {carausel}
                </>
            ) : (
                <>
                {carausel}
                </>
            )}
        </div>
    );
};

export default CoverImage;
