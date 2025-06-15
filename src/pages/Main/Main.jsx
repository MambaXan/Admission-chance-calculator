import React from "react";
import "./Main.scss";
import mainBG from "../../images/mainBG.png";
import university from "../../images/universityCardIMG.jpg";
import calculations from "../../images/calculations.jpg";
import consultation from "../../images/consultation.jpg";
import documents from "../../images/documents.jpg";
import mentor1 from "../../images/mentor1.png";
import mentor2 from "../../images/mentor2.png";
import mentor3 from "../../images/mentor3.png";
import mentor4 from "../../images/mentor4.png";
import student1 from "../../images/student1.png";
import student2 from "../../images/student2.png";
import student3 from "../../images/student3.png";
import student4 from "../../images/student4.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="main">
        <div className="main_container">
          <div className="main_container_title">
            <h1>Узнай свои шансы на поступление!</h1>
            <p>
              У нас вы можете узнать <br /> о своих шансах поступить в
              университеты <br /> а также получить помощь
            </p>
            <button>
              <Link className="admission" to="/admission">
                Подать заявку
              </Link>
            </button>
          </div>
          <div className="main_container_image">
            <img src={mainBG} alt="" />
          </div>
        </div>
      </section>
      <section className="main_services">
        <h2 className="main_services_title">Сервисы</h2>
        <div className="main_services_cards">
          <div className="card">
            <Link className="card_link" to="/admission">
              <img src={university} alt="" />
              <h3>Заявление в университет</h3>
              <p>Мы поможем вам быстро и правильно подать заявки.</p>
            </Link>
          </div>
          <div className="card">
            <Link className="card_link" to="/admission">
              <img src={calculations} alt="" />
              <h3>Калькулятор шансов</h3>
              <p>Оцените свои шансы поступить в университет мечты.</p>
            </Link>
          </div>
          <div className="card">
            <Link className="card_link" to="/contacts">
              <img src={consultation} alt="" />
              <h3>Консультации</h3>
              <p>Получите индивидуальную консультацию от наших экспертов.</p>
            </Link>
          </div>
          <div className="card">
            <Link className="card_link" to="/admission">
              <img src={documents} alt="" />
              <h3>Обзор документов</h3>
              <p>Мы проверяем и улучшаем ваши документы перед отправкой.</p>
            </Link>
          </div>
        </div>
        <div className="main_services_description">
          <h3>Поступайте в университеты мечты с нами!</h3>
          <p>
            Станьте частью нашего сообщества — растущего, обучающегося и
            совершенствующегося. <br />
            Позвольте нам стать вашим проводником в мире развития и
            качественного образования <br />
            Мы проведем вас через каждый этап процесса подачи заявки. <br />
            Станьте частью нашей платформы и узнайте свои шансы на поступление!
          </p>
        </div>
      </section>
      <section className="results">
        <div className="results_container">
          <div className="results_card">
            <h4>Более 10 млн долларов США в виде стипендий</h4>
            <p>
              Более 10 млн стипендий и грантов <br /> от ведущих мировых
              университетов для наших клиентов
            </p>
          </div>
          <div className="results_card">
            <h4>Помогли более 10000 студентов</h4>
            <p>
              Наши студенты в настоящее время обучаются в лучших университетах
              мира
            </p>
          </div>
          <div className="results_card">
            <h4>1 млн+ активных пользователей на нашей платформе</h4>
            <p>
              Миллионы людей используют нашу платформу и достигают своих
              мечтаний с ​​нами
            </p>
          </div>
          <div className="results_card">
            <h4>Более 20 лет опыта</h4>
            <p>
              За последние 20+ лет мы помогаем нашим студентам во всех аспектах
              образования
            </p>
          </div>
        </div>
      </section>
      <section className="our_team">
        <h4>Наша команда</h4>
        <div className="our_team_container">
          <div className="our_team_card">
            <img src={mentor1} alt="" />
            <h4>Жоомарт Асанов</h4>
            <p>Куратор по университетам США</p>
          </div>
          <div className="our_team_card">
            <img src={mentor2} alt="" />
            <h4>Мирбек Улукманов</h4>
            <p>Куратор по университетам Великобритании</p>
          </div>
          <div className="our_team_card">
            <img src={mentor3} alt="" />
            <h4>Жаныл Адылова</h4>
            <p>Куратор по университетам Кореи</p>
          </div>
          <div className="our_team_card">
            <img src={mentor4} alt="" />
            <h4>Бекжан Кенешов</h4>
            <p>Куратор по университетам Германии</p>
          </div>
        </div>
      </section>
      <section className="loop-carousel">
        <h4>Отзывы студентов!</h4>
        <div className="loop-carousel-track">
          <div className="loop-carousel-item">
            <img src={student1} alt="" />
            <p className="feedback">
              Блягодаря этим людям моя мечта сбылась. Теперь я учусь в одном из
              самых топовых университетов. Я никогда не верил такого рода
              платформам, но теперь мое представление об образовании за рубежем
              стало четче и яснее
            </p>
            <h4>Бакыт Максатов</h4>
            <p className="alumni">Студент NYU</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student2} alt="" />
            <p className="feedback">
              Должен признаться эти люди и их продукт изменили мою жизнь.
              Пользуясь их платформой я самоостоятельно смогу поступить в Yale.
              Я обычный человек без кучи денег но со стремнлением получить
              лучшее образование. И эта платформа помогает таким же простым
              людям как я
            </p>
            <h4>Актан Сеитов</h4>
            <p className="alumni">Студент Yale</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student3} alt="" />
            <p className="feedback">
              Я никогда не думал что смогу пробиться в Cambridge. До знакомства
              с этой платформой я не представлял как мне обычному сельчанину
              пробиться в такой университет. Но благодаря профессионализму
              команды и пользе этой платформы теперь я учусь в Cambridge
            </p>
            <h4>Дияр Касымов</h4>
            <p className="alumni">Студент Cambridge</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student4} alt="" />
            <p className="feedback">
              Я не верю что я теперь я часть этого комьюнити. Должна признать
              что эта платформа и команда помогла мне во всех вопросах
              касающихся образования. Я не ошибусь если скажу что эти люди
              меняют жизни. Их продукт достоин внимания и огласки
            </p>
            <h4>Бермет Тойчубаева</h4>
            <p className="alumni">Студент MIT</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student1} alt="" />
            <p className="feedback">
              Блягодаря этим людям моя мечта сбылась. Теперь я учусь в одном из
              самых топовых университетов. Я никогда не верил такого рода
              платформам, но теперь мое представление об образовании за рубежем
              стало четче и яснее
            </p>
            <h4>Бакыт Максатов</h4>
            <p className="alumni">Студент NYU</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student2} alt="" />
            <p className="feedback">
              Должен признаться эти люди и их продукт изменили мою жизнь.
              Пользуясь их платформой я самоостоятельно смогу поступить в Yale.
              Я обычный человек без кучи денег но со стремнлением получить
              лучшее образование. И эта платформа помогает таким же простым
              людям как я
            </p>
            <h4>Актан Сеитов</h4>
            <p className="alumni">Студент Yale</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student3} alt="" />
            <p className="feedback">
              Я никогда не думал что смогу пробиться в Cambridge. До знакомства
              с этой платформой я не представлял как мне обычному сельчанину
              пробиться в такой университет. Но благодаря профессионализму
              команды и пользе этой платформы теперь я учусь в Cambridge
            </p>
            <h4>Дияр Касымов</h4>
            <p className="alumni">Студент Cambridge</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student4} alt="" />
            <p className="feedback">
              Я не верю что я теперь я часть этого комьюнити. Должна признать
              что эта платформа и команда помогла мне во всех вопросах
              касающихся образования. Я не ошибусь если скажу что эти люди
              меняют жизни. Их продукт достоин внимания и огласки
            </p>
            <h4>Бермет Тойчубаева</h4>
            <p className="alumni">Студент MIT</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
