import "./Hero.css";
import heroImage from "../../assets/heroimg.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="image-hero-div">
        <img src={heroImage} alt="A tech student club" className="hero-image" />
        <div className="overlay-darkened"></div>

        <div className="on-img-txt">
          <h1 className="hero-text">Code. Create. Innovate.</h1>
          <div className="button-container">
            <Link to="/Registration">
              <button type="button" className="register-button">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
