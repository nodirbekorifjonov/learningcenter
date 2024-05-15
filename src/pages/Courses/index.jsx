import React, { useState } from "react";
// styles
import "./style.css";
// data
import courses from "../../data/courses.json";
import Cards from "../../components/Cards";

const Courses = () => {
  const [courseType, setCourseType] = useState("all");

  return (
    <section className="courses">
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
      </div>
    </section>
  );
};

export default Courses;
