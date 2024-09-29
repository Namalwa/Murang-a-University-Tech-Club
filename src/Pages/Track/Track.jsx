import React from 'react'
import './Track.css';
import { MdSecurity } from "react-icons/md";
import { LuPaintbrush2 } from "react-icons/lu";
import { FaLaptop } from "react-icons/fa";;
import { FaAndroid } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiPowerapps } from "react-icons/si";
import Registration from './Registration';


    function Trackus({icon, title, description}) {
        return (
          <section className="track-section">
             <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            
          </section>
        );
    }
        function Track() {
            return (
              <div className="track-section">
                <div className="track-card">
                <MdSecurity className="icon"/>
                <h3 className='card title'>Cybersecurity</h3>
                <p className='track-text'>
                  <ul className='track-list'>
                  <li>Explore protecting systems, networks, and data from cyber threats</li>
                  <li>Learn security protocols, ethical hacking, encryption, and threat analysis</li>
                  <li>Apply skills through hands-on projects and real-world scenarios</li>
                  <li>Identify and mitigate security vulnerabilities</li>
                  <li>Conduct security audits and implement robust security measures</li>
                  </ul>
</p>
                </div>


                 <div className="track-card">
                <LuPaintbrush2  className="icon"/>
                <h3 className='card title'>UI/UX design </h3>
                <p className='track-text'>
                <ul className='track-list'>
                  <li>Explore principles of user-friendly and visually appealing interface design</li>
                  <li>Learn user research, wireframing, prototyping, and usability testing</li>
                  <li>Gain hands-on experience through practical projects and workshops</li>
                  <li>Design intuitive user interfaces and enhance user experiences</li>
                  <li>Master industry-standard design tools for websites and mobile apps</li>
                  </ul>
                </p>
                </div>


                 <div className="track-card">
                <FaLaptop className="icon"/>
                <h3 className='card title'>Web Development</h3>
                <p className='track-text'>
                <ul className='track-list'>
                <li>Gain knowledge in building dynamic and responsive websites</li>
                <li>Learn front-end development using HTML, CSS, and JavaScript</li>
                <li>Study back-end development with Node.js, Express, and databases</li>
                <li>Develop skills through hands-on projects and collaborative coding</li>
                <li>Design, develop, and deploy full-stack web applications</li>
                 </ul>
                </p>
                </div>


                 <div className="track-card">
                <FaAndroid className="icon"/>
                <h3 className='card title'>Mobile development</h3>
                <p className='track-text'>
                <ul className='track-list'>
                <li>Learn to design and build applications for mobile devices</li>
                <li>Explore mobile app development on Android and iOS platforms</li>
                <li>Gain proficiency in Java, Kotlin, Swift, and Dart</li>
                 <li>Develop skills through hands-on projects and interactive sessions</li>
                 <li>Build, test, and deploy engaging mobile apps for smartphones and tablets</li>
                 </ul>
                </p>
                </div>

                 <div className="track-card">
                 <FaAws className="icon"/>
                 <h3 className='card title'>Cloud engineering</h3>
                 <p className='track-text'>
                 <ul className='track-list'>
                 <li>Dive into cloud computing and its applications</li>
                <li>Learn about AWS, Google Cloud, and Microsoft Azure</li>
                <li>Design, deploy, and manage scalable and secure cloud infrastructures</li>
                <li>Gain experience in cloud architecture, virtualization, containerization, and DevOps</li>
                <li>Build and maintain robust cloud-based solutions for high availability and performance</li>
                </ul>
                 </p>
                 </div>

                 <div className="track-card">
                 <SiPowerapps className="icon"/>
                 <h3 className='card title'>Power platform</h3>
                 <p className='track-text'>
                 <ul className='track-list'>
                 <li>Explore capabilities of Microsoft’s Power Platform</li>
                <li>Create custom business applications and automate workflows</li>
                <li>Analyze data and build chatbots with minimal coding</li>
                <li>Gain practical experience through hands-on projects and workshops</li>
                <li>Develop integrated solutions to enhance business processes and improve efficiency</li>
                </ul>
                 </p>
                 </div>

      {/* Add RegistrationForm below the tracks */}
      <div className="registration-form-section">
        <h2>Register for a Track</h2>
        <Registration /> {/* Render the registration form here */}
      </div>
</div>

            );
  }

  
  export default Track;











  
