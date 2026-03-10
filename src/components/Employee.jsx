import React, { useState, useMemo } from 'react';
import DotGrid from './DotGrid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { slugifyEmployee } from '../utils/slugify';
import { adityaKumar, AmitPhoto, ashok, kameshwarPatel, mdAmzad, supriyaJalani, mahimaPanwar, charchitaSaini, mahbubAlam, manchalKumar, ananyaSharma, aryanKumar } from '../assets/index.js';

export const employeeData = [
  {
    id: "TH-CEO-001",
    fullName: "Amit Kumar",
    role: "Founder & CEO",
    profileImage: AmitPhoto,
    linkedInProfile: "https://www.linkedin.com/in/amit-kumar-686196225/",
    githubProfile: "https://github.com/amitkumardemo",
    experience: "2+ Year Experience",
    department: "Leadership"
  },
  {
    id: "TH-EMP-2026-002",
    fullName: "Ananya Sharma",
    role: "HR Manager",
    profileImage: ananyaSharma,
    linkedInProfile: "",
    githubProfile: "",
    experience: "1+ Year Experience",
    department: "HR",
    profilePath: "/employee/ananya-sharma"
  },
  {
    id: "TH-EMP-2025-003",
    fullName: "Aditya Kumar",
    role: "Content & Media Specialist",
    profileImage: adityaKumar,
    linkedInProfile: "https://www.linkedin.com/in/aditya-kumar-40a256291",
    githubProfile: "https://github.com/adityakumr03",
    experience: "1+ Year Experience",
    department: "Content",
    profilePath: "/employee/aditya-kumar"
  },
  {
    id: "TH-EMP-2026-004",
    fullName: "Mahima Panwar",
    role: "Content Creator",
    profileImage: mahimaPanwar,
    linkedInProfile: "",
    githubProfile: "",
    experience: "1+ Year Experience",
    department: "Content",
    profilePath: "/employee/mahima-panwar"
  },
  {
    id: "TH-EMP-2026-005",
    fullName: "Supriya Jalani",
    role: "UI/UX Designer",
    profileImage: supriyaJalani,
    linkedInProfile: "https://www.linkedin.com/in/supriya-jalani",
    githubProfile: "https://github.com/Suprirya-Jalani",
    experience: "1+ Year Experience",
    department: "Design",
    profilePath: "/employee/supriya-jalani"
  },
  {
    id: "TH-EMP-2026-006",
    fullName: "Charchita Saini",
    role: "Software Engineer",
    profileImage: charchitaSaini,
    linkedInProfile: "",
    githubProfile: "",
    experience: "1+ Year Experience",
    department: "Development",
    profilePath: "/employee/charchita-saini"
  },
  {
    id: "TH-EMP-2026-007",
    fullName: "Md Amzad",
    role: "Machine Learning Engineer",
    profileImage: mdAmzad,
    linkedInProfile: "https://www.linkedin.com/in/md-amzad-b8547a296",
    githubProfile: "https://github.com/Md-Amzad-313",
    experience: "1+ Year Experience",
    department: "AI/ML",
    profilePath: "/employee/md-amzad"
  },

  {
    id: "TH-EMP-2026-008",
    fullName: "Mahbub Alam",
    role: "Full Stack Developer",
    profileImage: mahbubAlam,
    linkedInProfile: "",
    githubProfile: "",
    experience: "1+ Year Experience",
    department: "Development",
    profilePath: "/employee/mahbub-alam"
  },
  {
    id: "TH-EMP-2026-009",
    fullName: "Mr. Manchal Kumar",
    role: "Full Stack Developer",
    profileImage: manchalKumar,
    linkedInProfile: "",
    githubProfile: "",
    experience: "1+ Year Experience",
    department: "Development",
    profilePath: "/employee/manchal-kumar",
    objectPosition: "top"
  },
  {
    id: "TH-EMP-2026-010",
    fullName: "Aryan Kumar",
    role: "Cyber Security Intern",
    profileImage: aryanKumar,
    linkedInProfile: "",
    githubProfile: "",
    experience: "1+ Year Experience",
    department: "Security",
    profilePath: "/employee/aryan-kumar"
  },
  {
    id: "TH-INT-2026-001",
    fullName: "Kameshwar Patel",
    role: "Frontend Developer Intern",
    profileImage: kameshwarPatel,
    linkedInProfile: "https://www.linkedin.com/in/patelkameshwar",
    githubProfile: "https://github.com/patelkameshwar",
    experience: "1+ Year Experience",
    department: "Development",
    profilePath: "/employee/kameshwar-patel"
  },
  {
    id: "TH-INT-2026-002",
    fullName: "Ashok",
    role: "Frontend Developer Intern",
    profileImage: ashok,
    linkedInProfile: "https://www.linkedin.com/in/ashok-bishnoi-b19389257",
    githubProfile: "https://github.com/Ashokmaal0051",
    experience: "1+ Year Experience",
    department: "Development",
    profilePath: "/employee/ashok"
  }
];

