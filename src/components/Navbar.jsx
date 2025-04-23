import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // لما المستخدم يضغط على لينك نقفل القائمة
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="parent">
      <div className="logo">BOXCARS</div>

      {/* زر الموبايل */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* القائمه */}
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <li><a href="/" onClick={handleLinkClick}>Home</a></li>
        <li><a href="/listings" onClick={handleLinkClick}>Listings</a></li>
        <li><a href="/blog" onClick={handleLinkClick}>Blog</a></li>
        <li><a href="/pages" onClick={handleLinkClick}>Pages</a></li>
        <li><a href="/about" onClick={handleLinkClick}>About</a></li>
        <li><a href="/contact" onClick={handleLinkClick}>Contact</a></li>
        <li>
          <a href="/signin" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faUser} /> Sign in
          </a>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;

