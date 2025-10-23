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
            <h1>Meet our Ivy League alumni</h1>
            <p>
              Meet our Ivy League graduates. We are proud to have helped our
              students get into the Ivy League. Now they will work at top
              companies and startups. Looking at them, we feel proud. After all,
              they have traveled a difficult and thorny path, and it has
              culminated in success!
            </p>
          </div>
        </div>

        <div className="blog_cards_container">
          <div className="blog_card">
            <img src={blog1} alt="blog1" />
            <h2>The Path to the Ivy League</h2>
            <p>How our student got into Yale</p>
          </div>

          <div className="blog_card">
            <img src={blog2} alt="blog2" />
            <h2>Success at Harvard</h2>
            <p>
              Find out how consistent planning helped Anna get into Harvard.
            </p>
          </div>

          <div className="blog_card">
            <img src={blog3} alt="blog3" />
            <h2>Stanford startup story</h2>
            <p>
              How our student launched a startup during her first year at
              Stanford
            </p>
          </div>
        </div>
        <div className="blog_newsletter">
          <h2>Stay updated</h2>
          <p>
            Subscribe to our newsletter to receive exclusive stories and tips.
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Blog;
