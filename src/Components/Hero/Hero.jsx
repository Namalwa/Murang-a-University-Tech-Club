import './Hero.css';
import heroImage from '../../assets/heroimg.jpg';
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <section className="hero-section">
            <img src={heroImage} alt="A tech student club" className="hero-image"/>
            <h1 className="hero-text">Code. Create. Innovate.</h1>
            <div className='button-container'>
            <Link to="/registration">
                    <button type="button" className="register-button">Register</button>
                </Link>
            </div>
            <div className="imagesection">
         </div>
        </section>
    )

}
export default Hero;