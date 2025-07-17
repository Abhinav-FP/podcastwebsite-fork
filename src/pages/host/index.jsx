import Layout from '@/layout/Layout';
import React from 'react';

const Index = () => {
    return (
        <Layout>
            <div className="bg-gray-900 min-h-screen text-white font-sans">
                {/* Meet Your Hosts Section */}
                <section className="py-16 px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Your Hosts</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        We’re passionate about demystifying property investing. With decades of hands-on
                        experience in real estate and financial planning combined, we bring practical, honest
                        advice that actually works.
                    </p>

                    {/* Stats Section */}
                    <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <span className="text-4xl font-bold text-purple-400 mb-2">150+</span>
                            <p className="text-gray-400 text-sm">Episodes Published</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <span className="text-4xl font-bold text-purple-400 mb-2">75k+</span>
                            <p className="text-gray-400 text-sm">Downloads Monthly</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <span className="text-4xl font-bold text-purple-400 mb-2">20+</span>
                            <p className="text-gray-400 text-sm">Years Experience</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <span className="text-4xl font-bold text-purple-400 mb-2">500+</span>
                            <p className="text-gray-400 text-sm">Reviews Received</p>
                        </div>
                    </div>
                </section>

                {/* The Team Behind the Podcast Section */}
                <section className="py-16 px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">The Team Behind the Podcast</h2>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Sunil Kumar Card */}
                        <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start">
                            <img
                                src="https://via.placeholder.com/150" // Replace with Sunil Kumar's image
                                alt="Sunil Kumar"
                                className="w-32 h-32 rounded-full object-cover mb-6 md:mb-0 md:mr-6"
                            />
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-semibold mb-1">Sunil Kumar</h3>
                                <p className="text-purple-400 text-sm mb-4">Property Investor & Finance Manager</p>
                                <p className="text-gray-300 mb-4">
                                    With over 12 years in property investment and financial planning, Sunil has
                                    personally helped hundreds of Australians invest in property. His drive and
                                    motivation comes from his belief that every Australian deserves access to
                                    quality financial education.
                                </p>
                                <p className="italic text-gray-400 mb-4">
                                    "I believe everyone should be accessible to everyone. Through this
                                    podcast, I hope to bridge the knowledge gap for everyday Australians."
                                </p>
                                <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                                    <li>Agency, Australia</li>
                                    <li>Certified Financial Planner</li>
                                </ul>
                            </div>
                        </div>

                        {/* Alicia Card */}
                        <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start">
                            <img
                                src="https://via.placeholder.com/150" // Replace with Alicia's image
                                alt="Alicia"
                                className="w-32 h-32 rounded-full object-cover mb-6 md:mb-0 md:mr-6"
                            />
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-semibold mb-1">Alicia</h3>
                                <p className="text-purple-400 text-sm mb-4">Property Investor</p>
                                <p className="text-gray-300 mb-4">
                                    Alicia’s journey from first-time buyer to successful portfolio owner provides
                                    listeners with relatable stories and practical tips. She shares how to spot
                                    excellent market trends, she brings practical advice to every episode.
                                </p>
                                <p className="italic text-gray-400 mb-4">
                                    "I believe that everyone should be accessible to everyone. Through this
                                    podcast, I hope to bridge the knowledge gap for everyday Australians."
                                </p>
                                <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                                    <li>Agency, Australia</li>
                                    <li>Property, 5+ locations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-700 to-indigo-700 rounded-lg shadow-lg p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
                            We exist to demystify property investment education in Australia. Too many people miss out on
                            property investing because they think it's too hard, too risky, or just for the ultra-wealthy.
                            Our podcast breaks down complex strategies into actionable advice that anyone can understand and
                            implement for themselves.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="flex flex-col items-center">
                                <div className="bg-white rounded-full p-4 mb-4">
                                    {/* Placeholder SVG for Clarity */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-indigo-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Clarity</h3>
                                <p className="text-white text-sm">
                                    No jargon, no complexity - just simple advice you can use.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-white rounded-full p-4 mb-4">
                                    {/* Placeholder SVG for Knowledge */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-indigo-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Knowledge</h3>
                                <p className="text-white text-sm">
                                    Learn how actual investors manage their properties and portfolio.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-white rounded-full p-4 mb-4">
                                    {/* Placeholder SVG for Practical Results */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-indigo-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Practical Results</h3>
                                <p className="text-white text-sm">
                                    Strategies that work in the Australian market, tested on our own.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Journey Section */}
                <section className="py-16 px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                    <div className="max-w-3xl mx-auto relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-purple-600 h-full"></div>

                        {/* Journey Item 1 */}
                        <div className="mb-8 flex items-center w-full justify-start md:justify-end md:even:flex-row-reverse">
                            <div className="hidden md:block w-1/2"></div> {/* Spacer for odd items on left */}
                            <div className="relative z-10 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center -ml-3 md:ml-0 md:-mr-3">
                                <span className="text-white font-bold text-sm">2020</span>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 ml-6 md:ml-0 md:w-1/2 md:even:ml-6 md:odd:mr-6">
                                <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                                <p className="text-gray-300">
                                    Started to record conversations about property investing between two mates who wanted to share knowledge.
                                </p>
                            </div>
                        </div>

                        {/* Journey Item 2 */}
                        <div className="mb-8 flex items-center w-full justify-start md:justify-end md:even:flex-row-reverse">
                            <div className="hidden md:block w-1/2"></div> {/* Spacer for odd items on left */}
                            <div className="relative z-10 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center -ml-3 md:ml-0 md:-mr-3">
                                <span className="text-white font-bold text-sm">2021</span>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 ml-6 md:ml-0 md:w-1/2 md:even:ml-6 md:odd:mr-6">
                                <h3 className="text-xl font-semibold mb-2">First 50 Episodes</h3>
                                <p className="text-gray-300">
                                    Began interviewing leading successful investors and breaking down complex strategies into simple advice.
                                </p>
                            </div>
                        </div>

                        {/* Journey Item 3 */}
                        <div className="mb-8 flex items-center w-full justify-start md:justify-end md:even:flex-row-reverse">
                            <div className="hidden md:block w-1/2"></div> {/* Spacer for odd items on left */}
                            <div className="relative z-10 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center -ml-3 md:ml-0 md:-mr-3">
                                <span className="text-white font-bold text-sm">2022</span>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 ml-6 md:ml-0 md:w-1/2 md:even:ml-6 md:odd:mr-6">
                                <h3 className="text-xl font-semibold mb-2">Community Growth</h3>
                                <p className="text-gray-300">
                                    Reached 25k regular listeners and launched our first educational guides and resources.
                                </p>
                            </div>
                        </div>

                        {/* Journey Item 4 */}
                        <div className="mb-8 flex items-center w-full justify-start md:justify-end md:even:flex-row-reverse">
                            <div className="hidden md:block w-1/2"></div> {/* Spacer for odd items on left */}
                            <div className="relative z-10 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center -ml-3 md:ml-0 md:-mr-3">
                                <span className="text-white font-bold text-sm">2023</span>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 ml-6 md:ml-0 md:w-1/2 md:even:ml-6 md:odd:mr-6">
                                <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
                                <p className="text-gray-300">
                                    Featured in major finance publications and invited to speak at property investment conferences.
                                </p>
                            </div>
                        </div>

                        {/* Journey Item 5 */}
                        <div className="mb-8 flex items-center w-full justify-start md:justify-end md:even:flex-row-reverse">
                            <div className="hidden md:block w-1/2"></div> {/* Spacer for odd items on left */}
                            <div className="relative z-10 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center -ml-3 md:ml-0 md:-mr-3">
                                <span className="text-white font-bold text-sm">2024</span>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 ml-6 md:ml-0 md:w-1/2 md:even:ml-6 md:odd:mr-6">
                                <h3 className="text-xl font-semibold mb-2">Expanding Reach</h3>
                                <p className="text-gray-300">
                                    Now helping over 75k Australians make smarter property decisions with expert insights and local stories.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* As Featured In Section */}
                <section className="py-16 px-4 text-center">
                    <h2 className="text-2xl font-bold mb-8">As Featured In</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
                        {/* Replace with actual logos if you have them */}
                        <span className="text-gray-400 text-lg font-semibold">The Australian</span>
                        <span className="text-gray-400 text-lg font-semibold">AFR</span>
                        <span className="text-gray-400 text-lg font-semibold">Domain</span>
                        <span className="text-gray-400 text-lg font-semibold">Property Investment Magazine</span>
                        <span className="text-gray-400 text-lg font-semibold">Smart Property Investment</span>
                    </div>
                </section>

                {/* Ready to Start Your Property Journey Section */}
                <section className="py-16 px-4 bg-gray-800 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Property Journey?</h2>
                        <p className="text-gray-300 mb-8">
                            Join thousands of Australians who trust us for their property investment education.
                            Learn the strategies that work, directly from those who are doing it.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
                                Listen Now
                            </button>
                            <button className="bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
                                Download E-Guide Now
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Index;