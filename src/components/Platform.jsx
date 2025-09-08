import React from 'react';
import {
  FaDesktop,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaRobot,
  FaGlasses,
  FaVrCardboard,
} from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { useState, useRef, useEffect } from 'react';

const platforms = [
  { name: 'Design', icon: <MdDesignServices />, category: 'design' },
  { name: 'Frontend', icon: <FaDesktop />, category: 'frontend' },
  { name: 'Mobile', icon: <FaMobileAlt />, category: 'mobile' },
  { name: 'Desktop', icon: <FaDesktop />, category: 'desktop' },
  { name: 'Backend', icon: <FaServer />, category: 'backend' },
  { name: 'Server', icon: <FaServer />, category: 'server' },
  { name: 'Database', icon: <FaDatabase />, category: 'database' },
  { name: 'Security & Auth', icon: <FaRobot />, category: 'auth' },
  { name: 'Payments & API', icon: <FaGlasses />, category: 'api' },
  { name: 'Testing & Optimization', icon: <FaVrCardboard />, category: 'testing' },
  { name: 'DevOps & Deployment', icon: <FaServer />, category: 'devops' },
  { name: 'AI & ML', icon: <FaRobot />, category: 'ai' },
  { name: 'Analytics & Insights', icon: <FaGlasses />, category: 'analytics' },
  { name: 'Voice & Vision AI', icon: <FaVrCardboard />, category: 'vision' },
];

const platformDetails = {
  design: ['Figma', 'Adobe XD', 'Appsmith', 'Retool', 'Storybook', 'Webflow', 'InVision', 'Canva'],
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java (Android)'],
  desktop: ['Electron.js', 'JavaFX'],
  backend: ['Node.js', 'Express.js', 'Python (Django/Flask)', 'PHP', 'Java (Spring Boot)', 'FastAPI', 'Socket.io'],
  server: ['Nginx', 'Apache', 'Google Cloud Platform', 'AWS', 'Azure', 'DigitalOcean', 'Cloudflare'],
  database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase', 'SQLite', 'BigQuery', 'Redis'],
  auth: ['Firebase Auth', 'Auth0', 'JWT', 'OAuth 2.0', 'reCAPTCHA', 'Magic Link'],
  api: ['REST APIs', 'GraphQL', 'Razorpay', 'Stripe', 'PayPal', 'Google Maps API', 'YouTube API', 'OpenAI API'],
  testing: ['Jest', 'Cypress', 'Postman', 'Swagger', 'Lighthouse', 'PageSpeed Insights', 'Selenium'],
  devops: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Docker', 'Netlify', 'Vercel', 'Render', 'Heroku', 'Jenkins'],
  ai: ['OpenAI GPT-4', 'LangChain', 'Rasa', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'Transformers', 'Gradio'],
  analytics: ['Power BI', 'Tableau', 'Google Analytics', 'Looker Studio', 'Pandas', 'Matplotlib'],
  vision: ['OpenCV', 'YOLOv5', 'Whisper', 'Coqui TTS', 'Google TTS', 'Mozilla TTS', 'ElevenLabs', 'SpeechRecognition'],
};

const Platforms = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCategory]);

  return (
    <section className="py-16 text-white px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">Platforms We Use</h2>
      <p className="text-center mb-12 text-gray-300 text-lg">
        Powering modern development with secure, scalable, and AI-driven technologies.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
        {platforms.map(({ name, icon, category }, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(category)}
            className="flex items-center space-x-3 bg-[#101827] p-4 rounded-lg shadow hover:shadow-blue-500 transition-shadow cursor-pointer"
          >
            <span className="text-blue-600 w-6 h-6">{icon}</span>
            <span className="text-white font-medium">{name}</span>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div ref={detailsRef} className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-blue-400 capitalize mb-6">
            {selectedCategory.replace(/&/g, 'and')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platformDetails[selectedCategory].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1e293b] text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Platforms;
