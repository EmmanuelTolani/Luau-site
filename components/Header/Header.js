import React, { useState } from "react";
import Link from "next/link";
import SubHeader from "./SubHeader/SubHeader";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const [isClicked, setClicked] = useState(false);
  const router = useRouter();
  const toggleClass = () => {
    setActive(!isClicked);
  };
  return (
    <>
      {/* <SubHeader/> */}
      <header className="header header1">
        <div className="header1__container">
          {/* The header logo section starts */}
          <div className="header1__logo">
            <Link href="/">
              <a>
                <img
                  src="../src/img/website-images/logo-image-s.png"
                  height={60}
                />{" "}
                <img
                  src="../src/img/website-images/logo-text.png"
                  height={20}
                  width={200}
                />{" "}
              </a>
            </Link>
          </div>
          {/* The header logo section ends */}
          {/* The header links section starts */}
          <ul className="header1__collections-nav">
            <li>
              <Link href="/eyesonsite">
                <a className={router.pathname == "/eyesonsite" ? "active" : ""}>
                  Overview
                </a>
              </Link>
            </li>
            <li>
              <Link href="/eyesonsite">
                <a className={router.pathname == "/eyesonsite" ? "active" : ""}>
                  Luau<i class="fa-solid fa-chevron-down"></i>
                </a>
              </Link>
              <ul className="header1__collections-nav--dropdown active">
                <li>
                  <Link href="/about">
                    <a className={router.pathname == "/about" ? "active" : ""}>
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a
                      className={router.pathname == "/contact" ? "active" : ""}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/system">
                <a className={router.pathname == "/system" ? "active" : ""}>
                  System <i class="fa-solid fa-chevron-down"></i>
                </a>
              </Link>
              <ul className="header1__collections-nav--dropdown active">
              <li >
                  <Link href="/system">
                    <a className={router.pathname == "/system" ? "active" : ""}>Overview</a>
                  </Link>
                </li>
                <li>
                  <Link href="/cloud">
                    <a className={router.pathname == "/cloud" ? "active" : ""}>Cloud Server</a>
                  </Link>
                </li>
                <li>
                  <Link href="/display">
                    <a className={router.pathname == "/display" ? "active" : ""}>Display</a>
                  </Link>
                </li>
                <li>
                  <Link href="/device">
                    <a className={router.pathname == "/device" ? "active" : ""}>Devices and sensors</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/products">
                <a className={router.pathname == "/products" ? "active" : ""}>
                  Products
                </a>
              </Link>
            </li>
            <li>
              <Link href="/case-study">
                <a className={router.pathname == "/case-study" ? "active" : ""}>
                  Case Study
                </a>
              </Link>
            </li>
            <li>
              <Link href="/applications">
                <a
                  className={router.pathname == "/applications" ? "active" : ""}
                >
                  Applications
                </a>
              </Link>
            </li>
          </ul>
          {/* The header link section ends */}
          {/* The button section starts */}
          <div className="header1__menu-btn-container">
            <button type="" className="header1__menu-btn" onClick={toggleClass}>
              MENU
            </button>
          </div>
          {/* The button section ends */}
        </div>
      </header>
      {/* The Mobile menu start */}
      <div className="header1__collections-mobile-nav active">
        <div>
          <button type="" className="header1__menu-close">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul>
          <li>
            <Link href="/eyesonsite">
              <a>Overview</a>
            </Link>
          </li>
          <li>
            <Link href="/system">
              <a>System</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/case-study">
              <a>Case Study</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* The Mobile Menu End */}
    </>
  );
}
