import React from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import NewArrivals from '../Components/NewArrivals'
import Banner from '../Components/Banner'
import PopularProducts from '../Components/PopularProducts'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
     <Hero />
     <Features/>
     <NewArrivals />
     <Banner />
     <PopularProducts />
     <Blog />
     <Footer />
    </>
  )
}

export default Home