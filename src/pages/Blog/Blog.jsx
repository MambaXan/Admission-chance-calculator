import React from "react";
import "./Blog.scss";

import blog1 from "../../images/blog1.jpeg";
import blog2 from "../../images/blog2.jpeg";
import blog3 from "../../images/blog3.jpeg";

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog_container">
        <div className="blog_box">
          <div className="blog_box_title">
            <h1>Знакомьтесь, наши выпускники лиги плюща</h1>
            <p>
              Познакомьтесь с нашими студентами, окончившими Лигу плюща. Мы
              гордимся тем, что помогли нашим студентам попасть в Лигу плюща.
              Теперь они будут работать в топовых компаниях и стартапах. Глядя
              на них, мы чувствуем гордость. Ведь был пройден сложный и
              тернистый путь, который увенчался успехом!
            </p>
          </div>
        </div>

        <div className="blog_cards_container">
          <div className="blog_card">
            <img src={blog1} alt="blog1" />
            <h2>Путь в лигу плюща</h2>
            <p>
              Как наш студент попал в Yale 
            </p>
          </div>

          <div className="blog_card">
            <img src={blog2} alt="blog2" />
            <h2>Успех в Гарварде</h2>
            <p>Узнайте, как последовательное планирование помогло Анне поступить в Гарвард.</p>
          </div>

          <div className="blog_card">
            <img src={blog3} alt="blog3" />
            <h2>История Стенфордского стартапа</h2>
            <p>
              Как наша студентка запустила стартап в первый год учебы в Стенфорде
            </p>
          </div>
        </div>
        <div className="blog_newsletter">
          <h2>Оставайтесь в курсе</h2>
          <p>Подпишитесь на нашу рассылку, чтобы получать эксклюзивные истории и советы.</p>
          <form>
            <input type="email" placeholder="Введите вашу почту" />
            <button type="submit">Подписаться</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Blog;
