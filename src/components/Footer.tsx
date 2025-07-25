import { FontAwesomeIcon, icons } from '../utils/icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="shadow-xl shadow-black pt-10 pb-4">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Info Section (Left) */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
                    {/* Logo Placeholder */}
                    <div className="mb-4">
                        {/* Replace with your logo if available */}
                        <span className="heading-font text-3xl text-black font-bold">PriyaClicks</span>
                    </div>
                    <blockquote className="body-font text-base md:text-lg text-black font-medium leading-relaxed mb-2">
                        “We don’t just take photographs — we freeze love, laughter, and life’s most tender moments into timeless memories.”
                    </blockquote>
                    <span className="block text-sm text-black font-bold">— Priya Clicks</span>
                </div>

                {/* Quick Links (Second Column) */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <h3 className="mb-4 text-lg font-extrabold text-gray-800">Quick Links</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><Link href="/" className="hover:font-extrabold hover:text-black transition-colors">Home</Link></li>
                        <li><Link href="/portfolio" className="hover:font-extrabold hover:text-black transition-colors">Portfolio</Link></li>
                        <li><Link href="/about" className="hover:font-extrabold hover:text-black transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:font-extrabold hover:text-black transition-colors">Contact</Link></li>
                    </ul>
                </div>
                {/* Opening Hours (Third Column) */}
                <div className="flex flex-col items-startflex flex-col items-center text-center md:items-start md:text-left">
                    <h3 className="mb-4 text-lg font-extrabold text-gray-800">Opening Hours</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>Monday - Friday: 9 AM - 6 PM</li>
                        <li>Saturday: 10 AM - 4 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
                {/* Contact & Social Links (Fourth Column) */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="mb-4 text-lg font-extrabold text-gray-800">Contact</h3>
                    <div className="flex space-x-6 mt-2 mb-8">

                        <a href="mailto:priiyaclicks@gmail.com" title="Email" className=" ">
                            <FontAwesomeIcon icon={icons.envelope} className="text-2xl text-white hover:scale-125 transition-transform hover:bg-black hover:rounded-sm hover:w-7" />
                        </a>
                        <a
                            href="https://maps.app.goo.gl/srujddz6nxkJKoyd9"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View Location on Google Maps"
                            aria-label="Location on Google Maps"
                        >
                            <FontAwesomeIcon icon={icons.mapMarker} className="text-2xl text-[#EA4335] hover:scale-125 transition-transform" />
                        </a>
                        <a href="tel:+971585950475" title="Call" className=" transition-colors">
                            <FontAwesomeIcon icon={icons.phone} className="text-2xl text-gray-700 hover:scale-125 transition-transform" />
                        </a>
                        <a href="https://api.whatsapp.com/message/NYOV5OZAEGG3H1" title="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                            <FontAwesomeIcon icon={icons.whatsapp} className="text-2xl text-[#25D366] hover:scale-125 transition-transform hover:bg-white hover:rounded-full" />
                        </a>
                    </div>
                    <h3 className="mb-4 text-lg font-extrabold text-gray-800">Follow Us</h3>
                    <div className="flex space-x-6 mt-2">
                        <a
                            href="https://www.instagram.com/priiyaclicks"
                            className="text-[#E1306C]  transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                        >
                            <FontAwesomeIcon icon={icons.instagram} className="text-2xl hover:scale-125 transition-transform hover:bg-white hover:rounded-sm" bounce />
                        </a>
                        <a
                            href="https://www.facebook.com/PriiyaClicks/"
                            className="text-blue-700  transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            title="Facebook"
                        >
                            <FontAwesomeIcon icon={icons.facebook} className="text-2xl hover:scale-125 transition-transform hover:bg-white hover:rounded-full" bounce />
                        </a>
                        <a
                            href="https://www.youtube.com/@PriyaClicks"
                            className="text-red-500  transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            title="YouTube"
                        >
                            <FontAwesomeIcon icon={icons.youtube} className="text-2xl hover:scale-125 transition-transform hover:bg-white hover:rounded-lg" bounce />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} PriiyaClicks. All rights reserved.
            </div>
        </footer>
    );
}
