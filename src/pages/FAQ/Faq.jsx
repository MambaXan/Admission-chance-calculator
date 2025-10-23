import React, { useState } from 'react';
import './Faq.scss';

const faqData = [
  {
    question: 'What is the purpose of this platform??',
    answer: 'This platform helps students assess their chances of admission to university based on their academic profile.',
  },
  {
    question: 'How to calculate your chances of admission?',
    answer: 'You can enter your scores and let our AI calculate your chances at different universities.'
  },
  {
    question: 'Is this platform free to use?',
    answer: 'We offer both free and premium plans, so you can start for free and upgrade at any time.',
  },
  {
    question: 'Can I get help from real consultants?',
    answer: 'Yes! Premium and VIP users have access to live consultations with our experts.',
  },
  {
    question: 'How often is the data updated?',
    answer: 'We regularly update our university database to ensure the accuracy of our recommendations.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription at any time through your account settings or by contacting our support team.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq_title">Frequently asked questions</h2>
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
