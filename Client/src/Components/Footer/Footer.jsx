import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagramSquare} from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
      <span className='footer'>
          <h4> Dear friends!</h4>
        <h4>
          If you have any complaints, you can contact the quality control
          department 😀.
        </h4>
        <h4 className='contact'>Contact Details: +972-052-000-1111
           <a href="https://www.instagram.com/"><FaInstagramSquare/></a>
          <a href="https://www.facebook.com/"><FaFacebook/></a>
</h4>

      </span>
        </footer>
    );
};

export default Footer;
