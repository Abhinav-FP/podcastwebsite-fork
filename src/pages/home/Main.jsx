import React from "react";
import Layout from "../../layout/Layout";
import Podcast from "./Podcast";
import HeroSection from "./HeroSection";
import InvestorSection from "./InvestorSection";
import MeetYourHost from "./MeetYourHost";
import Learn from "./Learn";
import Guide from "./Guide";
import Testimonials from "./Testimonials";
import NewsletterBanner from "@/common/NewsletterBanner";
export default function Main() {
  return (
    <Layout>
      <HeroSection />
      <InvestorSection />
      <section className="relative my-12 overflow-hidden">
        <div className="absolute w-[60vw] max-w-[500px] aspect-square -left-[12%] bottom-0 translate-y-1/2 blurcircle rounded-r-full" />
        <div className="absolute w-[60vw] max-w-[500px] aspect-square -right-[12%] top-0 blurcircle rounded-l-full" />
        <Podcast />
      </section>
      {/* <MeetYourHost /> */}
      <section className="bg-[#1E1E1E] relative my-12 overflow-hidden">
        <div className="absolute w-[60vw] max-w-[500px] aspect-square -left-[12%] bottom-0 translate-y-1/2 blurcircle rounded-r-full"/>
        <div className="absolute w-[60vw] max-w-[500px] aspect-square -right-[12%] top-0 blurcircle rounded-l-full"/>
        <Learn />
      </section>
      {/* <Guide /> */}
      {/* <Testimonials /> */}
      <NewsletterBanner />
      {/* <TopicsGrid /> */}
      {/* <WhyChooseUs /> */}
    </Layout>
  );
}
