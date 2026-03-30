// 1. 導入 Swiper React 組件與樣式
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/mainImg-math.png';
import img2 from '../assets/mainImg-yoga.png';
import img3 from '../assets/mainImg-modeling.png';

const MainImages = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        <SwiperSlide>
          <img
            src={img1}
            className="w-full h-auto object-cover"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            className="w-full h-auto object-cover"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            className="w-full h-auto object-cover"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainImages;
