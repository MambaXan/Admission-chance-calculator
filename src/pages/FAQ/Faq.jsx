import React, { useState } from 'react';
import './Faq.scss';

const faqData = [
  {
    question: 'Какова цель этой платформы?',
    answer: 'Эта платформа помогает студентам оценить свои шансы на поступление в университет на основе их академического профиля.',
  },
  {
    question: 'Как рассчитать свои шансы на поступление?',
    answer: 'Вы можете ввести свои баллы и позволить нашему ИИ рассчитать ваши шансы в разных университетах.',
  },
  {
    question: 'Является ли использование этой платформы бесплатным?',
    answer: 'Мы предлагаем как бесплатные, так и премиум-планы, поэтому вы можете начать бесплатно и перейти на более высокий уровень в любое время.',
  },
  {
    question: 'Могу ли я получить помощь от настоящих консультантов?',
    answer: 'Да! Пользователи Premium и VIP получают доступ к живым консультациям с нашими экспертами.',
  },
  {
    question: 'Как часто обновляются данные?',
    answer: 'Мы регулярно обновляем нашу базу данных университетов, чтобы гарантировать точность рекомендаций.',
  },
  {
    question: 'Как отменить подписку?',
    answer: 'Вы можете отменить подписку в любое время через настройки своего аккаунта или связавшись с нашей службой поддержки.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq_title">Часто задаваемые вопросы</h2>
      <div className="faq_list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq_item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq_question">{item.question}</div>
            <div className="faq_answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
