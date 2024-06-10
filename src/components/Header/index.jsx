import React, { useState } from "react";
// react-router-dom
import { Link, useLocation } from "react-router-dom";
// styles
import "./style.css";
// react-icons
import { IoIosArrowUp } from "react-icons/io";
import { FaGlobe, FaGraduationCap, FaComment } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { TfiThought } from "react-icons/tfi";

const Header = () => {
  // location
  const location = useLocation();

  const [dropdown, setDropdown] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [asidenav, setAsidenav] = useState(false);

  const handleLanguageBtn = () => {
    !langDropdown ? setLangDropdown(true) : setLangDropdown(false);
    setAsidenav(false);
  };

  const handleMenuBtn = () => {
    !asidenav ? setAsidenav(true) : setAsidenav(false);
    setLangDropdown(false);
    setDropdown(false);
  };

  const handleDropdown = () => {
    setAsidenav(false);
    setDropdown(false);
  };

  return (
    <header id="header" className="header">
      <div className="container header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <img src="/assets/images/logo.svg" alt="" />
        </Link>
        {/* Navigation */}
        <nav className="sitenav">
          <ul className="sitenav__list">
            <li className="sitenav__item">
              <div
                onClick={() =>
                  !dropdown ? setDropdown(true) : setDropdown(false)
                }
                className={`sitenav__link ${
                  location.pathname === "/" ? "active" : " "
                } ${dropdown ? "dropdown-active" : " "}`}
              >
                Bosh sahifa <IoIosArrowUp />
              </div>
              <ul
                className={`sitenav__item-dropdown-list ${
                  dropdown ? "active" : " "
                }`}
              >
                <li className="sitenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#courses"
                    className="sitenav__item-dropdown-link"
                  >
                    Kurslar
                  </a>
                </li>
                <li className="sitenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#blog"
                    className="sitenav__item-dropdown-link"
                  >
                    Blog
                  </a>
                </li>
                <li className="sitenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#category"
                    className="sitenav__item-dropdown-link"
                  >
                    Kategoriyalar
                  </a>
                </li>
                <li className="sitenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#about"
                    className="sitenav__item-dropdown-link"
                  >
                    Biz haqimizda
                  </a>
                </li>
                <li className="sitenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#testimonials"
                    className="sitenav__item-dropdown-link"
                  >
                    Fikrlar
                  </a>
                </li>
              </ul>
            </li>
            <li className="sitenav__item">
              <Link
                to="/"
                className={`sitenav__link ${
                  location.pathname === "/news" ? "active" : " "
                }`}
              >
                Yangiliklar
              </Link>
            </li>
            <li className="sitenav__item">
              <Link
                to="courses"
                className={`sitenav__link ${
                  location.pathname === "/courses" ? "active" : " "
                }`}
              >
                Kurslar
              </Link>
            </li>
            <li className="sitenav__item">
              <Link
                to="/"
                className={`sitenav__link ${
                  location.pathname === "/team" ? "active" : " "
                }`}
              >
                Jamoa
              </Link>
            </li>
          </ul>
        </nav>
        {/* Header Buttons */}
        <div className="header__btns">
          {/* Header Language Button */}
          <button
            onClick={() =>
              !langDropdown ? setLangDropdown(true) : setLangDropdown(false)
            }
            className={`header__lang-btn ${
              langDropdown ? "dropdown-active" : " "
            }`}
          >
            <FaGlobe /> Til{" "}
            <span>
              <IoIosArrowUp />
            </span>
            <ul
              className={`header__lang-btn__dropdown-list ${
                langDropdown ? "active" : " "
              }`}
            >
              <li className="header__lang-btn__dropdown-item">
                <img src="/assets/images/uz.png" alt="" width={24} />
                O'zbekcha
              </li>
              <li
                className="header__lang-btn__dropdown-item"
                style={{ fontWeight: "600" }}
              >
                <img src="/assets/images/ru.png" alt="" width={24} />
                Русский
              </li>
              <li className="header__lang-btn__dropdown-item">
                <img src="/assets/images/en.png" alt="" width={24} />
                English
              </li>
            </ul>
          </button>
          {/* Contact Button */}
          <Link to="/contact" className="contact-btn">
            Bog'lanish
          </Link>
        </div>
        {/* Small Header Buttons */}
        <div className="small-header__btns">
          {/* Header Language Button */}
          <button
            onClick={handleLanguageBtn}
            className={`header__lang-btn ${
              langDropdown ? "dropdown-active" : " "
            }`}
          >
            <FaGlobe /> Til{" "}
            <span>
              <IoIosArrowUp />
            </span>
            <ul
              className={`header__lang-btn__dropdown-list ${
                langDropdown ? "active" : " "
              }`}
            >
              <li className="header__lang-btn__dropdown-item">
                <img src="/assets/images/uz.png" alt="" width={24} />
                O'zbekcha
              </li>
              <li
                className="header__lang-btn__dropdown-item"
                style={{ fontWeight: "600" }}
              >
                <img src="/assets/images/ru.png" alt="" width={24} />
                Русский
              </li>
              <li className="header__lang-btn__dropdown-item">
                <img src="/assets/images/en.png" alt="" width={24} />
                English
              </li>
            </ul>
          </button>
          {/* Menu button */}
          <button onClick={handleMenuBtn} className="header__menu-btn">
            {asidenav ? <IoClose /> : <IoMenu />}
          </button>
        </div>
        {/* Aside Navigation */}
        <nav className={`asidenav ${asidenav ? "active" : " "}`}>
          {/* Close btn */}
          <button
            onClick={() => setAsidenav(false)}
            className="asidenav__close"
          >
            <IoClose />
          </button>
          {/* Logo */}
          <Link to="/" className="header__logo aside__logo">
            <img src="/assets/images/logo.svg" alt="" />
          </Link>
          <ul className="asidenav__list">
            <li className="asidenav__item">
              <div
                onClick={() =>
                  !dropdown ? setDropdown(true) : setDropdown(false)
                }
                className="asidenav__link asidenav__link-div"
              >
                Bosh sahifa <IoIosArrowUp />
              </div>
              <ul
                className={`asidenav__item-dropdown-list ${
                  dropdown ? "active" : " "
                }`}
              >
                <li className="asidenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#courses"
                    className="asidenav__item-dropdown-link"
                  >
                    <FaGraduationCap /> Kurslar
                  </a>
                </li>
                <li className="asidenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#blog"
                    className="asidenav__item-dropdown-link"
                  >
                    <FaComment /> Blog
                  </a>
                </li>
                <li className="asidenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#category"
                    className="asidenav__item-dropdown-link"
                  >
                    <BiSolidCategory /> Kategoriyalar
                  </a>
                </li>
                <li className="asidenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#about"
                    className="asidenav__item-dropdown-link"
                  >
                    <FaCircleInfo /> Biz haqimizda
                  </a>
                </li>
                <li className="asidenav__item-dropdown-item">
                  <a
                    onClick={handleDropdown}
                    href="/#testimonials"
                    className="asidenav__item-dropdown-link"
                  >
                    <TfiThought /> Fikrlar
                  </a>
                </li>
              </ul>
            </li>
            <li className="asidenav__item">
              <Link
                onClick={() => setAsidenav(false)}
                to="/"
                className="asidenav__link"
              >
                Yangiliklar
              </Link>
            </li>
            <li className="asidenav__item">
              <Link
                onClick={() => setAsidenav(false)}
                to="courses"
                className="asidenav__link"
              >
                Kurslar
              </Link>
            </li>
            <li className="asidenav__item">
              <Link
                onClick={() => setAsidenav(false)}
                to="/"
                className="asidenav__link"
              >
                Jamoa
              </Link>
            </li>
          </ul>
          <Link
            onClick={() => setAsidenav(false)}
            to="/"
            className="aside__contact-btn"
          >
            Bog'lanish
          </Link>
        </nav>
        {/* Overflow */}
        {asidenav && (
          <div onClick={() => setAsidenav(false)} className="overflow"></div>
        )}
      </div>
    </header>
  );
};

export default Header;
