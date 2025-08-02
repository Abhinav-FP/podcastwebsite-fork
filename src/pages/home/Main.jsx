import React from 'react'
import Layout from '../../layout/Layout'
import Podcast from './Podcast'
import HeroSection from './HeroSection'
import TopicsGrid from './TopicsGrid'
import WhyChooseUs from './WhyChooseUs'

export default function Main() {
  return (
    <>
      <Layout>
        <HeroSection />
        <Podcast />
        <TopicsGrid />
        <WhyChooseUs />
        <Podcast />
      </Layout>
    </>
  )
}
