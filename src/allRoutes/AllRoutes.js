import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../component/feature/Home'
import Product from '../component/feature/Product'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element={<Home />}/>
            <Route path="/product" element={<Product />}/>


        </Routes>
    
    </>
  )
}

export default AllRoutes