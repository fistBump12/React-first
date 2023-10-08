import React from "react";

const Header = () => {
    const scrollToFooter = () => {
      // You can use various methods to scroll to the footer.
      // Here, we're using a simple JavaScript method to scroll smoothly to the footer.
      const footer = document.getElementById('footer');
      footer.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#" onClick={scrollToFooter}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
