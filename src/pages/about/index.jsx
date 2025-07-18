import Layout from '@/layout/Layout';
import React from 'react';
import { IoSend } from 'react-icons/io5';

const Index = () => {
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

                    {/* Main Content Grid */}
                    <main className="px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Send us a Message & Our Location */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Send us a Message Form */}
                            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
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
                                            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-purple-500 focus:border-purple-500 outline-none text-gray-200 resize-y"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center  button-bg text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                                    >
                                        <IoSend size={22} />
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Our Location Map */}
                            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
                                {/* This is a placeholder for the map. For a real map, you'd embed a service like Google Maps. */}
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

                        {/* Right Column: Contact Information & Quick Actions & Follow Us */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Contact Information */}
                            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-purple-400 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <div>
                                            <span className="block text-sm text-gray-400">Email</span>
                                            <a href="mailto:email@propertypodcast.com.au" className="text-white ">
                                                email@propertypodcast.com.au
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-purple-400 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m10.61-10.61a4 4 0 11-5.656 0 4 4 0 015.656 0z"
                                            />
                                        </svg>
                                        <div>
                                            <span className="block text-sm text-gray-400">Location</span>
                                            <p className="text-white">Sydney & Melbourne, Australia</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-purple-400 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <div>
                                            <span className="block text-sm text-gray-400">Response Time</span>
                                            <p className="text-white">Within 24 hours</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#" className="flex items-center text-wnite">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-3"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 19V6l12-3v13m-6 2l6-3M3 6v12c0 1.1.9 2 2 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-3l-7-3H5a2 2 0 00-2 2z"
                                                />
                                            </svg>
                                            Browse Episodes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-wnite">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Download Guides
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-wnite">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-3"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM12 14v7m-4 0h8a2 2 0 002-2v-3a2 2 0 00-2-2H8a2 2 0 00-2 2v3a2 2 0 002 2z"
                                                />
                                            </svg>
                                            Join Newsletter
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Follow Us */}
                            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Social Link Button - Spotify */}
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.424 16.903c-.22.36-.677.478-1.036.257-2.31-1.428-5.122-1.745-8.52-.96-.407.094-.836-.145-.93-.553-.095-.407.145-.836.553-.93 3.73-.855 6.816-.486 9.428 1.13.36.22.478.677.257 1.036zm1.747-3.79c-.27-.442-.84-.58-1.282-.308-2.613 1.6-6.527 2.05-9.845 1.077-.498-.148-1.02.128-1.168.626-.148.498.128 1.02.626 1.168 3.66.974 7.95 1.5 10.966-.312.442-.27.58-.84.308-1.282zm.006-3.83c-.305-.502-.97-.655-1.472-.35-3.35 2.045-8.38 2.37-12.28.986-.56-.196-1.16.084-1.356.643-.197.56.084 1.16.643 1.356 4.316 1.51 9.775 1.196 13.564-1.002.502-.305.655-.97.35-1.472z" />
                                        </svg>
                                        Spotify
                                    </a>
                                    {/* Social Link Button - Apple Podcasts */}
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12.016 0c-3.13 0-5.834 1.705-7.318 4.254-.153.256-.277.53-.377.818-.28 1.01-.26 2.07.065 3.08-.26.27-.48.56-.67.87-1.1 1.79-1.63 3.88-1.5 6.01-.01.07.02.15.02.22 0 4.195 2.5 7.6 6.06 7.6 2.07 0 3.84-1.05 4.87-2.66.19-.29.35-.6.48-.92.29-.75.3-1.57.06-2.35.31-.31.6-.66.86-1.04 1.79-2.73 1.63-6.22-.4-8.73-.24-.29-.5-.57-.79-.83-.34-.3-.66-.58-.99-.84-2.66-2.07-2.58-5.32-.47-7.4-.16-.3-.29-.62-.42-.94-.8-1.89-1.25-4.04-1.25-6.26zm-1.09 18.06c-1.8.84-3.77-.32-4.63-2.12-.84-1.8.32-3.77 2.12-4.63 1.8-.84 3.77.32 4.63 2.12.84 1.8-.32 3.77-2.12 4.63z" />
                                        </svg>
                                        Apple Podcasts
                                    </a>
                                    {/* Social Link Button - YouTube */}
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M21.583 6.442a3.295 3.295 0 0 0-2.327-2.327C17.062 3.5 12 3.5 12 3.5s-5.062 0-7.256.615a3.295 3.295 0 0 0-2.327 2.327c-.615 2.194-.615 6.877-.615 6.877s0 4.683.615 6.877a3.295 3.295 0 0 0 2.327 2.327c2.194.615 7.256.615 7.256.615s5.062 0 7.256-.615a3.295 3.295 0 0 0 2.327-2.327c.615-2.194.615-6.877.615-6.877s0-4.683-.615-6.877zM9.992 15.4V8.6l5.77 3.4z" />
                                        </svg>
                                        Youtube
                                    </a>
                                    {/* Social Link Button - Instagram */}
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M7.199 2.001A5 5 0 0 0 2 7.199v9.602A5 5 0 0 0 7.199 22h9.602A5 5 0 0 0 22 16.801V7.199A5 5 0 0 0 16.801 2H7.199zm0 1.5H16.8A3.5 3.5 0 0 1 20.3 7.2V16.8A3.5 3.5 0 0 1 16.8 20.3H7.2A3.5 3.5 0 0 1 3.7 16.8V7.2A3.5 3.5 0 0 1 7.2 3.7zm4.8 3.3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.5-2.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
                                        </svg>
                                        Instagram
                                    </a>
                                    {/* Social Link Button - LinkedIn */}
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.381 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zM.02 24h4.96v-16h-4.96v16zM22.23 16.03c0-4.38-2.825-7.25-6.621-7.25-3.325 0-4.664 1.83-5.467 3.2-.314-.27-.478-.63-.478-1.07v-2.08h-4.96v16h4.96v-8.835c0-.467.016-.934.153-1.277.306-.762 1.09-1.558 2.394-1.558 1.636 0 2.308 1.247 2.308 3.093v8.607h4.96V16.03z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                    {/* Social Link Button - Google Podcasts */}
                                    <a
                                        href="#"
                                        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
                                    >
                                        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-11c0-.552.448-1 1-1h4c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1h-4c-.552 0-1-.448-1-1v-2zm-3-3c0-.552.448-1 1-1h10c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1zm0 8c0-.552.448-1 1-1h10c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1z" />
                                        </svg>
                                        Google Podcasts
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Frequently Asked Questions Section */}
                    <section className="py-16 px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* FAQ Item 1 */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2 heading">Can I be a guest on the podcast?</h3>
                                <p className="text-gray-300 paragraph">
                                    We're always looking for interesting guests with valuable property insights. Use
                                    the contact form above with "Guest Opportunity" as the subject and tell us about
                                    your experience.
                                </p>
                            </div>
                            {/* FAQ Item 2 */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2 heading">Do you offer personal consultations?</h3>
                                <p className="paragraph ">
                                    While we don't provide individual financial advice, we can put you in touch
                                    trusted professionals in our network. Reach out and we'll help connect you with
                                    the right resources.
                                </p>
                            </div>
                            {/* FAQ Item 3 */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2 heading">How can I suggest episode topics?</h3>
                                <p className="paragraph">
                                    We love hearing from our community! Send us your topic suggestions through
                                    the contact form. Many of our best episodes come from listener requests.
                                </p>
                            </div>
                            {/* FAQ Item 4 */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-2 heading">Are your guides really free?</h3>
                                <p className="paragraph">
                                    Yes! All our guides are completely free with no hidden costs. We believe quality
                                    property education should be accessible to everyone.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Index;