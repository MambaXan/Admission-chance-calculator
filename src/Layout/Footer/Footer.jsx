import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="about_platform">
                    <h4>I.M.A</h4>
                    <p>Получите персональную помощь с вашими знаниями!</p>
                </div>
                <div className="footer_container_navigation">
                    <div className="get_help">
                        <p>ПОМОЩЬ</p>
                        <ul>
                            <li><Link className='contact_us_link' to={'/contacts'}>Консультация</Link></li>
                            <li><Link className='blog_link' to={'/blog'}>Наш блог</Link></li>
                            <li><Link className='faq_link' to={'/faq'}>Часто задаваемые вопросы</Link></li>
                            <li><Link className='privacy_link' to={'/privacy'}>Политика конфиденциальности</Link></li>
                        </ul>
                    </div>
                    <div className="services_link">
                        <p>СЕРВИСЫ</p>
                        <ul>
                            <li><Link className='uni_application_link' to={'/admission'}>Подача в университеты</Link></li>
                            <li><Link className='uni_application_link' to={'/admission'}>Рассчитать шансы</Link></li>
                            <li><Link className='consultation_link' to={'/contacts'}>Консультации</Link></li>
                            <li><Link className='platform_access_link' to={'/subscription'}>Доступ к нашей платформе</Link></li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <p>КОНТАКТЫ</p>
                        <ul>
                            <li>Бишкек, Кыргызстан</li>
                            <li>Номер: +996 999 999 999</li>
                            <li>Почта: imaplatform@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;