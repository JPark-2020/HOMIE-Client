import React from "react";
import LandingImage from "../../images/landing.jpeg";
import LosAngeles from "../../images/LosAngeles.jpeg";
import LandingHosting from "../../images/landinghosting.jpeg";
import "./Landing.css";

const Landing = () => {
  return (
    <React.Fragment>
      {/* Landing Image */}
      <div className="landing">
        <img src={LandingImage} alt="landing image" />
      </div>
      {/* Trending Locations */}
      <div className="landing__trending">
        <h2>Trending Locations</h2>
        <div className="landing__trending__container">
          <div className="trending__location">
            <img src={LosAngeles} alt="LosAngeles" />
            <p>Los Angeles, CA</p>
          </div>
          <div className="trending__location">
            <img src={LosAngeles} alt="LosAngeles" />
            <p>Los Angeles, CA</p>
          </div>
          <div className="trending__location">
            <img src={LosAngeles} alt="LosAngeles" />
            <p>Los Angeles, CA</p>
          </div>
          <div className="trending__location">
            <img src={LosAngeles} alt="LosAngeles" />
            <p>Los Angeles, CA</p>
          </div>
        </div>
      </div>

      <div className="landing__hosting">
        <div className="landing__hosting__content">
          <h3>Try hosting</h3>
        </div>
        <div className="landing__hosting__image">
          <img src={LandingHosting} href="hosting image" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
