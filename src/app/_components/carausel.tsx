'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCards, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import portraitLoc from '@/assets/portrait.png';
export default function Carausel() {
    //const portraitLoc = '/assets/portrait/portrait.png';
    return (
        <div className="max-w-[405px]">
            <Swiper
                id="portrait"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                effect={'cards'}
                initialSlide={3}
                modules={[Pagination, Scrollbar, EffectCards]}
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
                        '--swiper-pagination-color': '#000000 !important',
                    } as React.CSSProperties
                }
                // scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-green-400 to-blue-600 drop-shadow-md">
                            <Image
                                priority
                                alt="Author portrait"
                                className="p-0"
                                src={portraitLoc}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-md">
                            <Image
                                priority
                                alt="Author portrait"
                                className="p-0"
                                src={portraitLoc}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-sky-700 to-fuchsia-600 drop-shadow-md">
                            <Image
                                priority
                                alt="Author portrait"
                                className="p-0"
                                src={portraitLoc}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-blue-600 to-green-400 drop-shadow-md">
                            <Image
                                priority
                                alt="Author portrait"
                                className="p-0"
                                src={portraitLoc}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-fuchsia-600 to-sky-700 drop-shadow-md">
                            <Image
                                priority
                                alt="Author portrait"
                                className="p-0"
                                src={portraitLoc}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-orange-400 to-red-600 drop-shadow-md">
                            <Image
                                priority
                                alt="Author portrait"
                                className="p-0"
                                src={portraitLoc}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="mb-12 h-52 w-52 overflow-clip rounded-2xl border-x-4 border-y-4 border-b-8 border-black bg-opacity-50 bg-gradient-to-br from-blue-600 to-green-400 drop-shadow-md">
                            <Image
                                priority
                                alt="Author portrait"
                                className="p-0"
                                src={portraitLoc}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
