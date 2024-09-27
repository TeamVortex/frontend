import React, { useEffect, useState } from 'react';
import './css/Login.css'
import { useNavigate } from 'react-router-dom';

// import logo from './AICTE-192x192.png';

export default function Login(props) {
    const [currentPage, setCurrentPage] = useState(props.initialPage);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [accountType, setAccountType] = useState('');
    const loginEndPoint = "http://localhost:5000/loginservices"
    const history = useNavigate();

    const showCreateAccount = () => { setCurrentPage('createAccount'); };
    const showForgotPassword = () => { setCurrentPage('forgotPassword'); };
    const showLogin = () => { setCurrentPage('login'); };

    useEffect(() => { setCurrentPage(props.initialPage); }, [props.initialPage]);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(loginEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        }).then(data => {
            props.showAlert("Login Successful", "success");
            history('/');
        }).catch(error => { props.showAlert("Wrong Credentials", "danger"); });
    };

    const handleForgotPasswordSubmit = (event) => {
        event.preventDefault();
    };

    const handleCreateAccountSubmit = (event) => {
        event.preventDefault();
    };


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleDropdownChange = (e) => { setAccountType(e.target.value); };

    return (
        <>
            <div className='container' style={{ marginTop: "4rem" }}>
                {currentPage === 'login' && (
                    <div id="loginPage" className="login-container">
                        <div className="logo-container">
                            <img src={`${process.env.PUBLIC_URL}/AICTE-192x192.png`} alt="Company Logo" className="logo" />
                        </div>

                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Email Address</label>
                                <input type="email" className="form-control" id="email" onChange={handleChange} placeholder="Enter valid email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Password</label>
                                <input type="password" className="form-control" id="password" onChange={handleChange} placeholder="Password" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                            <div className="text-center mt-3">
                                <button type="button" className="btn-light" onClick={showForgotPassword}>Forgot Password?</button>
                            </div>
                        </form>
                        <hr />
                        <div className="text-center mt-3">
                            <button type="button" className="btn-light" onClick={showCreateAccount}>Create an account</button>
                        </div>
                    </div>
                )}

                {currentPage === 'forgotPassword' && (
                    <div id="forgotPasswordPage" className="forgot-password-container">
                        <div className="logo-container">
                            <img src={`${process.env.PUBLIC_URL}/AICTE-192x192.png`} alt="Company Logo" className="logo" />
                        </div>
                        <h3 className={`text-center mb-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Forgot Password?</h3>
                        <p className={`text-center mb-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter your email to get a password reset link.</p>
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <div className="mb-3">
                                <label htmlFor="forgotEmail" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Email Address</label>
                                <input type="email" className="form-control" id="forgotEmail" placeholder="hello@aicte.in" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Password Reset</button>
                            <div className="text-center mt-3">
                                <button type="button" className="btn-light" onClick={showLogin}>Back to login</button>
                            </div>
                        </form>
                    </div>
                )}

                {currentPage === 'createAccount' && (
                    <div id="createAccountPage" className="create-account-container">
                        <div className="logo-container">
                            <img src={`${process.env.PUBLIC_URL}/AICTE-192x192.png`} alt="Company Logo" className="logo" />
                        </div>
                        <h3 className={`text-center mb-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Create an Account</h3>
                        <form onSubmit={handleCreateAccountSubmit}>
                            <div className="mb-3">
                                <label htmlFor="createName" className={`text-center mb-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Name</label>
                                <input type="text" className="form-control" id="createName" placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                                <span className={`text-center mb-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Choose One: </span>
                                <select className={`text-center mb-4`} value={accountType} onChange={handleDropdownChange} style={{
                                    backgroundColor: props.mode === 'light' ? '#fff' : '#042743',
                                    color: props.mode === 'light' ? '#042743' : '#fff'
                                }}>
                                    <option value="" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} disabled>Select an option</option>
                                    <option value="administrator" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Administrator</option>
                                    <option value="evaluator" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Evaluator</option>
                                    <option value="college" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>College</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="createEmail" className={`text-center mb-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Email Address</label>
                                <input type="email" className="form-control" id="createEmail" placeholder="Enter valid email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="createPassword" className={`text-center mb-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Password</label>
                                <input type="password" className="form-control" id="createPassword" placeholder="Password" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            <div className="text-center mt-3">
                                <button type="button" className="btn-light" onClick={showLogin}>Back to login</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}