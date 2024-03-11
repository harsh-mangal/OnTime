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
                <li><a href="">Home</a></li>
                <li><a href="">Vehicles</a></li>
                <li><a href="">Locations</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar