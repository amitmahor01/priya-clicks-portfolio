import { FontAwesomeIcon, icons } from '../utils/icons';

export default function Footer() {
    return (
        <footer className="bg-[#F4EFCA] border-t border-gray-200 pt-10 pb-4">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="mb-4 text-lg font-bold text-gray-800">Contact</h3>
                    <div className="flex space-x-6 mt-2">
                        <a
                            href="https://maps.app.goo.gl/srujddz6nxkJKoyd9"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View Location on Google Maps"
                            aria-label="Location on Google Maps"
                        >
                            <FontAwesomeIcon icon={icons.mapMarker} className="text-2xl text-[#EA4335]"  />

                        </a>
                        <a href="tel:+971585950475" title="Call" className="hover:text-[#F66435] transition-colors">
                            <FontAwesomeIcon icon={icons.phone} className="text-2xl text-gray-700 hover:scale-125 transition-transform"  />
                        </a>
                        <a href="mailto:priiyaclicks@gmail.com" title="Email" className="hover:text-[#1DA1F2] transition-colors">
                            <FontAwesomeIcon icon={icons.envelope} className="text-2xl text-white hover:scale-125 transition-transform"  />
                        </a>
                        <a href="https://api.whatsapp.com/message/NYOV5OZAEGG3H1" title="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                            <FontAwesomeIcon icon={icons.whatsapp} className="text-2xl text-[#25D366] hover:scale-125 transition-transform"  />
                        </a>
                    </div>
                </div>

                {/* Opening Hours */}
                <div>
                    <h3 className="mb-4 text-lg font-bold text-gray-800">Opening Hours</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>Monday - Friday: 9 AM - 6 PM</li>
                        <li>Saturday: 10 AM - 4 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="mb-4 text-lg font-bold text-gray-800">Follow Us</h3>
                    <div className="flex space-x-6 mt-2">
                        <a
                            href="https://www.instagram.com/priiyaclicks"
                            className="text-[#E1306C] hover:text-[#F66435] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                        >
                            <FontAwesomeIcon icon={icons.instagram} className="text-2xl hover:scale-125 transition-transform" bounce />
                        </a>
                        <a
                            href="https://www.facebook.com/PriiyaClicks/"
                            className="text-blue-700 hover:text-[#F66435] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            title="Facebook"
                        >
                            <FontAwesomeIcon icon={icons.facebook} className="text-2xl hover:scale-125 transition-transform" bounce />
                        </a>
                        <a
                            href="https://www.youtube.com/@PriyaClicks"
                            className="text-red-500 hover:text-[#F66435] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            title="YouTube"
                        >
                            <FontAwesomeIcon icon={icons.youtube} className="text-2xl hover:scale-125 transition-transform" bounce />
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