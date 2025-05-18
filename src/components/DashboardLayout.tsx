
import React, { ReactNode } from "react";
import { Home, Camera, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
}

const NavItem = ({ icon: Icon, label, to, active = false }: NavItemProps) => {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate(to)}
      className={cn(
        "flex flex-col items-center justify-center p-2 rounded-lg transition-all",
        active 
          ? "text-primary" 
          : "text-gray-500 hover:text-primary hover:bg-primary-50"
      )}
    >
      <Icon size={24} />
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
        <Logo />
        {title && (
          <h1 className="text-lg font-semibold text-gray-800 hidden md:block">{title}</h1>
        )}
        <div className="w-10"></div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* Navigation */}
      <nav className="bg-white border-t border-gray-200 py-2 px-6">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          <NavItem 
            icon={Home}
            label="Home"
            to="/dashboard"
            active={pathname === "/dashboard"}
          />
          <NavItem 
            icon={Camera}
            label="Scan"
            to="/scan"
            active={pathname === "/scan"}
          />
          <NavItem 
            icon={ShoppingBag}
            label="Grocery"
            to="/grocery"
            active={pathname === "/grocery"}
          />
          <NavItem 
            icon={User}
            label="Profile"
            to="/profile"
            active={pathname === "/profile"}
          />
        </div>
      </nav>
    </div>
  );
};

export default DashboardLayout;
