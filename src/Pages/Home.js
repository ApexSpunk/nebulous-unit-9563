import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomePageComCarosel from '../Components/homepage/homePageComCarosel'
import HomePage from '../Components/homepage/HomePageSlider'
import { getProducts } from '../Redux/products/actions'

function Home() {


  return (
    <div>
      <HomePageComCarosel />
    </div>
  )
}

export default Home
