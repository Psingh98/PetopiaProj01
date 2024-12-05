import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('First Name:', fname);
        console.log('Last Name:', lname);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Register for Our Great Service</h2>
            <form className="register-form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input 
                        type="text" 
                        id="fname" 
                        value={fname} 
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder='Enter Your First Name'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input 
                        type="text" 
                        id="lname" 
                        value={lname} 
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder='Enter Your Last Name'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Enter Your Email'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Enter Your Password'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder='Confirm Your Password'
                    />
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default Register;