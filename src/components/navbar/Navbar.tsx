import React, { useState } from 'react';
import GuestNavbar from './GuestNavbar';
import LoggedInNavbar from './LoggedInNavbar';

// const [isLoggedIn, setIsLoggedIn] = useState(false);
const isLoggedIn = true;

function handleLogin() {
  // implement later
}

const Navbar = () => {
  return (
    <nav>
      <ul>{isLoggedIn ? <LoggedInNavbar /> : <GuestNavbar />}</ul>
    </nav>
  );
};

export default Navbar;