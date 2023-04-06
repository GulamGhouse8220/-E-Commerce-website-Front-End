import React from 'react'
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar'
import Slider from '../components/Slider';
import Products from '../components/Products';
import Newsletters from '../components/Newsletters.jsx';
import Footer from '../components/Footer';

const Home = () => {
  return (

    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletters/>
      <Footer/>
    </div>
  )
}

export default Home;