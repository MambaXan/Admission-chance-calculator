import React from "react";
import "./About.scss";
import Team from "../../images/team.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>О нашей компании</h1>
          <p className="hero-subtitle">
            Более 20 лет опыта в помощи студентам по всему миру
          </p>
        </div>
        <div className="hero-image">
          <img src={Team} alt="Наша команда" />
        </div>
      </section>
      <section className="about-sections">
        <div className="about-card fade-in">
          <div className="card-content">
            <div className="card-text">
              <h2>
                <span className="accent-line">Кто мы?</span>
              </h2>
              <p>
                Более 20 лет мы сопровождаем студентов на каждом этапе их
                академического пути. Наш опыт продолжает поддерживать тысячи
                людей по всему миру. Присоединяйтесь к нам и станьте частью
                чего-то большего.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">лет опыта</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">студентов</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">стран</span>
                </div>
              </div>
            </div>
            <div className="card-image">
              <img src={Team} alt="Наша команда" />
            </div>
          </div>
        </div>
        <div className="about-card mission-card fade-in delay">
          <div className="card-content reverse">
            <div className="card-text">
              <h2>
                <span className="accent-line">Наша миссия</span>
              </h2>
              <p>
                С 2020 года более 10 000 студентов воспользовались нашей
                платформой для заявок в университеты, стипендий и грантов. Мы
                предоставляем инструменты для оценки вашего академического
                потенциала и принятия более разумных решений для вашего
                будущего.
              </p>
              <ul className="mission-list">
                <li>Поддержка на каждом этапе поступления</li>
                <li>Персональные консультации экспертов</li>
                <li>Доступ к эксклюзивным возможностям</li>
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
                <span className="accent-line">Глобальные связи</span>
              </h2>
              <p>
                За эти годы мы построили прочные отношения с ведущими
                университетами и экспертами по всему миру. Наши связи
                гарантируют, что студенты получат лучшую поддержку и советы, где
                бы они ни находились.
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
        <h2>Готовы начать свой путь?</h2>
        <p>
          Присоединяйтесь к тысячам студентов, которые уже добились успеха с
          нашей помощью
        </p>
        <button className="cta-button">
          <Link to={"/contacts"}>Записаться на консультацию</Link>
        </button>
      </section>
    </div>
  );
};

export default About;
