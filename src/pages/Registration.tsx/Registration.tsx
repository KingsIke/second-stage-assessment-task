import React, { FormEvent, useState } from 'react';
import Frame1 from '../../assets/Frame 1.png';
import Frame236 from "../../assets/Frame236.svg"
import Framemini236 from '../../assets/Framemin236.svg';
import './Registration.css'
import { SendRegitrationForm } from "../../Helper/Backend"; 
import { User } from '../../type/user';

const EducationQualification = () => {
    const [user, setUser] = useState<User>({
        email: '',
       fullname: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });
    


const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
        
        const response = await SendRegitrationForm(user);
        console.log(response);
    } catch (error) {
        setErrorMessage(error.message);
    }

  };

    return (
        <div className="registrationBackground">
            <div className="registration-tablet-container">
                <div className="registration-custom-border">
                    <img
                        src={Frame1}
                        alt=""
                        className="registration-custom-img"
                    />
                    <div className="registration-custom-text">
                        <h1 className="registration-custom-heading">
                            healthXP
                        </h1>
                    </div>
                </div>
                <div className="registration-custom-content">
                    <div className="registration-custom-subheading">
                    <p className="registration-page">
                         Are you a Doctor?
                     </p>
                        <h3 className="registration-custom-subheading-text">
                        Register Today
                        </h3>
                    </div>
                    <div>
                        <img src={Frame236} alt="" className="registration-custom-image" />
                        <img src={Framemini236} alt="" className="registration-custom-image2" />

                    </div>
                    <form onSubmit={handleSubmit}className="registration-custom-form">
                        <div className="registration-custom-input">
                            <label></label>
                            <input
                                type="text"
                                name="fullname"
                                id="fullname"
                                className="registration-custom-input-field"
                                placeholder="Full Name" 
                                value={user.fullname}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="registration-custom-input">
                            <label htmlFor="university"></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="registration-custom-input-field"
                                placeholder="Email"
                                value={user.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                
                        <div className="registration-custom-input">
                            <label htmlFor="phoneNumber"></label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="registration-custom-input-field"
                                placeholder="Phone Number"
                                value={user.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="registration-custom-input">
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="registration-custom-input-field"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div> <div className="registration-custom-input">
                            <label htmlFor="confirm_password"></label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                className="registration-custom-input-field"
                                placeholder="Confirm Password"
                                value={user.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="custom-button">
                            <button type="submit" className="custom-submit-button">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EducationQualification;
