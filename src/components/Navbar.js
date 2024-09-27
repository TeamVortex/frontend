import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <div className='row'>
        <div className='col-md-10 col-sm-6 mx-auto'>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
              <span><img src={`${process.env.PUBLIC_URL}/AICTE-32x32.png`} alt="logo" /></span>
              <Link className="navbar-brand mx-2" to="/" style={{ fontWeight: "bold" }}>AICTE</Link >
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link >
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link >
                  </li>

                  <div className='d-flex me-2'>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-lg fa-user"></i>
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/login">Login</Link></li>
                        <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                      </ul>
                    </li>
                  </div>
                  <div className={`form-check mx-2 my-2 form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                  </div>
                    <label className={`form-check-label my-2 text-${props.mode === 'light' ? 'dark' : 'dark'}`} htmlFor="flexSwitchCheckDefault">
                      Enable {props.mode === 'light' ? 'dark' : 'dark'} mode
                    </label>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
