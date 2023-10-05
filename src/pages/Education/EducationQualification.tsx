import React from 'react';
import Frame1 from '../../assets/Frame 1.png';
import Frame238 from '../../assets/Frame238.svg';
import Framemini237 from '../../assets/Framemini237.svg';
import "./EducationQualification.css"


const EducationQualification = () => {
    return (
        <div className="backgroundDoctor">
            <div className="tablet-container">
                <div className="custom-border">
                    <img
                        src={Frame1}
                        alt=""
                        className="custom-img"
                    />
                    <div className="custom-text">
                        <h1 className="custom-heading">
                            healthXP
                        </h1>
                    </div>
                </div>
                <div className="custom-content">
                    <div className="custom-subheading">
                        <h3 className="custom-subheading-text">
                            Educational Qualifications
                        </h3>
                    </div>
                    <div>
                        <img src={Frame238} alt="" className="custom-image" />
                        <img src={Framemini237} alt="" className="custom-image2" />

                    </div>
                    <form action="" className="custom-form">
                        <div className="custom-input">
                            <label htmlFor="university"></label>
                            <input
                                type="text"
                                name="university"
                                id="university"
                                className="custom-input-field"
                                placeholder="University (e.g. Mountain Dew Univeristy, Enugu)"
                            />
                        </div>
                        <div className="custom-input-row">
                            <div className="custom-select">
                                <label htmlFor="specialization"></label>
                                <select
                                    disabled
                                    name="specialization"
                                    id="specialization"
                                    className="custom-select-field"
                                >
                                    <option selected>Specialization</option>
                                </select>
                            </div>
                            <div className="custom-input-date">
                                <label htmlFor="graduation"></label>
                                <input
                                    type="text/date"
                                    name="graduation"
                                    id="graduation"
                                    value=''
                                    className="custom-input-field-date"
                                    placeholder="Year of Graduation"
                                />
                            </div>
                        </div>
                        <div className="custom-input">
                            <label htmlFor="post_graduate"></label>
                            <input
                                type="text"
                                name="post_graduate"
                                id="post_graduate"
                                className="custom-input-field"
                                placeholder="Post Graduate College"
                            />
                        </div>
                        <div className="custom-input">
                            <label htmlFor="registration_number"></label>
                            <input
                                type="text"
                                name="registration_number"
                                id="registration_number"
                                className="custom-input-field"
                                placeholder="Registration number"
                            />
                        </div>
                        <div className="custom-button">
                            <button className="custom-submit-button">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EducationQualification;
