import React from 'react'
import Layout from '../../layout/Layout'
import Podcast from './Podcast'
import HeroSection from './HeroSection'
import InvestorSection from './InvestorSection'
import MeetYourHost from './MeetYourHost'
import Learn from './Learn'
import Guide from './Guide'
import Testimonials from './Testimonials'
import NewsletterBanner from '@/common/NewsletterBanner'
export default function Main() {
  return (
    <Layout>
      <HeroSection />
      <InvestorSection />
      <Podcast />
      <MeetYourHost />
      <Learn />
      <Guide />
      <Testimonials />
      <NewsletterBanner />
      {/* <TopicsGrid /> */}
      {/* <WhyChooseUs /> */}
    </Layout>
  )
}
