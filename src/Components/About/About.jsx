import React from "react";
import "./About.css";
import Title from "../Title/Title";

const About = () => {
  return (
    <>
      <Title text="ABOUT" />
      <section className="about-us">
        <div className="about-us-container">
          <p className="about-us-description">
            The Murang'a University Tech Club (MUTC) is dedicated to fostering
            technological learning and innovation among its members. Our club
            provides a vibrant platform for students to enhance their skills,
            collaborate on exciting projects, and explore emerging technologies.
            Whether you're a beginner looking to learn new technical skills or
            an experienced developer eager to push the boundaries of technology,
            MUTC offers opportunities for all.
          </p>
          <div className="about-us-card">
            <h3 className="card-title">Mission</h3>
            <p className="card-text">
              Our mission is to empower students with the knowledge and skills
              needed to excel in the tech industry, fostering creativity and
              innovation in a supportive environment.
            </p>
          </div>

          <div className="about-us-card">
            <h3 className="card-title">Values</h3>
            <ul className="card-list">
              <li>
                <strong>Innovation:</strong> Embracing new ideas and
                technologies.
              </li>
              <li>
                <strong>Integrity:</strong> Upholding the highest ethical
                standards.
              </li>
              <li>
                <strong>Collaboration:</strong> Teamwork for common goals.
              </li>
              <li>
                <strong>Excellence:</strong> Striving for quality in all
                initiatives.
              </li>
            </ul>
          </div>

          <div className="about-us-card">
            <h3 className="card-title">Objectives</h3>
            <ul className="card-list">
              <li>Provide learning opportunities through workshops.</li>
              <li>Promote teamwork and collaboration.</li>
              <li>Encourage innovation and tech solutions development.</li>
              <li>Connect students with industry professionals.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
