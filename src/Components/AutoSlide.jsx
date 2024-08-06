import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';




function AutoSlide({ slides, noslides , breakpointsm , breakpointxsm}) {


  return (
    <Swiper slidesPerView={noslides}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        992: {
          slidesPerView: noslides,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: breakpointsm,
          spaceBetween: 20,
        },
        1: {
          slidesPerView: breakpointxsm,
          spaceBetween: 10,
        }
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper">
      {slides.map(slide => (
        <SwiperSlide key={slide.id}> <img src={slide.img} alt='.' className='clients-img' /> </SwiperSlide>
      ))}
    </Swiper>

  )
}

export default AutoSlide;