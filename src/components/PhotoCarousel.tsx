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
          slidesToShow: 1,
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
    <div className="mx-auto w-full sm:w-[80%] h-[40vh] sm:h-[80vh] flex justify-center items-center">
      <Carousel {...carouselSettings} className="h-full w-full">
        {images.map((img, idx) => (
          <div key={idx} className="h-full">
            <div className="relative h-40 sm:h-full aspect-[16/9] sm:aspect-auto mx-2 sm:mx-4">
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
          width: 100%;
        }
        .ant-carousel .slick-slider,
        .ant-carousel .slick-list,
        .ant-carousel .slick-track {
          height: 100%;
          width: 100%;
        }
        .ant-carousel .slick-slide > div {
          height: 100%;
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
        .ant-image {
          width: 100%;
          height: 100%;
        }
        .ant-image-mask {
          border-radius: 8px;
        }
        .ant-carousel .slick-dots {
          z-index: 10 !important;
          position: relative;
          bottom: 10px;
        }
        .ant-carousel .slick-dots li button {
          width: 20px !important;
          height: 20px !important;
          border-radius: 50% !important;
          background: #b2b5e0 !important;
          transition: background 0.3s;
          padding: 0 !important;
          line-height: 20px !important;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: #f66435 !important;
        }
        .ant-carousel .slick-arrow {
          z-index: 10 !important;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .ant-carousel .slick-prev {
          left: 10px;
        }
        .ant-carousel .slick-next {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default PhotoCarousel;
