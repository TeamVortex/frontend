import React, { useEffect, useState } from 'react';
import './css/Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [currentPage, setCurrentPage] = useState(props.initialPage);
    const [formData, setFormData] = useState({ l_email: '', l_emailpassword: '' });
    const [signupData, setSignupData] = useState({name:'', email: '', password: '' });
    const [forgotPassData, setForgotPassData] = useState({ f_email: ''});
    const [accountType, setAccountType] = useState('');

    const loginEndPoint = "http://localhost:8080/";
    const signupEndpoint = "http://localhost:8080/signupservices";
    const forgotPassEndPoint = "http://localhost:5000/forgotpassservices";

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

    const handleForgotPasswordSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(forgotPassEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(forgotPassData)
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

    const handleCreateAccountSubmit = async(event) => {
        event.preventDefault();
        const response = await fetch(signupEndpoint,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(signupData)
        }).then(response=>{
            if(!response.ok){
                throw new Error('Network response was not ok'+response.statusText);
            }
            return response.json();
        }).then(data=>{
            props.showAlert("Signup Successful","success");
            history("/login");
        }).catch(error=>{props.showAlert("Enter Valid Credentials","danger");});
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setSignupData({...signupData,[id]:value});
    };

    const handleDropdownChange = (e) => { setAccountType(e.target.value); };

    return (
        <>
            <div className='container' style={{ marginTop: "2rem", marginBottom:'2rem'}}>
                {currentPage === 'login' && (
                    <div id="loginPage" className="login-container">
                        <div className="logo-container">
                            <img src={`${process.env.PUBLIC_URL}/AICTE-192x192.png`} alt="Company Logo" className="logo" />
                        </div>

                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Email Address</label>
                                <input type="email" className="form-control" id="l_email" name='l_email' onChange={handleChange} placeholder="Enter valid email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Password</label>
                                <input type="password" className="form-control" id="l_password" name='l_password' onChange={handleChange} placeholder="Password" required />
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
                                <input type="email" name='f_email' className="form-control" id="f_email" placeholder="hello@aicte.in" required />
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
                                <input type="text" className="form-control" id="name" name='name' placeholder="Enter your name" onChange={handleChange} required />
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
                                <input type="email" className="form-control" id="email" name='email' onChange={handleChange} placeholder="Enter valid email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="createPassword" className={`text-center mb-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Password</label>
                                <input type="password" className="form-control" id="password" name='password' onChange={handleChange} placeholder="Password" required />
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