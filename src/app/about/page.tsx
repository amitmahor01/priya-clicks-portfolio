'use client'
import Image from 'next/image';
import profile2 from '../../../assests/Profile/profile2.webp';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center py-12">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[400px]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">So, who am I?</h1>
            <p className="text-base md:text-lg mb-6 max-w-xl">
              Hi, I&apos;m Priya, a professional photographer based in [Your Location]. With over 5 years of experience, I&apos;ve developed a unique style that blends technical expertise with artistic vision to create timeless images that tell compelling stories.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-[var(--primary)]">My Journey</h3>
            <p className="text-base md:text-lg mb-4 max-w-xl">
              My passion for photography began in [Year] when I [brief story about how you started]. Since then, I&apos;ve had the privilege of working with [number] clients, capturing [number] events, and creating [number] portraits that have brought joy to people&apos;s lives.
            </p>
            <p className="text-base md:text-lg mb-8 max-w-xl">
              I specialize in portrait, landscape, and event photography, with a particular focus on [specific style or niche]. My approach combines natural light techniques with creative composition to bring out the true essence of every subject.
            </p>
            <button className="bg-gray-700 text-white px-6 py-2 rounded-md w-fit hover:bg-gray-900 transition-colors">Contact me</button>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-96 h-[28rem] md:w-[28rem] md:h-[36rem] shadow-xl overflow-hidden">
              <Image
                src={profile2}
                alt="Priya - Professional Photographer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
