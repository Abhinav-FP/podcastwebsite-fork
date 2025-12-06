// import Layout from "@/components/Layout";
import Layout from "@/layout/Layout";
import React, { useEffect, useState } from "react";

// Privacy & Compliance static page
// React + Tailwind CSS component (single-file)
// Usage: import and render <PrivacyCompliancePage /> in your app

export default function Privacy() {
    return <>
    <Layout>
        <div className="min-h-screen bg-gray-50 text-gray-900 p-6 sm:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 pt-[80px]">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
                    {/* <p className="mt-2 text-gray-600">How we handle data for this website — focused on marketing & traffic insights only.</p> */}
                </div>

                <article className="space-y-8 ">
                    <section aria-labelledby="summary">
                        <h2 id="summary" className="mt-2 text-xl font-semibold">What is Personal Information</h2>
                        <p className="mt-2 text-gray-700">
                            (a) The Privacy Act 1988 (Cth) currently defines “personal information” as meaning information or an opinion about an identified individual or an individual who is reasonably identifiable:

                        </p>
                        <ol className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                            <li>whether the information or opinion is true or not; and</li>
                            <li> whether the information or opinion is recorded in a material form or not.</li>
                            {/* <li>If a form is required, visitors are directed to the external booking portal via a link/button that opens JaneApp.</li> */}
                        </ol>
                        <p className="mt-3 text-gray-700">
                            (b) If information does not disclose your identity or enable your identity to be ascertained, it will in most cases not be classified as “personal information” and will not be subject to this privacy policy.

                        </p>
                    </section>

                    <section aria-labelledby="no-forms">
                        <h2 id="no-forms" className="mt-2 text-xl font-semibold">What Information do we Collect</h2>
                        <p className="mt-3 text-gray-700">
                            The kind of personal information that we collect from you will depend on how you use the website. The personal information which we collect and hold about you may include but is not limited to:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                            <li>Names</li>
                            <li>Email address</li>
                            <li> Username</li>
                            <li>Password</li>
                            <li>Credit card details</li>
                            <li> IDs and/org. Location information</li>
                        </ul>
                    </section>

                    <section aria-labelledby="no-phi">
                        <h2 id="no-phi" className="mt-2 text-xl font-semibold">How we Collect your Personal Information</h2>
                        <p className="mt-2 text-gray-700">
                            (a) We may collect personal information from you whenever you input such information into the website.</p>
                        <p className="mt-2 text-gray-700">
                            (b) We also collect cookies from your computer which enable us to tell when you use the website and also to help customize your website experience. As a general rule, however, it is not possible to identify you personally from our use of cookies.
                        </p>
                    </section>
                    <section aria-labelledby="janeapp-routing">
                        <h2 id="janeapp-routing" className="mt-2 text-xl font-semibold">Purpose of Collection</h2>
                        <p className="mt-2 text-gray-700">
                            (a) The purpose for which we collect personal information is to provide you with the best service experience possible on the website.
                        </p>
                        <p className="mt-2 text-gray-700">
                            (b) We customarily disclose personal information only to our service providers who assist us in operating the website. Your personal information may also be exposed from time to time to maintenance and support personnel acting in the normal course of their duties.
                        </p>
                        <p className="mt-2 text-gray-700">
                            (c) By using our website, you consent to the receipt of direct marketing material. We will only use your personal information for this purpose if we have collected such information direct from you, and if it is material of a type which you would reasonably expect to receive from user. We do not use sensitive personal information in direct marketing activity. Our direct marketing material will include a simple means by which you can request not to receive further communications of this nature.
                        </p>
                    </section>

                    <section aria-labelledby="analytics">
                        <h2 id="analytics" className="mt-2 text-xl font-semibold">Access and Correction</h2>
                        <p className="mt-2 text-gray-700">
                            Australian Privacy Principle 12 permits you to obtain access to the personal information we hold about you in certain circumstances, and Australian Privacy Principle 13 allows you to correct inaccurate personal information subject to certain exceptions. If you would like to obtain such access, please contact us as set out below </p>


                        <ul className="mt-3 list-disc list-inside text-gray-700">
                            <li>Only marketing-related cookies may be used (analytics, ads measurement) — no PHI is collected or associated.</li>
                            <li>A standard cookie banner is shown to capture consent for marketing cookies (accept/reject).</li>
                            <li>If marketing cookies are rejected, analytics that rely on those cookies will not be loaded.
                            </li>
                        </ul>
                    </section>
                    <section aria-labelledby="cookie-policy">
                        <h2 id="cookie-policy" className="mt-2 text-xl font-semibold">Complaint Procedure</h2>
                        <p className="mt-2 text-gray-700">
                            If you have a complaint concerning the manner in which we maintain the privacy of your personal information, please contact us as set out below. All complaints will be considered by our privacy officer and we may seek further information from you to clarify your concerns. If we agree that your complaint is well founded, we will, in consultation with you, take appropriate steps to rectify the problem. If you remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian Information Commissioner.
                        </p>

                        <section aria-labelledby="cookie-policy">
                            <h2 id="cookie-policy" className="mt-6 text-xl font-semibold">Overseas Transfer</h2>
                            <p className="mt-2 text-gray-700">
                                Your personal information may be transferred overseas or stored overseas for a variety of reasons. It is not possible to identify each and every country to which your personal information may be sent. If your personal information is sent to a recipient in a country with data protection laws which are at least substantially similar to the Australian Privacy Principles, and where there are mechanisms available to you to enforce protection of your personal information under that overseas law, we will not be liable for a breach of the Australian Privacy Principles if your personal information is mishandled in that jurisdiction. If your personal information is transferred to a jurisdiction which does not have data protection laws as comprehensive as Australia’s, we will take reasonable steps to secure a contractual commitment from the recipient to handle your information in accordance with the Australian Privacy Principles.                        </p>
                        </section>

                        <section aria-labelledby="cookie-policy">
                            <h2 id="cookie-policy" className="mt-6 text-xl font-semibold">GDPR</h2>
                            <p className="mt-2 text-gray-700">
                                In some circumstances, the European Union General Data Protection Regulation (GDPR) provides additional protection to individuals located in Europe. The fact that you may be located in Europe does not, however, on its own entitle you to protection under the GDPR. Our website does not specifically target customers located in the European Union and we do not monitor the behavior of individuals in the European Union, and accordingly the GDPR does not apply.
                        </p>
                        </section>
                        <section aria-labelledby="cookie-policy ">
                            <h2 id="cookie-policy" className="mt-6 text-xl font-semibold">How to Contact us about Privacy</h2>
                            <p className="mt-2 text-gray-700">
                                If you have any queries, or if you seek access to your personal information, or if you have a complaint about our privacy practices, you can contact us on : <span className="text-yellow-600">1300-438-562</span></p>
                        </section>
                    </section>
                </article>

               
            </div>
        </div>
        </Layout>
    </>
}
