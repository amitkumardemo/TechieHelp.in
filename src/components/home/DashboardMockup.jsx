import React from 'react';

const DashboardMockup = ({ activeTab }) => {
  return (
    <div className="w-full h-full bg-white dark:bg-[#0a0a0a] flex flex-col font-sans text-sm text-gray-900 dark:text-gray-100 border-t border-gray-200 dark:border-gray-800">
      
      {/* Top Navbar */}
      <div className="flex items-center justify-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] px-8 h-14">
        <div className="flex h-full w-full max-w-4xl justify-between">
          {['AI Inbox', 'Data model', 'Customer Memory', 'Revenue Analytics'].map((tab, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-center h-full px-6 text-sm font-medium cursor-pointer transition-colors ${idx === 2 ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar */}
        <div className="hidden sm:flex flex-col w-56 border-r border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#0a0a0a] py-4 px-3 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center gap-2 px-2 mb-6">
            <div className="w-6 h-6 bg-gray-900 dark:bg-white rounded flex items-center justify-center">
              <span className="text-white dark:text-black text-xs font-bold">L</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">LeadAI Workspace</span>
          </div>

          <div className="text-xs font-medium text-gray-400 dark:text-gray-500 px-2 mb-2 uppercase tracking-wider">Customers</div>
          
          <div className="space-y-0.5">
            {[
              { name: 'Rahul Sharma', initial: 'R', active: true, color: 'bg-indigo-500' },
              { name: 'Priya Desai', initial: 'P', active: false, color: 'bg-emerald-500' },
              { name: 'Sneha Reddy', initial: 'S', active: false, color: 'bg-rose-500' },
            ].map((user, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer ${user.active ? 'bg-gray-200/60 dark:bg-gray-800 font-medium text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center text-[10px] text-white ${user.color}`}>
                  {user.initial}
                </div>
                <span className="text-sm truncate">{user.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white dark:bg-[#0a0a0a] overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Rahul Sharma</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">TechNova Solutions · Founder</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <div className="lg:col-span-1 space-y-6">
                 <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#111] shadow-sm">
                   <div className="flex items-center gap-2 mb-4">
                     <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">Active</span>
                     <span className="text-sm font-medium">Client Overview</span>
                   </div>
                   <div className="space-y-4">
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Spend</div>
                        <div className="text-lg font-medium text-gray-900 dark:text-white">₹1.2L</div>
                      </div>
                      <div className="h-px bg-gray-100 dark:bg-gray-800"></div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Deals Closed</div>
                        <div className="text-lg font-medium text-gray-900 dark:text-white">3</div>
                      </div>
                   </div>
                 </div>
               </div>

               <div className="lg:col-span-2">
                 <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-[#111] shadow-sm h-full">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-6">AI Memory Timeline</h3>
                    
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:w-[2px] before:bg-gray-100 dark:before:bg-gray-800">
                      
                      <div className="relative flex items-start group">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-[#111] border-2 border-[#2e62ff] flex items-center justify-center z-10 mr-4">
                          <div className="w-2 h-2 rounded-full bg-[#2e62ff]"></div>
                        </div>
                        <div className="flex-1 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Replied to workflow automation query</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">2h ago</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">AI Inbox agent automatically sent the case study.</p>
                        </div>
                      </div>

                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
