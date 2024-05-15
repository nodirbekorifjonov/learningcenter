import React, { Fragment, useEffect, useRef, useState } from "react";
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
} from "react-icons/fa6";
import { FaSignal } from "react-icons/fa";
// data
import coursesData from "../../../data/courses.json";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const [courseNav, setCourseNav] = useState("info");
  const [result, setResult] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const { id } = useParams();

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
                <li className="course-details__header-item active">Ma'lumot</li>
                <li className="course-details__header-item">Instruktor</li>
                <li className="course-details__header-item">
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
              <div className="course-details__instructor">
                <div className="course-details__instructor-main">
                  <img
                    src="/public/assets/images/Scratch.png"
                    alt=""
                    width={282}
                  />
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
  );
};

export default CourseDetails;
