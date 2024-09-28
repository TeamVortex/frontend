import React from 'react'
import './css/Alert.css'

export default function About() {

    return (
        <>
            <div className='row'>
                <div className='col-md-10 col-sm-6 mx-auto'>
                        <header>
                            <h1>About Us</h1>
                            <p>Discover more about our journey, mission, and values.</p>
                        </header>
                    <div className='row mt-5 mb-5' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="card mx-4" style={{ width: '18rem', padding: "1rem" }}>
                            <img src={`${process.env.PUBLIC_URL}/Who_we_are.png`} className="card-img-top" alt="Who We Are" />
                            <div className="card-body">
                                <h5 className="card-title">Who We Are</h5>
                                <p className="card-text">We are a passionate team dedicated to providing the best service possible. Our goal is to deliver excellent products with a customer-first approach.</p>
                            </div>
                        </div>
                        <div className="card mx-4" style={{ width: '18rem', padding: "1rem" }}>
                            <img src={`${process.env.PUBLIC_URL}/Our_Mission.png`} className="card-img-top" alt="Our Mission" />
                            <div className="card-body">
                                <h5 className="card-title">Our Mission</h5>
                                <p className="card-text">To automate the AICTE portal using AI, Blockchain, and Federated Learning, enhancing efficiency and security in educational administration.</p>
                            </div>
                        </div>
                        <div className="card mx-4" style={{ width: '18rem', padding: "1rem" }}>
                            <img src={`${process.env.PUBLIC_URL}/Our_Values.png`} className="card-img-top" alt="Our Values" />
                            <div className="card-body">
                                <h5 className="card-title">Our Values</h5>
                                <p className="card-text">We believe in integrity, transparency, and delivering top-quality solutions for our clients.</p>
                            </div>
                        </div>
                        <div className="card mx-4" style={{ width: '18rem', padding: "1rem" }}>
                            <img src={`${process.env.PUBLIC_URL}/Our_Vision.png`} className="card-img-top" alt="Our Vision" />
                            <div className="card-body">
                                <h5 className="card-title">Our Vision</h5>
                                <p className="card-text">To create a seamless, intelligent, and transparent educational ecosystem that empowers institutions through advanced technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
