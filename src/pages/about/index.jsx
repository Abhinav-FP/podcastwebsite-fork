import Layout from '@/layout/Layout';
import React from 'react';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { FaInstagram, FaPodcast, FaSpotify, FaYoutube } from 'react-icons/fa6';
import { IoMdBrowsers } from 'react-icons/io';
import { IoSend } from 'react-icons/io5';
import { MdBookmark, MdEmail, MdLocationOn, MdNewspaper, MdTimer } from 'react-icons/md';

const Index = () => {
    const faqs = [
        {
            question: "Can I be a guest on the podcast?",
            answer:
                "We're always looking for interesting guests with valuable property insights. Use the contact form above with \"Guest Opportunity\" as the subject and tell us about your experience.",
        },
        {
            question: "Do you offer personal consultations?",
            answer:
                "While we don't provide individual financial advice, we can put you in touch with trusted professionals in our network. Reach out and we'll help connect you with the right resources.",
        },
        {
            question: "How can I suggest episode topics?",
            answer:
                "We love hearing from our community! Send us your topic suggestions through the contact form. Many of our best episodes come from listener requests.",
        },
        {
            question: "Are your guides really free?",
            answer:
                "Yes! All our guides are completely free with no hidden costs. We believe quality property education should be accessible to everyone.",
        },
    ];

    return (
        <Layout>
            <div className="bg-[#0a0a0a] text-white pt-[118px] lg:pt-[128px] ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]  px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h1>
                    <p className="text-[16px] sm:text-[18px] paragraph  mx-auto">
                        Download high-quality, expert-approved resources to sharpen your property knowledge
                        and take action with confidence. All guides are completely free and packed with
                        actionable insights.
                    </p>

                    <main className="px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-gray-800  p-4 md:p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Your Fullname"
                                                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-purple-500 focus:border-purple-500 outline-none text-gray-200"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="your.email@example.com"
                                                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-purple-500 focus:border-purple-500 outline-none text-gray-200"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="Tell us what's on your mind"
                                            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-purple-500 focus:border-purple-500 outline-none text-gray-200"
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="6"
                                            placeholder="Enter your message or provide a podcast suggestion..."
                                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-purple-500 focus:border-purple-500 outline-none text-gray-200 resize-y"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className=' py-3 send flex justify-center items-center mx-auto  button-bg'>
                                        <div class="svg-wrapper-1">
                                            <div class="svg-wrapper">
                                                <IoSend size={22} />
                                            </div>
                                        </div>
                                        <span>          Send Message</span>
                                    </button>

                                </form>
                            </div>

                            {/* Our Location Map */}
                            <div className="bg-gray-800  p-4 md:p-8  rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
                                <div className="bg-gray-700 rounded-md overflow-hidden h-64 flex items-center justify-center">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24173.015721873787!2d-74.0060151!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b3a6d71%3A0x491a6c006c6d1ec3!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1689422238769!5m2!1sen!2sin"
                                        width="100%"
                                        height="600"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>

                                </div>

                            </div>
                        </div>

                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-gray-800  p-4 md:p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <MdEmail size={22} className='mr-2' />
                                        <div>
                                            <span className="block text-sm text-gray-400">Email</span>
                                            <a href="mailto:email@propertypodcast.com.au" className="text-white ">
                                                email@propertypodcast.com.au
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <MdLocationOn size={22} className='mr-2' />
                                        <div>
                                            <span className="block text-sm text-gray-400">Location</span>
                                            <p className="text-white">Sydney & Melbourne, Australia</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <MdTimer size={22} className='mr-2' />
                                        <div>
                                            <span className="block text-sm text-gray-400">Response Time</span>
                                            <p className="text-white">Within 24 hours</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-800  p-4 md:p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#" className="flex items-center text-wnite">
                                            <IoMdBrowsers size={22} className='mr-2' />
                                            Browse Episodes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-wnite">
                                            <MdBookmark size={22} className='mr-2' />
                                            Download Guides
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-wnite">
                                            <MdNewspaper size={22} className='mr-2' />
                                            Join Newsletter
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Follow Us */}
                            <div className="bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <FaSpotify size={22} className='mr-2' />
                                        Spotify
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <FaPodcast size={22} className='mr-2' />

                                        Apple Podcasts
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <FaYoutube size={22} className='mr-2' />
                                        Youtube
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <FaInstagram size={22} className='mr-2' />
                                        Instagram
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <FaLinkedin size={22} className='mr-2' />
                                        LinkedIn
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <FaGoogle size={22} className='mr-2' />
                                        Google Podcasts
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>

                    <section className="py-16 px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-800 p-3 md:p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-2 heading">{faq.question}</h3>
                                    <p className="text-gray-300 paragraph">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </Layout>
    );
};

export default Index;