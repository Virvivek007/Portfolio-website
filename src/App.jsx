import { useEffect, useState } from "react";

const defaultPortfolio = {
  profile: {
    name: "Vivek Kumar Tiwari",
    role: "Data Analyst | FullStack Developer",
    tagline:
      "Data-driven professional focused on machine learning, business intelligence, and practical analytics solutions.",
    email: "vkt.vivek007@gmail.com",
    phone: "+91 1020304050",
    location: "Bihar, India",
    availability: "Open to internships and opportunities",
    resumeLink: "resume_vkt_1.pdf",
    github: "https://github.com/Virvivek007",
    linkedin: "https://www.linkedin.com/in/vkt16/",
    youtube: "https://youtube.com/@vivekcodex?si=ryTWKOes0PoRVoLm",
    twitter: "https://x.com/vkt_tiwari?t=vFwRdOhczXoN7LvfEQBUng&s=09",
    facebook: "https://www.facebook.com/vir.vivek.3",
    instagram: "https://www.instagram.com/vivek_vir_007?igsh=Ymo1a3ZkNnBiOHE3/",
  },
  stats: [
    { label: "Projects Completed", value: "20+" },
    { label: "Achievements", value: "20+" },
    { label: "Mentored Students", value: "100" },
    { label: "LinkedIn Followers", value: "2000+" },
  ],
  about: {
    story:
      "With over a year of comprehensive experience in the field of data science and analytics, accompanied by a bachelor's degree in engineering. Proficient in data analysis, statistical analysis, hypothesis testing, customer behaviour analysis, and machine learning. Demonstrated success in leading impactful projects and providing effective mentorship.",
    details: [
      { label: "Profile", value: "Data Science & Analytics" },
      { label: "Domain", value: "Data Scientist & Machine Learning Engineer" },
      { label: "Education", value: "Bachelor of Technology" },
      { label: "Language", value: "English, Hindi" },
      { label: "BI Tools", value: "Microsoft Power BI & Tableau" },
      {
        label: "Skills",
        value: "Python, Python Libraries, Excel, Git, SQL, C, HTML5, CSS & JS",
      },
      {
        label: "Interest",
        value: "Travelling, Singing, Teaching, Playing Volleyball and Chess",
      },
    ],
    strengths: [
      "SQL",
      "Python",
      "Data Visualization",
      "Statistical Analysis",
      "Machine Learning",
      "Power BI",
    ],
  },
  experience: [
    {
      period: "Jun 2025 - Sep 2025",
      title: "Data Analytics Intern",
      company: "Codec Technologies India",
      details:
        "Performed end-to-end data workflow: Collect, Clean, Prepare, Process, Analyze, and Share data to drive informed business decisions. Gained hands-on experience in data preparation, transformation, and analytics using industry-standard tools.",
    },
    {
      period: "Jun 2025 - Sep 2025",
      title: "Data Analyst",
      company: "HCL GUVI (Remote)",
      details:
        "Analyzed business data using advanced analytics techniques and Microsoft Power BI to create actionable insights. Developed dashboards and reports that enhanced data-driven decision-making processes.",
    },
    {
      period: "Mar 2025 - Apr 2025",
      title: "Web Developer Intern",
      company: "Edunet Foundation",
      details:
        "Developed full-stack web applications using MERN stack (MongoDB, Express, React, Node.js). Built scalable solutions addressing real-world problems with focus on clean architecture, responsive design, and performance optimization.",
    },
  ],
  education: [
    {
      period: "2023 - 2027",
      title: "Bachelor of Technology",
      subtitle: "Computer Science and Engineering",
      institution: "Katihar Engineering College, Katihar",
      grade: "Grade: 8.34 cgpa",
    },
    {
      period: "2023 - 2026",
      title: "Bachelor of Science [Hons]",
      subtitle: "Computer Science and Data Analytics",
      institution: "Indian Institute Of Technology, Patna",
      grade: "Grade: 8.12 cpi",
    },
    {
      period: "2021 - 2023",
      title: "Higher Secondary School [12TH]",
      subtitle: "CBSE Board",
      institution: "D A V Public School Dhori C C L Bokaro Jharkhand",
      grade: "Grade: 88%",
    },
    {
      period: "2020 - 2021",
      title: "Secondary School [10TH]",
      subtitle: "CBSE Board",
      institution: "Rukmini Devi Public School Bokaro Jharkhand",
      grade: "Grade: 91%",
    },
  ],
  projects: [
    {
      title: "UniPulse AI",
      description:
        "A campus intelligence dashboard that analyzes student sentiment, placement trends, festival participation, extracurricular engagement, hostel life, and overall university experience through AI-driven analytics.",
      link: "https://github.com/Virvivek007/unipulse_sentiment_analysis",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tag: "Campus Life & Placement Analytics",
    },
    {
      title: "E-commerce Product Recommendation System",
      description:
        "A recommendation engine designed to improve product discovery and customer engagement using behavioral patterns and personalized suggestions. It mirrors the shopping experience of Amazon and Flipkart with curated product discovery.",
      link: "https://github.com/Virvivek007/E-commerce-Product-Recommendation-system",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      tag: "Order Items List with Product Cards",
    },
    {
      title: "Packed-Food-Fact",
      description:
        "A food literacy web app designed to help users understand nutrition, ingredients, and healthier choices through accessible and engaging content.",
      link: "https://virvivek007.github.io/Packed-Food-Fact/",
      image: "/images/project-3-food.svg",
      tag: "Packed Food",
    },
    {
      title: "IT Company Landing Page",
      description:
        "A modern business landing page focused on brand positioning, service highlights, and conversion-ready UI design for an IT company.",
      link: "https://github.com/Virvivek007/IT-Company-Landing-Page",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      tag: "Placement Drive",
    },
    {
      title: "Netflix Data Analysis using Python",
      description:
        "An exploratory data analysis project that studies Netflix trend patterns, genre popularity, and yearly viewing behavior using Python-based insights.",
      link: "https://github.com/Virvivek007/Netflix_Data_Analysis/blob/main/Netflix_Data_Analytics.ipynb",
      image: "/images/project-5-movies.svg",
      tag: "Netflix • Movies by Genre",
    },
  ],
  strengths: [
    "Data Science",
    "Machine Learning",
    "Python Libraries",
    "SQL",
    "Excel",
    "Data Visualization",
    "Power BI",
    "Tableau",
  ],
};

