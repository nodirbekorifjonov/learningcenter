import React, { useEffect, useRef, useState } from "react";
// styles
import "./style.css";
// react-icons
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  FaChalkboardUser,
  FaShareNodes,
  FaBookOpen,
  FaCalendarWeek,
  FaClock,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaUserGraduate,
  FaPlay,
  FaStar,
  FaGraduationCap,
  FaBehance,
} from "react-icons/fa6";
import { FaSignal, FaGithub, FaFacebook } from "react-icons/fa";
// data
import coursesData from "../../../data/courses.json";
import { Link, useParams } from "react-router-dom";
import SuccesModal from "../../../components/SuccesModal";

const CourseDetails = () => {
  const [courseNav, setCourseNav] = useState("info");
  const [result, setResult] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const { id } = useParams();

  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleSurveyForm = (e) => {
    e.preventDefault();
    setLoader(true);

    let formData = new FormData(e.target); // Use event.target to reference the form
    fetch(
      "https://script.google.com/macros/s/AKfycbw4oHhXyCQZMcp9ebXgGjtLAg9vhWvk38lsRVhZoBWGLCdtmYr0bR-ad6ilwGcQWza4sg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setModal(true);
        e.target.reset();
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const foundCourse = coursesData.find((course) => course.id == id);
    setResult(foundCourse);
    setTechnologies(foundCourse.courseTechnologies);
  }, [id]);

  return (
    <>
      <div ref={myRef}>
        {/* Course Details Heading */}
        <section id="course-details" className="course__heading">
          <div className="container course__heading-container">
            <div className="course__type">{result.courseType}</div>
            <h2 className="course__name">{result.courseName}</h2>
          </div>
        </section>
        {/* Course Details */}
        <section className="course-details">
          <div className="container course-details__container">
            {/* Course Details Content */}
            <div className="course-details__content">
              {/* Navigation */}
              <div className="course-details__header">
                <ul className="course-details__header-list">
                  <li
                    onClick={() => setCourseNav("info")}
                    className={`course-details__header-item ${
                      courseNav === "info" ? "active" : ""
                    }`}
                  >
                    Ma'lumot
                  </li>
                  <li
                    onClick={() => setCourseNav("instructor")}
                    className={`course-details__header-item ${
                      courseNav === "instructor" ? "active" : ""
                    }`}
                  >
                    Instruktor
                  </li>
                  <li
                    onClick={() => setCourseNav("registration")}
                    className={`course-details__header-item ${
                      courseNav === "registration" ? "active" : ""
                    }`}
                  >
                    Ro'yhatdan o'tish
                  </li>
                </ul>
              </div>
              {/* Information */}
              {courseNav === "info" && (
                <div className="course-details__info">
                  <h4>Kurs haqida</h4>
                  <div className="course-details__description">
                    <p>
                      <span>{result.courseName}</span> kursiga xush kelibsiz!
                    </p>
                    <p>{result.courseDescription}</p>
                  </div>
                  <div className="course-details__technologies">
                    <h4>Nimalarni o'rganasiz?</h4>
                    <div className="course-details__technologies-list">
                      {technologies.length && (
                        <>
                          <ul className="">
                            {technologies
                              .slice(0, Math.ceil(technologies.length / 2))
                              .map((technology, index) => (
                                <li
                                  key={index}
                                  className="course-details__technologies-item"
                                >
                                  <IoCheckmarkCircle /> {technology}
                                </li>
                              ))}
                          </ul>
                          <ul className="">
                            {technologies
                              .slice(Math.ceil(technologies.length / 2))
                              .map((technology, index) => (
                                <li
                                  key={index}
                                  className="course-details__technologies-item"
                                >
                                  <IoCheckmarkCircle /> {technology}
                                </li>
                              ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="course-details__info-footer">
                    Bizga qo'shilishni istaysizmi? Unday bo'lsa{" "}
                    <span>{result.courseName}</span> kursi uchun hoziroq
                    ro'yxatdan o'ting va biz bilan yuqori marralarni zabt eting!
                  </p>
                </div>
              )}
              {/* Instructor */}
              {courseNav === "instructor" && (
                <div className="course-instructor">
                  {/* Instructor Main Info */}
                  <div className="course-instructor-main">
                    <img
                      src={`/assets/images/${
                        result.courseInstructor &&
                        result.courseInstructor.instructorPhoto
                      }`}
                      alt=""
                      width={282}
                    />
                    <div className="course-instructor__info">
                      <h4 className="course-instructor__name">
                        {result.courseInstructor &&
                          result.courseInstructor.instructorName}
                      </h4>
                      <p className="course-insructor__work">
                        {result.courseInstructor &&
                          result.courseInstructor.instructorWorked}
                      </p>
                      <ul className="course-instructor__links-list">
                        {result.courseInstructor &&
                          result.courseInstructor.instructorLinks.github
                            .length > 0 && (
                            <li className="course-instructor__links-item link-github">
                              <Link
                                to={`https://${result.courseInstructor.instructorLinks.github}`}
                              >
                                <FaGithub />
                              </Link>
                            </li>
                          )}
                        {result.courseInstructor &&
                          result.courseInstructor.instructorLinks.behance
                            .length > 0 && (
                            <li className="course-instructor__links-item link-behance">
                              <Link
                                to={`https://${result.courseInstructor.instructorLinks.behance}`}
                              >
                                <FaBehance />
                              </Link>
                            </li>
                          )}
                        {result.courseInstructor &&
                          result.courseInstructor.instructorLinks.instagram
                            .length > 0 && (
                            <li className="course-instructor__links-item link-instagram">
                              <Link
                                to={`https://${result.courseInstructor.instructorLinks.instagram}`}
                              >
                                <FaInstagram />
                              </Link>
                            </li>
                          )}
                        {result.courseInstructor &&
                          result.courseInstructor.instructorLinks.facebook
                            .length > 0 && (
                            <li className="course-instructor__links-item link-facebook">
                              <Link
                                to={`https://${result.courseInstructor.instructorLinks.facebook}`}
                              >
                                <FaFacebook />
                              </Link>
                            </li>
                          )}
                        {result.courseInstructor &&
                          result.courseInstructor.instructorLinks.linkedin
                            .length > 0 && (
                            <li className="course-instructor__links-item link-linkedin">
                              <Link
                                to={`https://${result.courseInstructor.instructorLinks.linkedin}`}
                              >
                                <FaLinkedin />
                              </Link>
                            </li>
                          )}
                        {result.courseInstructor &&
                          result.courseInstructor.instructorLinks.telegram
                            .length > 0 && (
                            <li className="course-instructor__links-item link-telegram">
                              <Link
                                to={`https://${result.courseInstructor.instructorLinks.telegram}`}
                              >
                                <FaTelegram />
                              </Link>
                            </li>
                          )}
                      </ul>
                      <ul className="course-instructor__list">
                        <li className="course-instructor__item">
                          <span className="course-instructor__item-icon">
                            <FaUserGraduate />
                          </span>
                          <p className="course-instructor__item-text">
                            <span>
                              {result.courseInstructor &&
                                result.courseInstructor.instructorStudents}
                              +
                            </span>{" "}
                            bitiruvchilar
                          </p>
                        </li>
                        <li className="course-instructor__item">
                          <span className="course-instructor__item-icon">
                            <FaPlay />
                          </span>
                          <p className="course-instructor__item-text">
                            <span>
                              {result.courseInstructor &&
                                result.courseInstructor.instructorCourses}
                              +
                            </span>{" "}
                            kurslar
                          </p>
                        </li>
                        <li className="course-instructor__item">
                          <span className="course-instructor__item-icon">
                            <FaStar />
                          </span>
                          <p className="course-instructor__item-text">
                            <span>
                              {result.courseInstructor &&
                                result.courseInstructor.instructorExperience}
                              +
                            </span>{" "}
                            yillik tajriba
                          </p>
                        </li>
                      </ul>
                      <div className="course-instructor__graduation">
                        <span className="course-instructor__graduation-icon">
                          <FaGraduationCap />
                        </span>
                        <p className="course-instructor__graduation-text">
                          {result.courseInstructor &&
                            result.courseInstructor.instructorGraduation}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Instructor Description */}
                  <div className="course-instructor__description">
                    <h4>Instruktor haqida</h4>
                    <p>
                      {result.courseInstructor &&
                        result.courseInstructor.instructorDescription}
                    </p>
                    <ul className="course-instructor__description-list">
                      {result.courseInstructor &&
                        result.courseInstructor.instructorLinks.email.length >
                          0 && (
                          <li className="course-instructor__description-item">
                            Mail ID:{" "}
                            <Link
                              to={`mailto:${result.courseInstructor.instructorLinks.email}`}
                            >
                              {result.courseInstructor.instructorLinks.email}
                            </Link>
                          </li>
                        )}
                      {result.courseInstructor &&
                        result.courseInstructor.instructorLinks.website.length >
                          0 && (
                          <li className="course-instructor__description-item">
                            Web:{" "}
                            <Link
                              to={`https://${result.courseInstructor.instructorLinks.website}`}
                            >
                              {result.courseInstructor.instructorLinks.website}
                            </Link>
                          </li>
                        )}
                    </ul>
                  </div>
                </div>
              )}
              {/* Registration */}
              {courseNav === "registration" && (
                <div className="course-registration">
                  <h3>
                    Ro'yxatdan o'tganingizdan so'ng operatorlar siz bilan
                    aloqaga chiqishadi.
                  </h3>
                  <div className="course-registration__content">
                    <img src="/assets/images/reg.webp" alt="" width={331} />
                    <form id="surveyForm" onSubmit={(e) => handleSurveyForm(e)}>
                      <label htmlFor="name">
                        Ismingiz *
                        <input type="text" id="name" name="name" required />
                      </label>

                      <label htmlFor="phoneNumber">
                        Telefon raqamingiz *
                        <input
                          type="number"
                          name="phoneNumber"
                          id="phoneNumber"
                          required
                          placeholder="+998 88 271 0323"
                        />
                      </label>

                      <label htmlFor="course">
                        Kursingiz *
                        <input
                          type="text"
                          name="course"
                          id="course"
                          readOnly
                          value={result.courseName}
                        />
                      </label>

                      <label htmlFor="promocode">
                        Promokod kiriting:
                        <input type="text" name="promocode" id="promocode" />
                      </label>

                      <label htmlFor="comment">
                        Xabar *
                        <textarea
                          name="comment"
                          id="comment"
                          cols="50"
                          rows="4"
                        ></textarea>
                      </label>

                      <button type="submit" className=" site-btn">
                        Ro'yhatdan o'tish{" "}
                        {loader && <span className="loader"></span>}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
            {/* Course Details Info */}
            <div className="course-details__main">
              {/* Course Details Basic */}
              <div className="course-details__main-basic">
                <img src={`/assets/images/${result.courseImg}`} alt="" />
                <div className="course-details__main-format">
                  <div>
                    <span className="course-details__main-format-icon">
                      <FaChalkboardUser />
                    </span>
                    <h4>
                      Offline:{" "}
                      <span>
                        {result.coursePriceOffline &&
                          result.coursePriceOffline.toLocaleString()}{" "}
                        so'm
                      </span>
                    </h4>
                  </div>
                  <button className="course-details__share">
                    <FaShareNodes />
                  </button>
                </div>
                <div className="course-details__main-format">
                  <div>
                    <span className="course-details__main-format-icon">
                      <FaGlobe />
                    </span>
                    <h4>
                      Online: <span>{result.coursePriceOnline}</span>
                    </h4>
                  </div>
                  {result.courseDiscount > 0 && (
                    <span className="course-details__main-discount">
                      {`-${result.courseDiscount}%`}
                    </span>
                  )}
                </div>
              </div>
              {/* Course Details Info */}
              <div className="course-details__main-info">
                <ul>
                  <li>
                    <div>
                      <FaBookOpen />
                      <p>Kurs davomiyligi</p>
                    </div>
                    <p>{result.courseDuration} oy</p>
                  </li>
                  <li>
                    <div>
                      <FaCalendarWeek />
                      <p>Haftadagi darslar soni</p>
                    </div>
                    <p>{result.courseDurationWeek} kun</p>
                  </li>
                  <li>
                    <div>
                      <FaClock />
                      <p>Dars davomiyligi</p>
                    </div>
                    <p>{result.courseDurationClock} soat</p>
                  </li>
                  <li>
                    <div>
                      <FaSignal />
                      <p>Daraja</p>
                    </div>
                    <p>{result.courseDegree}</p>
                  </li>
                  <li>
                    <div>
                      <FaGlobe />
                      <p>Til</p>
                    </div>
                    <p>{result.courseLanguage}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {modal && <SuccesModal />}
    </>
  );
};

export default CourseDetails;
