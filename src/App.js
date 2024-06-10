import React from 'react'
import Header from './component/share/Header'
import AllRoutes from './allRoutes/AllRoutes'
import Footer from './component/share/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <div className="container my-5" style={{minHeight : "550px"}}>
            <AllRoutes/>
        </div>
        <Footer/>
    </>
  )
}

export default App