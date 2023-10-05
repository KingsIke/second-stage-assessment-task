
import Frame237 from "../../assets/Frame237.svg"
import Frame1 from '../../assets/Frame 1.png';
import Framemini238 from '../../assets/Framemini238.svg';
import "./Location.css"


const Location = () => {
    return (
        <div className="backgroundLocation">
            <div className="location-container">
                <div className="location-custom-border">
                    <img
                        src={Frame1}
                        alt=""
                        className="location-custom-img"
                    />
                    <div className="location-custom-text">
                        <h1 className="location-custom-heading">
                            healthXP
                        </h1>
                    </div>
                </div>
                <div className="location-custom-content">
                    <div className="location-subheading">
                        <h3 className="location-subheading-text">
                        Your Location Details
                        </h3>
                    </div>
                    <div>
                        <img src={Frame237} alt="" className="custom-image1" />
                        <img src={Framemini238} alt="" className="custom-image2" />

                    </div>
                    <form action="" className="location-custom-form">

         

                        <div className="location-input">
                            <label></label>
                            <select disabled
                               
                                name="country"
                                id="country"
                                className="location-custom-input-field"

                          ><option selected>Country of Residence</option>
                          </select>
                        </div>


                        <div className="location-input">
                            <label></label>
                            <select disabled
                               
                                name="country"
                                id="country"
                                className="location-custom-input-field"

                          ><option selected>City/Sate of Residence (e.g. Lekki, Lagos)</option>
                          </select>
                        </div>
                      
                     
                        <div className="location-custom-button">
                            <button className="custom-submit-button">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Location;

