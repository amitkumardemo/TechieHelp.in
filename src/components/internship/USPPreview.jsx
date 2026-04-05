import React from "react";
import { motion } from "framer-motion";
import { ListTodo, Calendar, BookOpen, Award, LayoutDashboard, Bell, Search, User } from "lucide-react";

const USPPreview = () => {
  return (
    <section className="py-24 bg-primary px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-bold mb-6"
            >
              Exclusive Feature
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              FREE Access to <span className="text-gradient">TechieHelp Institute of AI</span> Platform
            </motion.h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Experience a real corporate environment with our AI-powered internship system. Manage tasks, track attendance, and get certified—all in one place.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                { icon: <ListTodo className="w-5 h-5 text-blue-400" />, text: "Task Management" },
                { icon: <Calendar className="w-5 h-5 text-purple-400" />, text: "Attendance Tracking" },
                { icon: <BookOpen className="w-5 h-5 text-green-400" />, text: "LMS Modules" },
                { icon: <Award className="w-5 h-5 text-yellow-400" />, text: "E-Certificates" },
                { icon: <LayoutDashboard className="w-5 h-5 text-red-400" />, text: "Leaderboard" },
                { icon: <Bell className="w-5 h-5 text-pink-400" />, text: "Announcements" }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-white font-medium group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  {item.text}
                </motion.li>
              ))}
            </ul>
            <p className="mt-12 text-sm text-gray-500 font-medium italic underline decoration-blue-500/20 underline-offset-4">
              "Work like a real employee using our AI-powered internship system"
            </p>
          </div>

          <div className="flex-1 relative">
            {/* Mock Dashboard UI */}
            <motion.div
              initial={{ opacity: 0, rotateY: 20, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full max-w-2xl bg-[#0a0a0f] rounded-24 md:rounded-32 p-4 md:p-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 perspective-1000"
            >
              {/* Sidebar Mock */}
              <div className="flex gap-4 min-h-[400px]">
                <div className="w-12 md:w-16 h-full flex flex-col items-center gap-6 py-4 border-r border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold font-poppins">T</div>
                  {[LayoutDashboard, ListTodo, BookOpen, Calendar, Award].map((Icon, i) => (
                    <Icon key={i} className={`w-5 h-5 ${i === 1 ? 'text-blue-400' : 'text-gray-600'}`} />
                  ))}
                </div>
                
                {/* Content Mock */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Search className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="text-xs text-gray-600 hidden md:inline">Quick search...</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Bell className="w-5 h-5 text-gray-500" />
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20">
                        <User className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] font-bold text-white">Student ID: TECHIE-403</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] text-gray-500 mb-1">Total Tasks</p>
                      <p className="text-2xl font-bold text-white font-poppins">12/15</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10">
                      <p className="text-[10px] text-gray-500 mb-1">Current Progress</p>
                      <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '80%' }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-blue-500" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-bold text-gray-400 mb-2">Upcoming Tasks</p>
                    {[1, 2].map((i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-orange-500' : 'bg-blue-500'}`} />
                          <p className="text-xs text-white font-medium">Task {i === 1 ? '7: API Integration' : '8: Deploy to Production'}</p>
                        </div>
                        <span className="text-[10px] text-gray-500 px-2 py-1 rounded bg-white/5">0d left</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-12 -right-12 w-32 h-32 bg-blue-600/20 blur-3xl -z-10"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-600/20 blur-3xl -z-10"
              />
            </motion.div>

            {/* Platform Badge Overlay */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 md:right-10 bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-3xl shadow-2xl text-white border-2 border-white/20"
            >
              <p className="text-2xl font-black italic font-poppins tracking-tighter mb-1">TECHIEHELP</p>
              <p className="text-[10px] uppercase tracking-[4px] font-bold opacity-80">Institute of AI</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPPreview;
