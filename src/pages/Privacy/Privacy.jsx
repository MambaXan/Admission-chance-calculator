import React from "react";
import "./Privacy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <header className="header">
        <h1 className="title">Privacy policies</h1>
        <p className="subtitle">How we process your data</p>
      </header>

      <section className="content">
        <h2 className="section-title">Data collection</h2>
        <p>
          We collect various types of information to provide and improve our
          services. This may include personal data such as name, email, and
          other contact information.
        </p>

        <h2 className="section-title">Data Usage</h2>
        <p>
          Using the data we collect, we can improve the functionality of our
          services, offer personalized recommendations, and maintain
          communication with you.
        </p>

        <h2 className="section-title">Your rights</h2>
        <p>
          You have the right to access, correct, and delete your personal data.
          To do so, please contact us using the contact information provided.
        </p>

        <h2 className="section-title">Safety</h2>
        <p>
          We take all necessary measures to protect your data. However, no
          system can guarantee absolute security.
        </p>

        <h2 className="section-title">Contacts</h2>
        <p>
          If you have any questions about our privacy policy, please contact us
          using the contact information below.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 All rights reserved</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
