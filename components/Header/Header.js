import React, { useState } from "react";
import Link from 'next/link'

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
              <Link href="/eyesonsite">
              <a>
                Overview
              </a>
              </Link>
              </li>
              <li>
              <Link href="/system">
              <a>
                System
              </a>
              </Link>
              </li>
              <li>
              <Link href="/products">
              <a>
                Products
              </a>
              </Link>
              </li>
              <li>
              <Link href="/case-study">
              <a>
                Case Study
              </a>
              </Link>
              </li>
              <li>
              <Link href="/about">
              <a>
                About
              </a>
              </Link>
              </li>
              <li>
              <Link href="/contact">
              <a>
                Contact
              </a>
              </Link>
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
              <Link href="/eyesonsite">
              <a>
                Overview
              </a>
              </Link>
              </li>
              <li>
              <Link href="/system">
              <a>
                System
              </a>
              </Link>
              </li>
              <li>
              <Link href="/products">
              <a>
                Products
              </a>
              </Link>
              </li>
              <li>
              <Link href="/case-study">
              <a>
                Case Study
              </a>
              </Link>
              </li>
              <li>
              <Link href="/about">
              <a>
                About
              </a>
              </Link>
              </li>
              <li>
              <Link href="/contact">
              <a>
                Contact
              </a>
              </Link>
              </li>
        </ul>
      </div>
    </>
  );
}
