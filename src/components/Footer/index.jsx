import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// styles
import "./style.css";
// React Icons
import { FiPhone, FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const dateTime = new Date();
  const year = dateTime.getFullYear();

  return (
    <footer id="footer" className="footer">
      {/* Footer Container */}
      <div className="container footer__container">
        {/* Top Footer */}
        <div className="footer-top">
          {/* Top Footer Information Block */}
          <div className="footer-top__info">
            {/* Footer Logo */}
            <Link to="/" className="footer-top__logo">
              <img src="/assets/images/white-logo.svg" alt="" />
            </Link>
            {/* Footer Information Text */}
            <p className="footer-top__info-text">
              Zamonaviy kasblarni o'qituvchi o'quv markazining veb-sayti,
              o'quvchilarga istalgan vaqt va har joyda erkinlik bilan elektron
              ta'limni olib borish, ma'lumotlarni ulashish, amaliyotlarni
              oshirish va o'quv jarayonini qulayroq qilishga imkon beruvchi
              virtual platforma.
            </p>
          </div>
          {/* Top Footer Pages Links */}
          <div className="footer-top__pages">
            <h3 className="footer-top__heading">Sahifalar</h3>
            <ul className="footer-top__pages-list">
              <li className="footer-top__pages-item">
                <Link to="courses" className="footer-top__pages-link">
                  Kurslar
                </Link>
                <Link to="/" className="footer-top__pages-link">
                  Loyihalar
                </Link>
              </li>
              <li className="footer-top__pages-item">
                <Link to="/" className="footer-top__pages-link">
                  Jamoa
                </Link>
                <Link to="contact" className="footer-top__pages-link">
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>
          {/* Top Footer Contacts */}
          <div className="footer-top__contacts">
            <h3 className="footer-top__heading">Biz bilan bog'lanish</h3>
            <div className="footer-top__contacts-info">
              <ul className="footer-top__contacts-list">
                <li className="footer-top__contacts-item">
                  <FiPhone />
                  <Link
                    className="footer-top__contacts-link"
                    to="tel:+998330018191"
                  >
                    +998 (33) 001-8191
                  </Link>
                </li>
                <li className="footer-top__contacts-item">
                  <FiMail />
                  <Link
                    className="footer-top__contacts-link"
                    to="mailto:uzwebx@gmail.com"
                  >
                    uzwebx@gmail.com
                  </Link>
                </li>
              </ul>
              {/* Top Footer Address */}
              <div className="footer-top__address">
                <span>
                  <GrLocation />
                </span>
                <Link to="https://maps.app.goo.gl/uqnarwq2nxc82jue7">
                  Farg'ona viloyati, Rishton tumani, Uch ariq qishlog'i
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="footer-bottom">
          {/* Footer Copyright */}
          <p className="footer__copyright">
            {`Copyright ${year} | All Rights Reserved`}
          </p>
          {/* Footer Socials */}
          <ul className="footer-socials__list">
            <li className="footer-socials__item">
              <Link
                to="https://t.me/uzwebx"
                target="_blank"
                className="footer-socials__link"
              >
                <FaTelegramPlane />
              </Link>
            </li>
            <li className="footer-socials__item">
              <Link
                to="https://instagram.com/uzwebx"
                target="_blank"
                className="footer-socials__link"
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="footer-socials__item">
              <Link
                to="https://facebook.com/uzwebx"
                target="_blank"
                className="footer-socials__link"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li className="footer-socials__item">
              <Link
                to="https://t.me/uzwebx"
                target="_blank"
                className="footer-socials__link"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
