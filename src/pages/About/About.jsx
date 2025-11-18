import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AboutHero from '../../components/AboutHero/AboutHero'
import Leadership from '../../components/Leadership/Leadership'
import VisionMission from '../../components/VisionMission/VisionMission'

export default function About() {
  return (
    <div>
      <Header />
      <AboutHero />
      <Leadership />
      <VisionMission />
      <Footer />
    </div>
  )
}