function App() {
  const [portfolio, setPortfolio] = useState(defaultPortfolio);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const shouldUseApi =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (!shouldUseApi) {
      setPortfolio(defaultPortfolio);
      return;
    }

    fetch("/api/portfolio")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API not available");
        }
        return response.json();
      })
      .then((data) => setPortfolio(data))
      .catch(() => setPortfolio(defaultPortfolio));
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const isLocalDev =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";

      if (!isLocalDev) {
        throw new Error(
          "The contact form requires the backend API to be active in production.",
        );
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Unable to send message.");
      }

      setStatus(result.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(
        error.message || "Something went wrong while sending the message.",
      );
    }
  };

  const { profile, stats, about, experience, education, projects, strengths } =
    portfolio;

  return (
    <div className="portfolio-page">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand">
            <span className="brand-mark">VK</span>
            <span>{profile.name}</span>
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button
              className="theme-toggle"
              onClick={handleThemeToggle}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy-block">
              <span className="eyebrow">Hello! I am</span>
              <h1>{profile.name}</h1>
              <h2>{profile.role}</h2>
              <p>{profile.tagline}</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#projects">
                  My Works
                </a>
                <a className="btn btn-secondary" href={profile.resumeLink}>
                  See Resume
                </a>
              </div>
              <ul className="quick-meta">
                <li>{profile.location}</li>
                <li>{profile.availability}</li>
              </ul>
            </div>

            <div className="profile-panel">
              <div className="profile-badge">Available</div>
              <div className="profile-identity">
                <div className="avatar">VK</div>
                <div>
                  <strong>{profile.name}</strong>
                  <span>{profile.role}</span>
                </div>
              </div>
              <div className="stats-grid">
                {stats.map((item) => (
                  <div key={item.label} className="stat-box">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-head">
            <span className="eyebrow">About</span>
            <h3>About Me</h3>
          </div>
          <div className="container about-grid">
            <div className="about-story">
              <p>{about.story}</p>
            </div>
            <div className="about-details">
              <ul>
                {about.details.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}:</span> <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="container chips-wrap">
            {strengths.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="resume" className="section alt-bg">
          <div className="container section-head">
            <span className="eyebrow">Resume</span>
            <h3>Experience & Education</h3>
          </div>

          <div className="container resume-stack">
            <div className="resume-block">
              <h4>Experience</h4>
              {experience.map((item) => (
                <div
                  key={`${item.period}-${item.title}`}
                  className="timeline-item"
                >
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-content">
                    <h5>{item.title}</h5>
                    <p className="company-name">{item.company}</p>
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-block">
              <h4>Education</h4>
              {education.map((item) => (
                <div
                  key={`${item.period}-${item.title}`}
                  className="timeline-item"
                >
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-content">
                    <h5>{item.title}</h5>
                    <p className="company-name">{item.subtitle}</p>
                    <p>{item.institution}</p>
                    <small>{item.grade}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container section-head">
            <span className="eyebrow">Projects</span>
            <h3>Selected Work</h3>
          </div>
          <div className="container project-carousel-wrap">
            <div className="project-track">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div
                    className="project-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="project-body">
                    <span className="project-tag">{project.tag}</span>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h3>Let’s connect</h3>
            <p>
              Have a project, question, or opportunity? I’d love to hear from
              you.
            </p>
            <ul className="contact-list">
              <li>
                <span>Email</span>{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span>Phone</span>{" "}
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </li>
              <li>
                <span>Location</span> {profile.location}
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your project"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {status ? <p className="status-text">{status}</p> : null}
          </form>
        </div>

        <div className="social-bar container">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.88v9.7H5.5V9.8Zm4.78 0h2.75v1.33h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.38v6.47h-2.88v-6.06c0-1.44-.03-3.3-2.01-3.3-2.02 0-2.33 1.57-2.33 3.2v6.16H10.3V9.8Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M18.9 2h3.66l-7.99 9.13L23.5 22h-7.2l-5.64-8.15L4.04 22H.37l8.55-9.76L.5 2h7.38l5.1 7.46L18.9 2Zm-1.28 18h2.01L7.1 3.9H4.98L17.62 20Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2.1A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm5.13-3.4a1.13 1.13 0 1 1-1.13 1.13 1.13 1.13 0 0 1 1.13-1.13Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 .5A12 12 0 0 0 8.2 23.4c.6.1.8-.3.8-.7v-2.5c-3.4.7-4.1-1.5-4.1-1.5-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.4 3.5 1.1.1-.8.4-1.4.7-1.7-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1.1-.4 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.3-1.6 3.4-1.2 3.4-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .4.2.8.8.7A12 12 0 0 0 12 .5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <div className="footer-bottom container">
          <p>© 2025 Vivek Kumar Tiwari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
