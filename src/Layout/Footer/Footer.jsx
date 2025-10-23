import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="about_platform">
                    <h4>I.M.A</h4>
                    <p>Get personalized help!</p>
                </div>
                <div className="footer_container_navigation">
                    <div className="get_help">
                        <p>HELP</p>
                        <ul>
                            <li><Link className='contact_us_link' to={'/contacts'}>Consultation</Link></li>
                            <li><Link className='blog_link' to={'/blog'}>Our Blog</Link></li>
                            <li><Link className='faq_link' to={'/faq'}>FAQ</Link></li>
                            <li><Link className='privacy_link' to={'/privacy'}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="services_link">
                        <p>SERVICES</p>
                        <ul>
                            <li><Link className='uni_application_link' to={'/admission'}>Applying to universities</Link></li>
                            <li><Link className='uni_application_link' to={'/admission'}>Calculate chances</Link></li>
                            <li><Link className='consultation_link' to={'/contacts'}>Consultation</Link></li>
                            <li><Link className='platform_access_link' to={'/subscription'}>Access to our platform</Link></li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <p>CONTACTS</p>
                        <ul>
                            <li>Bishkek, Kyrgyzstan</li>
                            <li>Number: +996 999 999 999</li>
                            <li>Mail: imaplatform@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;