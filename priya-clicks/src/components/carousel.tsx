'use client';

import { useEffect, useState } from 'react';
import cover1 from '../../assests/cover/cover1.webp';
import cover2 from '../../assests/cover/cover2.webp';
import cover3 from '../../assests/cover/cover3.webp';

export default function Carousel() {
    const images = [cover1, cover2, cover3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden border-20 border-[#F4EFCA]">
            <div 
                className="flex transition-transform duration-900 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <img 
                            src={image.src}
                            alt={`Carousel image ${index + 1}`}
                            className="w-full h-full object-contain"
                            style={{ objectPosition: 'center' }}
                        />
                    </div>
                ))}
            </div>
            {/* Navigation Arrows */}
            <button 
                onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-1 md:p-2 hover:bg-white/80 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-1 md:p-2 hover:bg-white/80 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}