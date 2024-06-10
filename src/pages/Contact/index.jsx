import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// styles
import "./style.css";
// react-icons
import {
  FaPhoneAlt,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        {/* Contact Heading */}
        <div className="contact__heading">
          <h2>
            Biz bilan <span>bog'lanish</span>
          </h2>
          <p>
            WebX zamonaviy kasblar markazi bilan bog'lanish uchun qo'ng'iroq
            qilishingiz yoki istalgan ijtimoiy tarmog'ingiz orqali aloqaga
            chiqishingiz mumkin
          </p>
        </div>
        <ul className="contact__list">
          <li className="contact__item">
            <Link to="tel:+998330018191" className="contact__link">
              <FaPhoneAlt />
            </Link>
          </li>
          <li className="contact__item">
            <Link
              to="https://t.me/uzwebx"
              target="_blank"
              className="contact__link"
            >
              <FaTelegram />
            </Link>
          </li>
          <li className="contact__item">
            <Link
              to="https://instagram.com/uzwebx"
              target="_blank"
              className="contact__link"
            >
              <FaInstagram />
            </Link>
          </li>

          <li className="contact__item">
            <Link to="https://linkedin.com" className="contact__link">
              <FaLinkedin />
            </Link>
          </li>
        </ul>
        <div className="contact__location">
          <h4>Bizning manzil:</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157.0472245304191!2d71.25619422843779!3d40.38560031621888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb014269f6157b%3A0x587ea4526c1f4816!2sEdu%20Power%20Learning%20Centre!5e1!3m2!1suz!2s!4v1716322566776!5m2!1suz!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
