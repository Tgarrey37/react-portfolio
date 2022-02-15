import React from 'react';
import '../App.css';
// const styles = {
//     nav: { justifyContent: 'center'}
// }
// TODO: Add a comment explaining how we are able to extract the key value pairs from props
//  We destructured the currentPage and handlePageChange to extract the value pairs from props.
function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          //  We are using a ternary operator below to check if we are on the homepage then making the nav link active if true.

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //  TODO: Add a comment explaining what this logic is doing
      // ternary operator if on the about page and then presents nav link active 
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
        Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing
          //  Checking weather we are on blog page then creating nav link active as well.

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          //  TODO: Add a comment explaining what this logic is doing
          //  On click of handlepagechange contact it will render the contact page

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;
