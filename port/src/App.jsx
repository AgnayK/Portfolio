import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import udemy from "./assets/udemy.jpg"
import AWS from "./assets/AWS.png"
import DL from "./assets/DL.png"
import minutes from "./assets/Minutes.png"
import agiPhoto from "./assets/agi_photo.jpg";
import mini from "./assets/mini.png";
import music from "./assets/music.png";
import rudra from "./assets/rudra.jpg";
import simon from "./assets/simon.png";
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaCertificate, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import "./App.css";

/* ================= HEADER ================= */
function Header({ setPage, page }) {
  return (
    <header className="header">
      <ul className="nav-links">

        {/* Desktop Text */}
        <li className={`nav-text ${page === "home" ? "active" : ""}`} onClick={() => setPage("home")}>Home</li>
        <li className={`nav-text ${page === "about" ? "active" : ""}`} onClick={() => setPage("about")}>About</li>
        <li className={`nav-text ${page === "works" ? "active" : ""}`} onClick={() => setPage("works")}>My Works</li>
        <li className={`nav-text ${page === "certifications" ? "active" : ""}`} onClick={() => setPage("certifications")}>Certifications</li>
        <li className={`nav-text ${page === "contact" ? "active" : ""}`} onClick={() => setPage("contact")}>Contact</li>

        {/* Mobile Icons */}
        <li className={`nav-icon ${page === "home" ? "active" : ""}`} onClick={() => setPage("home")}><FaHome /></li>
        <li className={`nav-icon ${page === "about" ? "active" : ""}`} onClick={() => setPage("about")}><FaUser /></li>
        <li className={`nav-icon ${page === "works" ? "active" : ""}`} onClick={() => setPage("works")}><FaBriefcase /></li>
        <li className={`nav-icon ${page === "certifications" ? "active" : ""}`} onClick={() => setPage("certifications")}><FaCertificate /></li>
        <li className={`nav-icon ${page === "contact" ? "active" : ""}`} onClick={() => setPage("contact")}><FaEnvelope /></li>

      </ul>
    </header>
  );
}

/* ================= PROFILE IMAGE ================= */
/* ================= PROFILE IMAGE ================= */
function ProfileImage({ page }) {
  return (
    <div
      className={`profile-wrapper ${
        page === "about" ? "move-left" : ""
      }`}
    >
      <div className="inclined-oval">
        <img src={agiPhoto} alt="AGNAY K" />
      </div>
      <div className="name-glow">
        <h2>AGNAY K</h2>
      </div>
    </div>
  );
}


/* ================= HOME ================= */
function Home({ page }) {
  return (
    <div className={`hero-text ${page === "about" ? "fade-out" : ""}`}>
      <h1>
        Welcome to <br />
        My <br />
        Portfolio
      </h1>
      <p className="role-tag">Software Developer</p>
    </div>
  );
}

/* ================= ABOUT ================= */
function About({ page }) {
  return (
    <div className={`about-me ${page === "about" ? "show" : ""}`}>
     <h2>About Me</h2>
<p>
  I am a B.Tech Computer Science student passionate about building scalable and user-focused web applications. With a strong foundation in Full Stack Development, I work across frontend and backend technologies to create seamless digital experiences.
  <br /><br />
  My goal is to grow as a professional Full Stack Developer and contribute to impactful, real-world solutions.
</p>
    </div>
  );
}

/* ================= WORKS ================= */
const works = [
  { 
    id: 1, 
    title: "DDCMTS (Govt project)", 
    img: minutes,
    desc: "Developed a full-stack web application for the District Planning Office to record and manage meeting minutes, with a React frontend and Django backend.The system was officially implemented for the Kannur District Collectorate,  role-based access control, and streamlined approval workflows for government officials."
  },
  { 
    id: 2, 
    title: "Sangita", 
    img: music,
    desc: "Developed a responsive and visually engaging music player web application, with a strong focus on attractive UI and smooth user experience. The app allows users to browse, play, and manage songs seamlessly, demonstrating both front-end creativity and back-end integration."
  },
  { 
    id: 3, 
    title: "Rudra Writes", 
    img: rudra,
    desc: "A full-stack web application designed as a personal blogging site, where users can create,read,edit and delete blog posts. This project served as a hands-on implementation of the complete development stack, combining HTML, CSS, JavaScript for the frontend and Node.js, Express.js, and PostgreSQL for the backend. "
  },
  { 
    id: 4, 
    title: "Fillmate", 
    img: mini,
    desc: "A web-based application developed as part of my college mini project to automate the creation of customized documents. Built using HTML, CSS, JavaScript, and Django REST Framework, the system allows users to input data through interactive forms and dynamically generates formatted documents based on templates."
  },
  { 
    id: 5, 
    title: "Simon Game", 
    img: simon,
    desc: "An interactive memory-based game built using JavaScript that challenges players to repeat an increasingly complex sequence of colors and sounds. Inspired by the classic Simon electronic game, it enhances memory and concentration through progressive difficulty levels. "
  },
];


