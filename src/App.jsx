import { useEffect, useState } from 'react';

const defaultPortfolio = {
  profile: {
    name: 'Vivek Kumar Tiwari',
    role: 'Aspiring Data Scientist',
    tagline: 'Data Analyst with a strong interest in data science, machine learning, and business insights.',
    email: 'vkt.vivek007@gmail.com',
    phone: '+91 1020304050',
    location: 'Bihar, India',
    availability: 'Open to internships and opportunities',
    resumeLink: 'IIT_Patna_Resume.pdf',
    github: 'https://github.com/Virvivek007',
    linkedin: 'https://www.linkedin.com/in/vivek-kumar-tiwari-9806b2299',
    youtube: 'https://youtube.com/@vivekcodex?si=ryTWKOes0PoRVoLm',
    twitter: 'https://x.com/vkt_tiwari?t=vFwRdOhczXoN7LvfEQBUng&s=09',
    facebook: 'https://www.facebook.com/vir.vivek.3',
    instagram: 'https://www.instagram.com/vivek_vir_007?igsh=Ymo1a3ZkNnBiOHE3/'
  },
  stats: [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Achievements', value: '20' },
    { label: 'Mentored Students', value: '100' },
    { label: 'LinkedIn Followers', value: '1175' }
  ],
  about: {
    story: 'With over a year of comprehensive experience in the field of data science and analytics, accompanied by a bachelor\'s degree in engineering. Proficient in data analysis, statistical analysis, hypothesis testing, customer behaviour analysis, and machine learning. Demonstrated success in leading impactful projects and providing effective mentorship.',
    details: [
      { label: 'Profile', value: 'Data Science & Analytics' },
      { label: 'Domain', value: 'Data Scientist & Machine Learning Engineer' },
      { label: 'Education', value: 'Bachelor of Technology' },
      { label: 'Language', value: 'English, Hindi' },
      { label: 'BI Tools', value: 'Microsoft Power BI & Tableau' },
      { label: 'Skills', value: 'Python, Python Libraries, Excel, Git, SQL, C, HTML5, CSS & JS' },
      { label: 'Interest', value: 'Travelling, Singing, Teaching, Playing Volleyball and Chess' }
    ],
    strengths: ['SQL', 'Python', 'Data Visualization', 'Statistical Analysis', 'Machine Learning', 'Power BI']
  },
  experience: [
    {
      period: '2025 - Present',
      title: 'Website Development Intern',
      company: 'Edunet Foundation',
      details: 'Built a MERN stack website addressing real-world problems. The internship sharpened my skills in user-friendly design, performance optimization, and scalable solutions.'
    }
  ],
  education: [
    {
      period: '2023 - 2027',
      title: 'Bachelor of Technology',
      subtitle: 'Computer Science and Engineering',
      institution: 'Katihar Engineering College, Katihar',
      grade: 'Grade: First class distinction.'
    },
    {
      period: '2023 - 2026',
      title: 'Bachelor of Science [Hons]',
      subtitle: 'Computer Science and Data Analytics',
      institution: 'Indian Institute Of Technology, Patna',
      grade: 'Grade: First class distinction.'
    },
    {
      period: '2021 - 2023',
      title: 'Higher Secondary School [12TH]',
      subtitle: 'CBSE Board',
      institution: 'D A V Public School Dhori C C L Bokaro Jharkhand',
      grade: 'Grade: First class distinction.'
    },
    {
      period: '2020 - 2021',
      title: 'Secondary School [10TH]',
      subtitle: 'CBSE Board',
      institution: 'Rukmini Devi Public School Bokaro Jharkhand',
      grade: 'Grade: First class distinction.'
    }
  ],
  projects: [
    {
      title: 'UniPulse AI',
      description: 'A full-stack AI platform that scrapes Reddit communities, analyzes student sentiment with NLP and ML, and presents insights through a polished dashboard for smarter community understanding.',
      link: 'https://github.com/Virvivek007/unipulse_sentiment_analysis',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80',
      tag: 'AI / NLP'
    },
    {
      title: 'E-commerce Product Recommendation System',
      description: 'A recommendation engine designed to improve product discovery and customer engagement using behavioral patterns and personalized suggestions.',
      link: 'https://github.com/Virvivek007/E-commerce-Product-Recommendation-system',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
      tag: 'Recommendation'
    },
    {
      title: 'Packed-Food-Fact',
      description: 'A food literacy web app designed to help users understand nutrition, ingredients, and healthier choices through accessible and engaging content.',
      link: 'https://virvivek007.github.io/Packed-Food-Fact/',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
      tag: 'Food Tech'
    },
    {
      title: 'IT Company Landing Page',
      description: 'A modern business landing page focused on brand positioning, service highlights, and conversion-ready UI design for an IT company.',
      link: 'https://github.com/Virvivek007/IT-Company-Landing-Page',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      tag: 'Web Design'
    },
    {
      title: 'Netflix Data Analysis using Python',
      description: 'An exploratory data analysis project that studies Netflix trend patterns, genre popularity, and yearly viewing behavior using Python-based insights.',
      link: 'https://github.com/Virvivek007/Netflix_Data_Analysis/blob/main/Netflix_Data_Analytics.ipynb',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
      tag: 'Data Analysis'
    }
  ],
  strengths: [
    'Data Science',
    'Machine Learning',
    'Python Libraries',
    'SQL',
    'Excel',
    'Data Visualization',
    'Power BI',
    'Tableau'
  ]
};

function App() {
  const [portfolio, setPortfolio] = useState(defaultPortfolio);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const shouldUseApi =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';

    if (!shouldUseApi) {
      setPortfolio(defaultPortfolio);
      return;
    }

    fetch('/api/portfolio')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API not available');
        }
        return response.json();
      })
      .then((data) => setPortfolio(data))
      .catch(() => setPortfolio(defaultPortfolio));
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      const isLocalDev =
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1';

      if (!isLocalDev) {
        throw new Error('The contact form requires the backend API to be active in production.');
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Unable to send message.');
      }

      setStatus(result.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(error.message || 'Something went wrong while sending the message.');
    }
  };

  const { profile, stats, about, experience, education, projects, strengths } = portfolio;

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
            <button className="theme-toggle" onClick={handleThemeToggle} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
              {theme === 'dark' ? '☀️' : '🌙'}
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
                <a className="btn btn-primary" href="#projects">My Works</a>
                <a className="btn btn-secondary" href={profile.resumeLink}>See Resume</a>
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
                  <li key={item.label}><span>{item.label}:</span> <strong>{item.value}</strong></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="container chips-wrap">
            {strengths.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
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
                <div key={`${item.period}-${item.title}`} className="timeline-item">
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
                <div key={`${item.period}-${item.title}`} className="timeline-item">
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
                  <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
                  <div className="project-body">
                    <span className="project-tag">{project.tag}</span>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
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
            <p>Have a project, question, or opportunity? I’d love to hear from you.</p>
            <ul className="contact-list">
              <li><span>Email</span> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><span>Phone</span> <a href={`tel:${profile.phone}`}>{profile.phone}</a></li>
              <li><span>Location</span> {profile.location}</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Tell me about your project" value={formData.message} onChange={handleChange} required />
            <button type="submit" className="btn btn-primary">Send Message</button>
            {status ? <p className="status-text">{status}</p> : null}
          </form>
        </div>

        <div className="social-bar container">
          <a href={profile.youtube} target="_blank" rel="noreferrer">YouTube</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.twitter} target="_blank" rel="noreferrer">Twitter</a>
          <a href={profile.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={profile.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
