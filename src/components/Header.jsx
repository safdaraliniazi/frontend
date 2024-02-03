import React from "react";
import { images } from "../constants";

const Header = () => {
  return (
    <section>
      <header className="container mx-auto px-5">
        <div>
          <img style={{width : '14rem'}} src = {images.logo} alt="logo" />
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            
            <li>
              <a href="/">Articles</a>
            </li>
            
            <li>
              <a href="/">Pages</a>
            </li>

            
            <li>
              <a href="/">Pricing</a>
            </li>

            
            <li>
              <a href="/">Faq</a>
            </li>

            <button>Sign in</button>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
