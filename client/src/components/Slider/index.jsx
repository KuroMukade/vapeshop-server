import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Parallax } from 'swiper';

import 'swiper/css/bundle';
import styles from './Carousel.module.scss';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Pagination, Autoplay, Parallax]}
        preloadImages={false}
        loop={true}
        speed={1500}
        parallax={true}
        autoplay={{delay: 5000}}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        <SwiperSlide className={styles.slide}>
          <div data-swiper-parallax={"73%"} className={styles.content} style={{backgroundImage: `url('./hqds.jpg')`}}>
            <h1 data-swiper-parallax={-400}>Одноразовые</h1>
            <p data-swiper-parallax={-600}>Одноразовые вейпы популярны среди курильщиков, их не приходиться обслуживать</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div data-swiper-parallax={"53%"} className={styles.content} style={{backgroundImage: `url('./Lra.jpg')`}}>
            <h1 data-swiper-parallax={-400}>POD-устройство</h1>
            <p data-swiper-parallax={-600}>POD-системы – эторазновидность электронных сигарет, где вместо атомайзера используются «ПОД-ы». Внутри устройства скрывается аккумулятор и картридж, который выступает в роли испарителя и резервуара для жидкости. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div data-swiper-parallax={"23%"} className={styles.content} style={{backgroundImage: `url('./boxmod.jpg')`}}>
            <h1 data-swiper-parallax={-400}>Box Mod</h1>
            <p data-swiper-parallax={-600}>Батарейный мод или бокс мод – девайс для генерации пара с эффектом настоящего дыма. Гаджет работает при помощи батарейного блока, которому он обязан своим названием</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div data-swiper-parallax={"10%"} className={styles.content} style={{backgroundImage: `url('./hqds.jpg')`}}>
            <h1 data-swiper-parallax={-400}>Одноразовые</h1>
            <p data-swiper-parallax={-600}>Одноразовые вейпы популярны среди курильщиков, их не приходиться обслуживать</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    
  )
}

export default Slider;