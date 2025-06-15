import React from 'react';
import './Subscription.scss'

const Subscription = () => {
  return (
    <section className='subscription'>
      <div className="subscription_container">
        <div className="subscription_card">
          <h1 className='subscription_plan'>Бесплатно</h1>
          <p className='subscription_price'>$0/м</p>
          <ul>
            <li>5 бесплатных рассчетов</li>
            <li>Ежедневная поддержка</li>
            <li>Консультации каждый месяц</li>
          </ul>
          <button>Используется</button>
        </div>
        <div className="subscription_card">
          <h1 className='subscription_plan'>Премиум</h1>
          <p className='subscription_price'>$9.99/м</p>
          <ul>
            <li>10 ежедневных рассчетов</li>
            <li>Поддержка 24/7</li>
            <li>Ежедневные консультации с экспертами</li>
          </ul>
          <button>Получить доступ</button>
        </div>
        <div className="subscription_card">
          <h1 className='subscription_plan'>VIP</h1>
          <p className='subscription_price'>$99.99/м</p>
          <ul>
            <li>Бесконечное количество рассчетов</li>
            <li>Поддержка топовых экспертов</li>
            <li>Индивидуальные созвоны и встречи</li>
          </ul>
          <button>Получить доступ</button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;