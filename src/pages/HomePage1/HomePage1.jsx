import React from 'react'
import Header from '../../components/Header/Header'
import Banner1 from '../../components/Banner1/Banner1'
import Schemes from '../../components/Schemes/Schemes'
import HorizontalScheme from '../../components/HorizontalScheme/HorizontalScheme'
import Documents from '../../components/Documents/Documents'
import SchemeSearching from '../../components/SchemeSearching/SchemeSearching'
import Footer from '../../components/Footer/Footer'

export default function HomePage1() {
  
  return (
    <div>
        <Header />
        <Banner1 />
        <SchemeSearching />
        <Schemes />
        <HorizontalScheme />
        <Documents />
        <Footer />
    </div>
  )
}
