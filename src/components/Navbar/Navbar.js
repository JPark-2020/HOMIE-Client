import React, {useState} from 'react';

import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const [displayItems, setDisplayItems] = useState(false);

    const displayHandler = () => {
        setDisplayItems(!displayItems)
    }

  return (
    <div className="navbar">
      <div className="navbar__logo">Logo</div>
      <div className="navbar__experiences">
        {/* search : Location / Check-in / Check-out / Guests*/}
        <a href="#">Places to Stay</a>
        {/*  Enable users to put up their own listing*/}
        <a href="#">Post a Listing</a>
        {/* Reviews from recent users */}
        <a href="#">Browse Experiences</a>
      </div>
      <div className="navbar__dropdown">
        <MenuIcon onClick={displayHandler}/>
        {displayItems ? <div className="navbar__dropdown__content">
          <a href="#">Sign Up</a>
          <a href="#">Log In</a>
          <hr />
          <a href="#">Host your home</a>
        </div> : <div className="navbar__dropdown__content"></div>}
      </div>
    </div>
  );
};

export default Navbar;