const Employee = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('All');

  const departments = ['All', 'Leadership', 'Development', 'Design', 'AI/ML', 'Content', 'HR', 'Security', 'Interns'];

  const filteredEmployees = useMemo(() => {
    return employeeData.filter(employee => {
      const matchesSearch = 
        employee.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDepartment = 
        activeDepartment === 'All' || 
        (activeDepartment === 'Interns' ? employee.id.includes('INT') : employee.department === activeDepartment);

      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, activeDepartment]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={2}
          gap={25}
          baseColor="#1e1b4b"
          activeColor="#3b82f6"
          proximity={120}
          shockRadius={180}
          shockStrength={4}
          returnDuration={1.5}
        />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Our Professional Team
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Meet the innovators and experts driving TechieHelp towards the future of AI and Digital Excellence.
            </p>
          </motion.div>

          {/* Controls Section */}
          <div className="flex flex-col gap-8 mb-16">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-2xl mx-auto w-full"
            >
              <input
                type="text"
                placeholder="Search by name, role, or ID (e.g., TH-EMP...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-2xl"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>

            {/* Department Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDepartment(dept)}
                  className={`px-5 py-2 rounded-full border transition-all duration-300 backdrop-blur-md ${
                    activeDepartment === dept
                      ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-blue-500/50 hover:text-white'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredEmployees.map((employee) => (
              <motion.div
                key={employee.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative flex flex-col h-full bg-[#0d0d12]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 overflow-hidden shadow-2xl">
                  {/* Glassmorph Highlight */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-3xl -mr-12 -mt-12 rounded-full"></div>
                  
                  {/* Profile Header */}
                  <div className="relative mb-6 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                      <img
                        src={employee.profileImage}
                        alt={employee.fullName}
                        className="relative w-full h-full rounded-2xl object-cover border-2 border-white/10 group-hover:border-blue-500/50 transition-colors"
                        style={{ objectPosition: employee.objectPosition || 'center' }}
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-lg p-1 shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.607.27 1.154.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{employee.fullName}</h3>
                    <p className="text-blue-500 font-medium text-sm tracking-wider uppercase">{employee.role}</p>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-8 text-sm flex-grow">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-500 uppercase tracking-tighter font-bold">ID</span>
                      <span className="text-gray-300 font-mono bg-white/5 px-2 py-0.5 rounded italic">{employee.id}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-500 uppercase tracking-tighter font-bold">Dept</span>
                      <span className="text-gray-300">{employee.department}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-500 uppercase tracking-tighter font-bold">Experience</span>
                      <span className="text-gray-300 italic">{employee.experience}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-1 gap-3">
                    <Link
                  to={`/team/${slugifyEmployee(employee.fullName, employee.role)}`}
                  className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg text-sm font-bold transition-colors border border-blue-500/20 text-center"
                >
                  View Profile
                </Link>
                    <div className="flex gap-2">
                       <a
                        href={employee.linkedInProfile || '#'}
                        target="_blank"
                        className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs text-center text-gray-400 hover:text-white transition-all uppercase tracking-widest font-bold"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={employee.githubProfile || '#'}
                        target="_blank"
                        className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs text-center text-gray-400 hover:text-white transition-all uppercase tracking-widest font-bold"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredEmployees.length === 0 && (
            <div className="text-center py-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No team members found</h3>
              <p className="text-gray-500">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Employee;
