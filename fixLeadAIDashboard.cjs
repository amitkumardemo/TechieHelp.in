const fs = require('fs');
const path = require('path');

const originalPath = "c:\\Users\\adity\\TechieHelp.in\\src\\components\\solutions\\QualifyAIDashboard.jsx";
const targetPath = "c:\\Users\\adity\\TechieHelp.in\\src\\components\\solutions\\LeadAIDashboard.jsx";

// 1. Copy fresh QualifyAIDashboard.jsx
let content = fs.readFileSync(originalPath, 'utf-8');

// 2. Apply refactor.cjs logic (Brand update)
content = content.replace(/QualifyAI/g, 'LeadAI');
content = content.replace(/qualifyai/g, 'leadai');
content = content.replace(/bg-\[#33bbcf\]/g, 'bg-[#38bdf8]');
content = content.replace(/text-\[#33bbcf\]/g, 'text-[#38bdf8]');
content = content.replace(/border-\[#33bbcf\]/g, 'border-[#38bdf8]');

// 3. Apply refactorDashboard.cjs logic (Responsive update)
// Fix the DollarSign import missing comma
content = content.replace(/DollarSign[\s\S]*?\} from "lucide-react";/, 'DollarSign,\n  Menu\n} from "lucide-react";');

// Ensure state is added
if (!content.includes('const [isMobileMenuOpen')) {
  content = content.replace('const [activeTab, setActiveTab] = useState("overview");', 'const [activeTab, setActiveTab] = useState("overview");\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);');
}

// Add Mobile Backdrop and modify left Sidebar
const sidebarRegex = /<aside className="w-64 border-r border-white\/\[0\.06\] bg-\[#05050a\]\/90 backdrop-blur-2xl flex flex-col justify-between h-screen shrink-0 sticky top-0">/;
const newSidebar = `{/* Mobile Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* SIDEBAR NAVIGATION */}
        <aside className={\`w-64 border-r border-white/[0.06] bg-[#05050a]/90 backdrop-blur-2xl flex flex-col justify-between h-screen shrink-0 fixed lg:sticky top-0 z-50 transition-transform duration-300 ease-in-out \${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}\`}>`;
content = content.replace(sidebarRegex, newSidebar);

// Add Hamburger Button to Top Bar
const headerRegex = /<header className="sticky top-0 bg-\[#030307\]\/70 backdrop-blur-md z-40 border-b border-white\/\[0\.05\] py-4 px-8 flex items-center justify-between">/m;
content = content.replace(headerRegex, `<header className="sticky top-0 bg-[#030307]/70 backdrop-blur-md z-40 border-b border-white/[0.05] py-4 px-4 md:px-8 flex items-center justify-between">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden mr-3 p-2 bg-white/[0.05] border border-white/[0.05] rounded-lg text-gray-300 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>`);

// Update the RIGHT Sidebar to be hidden on mobile/tablet (only show on xl screens)
const rightSidebarRegex = /<aside className="w-80 bg-\[#05050a\]\/60 backdrop-blur-2xl p-6 h-screen overflow-y-auto scrollbar-hide flex flex-col justify-between shrink-0">/;
content = content.replace(rightSidebarRegex, '<aside className="w-80 bg-[#05050a]/60 backdrop-blur-2xl p-6 h-screen overflow-y-auto scrollbar-hide hidden xl:flex flex-col justify-between shrink-0">');

// Responsive Grids
content = content.replace(/grid-cols-4/g, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4');
content = content.replace(/grid-cols-3/g, 'grid-cols-1 md:grid-cols-3');
content = content.replace(/grid-cols-2/g, 'grid-cols-1 md:grid-cols-2');
content = content.replace(/flex gap-4 mb-6/g, 'flex flex-col md:flex-row gap-4 mb-6'); // Filters wrap
content = content.replace(/flex gap-4 border-b/g, 'flex gap-4 border-b overflow-x-auto scrollbar-hide whitespace-nowrap'); // Tabs scroll horizontally

// Fix GmailInbox fixed height container inside LeadAIDashboard
content = content.replace(/style={{ height: "calc\(100vh - 180px\)" }}/g, 'className="flex-1 min-h-[600px] lg:h-[calc(100vh-180px)]"');

// Re-apply admin bypass for @techiehelp.in
content = content.replace(
  `    const workspaceId = userProfile?.workspaceId;\n    if (!workspaceId) {\n      alert("Action failed: No active workspace found for your account.");\n      return;\n    }`,
  `    let workspaceId = userProfile?.workspaceId;\n    if (!workspaceId) {\n      if (userProfile?.role === 'admin' || user?.email?.toLowerCase().endsWith('@techiehelp.in')) {\n        workspaceId = 'admin_workspace';\n      } else {\n        alert("Action failed: No active workspace found for your account.");\n        return;\n      }\n    }`
);

content = content.replace(
  `    const workspaceId = userProfile?.workspaceId;\n    if (!workspaceId) {\n      alert("Action failed: No active workspace found for your account. If you are an admin, please create or join a workspace to connect integrations.");\n      return;\n    }`,
  `    let workspaceId = userProfile?.workspaceId;\n    if (!workspaceId) {\n      if (userProfile?.role === 'admin' || user?.email?.toLowerCase().endsWith('@techiehelp.in')) {\n        workspaceId = 'admin_workspace';\n      } else {\n        alert("Action failed: No active workspace found for your account. If you are an admin, please create or join a workspace to connect integrations.");\n        return;\n      }\n    }`
);

fs.writeFileSync(targetPath, content);
console.log('Successfully fully refactored LeadAIDashboard.jsx');
