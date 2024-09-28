import React from 'react'
import './css/Footer.css'

export default function Footer() {
    return (
        <>
            <div className='row'>
                <div className='col-md-10 col-sm-6 mx-auto'>

                    <footer>
                        <div className="footer-container">
                            <div className="footer-section">
                                <h3>About Us</h3>
                                <p>Your trusted source for educational insights and resources.</p>
                            </div>
                            <div className="footer-section">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h3>Follow Us</h3>
                                <div className="social-links">
                                    <a href="https://facebook.com" target="_blank">Facebook</a><br />
                                    <a href="https://twitter.com" target="_blank">Twitter</a><br />
                                    <a href="https://linkedin.com" target="_blank">LinkedIn</a><br />
                                    <a href="https://instagram.com" target="_blank">Instagram</a><br />
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>© 2024 Vortex. All Rights Reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
