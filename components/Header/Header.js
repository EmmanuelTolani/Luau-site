import React, { useState } from "react";

export default function Header() {
  const [isClicked, setClicked] = useState(false);

  const toggleClass = () => {
    setActive(!isClicked);
  };
  return (
    <>
      <header className="header header1">
        <div className="header1__container">
          <div className="header1__logo">
            <a href="/">Luau Data Corporation</a>
          </div>
          <ul className="header1__collections-nav">
            <li>
              <a href="/eyesonsite" className={isClicked ? "active" : null}>
                Overview
              </a>
              <a href="/system">System</a>
              <a href="/products">Products</a>
              <a href="/case-study">Case Study</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div>
            <button type="" className="header1__menu-btn" onClick={toggleClass}>
              MENU
            </button>
          </div>
        </div>
      </header>
      <div className="header1__collections-mobile-nav active">
        <div>
          <button type="" className="header1__menu-close">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul>
          <li>
            <a href="/eyesonsite" className={isClicked ? "active" : null}>
              Overview
            </a>
          </li>
          <li>
            <a href="/system">System</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/case-study">Case Study</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
