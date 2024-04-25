import React, { useRef, useState } from 'react';
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Container from 'react-bootstrap/Container';


export default function SupportUs() {

  return (
    <div className='mt-5 support-box'>
      <Container>
        <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
        >
          <SwiperSlide className='text-center'>
            <img className='mw-100 h-auto' src="/images/brands/brand1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center'>
            <img className='mw-100 h-auto' src="/images/brands/brand2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center'>
            <img className='mw-100 h-auto' src="/images/brands/brand3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center'>
            <img className='mw-100 h-auto' src="/images/brands/brand4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center'>
            <img className='mw-100 h-auto' src="/images/brands/brand5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center'>
            <img className='mw-100 h-auto' src="/images/brands/brand6.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center'>
            <img className='mw-100 h-auto' src="/images/brands/brand7.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  )
}
