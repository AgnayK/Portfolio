import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import udemy from "./assets/udemy.jpg"
import AWS from "./assets/AWS.png"
import DL from "./assets/DL.png"
import minutes from "./assets/Minutes.png"
import buTrack from "./assets/Bu-Track.png"
import collegeImg from "./assets/college.png"
import akgImg from "./assets/akg.png"
import igpsImg from "./assets/igps.png"
import agiPhoto from "./assets/agi_photo.jpg";
import mini from "./assets/mini.png";
import music from "./assets/music.png";
import rudra from "./assets/rudra.jpg";
import { 
  FaHome, 
  FaUser, 
  FaBuilding,
  FaGraduationCap,
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
        <li className={`nav-text ${page === "experience" ? "active" : ""}`} onClick={() => setPage("experience")}>Experience</li>
        <li className={`nav-text ${page === "education" ? "active" : ""}`} onClick={() => setPage("education")}>Education</li>
        <li className={`nav-text ${page === "works" ? "active" : ""}`} onClick={() => setPage("works")}>My Works</li>
        <li className={`nav-text ${page === "certifications" ? "active" : ""}`} onClick={() => setPage("certifications")}>Certifications</li>
        <li className={`nav-text ${page === "contact" ? "active" : ""}`} onClick={() => setPage("contact")}>Contact</li>

        {/* Mobile Icons */}
        <li className={`nav-icon ${page === "home" ? "active" : ""}`} onClick={() => setPage("home")}><FaHome /></li>
        <li className={`nav-icon ${page === "about" ? "active" : ""}`} onClick={() => setPage("about")}><FaUser /></li>
        <li className={`nav-icon ${page === "experience" ? "active" : ""}`} onClick={() => setPage("experience")}><FaBuilding /></li>
        <li className={`nav-icon ${page === "education" ? "active" : ""}`} onClick={() => setPage("education")}><FaGraduationCap /></li>
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
  I am a B.Tech Computer Science graduate passionate about building scalable and user-focused web applications. With a strong foundation in Full Stack Development, I work across frontend and backend technologies to create seamless digital experiences.
  <br /><br />
  My goal is to grow as a professional Full Stack Developer and contribute to impactful, real-world solutions.
</p>
    </div>
  );
}

