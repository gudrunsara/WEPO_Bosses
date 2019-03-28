import React from 'react'; 
import NavLinks from '../NavLinks/NavLinks';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="NavBar"> 
        <NavLinks/>
      </nav>
    );
  }
}; 

export default NavBar; 