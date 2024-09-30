import React from "react";
import "./Leadership.css";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile4.jpg";
import profile5 from "../../assets/profile5.jpg";
import profile6 from "../../assets/profile6.jpg";
import profile7 from "../../assets/profile7.jpg";
import profile8 from "../../assets/profile8.jpg";
import profile9 from "../../assets/profile9.jpg";
import profile10 from "../../assets/profile10.jpg";
import profile11 from "../../assets/profile11.jpg";

const leaders = [
  {
    name: "Dr. John Ndia",
    role: "Patron",
    bio: "Dr. John Ndia is a visionary and dedicated leader with years of experience in fostering technological growth and mentorship.",
    image: profile1,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Victory Njeri",
    role: "Chairperson",
    bio: "Victory Njeri leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile2,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },

  {
    name: "Allan Muhari",
    role: "Vice Chairperson",
    bio: "Allan Muhari leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile3,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },

  {
    name: "Bridget Gitonga ",
    role: "secretary",
    bio: "Bridget Gitonga leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile4,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },

  {
    name: "Ruth Mutisya ",
    role: "Chairperson",
    bio: "Ruth Mutisya leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile5,
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },

  {
    name: "Webster Ifedha",
    role: "treasurer",
    bio: "Webster Ifedha leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile6,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },

  {
    name: "Manase Gunga ",
    role: "UI/UX lead",
    bio: "Manase Gunga leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile7,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },

  {
    name: "Carolyne Githenduka",
    role: "web development lead",
    bio: "Carolyne Githenduka leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile8,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },

  {
    name: "Stanley Amunze",
    role: "Mobile apps development lead",
    bio: "Stanley Amunze leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile9,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },

  {
    name: "Paul Karanja",
    role: "cloud engineering lead",
    bio: "Paul Karanja leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile10,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },

  {
    name: "Evyonn Mbithe",
    role: "power platform lead",
    bio: "Evyonn Mbithe leads MUTC with passion and dedication, driving the club towards technological excellence.",
    image: profile11,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];

function LeadershipCard({ name, role, bio, image, social }) {
  return (
    <div className="leader-card">
      <img src={image} alt={name} className="leader-image" />
      <h3 className="leader-name">{name}</h3>
      <p className="leader-role">
        <strong>{role}</strong>
      </p>
      <p className="leader-bio">{bio}</p>
      <div className="leader-socials">
        {social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin size={24} color="purple " />
          </a>
        )}
        {social.twitter && (
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <FaTwitter size={24} color="purple" />
          </a>
        )}
        {social.facebook && (
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <FaFacebook size={24} color="purple" />
          </a>
        )}
        {social.instagram && (
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <FaInstagram size={24} color="purple" />
          </a>
        )}
      </div>
    </div>
  );
}

function Leadership() {
  return (
    <section className="leadership-section">
      <h2>Our Leadership</h2>
      <div className="leaders-container">
        {leaders.map((leader, i) => (
          <LeadershipCard key={i} {...leader} />
        ))}
      </div>
    </section>
  );
}

export default Leadership;
