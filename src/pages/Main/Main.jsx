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
            <h1>Find out your chances of admission!</h1>
            <p>
              Here you can find out <br /> about your chances of getting into
              universities <br /> and also get help
            </p>
            <button>
              <Link className="admission" to="/admission">
                Apply
              </Link>
            </button>
          </div>
          <div className="main_container_image">
            <img src={mainBG} alt="" />
          </div>
        </div>
      </section>
      <section className="main_services">
        <h2 className="main_services_title">Services</h2>
        <div className="main_services_cards">
          <div className="card">
            <Link className="card_link" to="/admission">
              <img src={university} alt="" />
              <h3>Application to the university</h3>
              <p>We will help you submit applications quickly and correctly.</p>
            </Link>
          </div>
          <div className="card">
            <Link className="card_link" to="/admission">
              <img src={calculations} alt="" />
              <h3>Chances calculator</h3>
              <p>Assess your chances of getting into your dream university.</p>
            </Link>
          </div>
          <div className="card">
            <Link className="card_link" to="/contacts">
              <img src={consultation} alt="" />
              <h3>Consultations</h3>
              <p>Get individual consultation from our experts.</p>
            </Link>
          </div>
          <div className="card">
            <Link className="card_link" to="/admission">
              <img src={documents} alt="" />
              <h3>Documents review</h3>
              <p>We check and improve your documents before sending.</p>
            </Link>
          </div>
        </div>
        <div className="main_services_description">
          <h3>Apply to your dream universities with us!</h3>
          <p>
            Become part of our community—growing, learning, and improving.{" "}
            <br />
            Let us be your guide to the world of development and quality
            education. <br />
            We will guide you through every step of the application process.{" "}
            <br />
            Become a part of our platform and discover your chances of
            admission!
          </p>
        </div>
      </section>
      <section className="results">
        <div className="results_container">
          <div className="results_card">
            <h4>Over $10 million in scholarships</h4>
            <p>
              Over 10 million scholarships and grants from leading global
              universities for our clients
            </p>
          </div>
          <div className="results_card">
            <h4>Helped more than 10000 students</h4>
            <p>Our students studying at the best universities right now</p>
          </div>
          <div className="results_card">
            <h4>1 million active users on our platform</h4>
            <p>Millions using our platform and achieving their goals with us</p>
          </div>
          <div className="results_card">
            <h4>More than 20 years of experience</h4>
            <p>
              For the past 20+ years, we've been helping our students in all
              aspects of their education
            </p>
          </div>
        </div>
      </section>
      <section className="our_team">
        <h4>Our team</h4>
        <div className="our_team_container">
          <div className="our_team_card">
            <img src={mentor1} alt="" />
            <h4>Mark Jackson</h4>
            <p>Curator for US Universities</p>
          </div>
          <div className="our_team_card">
            <img src={mentor2} alt="" />
            <h4>Bill Willington</h4>
            <p>Curator for UK universities</p>
          </div>
          <div className="our_team_card">
            <img src={mentor3} alt="" />
            <h4>Britney Delson</h4>
            <p>Curator for Korea universities</p>
          </div>
          <div className="our_team_card">
            <img src={mentor4} alt="" />
            <h4>Alex Crew</h4>
            <p>Curator for Germany universities</p>
          </div>
        </div>
      </section>
      <section className="loop-carousel">
        <h4>Student reviews!</h4>
        <div className="loop-carousel-track">
          <div className="loop-carousel-item">
            <img src={student1} alt="" />
            <p className="feedback">
              Thanks to these people, my dream came true. Now I'm studying at
              one of the top universities. I never trusted these kinds of
              platforms, but now my vision of education abroad has become
              clearer and more precise
            </p>
            <h4>Benjamin Webster</h4>
            <p className="alumni">NYU student</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student2} alt="" />
            <p className="feedback">
              I must admit, these people and their product have changed my life.
              Using their platform, I can get into Yale on my own. I'm an
              ordinary person without a ton of money, but I have a desire to get
              the best education. And this platform helps ordinary people like
              me
            </p>
            <h4>Mehmet Farahi</h4>
            <p className="alumni">Yale student</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student3} alt="" />
            <p className="feedback">
              I never thought I'd be able to get into Cambridge. Before
              discovering this platform, I couldn't imagine how I, a simple
              villager, could possibly get into such a university. But thanks to
              the professionalism of the team and the usefulness of this
              platform, I'm now studying at Cambridge
            </p>
            <h4>Bob Ashton</h4>
            <p className="alumni">Cambridge student</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student4} alt="" />
            <p className="feedback">
              I can't believe I'm part of this community now. I must admit that
              this platform and team have helped me with all my
              education-related issues. I won't be wrong if I say these people
              are changing lives. Their product is worthy of attention and
              publicity
            </p>
            <h4>Vanessa Clinton</h4>
            <p className="alumni">MIT student</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student1} alt="" />
            <p className="feedback">
              Thanks to these people, my dream came true. Now I'm studying at
              one of the top universities. I never trusted these kinds of
              platforms, but now my vision of education abroad has become
              clearer and more precise
            </p>
            <h4>Benjamin Webster</h4>
            <p className="alumni">NYU student</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student2} alt="" />
            <p className="feedback">
              I must admit, these people and their product have changed my life.
              Using their platform, I can get into Yale on my own. I'm an
              ordinary person without a ton of money, but I have a desire to get
              the best education. And this platform helps ordinary people like
              me
            </p>
            <h4>Mehmet Farahi</h4>
            <p className="alumni">Yale student</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student3} alt="" />
            <p className="feedback">
              I never thought I'd be able to get into Cambridge. Before
              discovering this platform, I couldn't imagine how I, a simple
              villager, could possibly get into such a university. But thanks to
              the professionalism of the team and the usefulness of this
              platform, I'm now studying at Cambridge
            </p>
            <h4>Bob Ashton</h4>
            <p className="alumni">Cambridge student</p>
          </div>
          <div className="loop-carousel-item">
            <img src={student4} alt="" />
            <p className="feedback">
              I can't believe I'm part of this community now. I must admit that
              this platform and team have helped me with all my
              education-related issues. I won't be wrong if I say these people
              are changing lives. Their product is worthy of attention and
              publicity
            </p>
            <h4>Vanessa Clinton</h4>
            <p className="alumni">MIT student</p>
          </div>                            
        </div>
      </section>
    </>
  );
};

export default Main;
