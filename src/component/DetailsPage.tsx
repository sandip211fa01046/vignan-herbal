import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PlantDetails from './PlantDetails'

type Props = {}

const DetailsPage = (props: Props) => {
  return (
    <div>
        <Navbar />
        <div className="mt-10">
        <PlantDetails />
      </div>
        <Footer />
    </div>
  )
}

export default DetailsPage;