'use client';

import React from 'react';
import { Carousel, Image as AntImage } from 'antd';

import cover1 from '../../assests/cover/cover1.webp';
import cover2 from '../../assests/cover/cover2.webp';
import cover3 from '../../assests/cover/cover3.webp';
import cover4 from '../../assests/cover/cover4.webp';
import cover5 from '../../assests/cover/cover5.webp';
import cover6 from '../../assests/cover/cover6.webp';

const images = [cover1, cover2, cover3, cover4, cover5, cover6];

const PhotoCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchmove: true,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-full sm:w-[80%] h-[40vh] sm:h-[80vh]">
      <Carousel {...carouselSettings} className="h-full">
        {images.map((img, idx) => (
          <div key={idx} className="p-1 sm:p-2 h-full">
            <div className="relative h-40 sm:h-full aspect-[16/9] sm:aspect-auto">
              <AntImage
                src={img.src}
                alt={`Photo ${idx + 1}`}
                preview={{
                  src: img.src,
                  mask: 'Click to view',
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>

      <style>{`
        .ant-carousel {
          height: 100%;
        }
        .ant-carousel .slick-slider,
        .ant-carousel .slick-list,
        .ant-carousel .slick-track {
          height: 100%;
        }
        .ant-carousel .slick-slide > div {
          height: 100%;
        }
        .ant-image {
          width: 100%;
          height: 100%;
        }
        .ant-image-mask {
          border-radius: 8px;
        }
        .slick-dots {
          height: 12px;
        }
        .ant-carousel .slick-dots li button {
          width: 20px;
          height: 20px;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: #f66435 !important;
        }
      `}</style>
    </div>
  );
};

export default PhotoCarousel;
