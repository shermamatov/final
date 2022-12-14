import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="https://www.bookvoed.ru/files/1723/11/50/8.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://www.bookvoed.ru/files/1723/11/49/0.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://my2.bookvoed.ru/files/1723/11/48/6.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://www.bookvoed.ru/files/1723/11/50/8.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://www.bookvoed.ru/files/1723/11/49/0.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://my2.bookvoed.ru/files/1723/11/48/6.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://www.bookvoed.ru/files/1723/11/50/8.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://www.bookvoed.ru/files/1723/11/49/0.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://my2.bookvoed.ru/files/1723/11/48/6.png"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