function WorksPage() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const total = works.length;

  // Proper responsive detection
  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => setActive((active - 1 + total) % total);
  const next = () => setActive((active + 1) % total);

  const getPosition = (index) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="works-page">
      <h2>My Works</h2>

      <div className="circular-carousel">
        <button className="nav left" onClick={prev}>&lsaquo;</button>

        {works.map((work, index) => {
          const pos = getPosition(index);
          const distance = Math.abs(pos);

          const opacity = Math.max(1 - distance * 0.25, 0.25);
          const blur = Math.min(distance * 2.5, 8);

          const isCenter = index === active;
          const isHoveredCenter = isCenter && hovered === index;

          let scale = Math.max(1.2 - distance * 0.18, 0.7);

          if (!isMobile && isHoveredCenter) {
            scale += 0.05;
          }

          return (
            <div
              key={work.id}
              className={`circle-card ${isCenter ? "is-center" : ""}`}
              onMouseEnter={() =>
                !isMobile && isCenter && setHovered(index)
              }
              onMouseLeave={() =>
                !isMobile && setHovered(null)
              }
              style={{
                transform: `translateX(${pos * (isMobile ? 260 : 320)}px) scale(${scale})`,
                opacity,
                filter: `blur(${blur}px)`,
                zIndex: 10 - distance,
              }}
            >
              <img src={work.img} alt={work.title} />
              <p className="card-title">{work.title}</p>
            </div>
          );
        })}

        <button className="nav right" onClick={next}>&rsaquo;</button>
      </div>

      {isMobile ? (
        <motion.div
          key={active}
          className="desc-box"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {works[active].desc}
        </motion.div>
      ) : (
        hovered !== null &&
        hovered === active && (
          <motion.div
            className="desc-box"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {works[hovered].desc}
          </motion.div>
        )
      )}
    </div>
  );
}

/* ================= CERTIFICATIONS ================= */

function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { img: udemy, title: "Full Stack Development" },
    { img: AWS, title: "Solutions Architecture" },
    { img: DL, title: "Deep Learning" },
  ];

  return (
    <div className="cert-page">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="cert-card"
            onClick={() => setSelectedCert(cert)}
          >
            <img src={cert.img} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={() => setSelectedCert(null)}>
              X
            </span>
            <img src={selectedCert.img} alt={selectedCert.title} />
            <p>{selectedCert.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}



/* ================= CONTACT ================= */




function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <h2>Contact Me</h2>

        <p className="contact-desc">
          If you have any questions, ideas, or collaborations in mind, feel free to reach out!
        </p>

        <div className="contact-list">

          {/* Email */}
          {/* Email */}
<div className="contact-item">
  <FaEnvelope />
  <a href="mailto:agnayk19@gmail.com?subject=Hello%20Agnay">
    agnayk19@gmail.com
  </a>
</div>



          {/* Address ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ Google Maps */}
          <div className="contact-item">
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Thalassery,Kannur,Kerala,India"
              target="_blank"
              rel="noreferrer"
            >
              Thalassery, Kannur, Kerala, India
            </a>
          </div>

          {/* LinkedIn */}
          <div className="contact-item">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/agnay-k-2952b326b"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-item">
            <FaGithub />
            <a
              href="https://github.com/AgnayK"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}






/* ================= APP ================= */
export default function App() {
  const [page, setPage] = useState("home");
  const [prevPage, setPrevPage] = useState("home");

  const isHomeOrAbout = (p) => p === "home" || p === "about";

  // Variants
  const fade = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
  const fadeSimultaneous = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleSetPage = (next) => {
    setPrevPage(page);
    setPage(next);
  };

  const renderPageContent = () => {
    // Home/About transitions
    if (isHomeOrAbout(prevPage) && isHomeOrAbout(page)) {
      return (
        <>
          {page === "home" && <Home page={page} key="home" />}
          {page === "about" && <About page={page} key="about" />}
        </>
      );
    }
    // All other transitions ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ fade simultaneously
    switch (page) {
      case "home":
        return <Home page={page} key="home" />;
      case "about":
        return <About page={page} key="about" />;
      case "works":
        return <WorksPage key="works" />;
      case "certifications":
        return <CertificationsPage key="certifications" />;
      case "contact":
        return <ContactPage key="contact" />;
      default:
        return null;
    }
  };

 return (
  <>
    <Header setPage={handleSetPage} page={page} />

    <main className="content">

      {/* IMAGE ALWAYS MOUNTED */}
      {(page === "home" || page === "about" || page === "contact") && (
        <ProfileImage page={page} />
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={page}
          variants={
            isHomeOrAbout(prevPage) && isHomeOrAbout(page)
              ? fade
              : fadeSimultaneous
          }
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {renderPageContent()}
        </motion.div>
      </AnimatePresence>
    </main>
  </>
);

}





