'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../utils/icons';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Here you would typically send the form data to your backend
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));

            // You can replace this with actual email sending logic
            const mailtoLink = `mailto:priiyaclicks@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
      `)}`;

            window.open(mailtoLink);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen py-8 sm:py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="lavishly-yours-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-2">
                        Ready to capture your precious moments? Let&apos;s discuss your photography session and create beautiful memories together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 relative">
                    {/* Contact Form */}
                    <div className=" p-6 sm:p-8 backdrop-blur-sm">
                        <h2 className="heading-font text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Send us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5ADC5] focus:border-transparent transition-all duration-200 text-base bg-[#F4EFCA] placeholder-gray-600"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5ADC5] focus:border-transparent transition-all duration-200 text-base bg-[#F4EFCA] placeholder-gray-600"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5ADC5] focus:border-transparent transition-all duration-200 text-base bg-[#F4EFCA] placeholder-gray-600"
                                        placeholder="+971 50 123 4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5ADC5] focus:border-transparent transition-all duration-200 text-base bg-[#F4EFCA]"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="Newborn Photography">Newborn Photography</option>
                                        <option value="Maternity Photography">Maternity Photography</option>
                                        <option value="Cake Smash Session">Cake Smash Session</option>
                                        <option value="Family Photography">Family Photography</option>
                                        <option value="Baby & Toddler Photography">Baby & Toddler Photography</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Pricing Information">Pricing Information</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5ADC5] focus:border-transparent transition-all duration-200 resize-none text-base bg-[#F4EFCA] placeholder-gray-600"
                                    placeholder="Tell us about your photography needs, preferred dates, and any special requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full meta-font text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon!
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                    Sorry, there was an error sending your message. Please try again or contact us directly.
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600"></div>
                    {/* Contact Information */}
                    <div className="space-y-8 sm:space-y-12">
                        {/* Studio Information */}
                        <div className=" p-6 sm:p-8 backdrop-blur-sm">
                            <h2 className="heading-font text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Studio Information</h2>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#C5ADC5] rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={icons.mapMarker} className="text-lg sm:text-xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Studio Location</h3>
                                        <p className="text-gray-600 mb-2">Dubai, United Arab Emirates</p>
                                        <a
                                            href="https://maps.app.goo.gl/srujddz6nxkJKoyd9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#C5ADC5] hover:text-[#B2B5E0] transition-colors font-medium"
                                        >
                                            View on Google Maps →
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#B2B5E0] rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={icons.phone} className="text-lg sm:text-xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                                        <a
                                            href="tel:+971585950475"
                                            className="text-gray-600 hover:text-[#C5ADC5] transition-colors"
                                        >
                                            +971 58 595 0475
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F66435] rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={icons.envelope} className="text-lg sm:text-xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                                        <a
                                            href="mailto:priiyaclicks@gmail.com"
                                            className="text-gray-600 hover:text-[#C5ADC5] transition-colors"
                                        >
                                            priiyaclicks@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={icons.whatsapp} className="text-lg sm:text-xl text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                                        <a
                                            href="https://api.whatsapp.com/message/NYOV5OZAEGG3H1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-[#25D366] transition-colors"
                                        >
                                            Send us a message
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Session Information */}
                        <div className="p-6 sm:p-8 backdrop-blur-sm">
                            <h2 className="heading-font text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Session Information</h2>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-[#C5ADC5] rounded-full"></div>
                                    <span className="text-gray-700">Newborn sessions (0-14 days)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-[#B2B5E0] rounded-full"></div>
                                    <span className="text-gray-700">Maternity photography</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-[#F66435] rounded-full"></div>
                                    <span className="text-gray-700">Cake smash celebrations</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-[#F4EFCA] rounded-full"></div>
                                    <span className="text-gray-700">Family portraits</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-[#25D366] rounded-full"></div>
                                    <span className="text-gray-700">Baby & toddler sessions</span>
                                </div>
                            </div>

                            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-[#C5ADC5] to-[#B2B5E0] rounded-lg">
                                <p className="text-white font-medium text-center text-sm sm:text-base">
                                    All sessions include professional editing and high-resolution digital files
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}
