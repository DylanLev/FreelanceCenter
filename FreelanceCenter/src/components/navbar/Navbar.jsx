import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <span className='text1'>Freelance</span>
                <span className='text2'>Center</span>
            </div>
            <div className="links">
                <span>Business</span>
                <span>Explore</span>
                <span>Hebrew</span>
                <span>Become a seller</span>
                <span>Sign in</span>          
                <button>Join</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar