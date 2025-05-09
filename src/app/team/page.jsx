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
                      src="/assets/img/leah.png"
                      className="img-fluid"
                      alt="Limitless Marketing"
                    />
                  </div>
                  <div className="name-container">
                    <h4>Leah</h4>
                    <h5>Operations Manager</h5>
                  </div>
                </div>
                <div className="team-content">
                  <p>
                    I’ve always had a passion for working with people,
                    regardless of the sector. Since having my daughter, my focus
                    has shifted—all I want to do is help others, whether
                    mentally, emotionally, financially, or in any way I can.
                  </p>
                  <p>
                    Becoming an operations manager has always been a
                    dream—helping people find their passion, achieve their
                    goals, and succeed in life.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="team-card">
                <div className="team-image">
                  <div className="img-container">
                    <img
                      src="/assets/img/jason.jpg"
                      className="img-fluid"
                      alt="Limitless Marketing"
                    />
                  </div>
                  <div className="name-container">
                    <h4>Jason Plunkett</h4>
                    <h5>Team Leader</h5>
                  </div>
                </div>
                <div className="team-content">
                  <p>
                  Jason Plunkett is a highly valued member of the Limitless Marketing Limited team.
                  With a background in sales and marketing, Jason's skills and experience have been
                  a significant asset to the company.
                  </p>
                  <p>
                  His dedication, work ethic, and commitment to excellence have earned him a reputation as a trusted and reliable team player.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="team-card">
                <div className="team-image">
                  <div className="img-container">
                    <img
                      src="/assets/img/pavitra.jpg"
                      className="img-fluid"
                      alt="Limitless Marketing"
                    />
                  </div>
                  <div className="name-container">
                    <h4>Pavitra Raja</h4>
                    <h5>Team Leader</h5>
                  </div>
                </div>
                <div className="team-content">
                  <p>
                  Pavitra Raja is a marketing expert and Team Leader at Limitless Marketing Limited.
                  Armed with a degree in Marketing and a keen understanding of industry trends,
                  Pavitra develops and executes effective marketing strategies that drive business success.
                  </p>
                  <p>
                  Her expertise and leadership skills make her an invaluable asset to the team.
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
