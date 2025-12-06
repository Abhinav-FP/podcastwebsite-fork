
import Layout from "@/layout/Layout";
import React from "react";



export default function TermsOfAccess() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 text-gray-900 p-6 sm:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pt-[80px]">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Terms of Access
            </h1>
          </div>

          <article className="space-y-8">
            <section aria-labelledby="intro">
              <p className="text-gray-700">
                This website (referred to in these Terms of Access as the
                “Website”) is owned and operated by The Property Portfolio
                Podcast ACN 687 075 565, who is referred to in these Terms of
                Access as “we”, “us”, “our” and similar grammatical forms.
              </p>
              <p className="mt-2 text-gray-700">
                The material on this Website is copyright © 2021 The Property
                Portfolio Podcast ACN 687 075 565 or other copyright owners.
              </p>
            </section>

            <section aria-labelledby="use-of-site">
              <h2 id="use-of-site" className="text-xl font-semibold">
                Use of the Website
              </h2>
              <p className="mt-2 text-gray-700">
                The Website is available for you to:
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                <li>
                  Access conditional on your acceptance of the terms set out on
                  this page. By continuing to use the Website, you agree to
                  these Terms of Access.
                </li>
                <li>
                  Upload material or information conditional on your acceptance
                  of these terms. By doing so, you also agree to the Terms of
                  Use relating to uploaded content.
                </li>
              </ul>
            </section>

            <section aria-labelledby="use-of-material">
              <h2 id="use-of-material" className="text-xl font-semibold">
                Use of Material on the Website
              </h2>
              <p className="mt-2 text-gray-700">
                Except for limited personal, non-commercial use, you may not use
                or reproduce any material from this Website in any form,
                including:
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                <li>Reproduction or redistribution of materials</li>
                <li>Reposting or “framing” content on another website</li>
                <li>Modifying or copying the website layout or software code</li>
              </ul>
              <p className="mt-2 text-gray-700">
                You may download content for personal use only, provided that
                you do not remove any copyright or trademark notices.
              </p>
            </section>

            <section aria-labelledby="links">
              <h2 id="links" className="text-xl font-semibold">
                Links to Other Websites
              </h2>
              <p className="mt-2 text-gray-700">
                This Website may contain links to external sites owned and
                operated by third parties. We:
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                <li>
                  Provide these links for convenience and do not endorse their
                  content.
                </li>
                <li>
                  Are not responsible for the material or accuracy of information
                  on those linked sites.
                </li>
              </ul>
            </section>

            <section aria-labelledby="disclaimer">
              <h2 id="disclaimer" className="text-xl font-semibold">
                Disclaimer
              </h2>
              <p className="mt-2 text-gray-700">
                The Website is made available for general information only. We
                do not provide professional advice and make no guarantees about
                the accuracy, reliability, or timeliness of any content. To the
                fullest extent permitted by law, we disclaim all warranties and
                accept no liability for any loss or damages resulting from your
                use of the Website.
              </p>
            </section>

            <section aria-labelledby="liability">
              <h2 id="liability" className="text-xl font-semibold">
                Limitation of Liability
              </h2>
              <p className="mt-2 text-gray-700">
                Where law prohibits exclusion of liability, our liability is
                limited to the resupply of services or payment of the cost to
                have the services supplied again.
              </p>
            </section>

            <section aria-labelledby="personal-info">
              <h2 id="personal-info" className="text-xl font-semibold">
                Use of Personal Information
              </h2>
              <p className="mt-2 text-gray-700">
                We may collect and process personal information you provide, such
                as your name, address, and email, as well as data collected via
                cookies. We comply with Australian Privacy laws. Please refer to
                our Privacy Policy for further details.
              </p>
            </section>

            <section aria-labelledby="termination">
              <h2 id="termination" className="text-xl font-semibold">
                Termination of Access
              </h2>
              <p className="mt-2 text-gray-700">
                We may terminate access to the Website at any time without notice
                or justification. We will not be liable for any resulting losses
                or damages.
              </p>
            </section>

            <section aria-labelledby="changes">
              <h2 id="changes" className="text-xl font-semibold">
                Changes to Terms
              </h2>
              <p className="mt-2 text-gray-700">
                We reserve the right to change these Terms of Access at any time
                without notice or explanation.
              </p>
            </section>

            <section aria-labelledby="intellectual-property">
              <h2 id="intellectual-property" className="text-xl font-semibold">
                Intellectual Property Rights
              </h2>
              <p className="mt-2 text-gray-700">
                All logos, brand names, and materials on this Website are our
                intellectual property or that of respective owners. Unauthorized
                use may violate copyright or trademark laws.
              </p>
            </section>

            <section aria-labelledby="jurisdiction">
              <h2 id="jurisdiction" className="text-xl font-semibold">
                Relevant Jurisdiction
              </h2>
              <p className="mt-2 text-gray-700">
                These Terms are governed by the laws of New South Wales,
                Australia. You agree to submit to the jurisdiction of its
                courts.
              </p>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  );
}
