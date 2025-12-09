import React from 'react';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';

const Courses = () => {
  return (
    <section id="course">
      <h1>Our Popular Courses</h1>
      <p>Replenish man have thing gathering lights yielding shall you</p>
      <div className="course-box">

        <div className="courses">
          <img src={c1} alt="JS Course" onClick={() => window.location.href='#registration'} />
          <div className="details">
            <span>Updated 21/8/21</span>
            <h6>JavaScript Beginners Course</h6>
            <div className="star">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
              <span>(239)</span>
            </div>
            <a href="#registration" className="apply-btn">Apply Now <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="cost">$49.99</div>
        </div>

        <div className="courses">
          <img src={c2} alt="HTML Course" onClick={() => window.location.href='#registration'} />
          <div className="details">
            <span>Updated 21/8/21</span>
            <h6>HTML & CSS Bootcamp</h6>
            <div className="star">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              <span>(234)</span>
            </div>
            <a href="#registration" className="apply-btn">Apply Now <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="cost">4000 Taka</div>
        </div>

        <div className="courses">
          <img src={c3} alt="Python Course" onClick={() => window.location.href='#registration'} />
          <div className="details">
            <span>Updated 21/8/21</span>
            <h6>Python Data Science</h6>
            <div className="star">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              <span>(234)</span>
            </div>
            <a href="#registration" className="apply-btn">Apply Now <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="cost">4000 Taka</div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
