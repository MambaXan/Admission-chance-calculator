import React from "react";
import "./About.scss";
import Team from "../../images/team.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About our company</h1>
          <p className="hero-subtitle">
            For over 20 years we help students from all over the world
          </p>
        </div>
        <div className="hero-image">
          <img src={Team} alt="Our team" />
        </div>
      </section>
      <section className="about-sections">
        <div className="about-card fade-in">
          <div className="card-content">
            <div className="card-text">
              <h2>
                <span className="accent-line">Who are we?</span>
              </h2>
              <p>
                For over 20 years, we've been supporting students at every stage
                of their academic journey. Our experience continues to support
                thousands of people around the world. Join us and become part of
                something bigger.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">years of experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">countries</span>
                </div>
              </div>
            </div>
            <div className="card-image">
              <img src={Team} alt="Our team" />
            </div>
          </div>
        </div>
        <div className="about-card mission-card fade-in delay">
          <div className="card-content reverse">
            <div className="card-text">
              <h2>
                <span className="accent-line">Our mission</span>
              </h2>
              <p>
                Since 2020, over 10,000 students have used our platform for
                university applications, scholarships, and grants. We provide
                tools to assess your academic potential and make smarter
                decisions for your future.
              </p>
              <ul className="mission-list">
                <li>Support at every stage of admission</li>
                <li>Personal consultations of experts</li>
                <li>Access to exclusive opportunities</li>
              </ul>
            </div>
            <div className="card-image">
              <div className="mission-graphic"></div>
            </div>
          </div>
        </div>
        <div className="about-card global-card fade-in delay-long">
          <div className="card-content">
            <div className="card-text">
              <h2>
                <span className="accent-line">Global connections</span>
              </h2>
              <p>
                Over the years, we've built strong relationships with leading
                universities and experts around the world. Our connections
                ensure students receive the best support and advice, wherever
                they are.
              </p>
              <div className="partners">
                <div className="partner-logo">NYU</div>
                <div className="partner-logo">Harvard</div>
                <div className="partner-logo">Cambridge</div>
                <div className="partner-logo">Stanford</div>
              </div>
            </div>
            <div className="card-image">
              <div className="world-map"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-cta fade-in">
        <h2>Ready to start your own journey?</h2>
        <p>
          Join thousands of students who have already achieved success with our
          help.
        </p>
        <button className="cta-button">
          <Link to={"/contacts"}>Sign up for a consultation</Link>
        </button>
      </section>
    </div>
  );
};

export default About;
