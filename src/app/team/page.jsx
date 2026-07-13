import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="banner team-banner">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="banner-heading">Meet the Team Behind the Vision</h1>
            <p className="banner-para">
              Discover the passionate individuals driving Limitless Marketing
              forward. Our team is made up of dedicated professionals committed
              to excellence, innovation, and delivering results for our clients.
            </p>
            <div className="link text-start">
              <Link className="banner-link" href="/contact">
                Contact Us{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec team">
        <div className="container">
          <h2 className="sec-heading">Meet Our Team</h2>
          <ul className="team-ul">
            <li>
              <div className="team-card">
                <div className="team-image">
                  <div className="img-container">
                    <img
                      src="/assets/img/amir.jpeg"
                      className="img-fluid"
                      alt="Limitless Marketing"
                    />
                  </div>
                  <div className="name-container">
                    <h4>Amir Khalifa</h4>
                    <h5>Managing Director</h5>
                  </div>
                </div>
                <div className="team-content">
                  <p>
                    Accomplished leader and direct sales veteran at Limitless
                    Marketing, has spent over 10 years building and leading
                    high-performing teams that consistently exceed sales
                    targets. His expertise in recruitment, training, and
                    mentoring has enabled the company to develop a loyal and
                    productive sales force, driving revenue growth and success.
                  </p>
                  <p>
                    With a proven track record of expanding businesses into new
                    markets, he has played a key role in driving Limitless
                    Marketing's growth and expansion in Ireland.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="team-card">
                <div className="team-image">
                  <div className="img-container">
                    <img
                      src="/assets/img/andrew.jpg"
                      className="img-fluid"
                      alt="Limitless Marketing"
                    />
                  </div>
                  <div className="name-container">
                    <h4>Andrew O’brien</h4>
                    <h5>Sales Manager</h5>
                  </div>
                </div>
                <div className="team-content">
                  <p>
                    Andrew O’brien is a high-impact Sales Manager dedicated to driving sustainable growth and building elite teams. With a focus on strategy and a knack for closing complex deals.
                  </p>
                  <p>
                    Andrew transforms ambitious targets into measurable success for both our company and our clients.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="team-card">
                <div className="team-image">
                  <div className="img-container">
                    <img
                      src="/assets/img/tukai.jpeg"
                      className="img-fluid"
                      alt="Limitless Marketing"
                    />
                  </div>
                  <div className="name-container">
                    <h4>Tukai Saleh</h4>
                    <h5>Business Development Manager</h5>
                  </div>
                </div>
                <div className="team-content">
                  <p>
                    With a proven track record of driving growth and forging strategic partnerships, Tukai specializes in identifying high-value opportunities and transforming them into long-term partnerships. 
                  </p>
                  <p>
                    As the Business Development Manager at Limitless Marketing he focuses on aligning innovative business strategies with to deliver ethical fundraising standards and impactful territory management strategies.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="team-card">
                <div className="team-image">
                  <div className="img-container">
                    <img
                      src="/assets/img/FINN.jpg"
                      className="img-fluid"
                      alt="Limitless Marketing"
                    />
                  </div>
                  <div className="name-container">
                    <h4>Finn O’Heochaidh</h4>
                    <h5>Operations Coordinator</h5>
                  </div>
                </div>
                <div className="team-content">
                  <p>
                  Finn is the Operations Coordinator at Limitless Marketing, ensuring our door-to-door fundraising campaigns run smoothly and efficiently. He supports our fundraising teams, coordinates daily operations, and helps create a positive, high-performing environment that enables our charity partners to make a lasting impact.
                  </p>
                  <p>
                  With a strong focus on organization and teamwork, Finn is committed to helping both our people and our charity partners succeed. His dedication behind the scenes ensures our campaigns are delivered with professionalism, consistency, and purpose.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
