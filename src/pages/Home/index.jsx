import React, { useEffect, useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// styles
import "./style.css";
// react-icons
import { IoIosArrowUp } from "react-icons/io";
// data
import courses from "../../data/courses.json";
import testimonials from "../../data/testimonials.json";
// Components
import TestimonialSlider from "../../components/TestimonialSlider";
import Cards from "../../components/Cards";
import TestDemoText from "../../components/TestModeText";

const Home = () => {
  const [courseType, setCourseType] = useState("all");
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <TestDemoText />
      {/* Hero Section */}
      <section id="hero" className="home-hero">
        <div className="container home-hero__container">
          {/* Hero Content */}
          <div className="home-hero__content">
            <h4 className="home-hero__info">Sifatli ilm olish maskani</h4>
            <h1 className="home-hero__title">
              <span>IT</span> olamiga ilk qadamni biz bilan qo'ying
            </h1>
            <div className="home-hero__btns">
              <Link className="home-hero__btn-courses">Kurslarni ko'rish</Link>
              <Link className="home-hero__btn-consultation">
                Bepul <br /> konsultatsiya oling
              </Link>
              <Link className="home-hero__btn-consultation mobile">
                Bepul konsultatsiya oling
              </Link>
            </div>
          </div>
          {/* Hero Images */}
          <div className="home-hero__img">
            <div className="home-hero__comment">
              <div className="home-hero__comment-effects">
                <span className="home-hero__comment-line"></span>
                <div className="home-hero__comment-rectangle">
                  <img src="/assets/images/home-hero-comment.svg" alt="" />
                </div>
                <span className="home-hero__comment-line"></span>
              </div>
              <div className="home-hero__comment-info">
                <h6 className="home-hero__comment-name">Ronald Richards</h6>
                <p className="home-hero__comment-description">
                  In a coaching role, you ask the questions and rely more on
                  your staff, who become the experts, to provide the
                  information.
                </p>
                <span>4.9</span>
              </div>
            </div>
            <img
              className="home-hero__girl-img"
              src="/assets/images/hero-img.png"
              srcSet="/assets/images/hero-img.png 1x, /assets/images/hero-img@2x.png 2x"
              alt=""
              width={658}
            />
          </div>
        </div>
      </section>
      {/* Courses Section */}
      <section id="courses" className="home-courses">
        <div className="container home-courses__container">
          <div className="home-course__heading home-section__heading">
            <h2 className="home-courses__title home-section__title">
              Bizning <span>Kurslar</span>
            </h2>
            <p className="home-courses__description home-section__description">
              Sifati kafolatlangan kurslarimizdan o'zingizga yoqqanini tanlang.
            </p>
          </div>
          {/* Course Filter */}
          <div className="home-course__filter">
            <ul className="home-course__filter-list">
              <li className="home-course__filter-item">
                <button
                  onClick={() => setCourseType("all")}
                  className={`home-course__filter-btn ${
                    courseType === "all" && "active"
                  }`}
                >
                  Kurslar ro'yhati
                </button>
              </li>
              {courses &&
                courses.map((course) => {
                  return (
                    <li
                      key={course.courseType}
                      className="home-course__filter-item"
                    >
                      <button
                        onClick={() => setCourseType(course.courseType)}
                        className={`home-course__filter-btn ${
                          courseType === course.courseType && "active"
                        }`}
                      >
                        {course.courseType}
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
          {/* Course Cards */}
          <Cards courses={courses} courseType={courseType} />
          {/* Course Buttons */}
          <Link className="home-course__btn site-btn">Barcha kurslar</Link>
        </div>
      </section>
      {/* Blog Section */}
      <section id="blog" className="home-blog">
        <div className="container home-blog__container">
          {/* Blog Heading */}
          <div className="home-blog__heading home-section__heading">
            <h2 className="home-blog__title home-section__title">
              Nima uchun aynan <span>WebX</span>da o'qishingiz kerak?
            </h2>
            <p className="home-blog__description home-section__description">
              WebX zamonaviy kasblar o'quv markazi o'z o'quvchilariga quyidagi
              bir nechta qulayliklarni kafolatlaydi
            </p>
          </div>
          {/* Blog Content */}
          <ul className="home-blog__list">
            <li className="home-blog__item">
              <img
                src="/assets/images/blog-learn.svg"
                alt=""
                className="home-blog__item-img"
              />
              <h3 className="home-blog__item-heading">01. Sifatli ta`lim</h3>
              <p className="home-blog__item-description">
                Doimiy yangilanib boradigan kurslar va katta tajribaga ega
                ustozlar.
              </p>
            </li>
            <li className="home-blog__item">
              <img
                src="/assets/images/blog-graduate.svg"
                alt=""
                className="home-blog__item-img"
              />
              <h3 className="home-blog__item-heading">02. Sertifikat</h3>
              <p className="home-blog__item-description">
                Kursni muvaffaqiyatli tamomlagan o‘quvchilar sertifikatga ega
                bo‘ladi.
              </p>
            </li>
            <li className="home-blog__item">
              <img
                src="/assets/images/blog-work.svg"
                alt=""
                className="home-blog__item-img"
              />
              <h3 className="home-blog__item-heading">03. Kafolatli ish</h3>
              <p className="home-blog__item-description">
                Kurslarni muvaffaqiyatli bitirgan o‘quvchilarga ish taklif
                qilish kafolatini beradi.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* Categories Section */}
      <section id="category" className="home-category">
        <div className="container home-category__container">
          <div className="home-category__heading home-section__heading">
            <h2 className="home-category__title home-section__title">
              Top <span>Toifalar</span>
            </h2>
            <p className="home-category__description home-section__description">
              10+ online va ofline kurslar
            </p>
          </div>
          {/* Category Cards */}
          <ul className="home-category__list">
            <li className="home-category__item">
              <img
                src="/assets/images/home-category-marketing.svg"
                alt=""
                width={90}
                height={90}
              />
              <h4>Digtal Marketing</h4>
              <p>25 Courses</p>
            </li>
            <li className="home-category__item">
              <img
                src="/assets/images/home-category-webdev.svg"
                alt=""
                width={90}
                height={90}
              />
              <h4>Web Development</h4>
              <p>25 Courses</p>
            </li>
            <li className="home-category__item">
              <img
                src="/assets/images/home-category-graphic.svg"
                alt=""
                width={90}
                height={90}
              />
              <h4>Graphic Design</h4>
              <p>20 Courses</p>
            </li>
            <li className="home-category__item">
              <img
                src="/assets/images/home-category-software.svg"
                alt=""
                width={90}
                height={90}
              />
              <h4>IT and Software</h4>
              <p>25 Courses</p>
            </li>
          </ul>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="home-about">
        <div className="container home-about__container">
          {/* About section Information */}
          <div className="home-about__info">
            {/* About section Information Image */}
            <img
              src="/assets/images/home-about-img.png"
              alt=""
              className="home-about__img"
            />
            {/* About section Information Content */}
            <div className="home-about__content">
              <h3 className="home-about__content-title">
                Dasturlash va dizayn kabi{" "}
                <span>zamonaviy kasblar o‘rgatiladigan markaz.</span>
              </h3>
              <p className="home-about__content-description">
                "WebX" - bu EduPower o'quv markazi tasarrufidagi zamonaviy
                kasblarni o'qitishga mo'ljallangan sifatli ta'lim beruvchi
                loyiha
              </p>
              <Link className="home-about__content-btn site-btn">
                Batafsil ma'lumot
              </Link>
            </div>
          </div>
          {/* About Section Video */}
          <div className="home-about__video">
            <img src="/assets/images/home-video.png" alt="" />
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="home-testimonials">
        <div className="container home-testimonials__container">
          {/* Testimonials Heading */}
          <div className="home-testimonials__heading home-section__heading">
            <h2 className="home-testimonials__title home-section__title">
              O'quvchilarimiz <span>Fikrlari</span>
            </h2>
            <p className="home-testimonials__description home-section__description">
              O'quvchilarimizning biz haqimizdagi fikrlari qanday
            </p>
          </div>
          {/* Slider */}
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
      <TestDemoText />
      {showBackToTop && (
        <button className="back-to-top" onClick={handleBackToTop}>
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
};

export default Home;
