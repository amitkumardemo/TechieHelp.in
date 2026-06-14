const fs = require('fs');

const path = "c:\\Users\\adity\\TechieHelp.in\\src\\components\\solutions\\LeadAIDashboard.jsx";
let content = fs.readFileSync(path, 'utf-8');

// 1. Import Menu from lucide-react if not present
if (!content.includes('Menu,') && !content.includes('Menu }') && !content.includes('  Menu\n} from "lucide-react"')) {
  content = content.replace(/} from "lucide-react";/, '  Menu,\n} from "lucide-react";');
}

// Ensure state is added
if (!content.includes('const [isMobileMenuOpen')) {
  content = content.replace('const [activeTab, setActiveTab] = useState("overview");', 'const [activeTab, setActiveTab] = useState("overview");\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);');
}

// 2. Add Mobile Backdrop and modify left Sidebar
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

// 3. Add Hamburger Button to Top Bar
// Find the <main> tag and the first <div> inside it which is the Top Bar
const mainRegex = /<main className="flex-1 overflow-y-auto scrollbar-hide flex flex-col relative bg-\[#05050a\]">([\s\S]*?)<div className="p-6 md:p-8 flex-1 flex flex-col">/m;
const topBarMatch = content.match(mainRegex);
if (topBarMatch) {
  // Inject Hamburger button at the very beginning of the <main> content if not already there
  if (!content.includes('onClick={() => setIsMobileMenuOpen(true)}')) {
    const replacement = `<main className="flex-1 overflow-y-auto scrollbar-hide flex flex-col relative bg-[#05050a]">
          {/* Mobile Header Bar */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/[0.05] bg-[#05050a]/90 sticky top-0 z-30">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-[#38bdf8] to-[#6366f1] flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-sm text-white tracking-tight">LeadAI</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 bg-white/[0.05] border border-white/[0.05] rounded-lg text-gray-300 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 md:p-6 lg:p-8 flex-1 flex flex-col">`;
    content = content.replace(/<main className="flex-1 overflow-y-auto scrollbar-hide flex flex-col relative bg-\[#05050a\]">\s*<div className="p-6 md:p-8 flex-1 flex flex-col">/, replacement);
  }
}

// 4. Update the RIGHT Sidebar to be hidden on mobile/tablet (only show on xl screens)
const rightSidebarRegex = /<aside className="w-80 bg-\[#05050a\]\/60 backdrop-blur-2xl p-6 h-screen overflow-y-auto scrollbar-hide flex flex-col justify-between shrink-0">/;
content = content.replace(rightSidebarRegex, '<aside className="w-80 bg-[#05050a]/60 backdrop-blur-2xl p-6 h-screen overflow-y-auto scrollbar-hide flex flex-col justify-between shrink-0 hidden xl:flex">');

// 5. Responsive Grids
content = content.replace(/grid-cols-4/g, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4');
content = content.replace(/grid-cols-3/g, 'grid-cols-1 md:grid-cols-3');
content = content.replace(/grid-cols-2/g, 'grid-cols-1 md:grid-cols-2');
content = content.replace(/flex gap-4 mb-6/g, 'flex flex-col md:flex-row gap-4 mb-6'); // Filters wrap
content = content.replace(/flex gap-4 border-b/g, 'flex gap-4 border-b overflow-x-auto scrollbar-hide whitespace-nowrap'); // Tabs scroll horizontally

// 6. Fix GmailInbox fixed height container inside LeadAIDashboard
content = content.replace(/style={{ height: "calc\(100vh - 180px\)" }}/g, 'className="flex-1 min-h-[600px] lg:h-[calc(100vh-180px)]"');

fs.writeFileSync(path, content);
console.log('LeadAIDashboard.jsx refactored successfully.');
