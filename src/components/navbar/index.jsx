import React from 'react'

const Navbar = () => {
  return (
    <nav className='container p-2 d-flex justify-content-between'>
        <div className=" navbar-brand">
            <h3>Home<b>Land</b>.</h3>
        </div>
        <div className="auth__container">
            <a href="/" className="btn">Log in</a>
            <a href="/" className="btn btn-secondary">Sign up</a>
        </div>
    </nav>
  )
}

export default Navbar