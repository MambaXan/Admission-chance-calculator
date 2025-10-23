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
        <div className="contact-info">
          <h2>Our contacts</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>Bishkek, Manas 34 street</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+996 (555) 555-555</p>
                <p>+996 (777) 777-777</p>
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
                <h3>Work schedule</h3>
                <p>Mo-Fr: 9:00 - 18:00</p>
                <p>St: 10:00 - 15:00</p>
                <p>Su: выходной</p>
              </div>
            </div>
          </div>
          <div className="social-media">
            <h3>Our social media</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-telegram-plane"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Get consultation</h2>
          <p className="form-description">Fill out the form and we will contact you shortly.</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
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
              <label htmlFor="date">Desired consultation date</label>
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message and questions..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
            Send a request
            </button>
          </form>

          {submittedData && (
            <div className="submitted-data">
              <h3>Thank's for your request!</h3>
              <p>We will contact you shortly.</p>
              <div className="submitted-details">
                <p><strong>Name:</strong> {submittedData.firstName} {submittedData.lastName}</p>
                <p><strong>Contacts:</strong> {submittedData.phone} / {submittedData.email}</p>
                <p><strong>Date:</strong> {submittedData.date}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;