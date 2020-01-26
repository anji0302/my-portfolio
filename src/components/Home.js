import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const heroSection = {
    name: "Anjaneyulu Dhamera",
    profession: "Software Engineer",
    info: "I design and code beautifully simple things, and I love what I do.I like to code things from scratch, and enjoy bringing ideas to life in the browser."
  }

  return (
    <div className="Home container">
      <section className="hero">
        <div className="bg-img"></div>

        <div className="title">
          <div className="name">{heroSection.name}</div>
          <div className="profession">{heroSection.profession}</div>
          <p className="info">{heroSection.info}</p>
          <div className="learn-more">Learn More <span className="learn-more-icon">(v)</span></div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-title">
          <h2>About</h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-body">
              <div className="card-icon"></div>
              <h5 className="card-title">Fast</h5>
              <p className="card-text">Fast load times and lag free interaction, my highest priority.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-icon"></div>
              <h5 className="card-title">Intuitive</h5>
              <p className="card-text">Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-icon"></div>
              <h5 className="card-title">Responsive</h5>
              <p className="card-text">My layouts will work on any device, big or small.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-icon"></div>
              <h5 className="card-title">Dynamic</h5>
              <p className="card-text">Websites don't have to be static, I love making pages come to life.</p>
            </div>
          </div>
        </div>

      </section>

      <div><Link to="/movies">Movie Project</Link></div>

    </div>
  );
}

export default Home;
