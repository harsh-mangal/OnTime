import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-main">
            <img src="client\src\Images\logo.png" alt="" />
            <p>OnTime</p>
        </div>
        <div className="navbar-links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/vehicles">Vehicles</a></li>
                <li><a href="/location">Locations</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar