'use client';

import React from 'react';
import { Carousel, Image as AntImage } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

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
    autoplay: true,
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
    prevArrow: <LeftOutlined />,
    nextArrow: <RightOutlined />,
  };

  return (
    <div className="mx-auto w-[80%] h-[80vh]">
      <Carousel {...carouselSettings} className="h-full">
        {images.map((img, idx) => (
          <div key={idx} className="p-2 h-full">
            <div className="relative h-full">
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

      <style jsx global>{`
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
        .ant-carousel .slick-prev,
        .ant-carousel .slick-next {
          color: white;
          font-size: 24px;
          z-index: 2;
        }
        .ant-carousel .slick-prev {
          left: 10px;
        }
        .ant-carousel .slick-next {
          right: 10px;
        }
        .ant-image {
          width: 100%;
          height: 100%;
        }
        .ant-image-mask {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default PhotoCarousel;
 