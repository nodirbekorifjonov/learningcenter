import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// styles
import "./style.css";
// rating data
import { rating } from "../Rating";
// react-icons
import { FaMoneyBillWave, FaTable } from "react-icons/fa6";

const Cards = ({ courses, courseType }) => {
  return (
    <ul className="home-course__list">
      {courses &&
        courses
          .filter(
            (course) => courseType === "all" || course.courseType === courseType
          )
          .map((course) => {
            return (
              <li key={course.id} className="home-course__item">
                <Link
                  to={`/courses/${course.id}`}
                  className="home-course__link"
                >
                  <img
                    className="home-course__card-img"
                    src={`/assets/images/${course.courseImg}`}
                    alt=""
                  />
                  <div className="home-course__card-body">
                    {/* Course type */}
                    <span className="home-course__card-type">
                      {course.courseType}
                    </span>
                    {/* Course name */}
                    <h3 className="home-course__card-name">
                      {course.courseName}
                    </h3>
                    {/* Course description */}
                    <p className="home-course__card-description">
                      {`${
                        course.courseDescription.length >= 65
                          ? course.courseDescription.slice(0, 65)
                          : course.courseDescription
                      }...`}
                    </p>
                    {/* Course rating */}
                    <div className="home-course__card-rating">
                      {rating.map((star) => {
                        return star.id === course.courseRating && star.stars;
                      })}
                      <span>{`${course.courseRating}/5.0`}</span>
                    </div>
                  </div>
                  {/* Course Card Footer */}
                  <div className="home-course__card-footer">
                    <span className="home-course__card-line"></span>
                    <ul>
                      {/* Course Price */}
                      <li className="home-course__card-price">
                        <FaMoneyBillWave />
                        <h6>{`${course.coursePriceOffline.toLocaleString()} so'm`}</h6>
                      </li>
                      {/* Course duration */}
                      <li className="home-course__card-duration">
                        <FaTable />
                        <h6>{`${course.courseDuration} oy`}</h6>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
            );
          })}
    </ul>
  );
};

export default Cards;
