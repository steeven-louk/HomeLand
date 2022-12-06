import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container p-2 d-flex justify-content-between'>
        <div className=" navbar-brand">
          <Link to="/" className='text-dark'><h3>Home<b>Land</b>.</h3></Link>  
        </div>
        <div className="auth__container">
            <a href="/" className="btn">Log in</a>
            <a href="/" className="btn btn-secondary">Sign up</a>
        </div>
    </nav>
  )
}

export default Navbar