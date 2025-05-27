import Image from 'next/image';
import profile2 from '../../../assests/Profile/profile2.webp'

export default function AboutPage() {
  return (
    <div className=" bg-[#F4EFCA] text-black min-h-screen">
      <div className="container mx-auto px-4 py-8">
        
        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* Professional Headshot */}
          <div className="relative w-[90%] h-180 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={profile2} // Update with your actual image path
              alt="Priya - Professional Photographer"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose ">
            {/* Brief Bio */}
            <h2 className="text-2xl font-semibold mb-4">Meet Priya</h2>
            <p>
              Hi, I&apos;m Priya, a professional photographer based in [Your Location]. 
              With over 5 years of experience, I&apos;ve developed a unique style that 
              blends technical expertise with artistic vision to create timeless 
              images that tell compelling stories.
            </p>

            {/* Experience and Passion */}
            <h3 className="text-xl font-semibold mt-6 mb-2">My Journey</h3>
            <p>
              My passion for photography began in [Year] when I [brief story about 
              how you started]. Since then, I&apos;ve had the privilege of working with 
              [number] clients, capturing [number] events, and creating [number] 
              portraits that have brought joy to people&apos;s lives.
            </p>
            <p>
              I specialize in portrait, landscape, and event photography, with a 
              particular focus on [specific style or niche]. My approach combines 
              natural light techniques with creative composition to bring out the 
              true essence of every subject.
            </p>

            {/* Awards and Recognitions */}
            <h3 className="text-xl font-semibold mt-6 mb-2">Achievements</h3>
            <ul className="list-disc pl-6">
              <li>Winner, [Award Name] - [Year]</li>
              <li>Featured in [Publication/Exhibition] - [Year]</li>
              <li>Certified [Certification Name] - [Year]</li>
              <li>Recognized by [Organization] for [Achievement] - [Year]</li>
            </ul>
          </div>
        </div>

        {/* Behind-the-Scenes Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Behind the Lens</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden shadow">
              <Image
                src="/images/bts1.jpg" // Update with your actual image path
                alt="Behind the Scenes 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow">
              <Image
                src="/images/bts2.jpg" // Update with your actual image path
                alt="Behind the Scenes 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow">
              <Image
                src="/images/bts3.jpg" // Update with your actual image path
                alt="Behind the Scenes 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow">
              <Image
                src="/images/bts4.jpg" // Update with your actual image path
                alt="Behind the Scenes 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
