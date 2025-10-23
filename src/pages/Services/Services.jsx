import React from "react";
import { Link } from "react-router-dom";
import "./Services.scss";

const Services = () => {
  const services = [
    {
      title: "Application to the university",
      description:
        "We'll help you submit applications quickly and accurately, saving you time and avoiding mistakes that could cost you your dream opportunity.",
    },
    {
      title: "Chances calculator",
      description:
        "Evaluate your chances of admission based on real statistics and data analysis. Plan smarter, aim higher.",
    },
    {
      title: "Consultations",
      description:
        "Personalized guidance from experts who know the admissions process inside and out. Your success is our mission.",
    },
    {
      title: "Documents review",
      description:
        "We carefully review and refine your documents—from essays to letters of recommendation—to ensure they make a lasting impression.",
    },
  ];

  return (
    <section className="services">
      <div className="services__hero">
        <h1 className="services__hero-title">Achieve your academic goals</h1>
        <p className="services__hero-subtitle">
          Our personalized services are designed to simplify your path to the
          best universities. From application to admission, we've got you
          covered.
        </p>
      </div>

      <div className="services__container">
        <h2 className="services__section-title">Services</h2>
        <div className="services__list">
          {services.map((service, index) => (
            <div key={index} className="services__item fade-in">
              <h3 className="services__item-title">{service.title}</h3>
              <p className="services__item-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="services__closing">
        <h2 className="services__closing-title">
          Let's build your future together!
        </h2>
        <p className="services__closing-text">
          Whether you're just getting started or putting the finishing touches
          on your app, our team is ready to help you take the next big step.
          Success is closer than you think.
        </p>
        <button className="services__cta-button">
          <Link className="get_started" to={"/contacts"}>
            Start
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Services;
