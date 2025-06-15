// import React from "react";
// import "./Services.scss";

// const Services = () => {
//   const services = [
//     {
//       title: "University Application",
//       description:
//         "We help you submit applications quickly and correctly, saving you time and avoiding mistakes that could cost you your dream opportunity.",
//     },
//     {
//       title: "Chance Calculator",
//       description:
//         "Estimate your admission chances based on real statistics and data analysis. Plan smarter, aim higher.",
//     },
//     {
//       title: "Consultation",
//       description:
//         "One-on-one personalized guidance from experts who know the admissions process inside and out. Your success is our mission.",
//     },
//     {
//       title: "Document Review",
//       description:
//         "We meticulously review and refine your documents — from essays to recommendation letters — to make sure they leave a lasting impression.",
//     },
//   ];

//   return (
//     <section className="services">
//       {/* Hero Section */}
//       <div className="services__hero">
//         <h1 className="services__hero-title">Achieve Your Academic Dreams</h1>
//         <p className="services__hero-subtitle">
//           Our tailored services are designed to simplify your journey to top universities. From application to acceptance — we've got you covered.
//         </p>
//       </div>

//       {/* Services List */}
//       <div className="services__container">
//         <h2 className="services__section-title">Our Services</h2>
//         <div className="services__list">
//           {services.map((service, index) => (
//             <div key={index} className="services__item fade-in">
//               <h3 className="services__item-title">{service.title}</h3>
//               <p className="services__item-description">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Closing Section */}
//       <div className="services__closing">
//         <h2 className="services__closing-title">Let's Build Your Future Together</h2>
//         <p className="services__closing-text">
//           Whether you're just starting or putting the final touches on your application,
//           our team is ready to help you take the next big step. Success is closer than you think.
//         </p>
//         <button className="services__cta-button">Get Started</button>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { Link } from "react-router-dom";
import "./Services.scss";

const Services = () => {
  const services = [
    {
      title: "Заявка в университет",
      description:
        "Мы поможем вам быстро и правильно подать заявки, сэкономив ваше время и избежав ошибок, которые могут стоить вам возможности вашей мечты.",
    },
    {
      title: "Калькулятор шансов",
      description:
        "Оцените свои шансы на поступление на основе реальной статистики и анализа данных. Планируйте умнее, стремитесь выше.",
    },
    {
      title: "Консультации",
      description:
        "Индивидуальное руководство от экспертов, которые знают процесс приема от и до. Ваш успех — наша миссия.",
    },
    {
      title: "Обзор документов",
      description:
        "Мы тщательно проверяем и дорабатываем ваши документы — от эссе до рекомендательных писем — чтобы они произвели неизгладимое впечатление..",
    },
  ];

  return (
    <section className="services">
      {/* Hero Section */}
      <div className="services__hero">
        <h1 className="services__hero-title">
          Достигай своих академических целей
        </h1>
        <p className="services__hero-subtitle">
          Наши индивидуальные услуги призваны упростить ваш путь в лучшие
          университеты. От подачи заявления до поступления — мы вас обеспечим.
        </p>
      </div>

      {/* Services List */}
      <div className="services__container">
        <h2 className="services__section-title">Сервисы</h2>
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

      {/* Closing Section */}
      <div className="services__closing">
        <h2 className="services__closing-title">
          Давайте строить ваше будущее вместе!
        </h2>
        <p className="services__closing-text">
          Независимо от того, только ли вы начинаете или вносите последние
          штрихи в свое приложение, наша команда готова помочь вам сделать
          следующий большой шаг. Успех ближе, чем вы думаете.
        </p>
        <button className="services__cta-button">
          <Link className="get_started" to={"/contacts"}>
            Начать
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Services;
