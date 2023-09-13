'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function BannerSlider() {
    return (
        <div>
            <Swiper 
                // cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="img/banner1.png" alt="Banner img" />
                    Slide 1
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/banner2.png" alt="Banner img" />
                    Slide 2
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
