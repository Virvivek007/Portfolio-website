import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const portfolioData = {
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

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error.message));
}

app.get('/api/portfolio', (_req, res) => {
  res.json(portfolioData);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please complete all fields before sending your message.' });
  }

  return res.status(200).json({
    success: true,
    message: 'Thanks for reaching out. Your message has been received successfully.'
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
