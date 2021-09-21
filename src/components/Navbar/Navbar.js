import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>Logo</div>
      <div>
        {/* search : Location / Check-in / Check-out / Guests*/}
        <a href="#">Places to Stay</a>
        {/*  Enable users to put up their own listing*/}
        <a href="#">Post a Listing</a>
        {/* Reviews from recent users */}
        <a href="#">Browse Experiences</a>
      </div>
      <div>
        <a href="#">Sign Up</a>
        <a href="#">Log In</a>
        <hr />
        <a href="#">Host your home</a>
      </div>
    </div>
  );
};

export default Navbar;

