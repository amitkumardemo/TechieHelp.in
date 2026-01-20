import React from 'react';
import { useParams } from 'react-router-dom';
import Particles from '../../Reactsbit/Particles/Particles';
import { FaCheckCircle } from 'react-icons/fa';
import studentData from '../data/interns.js';

const InternProfile = () => {
  const { internId } = useParams();
  const intern = studentData.find(student => student.techieHelpStudentID === internId);

  if (!intern) {
    return <div>Intern data not found.</div>;
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000', color: '#eee', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: '2rem' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', backgroundColor: 'rgba(30,30,30,0.85)', borderRadius: '15px', padding: '2rem', boxShadow: '0 8px 16px rgba(82, 39, 255, 0.6)' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img
            src={intern.profileImage}
            alt={intern.fullName}
            style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #5227FF', marginRight: '1.5rem' }}
          />
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {intern.fullName}
              {intern.verified && <FaCheckCircle color="#4caf50" title="Verified Intern" />}
            </h1>
            <p style={{ margin: '0.25rem 0', fontSize: '1.1rem', color: '#bbb' }}>{intern.internshipDomain}</p>
            <p style={{ margin: '0.25rem 0', fontSize: '1rem', color: '#bbb' }}>{intern.collegeName}</p>
            <p style={{ margin: '0.25rem 0', fontSize: '1rem', color: '#bbb' }}>Batch: {intern.currentYearBatch}</p>
          </div>
        </div>

        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', borderBottom: '2px solid #5227FF', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Contact & Profiles</h2>
          <p>Email: <a href={`mailto:${intern.email}`} style={{ color: '#4caf50' }}>{intern.email}</a></p>
          <p>Phone: {intern.phoneNumber}</p>
          <p>
            LinkedIn: <a href={intern.linkedInProfile} target="_blank" rel="noopener noreferrer" style={{ color: '#4caf50' }}>{intern.linkedInProfile}</a>
          </p>
          <p>
            GitHub: {intern.githubProfile ? (
              <a href={intern.githubProfile} target="_blank" rel="noopener noreferrer" style={{ color: '#4caf50' }}>{intern.githubProfile}</a>
            ) : 'N/A'}
          </p>
          <p>Address: {intern.address}</p>
        </section>

        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', borderBottom: '2px solid #5227FF', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Skills & Quote</h2>
          <p><strong>Skills:</strong> {intern.skills}</p>
          <p><em>"{intern.personalQuote}"</em></p>
        </section>

        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', borderBottom: '2px solid #5227FF', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Documents & Certifications</h2>
          <ul>
            <li><a href={intern.resumeLink || '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#4caf50' }}>Resume</a></li>
            <li><a href={intern.offerLetterLink || '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#4caf50' }}>Offer Letter</a></li>
            <li><a href={intern.completionCertificationsLink || '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#4caf50' }}>Completion Certifications</a></li>
            <li><a href={intern.recommendationLetterLink || '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#4caf50' }}>Recommendation Letter</a></li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', borderBottom: '2px solid #5227FF', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Feedback & Projects</h2>
          <p><strong>Feedback:</strong> {intern.feedback || 'No feedback available.'}</p>
          <p>
            <strong>Projects GitHub Link:</strong> {intern.projectsGitHubLink ? (
              <a href={intern.projectsGitHubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#4caf50' }}>{intern.projectsGitHubLink}</a>
            ) : 'N/A'}
          </p>
        </section>
      </div>
    </div>
  );
};

export default InternProfile;
