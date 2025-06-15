import React, { useState } from 'react';
import './Contacts.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      date: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        {/* Левая часть - контакты */}
        <div className="contact-info">
          <h2>Наши контакты</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Адрес</h3>
                <p>г. Бишкек, ул. Манаса 34</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Телефон</h3>
                <p>+996 (555) 123-456</p>
                <p>+996 (777) 987-654</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@university-admission.kg</p>
                <p>support@university-admission.kg</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Часы работы</h3>
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 15:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="social-media">
            <h3>Мы в соцсетях</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-telegram-plane"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>

        {/* Правая часть - форма */}
        <div className="contact-form-container">
          <h2>Записаться на консультацию</h2>
          <p className="form-description">Заполните форму и мы свяжемся с вами в ближайшее время</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Имя</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Ваше имя"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Фамилия</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Ваша фамилия"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+996 (___) ___ ___"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Желаемая дата консультации</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                placeholder="Ваше сообщение или вопросы..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Отправить заявку
            </button>
          </form>

          {submittedData && (
            <div className="submitted-data">
              <h3>Спасибо за вашу заявку!</h3>
              <p>Мы свяжемся с вами в ближайшее время.</p>
              <div className="submitted-details">
                <p><strong>Имя:</strong> {submittedData.firstName} {submittedData.lastName}</p>
                <p><strong>Контакт:</strong> {submittedData.phone} / {submittedData.email}</p>
                <p><strong>Дата:</strong> {submittedData.date}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;