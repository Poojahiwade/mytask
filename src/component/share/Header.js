import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <div className='container-fluid'>
            <NavLink className='navbar-brand ' href=''>Task</NavLink>
            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#CollapseNavbar">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id="CollapseNavbar">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to ="/"> Home</NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink className='nav-link' to ="/product"> Product</NavLink>
                    </li>
                </ul>

            </div>
        </div>

    </nav>
    </>
  )
}

export default Header