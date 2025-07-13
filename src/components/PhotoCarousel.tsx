'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import cover1 from '../../assests/cover/cover1.webp';
import cover2 from '../../assests/cover/cover2.webp';
import cover3 from '../../assests/cover/cover3.webp';
import cover4 from '../../assests/cover/cover4.webp';
import cover5 from '../../assests/cover/cover5.webp';
import cover6 from '../../assests/cover/cover6.webp';

const images = [cover1, cover2, cover3, cover4, cover5, cover6];

const PhotoCarousel = () => (
  <>
    <style jsx global>{`
      .swiper-button-next,
      .swiper-button-prev {
        color: #fff;
        font-size: 1.5rem;
        width: 32px;
        height: 32px;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
      }
      .group:hover .swiper-button-next,
      .group:hover .swiper-button-prev {
        opacity: 1;
        pointer-events: auto;
      }
      .swiper-button-next:after,
      .swiper-button-prev:after {
        font-size: 1.5rem;
      }
    `}</style>
    <div className="group mx-auto w-full max-w-6xl aspect-[4/2] relative"> {/* 3:2 aspect ratio, adjust as needed */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full aspect-[4/2]">
              <Image
                src={img}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover rounded-lg"
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

export default PhotoCarousel;
 