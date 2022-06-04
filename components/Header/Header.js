import React, { useState } from "react";
import Link from "next/link";
import SubHeader from "./SubHeader/SubHeader";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const toggleIcon = () => {
    if (isActive) {
      return (
        <>
          <i
            className="fa-solid fa-rectangle-xmark"
            style={{
              color: "red",
              fontSize: "3rem",
            }}
          ></i>
        </>
      );
    } else {
      return (
        <>
          <i className="fa-solid fa-bars"></i>
        </>
      );
    }
  };
  const router = useRouter();
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
              <Link href="/">
                <a className={router.pathname == "/" ? "active" : ""}>
                  Home
                </a>
              </Link>
            </li>
            {/* <li>
              <Link href="/eyesonsite">
                <a className={router.pathname == "/eyesonsite" ? "active" : ""}>
                  Eyes on Site
                </a>
              </Link>
            </li> */}
            {/* <li>
                <a>
                  Luau<i className="fa-solid fa-chevron-down"></i>
                </a>
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
            </li> */}
            <li>
              <Link href="/eyesonsite">
              <a className={router.pathname == "/eyesonsite" ? "active" : ""} >
                  Eyes On Site<i className="fa-solid fa-chevron-down"></i>
                </a>
              </Link>
              <ul className="header1__collections-nav--dropdown active">
              <li >
                  <Link href="/system">
                    <a className={router.pathname == "/system" ? "active" : ""}>System</a>
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
            {/* <li>
              <Link href="/case-study">
                <a className={router.pathname == "/case-study" ? "active" : ""}>
                  Case Study
                </a>
              </Link>
            </li> */}
            <li>
              <Link href="/applications">
                <a
                  className={router.pathname == "/applications" ? "active" : ""}
                >
                  Applications
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
          {/* The header link section ends */}
          {/* The button section starts */}
          <div className="mobile" onClick={toggleClass}>
            {toggleIcon()}
          </div>
        </div>
      </header>
      {/* The Mobile menu start */}
      <ul
        className={
          isActive
            ? "header1__collections-nav-mobile show"
            : "header1__collections-nav-mobile"
        }
      >
        <li>
              <Link href="/">
                <a className={router.pathname == "/" ? "active" : ""}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/eyesonsite">
              <a className={router.pathname == "/eyesonsite" ? "active" : ""} >
                  Eyes On Site
                </a>
              </Link>
        </li>
        <li >
                  <Link href="/system">
                    <a className={router.pathname == "/system" ? "active" : ""}>System</a>
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
          <li>
              <Link href="/products">
                <a className={router.pathname == "/products" ? "active" : ""}>
                  Products
                </a>
              </Link>
            </li>
            <li>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
      {/* The Mobile Menu End */}
    </>
  );
}
