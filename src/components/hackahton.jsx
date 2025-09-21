import React, { useState, useEffect } from 'react';
import styles from '../style';
import { winner } from '../assets';

const HackathonLandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-15T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownTimer = () => {
    if (timeLeft.isExpired) {
      return (
        <div className="text-center py-8">
          <div className="text-4xl font-bold text-red-500 mb-2">⛔ Submissions Closed!</div>
          <p className="text-gray-400">The hackathon submission period has ended.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-sm text-blue-200">Days</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-sm text-yellow-200">Hours</div>
        </div>
        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-sm text-red-200">Minutes</div>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-sm text-purple-200">Seconds</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Winner Announcement Hero Section */}
      <section className={`pt-40 pb-16 ${styles.paddingX} relative overflow-hidden bg-gradient-to-br from-yellow-900/30 via-red-900/30 to-blue-900/30`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-red-900/20 to-yellow-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className={`max-w-7xl mx-auto relative z-10`}>
          {/* Winner Announcement at the top */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="mb-6">
  <a
    href="https://drive.google.com/drive/folders/1S1wMC2V4lXcTv35lcwHT5sJpVxQFKsWF?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold px-6 py-2 rounded-full text-sm animate-bounce shadow-lg"
  >
    📄 Download Certificate
  </a>
</div>


            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              🏆 Hackathon 2025 Winner Announcement
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mb-8 animate-pulse"></div>

            <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-5xl mx-auto mb-8 border border-yellow-500/20 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-2xl blur-xl animate-pulse"></div>
                  <img
                    src={winner}
                    alt="Hackathon 2025 Winner Poster"
                    className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-105 animate-pulse border-4 border-gradient-to-r from-yellow-500/50 to-red-500/50"
                  />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full p-3 animate-bounce shadow-lg">
                    <span className="text-2xl">👑</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 animate-pulse shadow-lg">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-yellow-600 to-red-600 rounded-full px-8 py-4 inline-block animate-pulse shadow-lg">
                    <span className="text-white font-bold text-lg">🎉 Congratulations to our InnovateX Hackathon 2025 Winner!</span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-xl p-4 border border-blue-500/20 hover:border-blue-400/40 transition-colors duration-300">
                      <div className="text-2xl mb-2 animate-bounce">🏆</div>
                      <div className="text-yellow-400 font-semibold">1st Place</div>
                      <div className="text-gray-300 text-sm">Champion Winner</div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-xl p-4 border border-green-500/20 hover:border-green-400/40 transition-colors duration-300">
                      <div className="text-2xl mb-2 animate-pulse">💼</div>
                      <div className="text-green-400 font-semibold">Client Selected</div>
                      <div className="text-gray-300 text-sm">Project Implementation</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-300">
                      <div className="text-2xl mb-2 animate-bounce animation-delay-500">💰</div>
                      <div className="text-purple-400 font-semibold">₹1,000 Prize</div>
                      <div className="text-gray-300 text-sm">Cash Reward</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-xl p-6 mt-6 border border-gray-700/50">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400 flex items-center justify-center gap-2">
                      <span className="animate-pulse">🏅</span>
                      Success Story
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-center">
                      This exceptional intern demonstrated outstanding <span className="text-blue-400 font-semibold">innovation</span> and
                      <span className="text-yellow-400 font-semibold"> technical excellence</span>, creating a solution that not only
                      impressed our judges but was also <span className="text-green-400 font-semibold">selected by our clients</span> for
                      real-world implementation. Their project showcases the perfect blend of creativity, technical skill, and
                      practical application that defines a true hackathon champion!
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 cursor-pointer">
                      ✨ Innovation Leader
                    </span>
                    <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer">
                      🎯 Client Approved
                    </span>
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 cursor-pointer">
                      🚀 Future Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center animate-fade-in-up animation-delay-500">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
              🚀 TechieHelp InnovateX Hackathon 2025
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
              Welcome to <span className="text-secondary font-semibold">TechieHelp InnovateX Hackathon 2025</span> – exclusively for our brilliant <span className="text-yellow-400 font-semibold">TechieHelp Interns</span>!
            </p>
            <p className="text-base text-gray-400 mb-8 max-w-3xl mx-auto">
              This hackathon is all about <span className="text-blue-400">creativity, innovation, and problem-solving</span>. It's your chance to showcase your technical expertise and prove your potential.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8 animate-fade-in-up animation-delay-700">
            <h2 className="text-xl font-semibold mb-4 text-white">⏰ Time Remaining Until Submissions Close</h2>
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-1000">
            <a href="https://forms.gle/VChuFZ5cUo2LXvss5" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              👉 Submit Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.paddingY} ${styles.paddingX} bg-gray-900/50`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-white">📌 About the Hackathon</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up animation-delay-300">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                TechieHelp InnovateX Hackathon provides our interns with a platform to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">🎯</span>
                  <span className="text-gray-300">Identify real-world problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">💡</span>
                  <span className="text-gray-300">Build innovative tech-driven solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">🎤</span>
                  <span className="text-gray-300">Present ideas in front of mentors, industry experts, and the TechieHelp team</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Why Participate?</h3>
              <p className="text-gray-300">
                Showcase your skills, network with industry professionals, and potentially turn your idea into a real-world project with TechieHelp's support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rounds & Selection Process */}
      <section className={`${styles.paddingY} ${styles.paddingX}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-white">🏆 Rounds & Selection Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-300">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-xl p-6 text-center border border-blue-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Round 1</h3>
              <h4 className="text-lg font-medium mb-2">Project Submission</h4>
              <p className="text-gray-300 text-sm">10th – 15th September 2025</p>
              <p className="text-gray-400 mt-2">Submit your innovative project ideas and initial prototypes</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 rounded-xl p-6 text-center border border-yellow-500/20">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Round 2</h3>
              <h4 className="text-lg font-medium mb-2">Live Presentation</h4>
              <p className="text-gray-300 text-sm">15th – 19th September 2025</p>
              <p className="text-gray-400 mt-2">Present your project to judges and demonstrate your solution</p>
            </div>

            <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 rounded-xl p-6 text-center border border-red-500/20">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="text-xl font-semibold mb-2 text-red-400">Final Winners</h3>
              <h4 className="text-lg font-medium mb-2">Announcement</h4>
              <p className="text-gray-300 text-sm">20th September 2025</p>
              <p className="text-gray-400 mt-2">Winners announced and prizes distributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Pool & Rewards */}
      <section className={`${styles.paddingY} ${styles.paddingX} bg-gray-900/50`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-white">💰 Prize Pool & Rewards</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="text-center mb-12 animate-fade-in-up animation-delay-300">
            <div className="inline-block bg-gradient-to-r from-yellow-600 to-red-600 rounded-full px-8 py-4 mb-8">
              <span className="text-3xl font-bold text-white">Total Prize Pool: ₹1,000 💸</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up animation-delay-500">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">🏆 Winner Selection Criteria</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">📊</span>
                  <span><strong>Project Selection by Client:</strong> If the idea is chosen for real-world implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">🎯</span>
                  <span><strong>Hackathon Performance:</strong> Innovation, presentation, and impact</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">🎖️ Recognition Includes</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">🏆</span>
                  <span><strong>Winner Certificate & Prize</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">🎖️</span>
                  <span><strong>Certificates of Participation</strong> for all shortlisted interns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">📜</span>
                  <span><strong>Download Certificates:</strong> <a href="https://drive.google.com/drive/folders/1S1wMC2V4lXcTv35lcwHT5sJpVxQFKsWF?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors">Click here to download</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">🌟</span>
                  <span><strong>Feature on TechieHelp Spotlight</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles.paddingY} ${styles.paddingX}`}>
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-white">📧 Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-8"></div>

          <p className="text-lg text-gray-300 mb-8">
            For any queries, reach us at: <span className="text-secondary font-semibold">support@techiehelp.in</span>
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Stay connected with us:</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/techiehelp.in/" className="text-2xl hover:text-blue-400 transition-colors">🌐</a>
              <a href="https://www.youtube.com/@TechieHelp" className="text-2xl hover:text-blue-400 transition-colors">📱</a>
              <a href="mailto:support@techiehelp.in" className="text-2xl hover:text-yellow-400 transition-colors">📧</a>
            </div>
            <div className="mt-4 text-gray-400">
              <p>TechieHelp Website</p>
              <p>Social Media Links</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/50 to-red-900/50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">✨ Let's Innovate, Build, and Succeed — Together!</h3>
            <p className="text-gray-300">
              With <span className="text-yellow-400 font-semibold">TechieHelp InnovateX Hackathon 2025!</span>
            </p>
          </div>

          {/* Final CTA */}
          <a href="https://forms.gle/VChuFZ5cUo2LXvss5" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 via-yellow-600 to-red-600 hover:from-blue-700 hover:via-yellow-700 hover:to-red-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg animate-pulse">
            👉 Submit Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default HackathonLandingPage;
