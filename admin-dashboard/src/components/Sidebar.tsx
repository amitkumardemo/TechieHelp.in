import { LayoutDashboard, Users, Award, Settings } from "lucide-react";

export function Sidebar() {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: false },
    { name: "Students", icon: Users, active: true },
    { name: "Certificates", icon: Award, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen hidden md:flex flex-col sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <span className="text-xl font-bold text-primary-600">TechieHelp Admin</span>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              item.active
                ? "bg-primary-50 text-primary-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}
