import React from 'react'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import Footer from './Footer'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Navbar />
        <HeroPage />
        <Footer />
    </div>
  )
}

export default Home