/* ================= EXPERIENCE ================= */
function ExperiencePage() {
  return (
    <div className="experience-page">
      <h2>Experience</h2>
      <div className="experience-card">
        <div className="experience-layout">
          <div className="experience-visual">
            <img src={minutes} alt="Minutes Tracker System Government Project" />
            <p>Minutes Tracker System (Govt Project)</p>
          </div>

          <div className="experience-content">
            <div className="experience-head">
              <h3>Technical Contributor</h3>
              <span>District Planning Office, Kannur</span>
            </div>
            <p className="experience-intro">
              Worked on a government-focused digital platform to improve the way official
              meeting workflows are recorded, followed up, and reviewed.
            </p>
            <ul>
              <li>Developed a Minutes Tracker System to digitize and manage official meeting records.</li>
              <li>Designed features for storing, retrieving, and organizing meeting minutes efficiently.</li>
              <li>Implemented tracking of actions, deadlines, and updates from meetings.</li>
              <li>Collaborated in a 4-member team to build and test the system.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= EDUCATION ================= */
function EducationPage() {
  return (
    <div className="education-page">
      <h2>Education</h2>

      <div className="edu-grid">
        <article className="edu-card">
          <h3>College of Engineering Thalassery</h3>
          <p>B.Tech in Computer Science</p>
          <span>CGPA: 8.13 | Graduated: May 2026</span>
          <img src={collegeImg} alt="College of Engineering Thalassery" className="edu-image" />
        </article>

        <article className="edu-card">
          <h3>AKGM GHSS, Pinarayi</h3>
          <p>Higher Secondary</p>
          <span>Score: 96% | Year: 2022</span>
          <img src={akgImg} alt="AKGM GHSS Pinarayi" className="edu-image" />
        </article>

        <article className="edu-card">
          <h3>Indira Gandhi Public School, Mambaram</h3>
          <p>SSLC</p>
          <span>Score: 92.4% | Year: 2020</span>
          <img src={igpsImg} alt="Indira Gandhi Public School Mambaram" className="edu-image" />
        </article>
      </div>
    </div>
  );
}

/* ================= WORKS ================= */
const works = [
  {
    id: 0,
    title: "Bu-Track",
    img: buTrack,
    desc: "Bu-Track is a construction vehicle job tracking system built to manage daily job allocation, live job progress, and work history in one place. It helps teams assign vehicles and operators efficiently, monitor job status in real time, and maintain clear records for reporting and accountability across construction operations."
  },
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
];


function WorksPage() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({
    dragging: false,
    lastX: 0,
  });

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

  const DRAG_STEP_PX = 55;

  const handlePointerDown = (event) => {
    if (event.target.closest(".nav")) return;
    dragRef.current.dragging = true;
    dragRef.current.lastX = event.clientX;
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current.dragging) return;

    const deltaX = event.clientX - dragRef.current.lastX;
    if (Math.abs(deltaX) < DRAG_STEP_PX) return;

    if (deltaX > 0) {
      prev();
    } else {
      next();
    }

    dragRef.current.lastX = event.clientX;
  };

  const endDrag = () => {
    dragRef.current.dragging = false;
    setIsDragging(false);
  };

  const getPosition = (index) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="works-page">
      <h2>My Works</h2>

      <div
        className={`circular-carousel ${isDragging ? "dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setSubmitState({
        type: "error",
        message: "Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ type: "", message: "" });

    const payload = {
      access_key: accessKey,
      from_name: "Agnay Portfolio",
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      replyto: formData.email,
      botcheck: "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitState({
          type: "success",
          message: "Message sent successfully. I will get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitState({
          type: "error",
          message: result.message || "Unable to send message now. Please try again.",
        });
      }
    } catch {
      setSubmitState({
        type: "error",
        message: "Network error while sending message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitState.message && (
            <p className={`form-status ${submitState.type}`}>
              {submitState.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}






/* ================= APP ================= */
export default function App() {
  const [page, setPage] = useState("home");
  const [prevPage, setPrevPage] = useState("home");
  const [showProfileImage, setShowProfileImage] = useState(true);
  const [isProfileExiting, setIsProfileExiting] = useState(false);
  const [isCompactViewport, setIsCompactViewport] = useState(window.innerWidth <= 1024);

  const imagePages = ["home", "about"];

  const isHomeOrAbout = (p) => p === "home" || p === "about";
  const isShowcasePage = (p) => p === "works" || p === "certifications";
  const isWorksAndCertTransition =
    (prevPage === "works" && page === "certifications") ||
    (prevPage === "certifications" && page === "works");
  const isEnteringShowcaseFromOther =
    !isShowcasePage(prevPage) && isShowcasePage(page);

  // Variants
  const fade = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
  const fadeSimultaneous = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const slideUp = {
    initial: { opacity: 0, y: 70 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -70 },
  };

  const handleSetPage = (next) => {
    setPrevPage(page);
    setPage(next);
  };

  useEffect(() => {
    const onResize = () => setIsCompactViewport(window.innerWidth <= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let timer;
    const isImagePage = imagePages.includes(page);
    const cameFromImagePage = imagePages.includes(prevPage);

    if (!isCompactViewport) {
      setShowProfileImage(isImagePage);
      setIsProfileExiting(false);
      return () => {
        if (timer) clearTimeout(timer);
      };
    }

    if (isImagePage) {
      setShowProfileImage(true);
      setIsProfileExiting(false);
    } else if (cameFromImagePage) {
      setShowProfileImage(true);
      setIsProfileExiting(true);
      timer = setTimeout(() => {
        setShowProfileImage(false);
        setIsProfileExiting(false);
      }, 500);
    } else {
      setShowProfileImage(false);
      setIsProfileExiting(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [page, prevPage, isCompactViewport]);

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
      case "experience":
        return <ExperiencePage key="experience" />;
      case "education":
        return <EducationPage key="education" />;
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

    <main className={`content ${page === "home" || page === "about" ? "home-about-view" : ""}`}>

      {/* IMAGE ALWAYS MOUNTED */}
      {showProfileImage && (
        <div className={`profile-presence ${isProfileExiting ? "exit" : ""}`}>
          <ProfileImage page={imagePages.includes(page) ? page : prevPage} />
        </div>
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={page}
          variants={
            isHomeOrAbout(prevPage) && isHomeOrAbout(page)
              ? fade
              : isWorksAndCertTransition || isEnteringShowcaseFromOther
              ? slideUp
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





