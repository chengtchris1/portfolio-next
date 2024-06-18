'use client';
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
export default function Carausel() {
    return (
        <div className="max-w-96">
            <Swiper
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                effect={'cards'}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                modules={[Pagination, Scrollbar, Autoplay, EffectCards]}
                pagination={{ clickable: true }}
                loop={false}
                autoHeight={true}
                grabCursor={true}
                cardsEffect={{
                    slideShadows: false,
                    perSlideOffset: 10,
                    perSlideRotate: 10, // Space between cards in px perSlideRotate: 1, // Rotation of cards in degrees
                }}
                style={
                    {
                        '--swiper-pagination-color': '#000000',
                    } as React.CSSProperties
                }
                // scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-green-400 to-blue-600 drop-shadow-md">
                            <img
                                className="p-0"
                                src={'/assets_new/portrait.png'}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-orange-400 to-red-600 drop-shadow-md">
                            <img
                                className="p-0"
                                src={'/assets_new/portrait.png'}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-white to-black drop-shadow-md">
                            <img
                                className="p-0"
                                src={'/assets_new/portrait.png'}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
