import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import { Briefcase, BookOpen, User, Menu, X, BrainCircuit, LayoutDashboard, FileText, Settings, ShieldAlert, LogOut, LogIn, Twitter, Linkedin, Github, Youtube, Gamepad2, Lock } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';

export function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDeveloper, toggleDeveloperMode, isAuthenticated, user, logout } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/home', icon: LayoutDashboard },
    { name: 'Learning & Books', path: '/learning', icon: BookOpen },
    { name: 'Live Jobs', path: '/jobs', icon: Briefcase },
    { name: 'AI Interview', path: '/mock-interview', icon: BrainCircuit },
    { name: 'Interview Games', path: '/games', icon: Gamepad2 },
    { name: 'Resume', path: '/resume-tools', icon: FileText },
  ];

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* Dev Mode Banner (For demonstration purposes) */}
      <div className="bg-slate-900 text-white text-xs py-1 px-4 flex justify-between items-center z-[60]">
        <span>Current Mode: {isDeveloper ? '👨‍💻 Developer (All Access + Admin)' : '👤 Normal User (Paywalled)'}</span>
        <button 
          onClick={toggleDeveloperMode}
          className="bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded-full font-medium transition"
        >
          Toggle Role
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/home" className="flex items-center gap-2 text-xl font-bold text-indigo-600">
                <BrainCircuit className="w-6 h-6" />
                <span>CareerSphere AI</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname.startsWith(link.path);
                
                // Determine if this route is a premium route
                const isPremiumRoute = !['/home', '/jobs', '/dashboard', '/pricing'].includes(link.path);
                const { hasPremiumAccess } = useAuth();
                const showLock = isPremiumRoute && !hasPremiumAccess();

                return (
                  <Link
                    key={link.path}
                    to={showLock ? '/pricing' : link.path}
                    className={cn(
                      "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-indigo-600 relative",
                      isActive ? "text-indigo-600" : "text-slate-600"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                    {showLock && (
                      <span className="ml-1 inline-flex items-center justify-center bg-slate-100 rounded-full p-0.5">
                        <Lock className="w-3 h-3 text-slate-400" />
                      </span>
                    )}
                  </Link>
                );
              })}
              
              {isDeveloper && (
                 <Link
                 to="/admin"
                 className="flex items-center gap-1.5 text-sm font-bold text-rose-600 hover:text-rose-700"
               >
                 <Settings className="w-4 h-4" />
                 Admin
               </Link>
              )}

              {isAuthenticated ? (
                <div className="flex items-center gap-4 border-l border-slate-200 pl-6 ml-2">
                  <Link 
                    to="/dashboard" 
                    className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-100 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    {user?.name || 'Dashboard'}
                  </Link>
                  <button onClick={handleLogout} className="text-slate-500 hover:text-red-600 transition-colors">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4 border-l border-slate-200 pl-6 ml-2">
                  <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                    Login
                  </Link>
                  <Link to="/register" className="text-sm font-semibold bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname.startsWith(link.path);
                
                // Determine if this route is a premium route
                const isPremiumRoute = !['/home', '/jobs', '/dashboard', '/pricing'].includes(link.path);
                const { hasPremiumAccess } = useAuth();
                const showLock = isPremiumRoute && !hasPremiumAccess();

                return (
                  <Link
                    key={link.path}
                    to={showLock ? '/pricing' : link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium",
                      isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {link.name}
                    {showLock && (
                      <span className="ml-auto inline-flex items-center justify-center bg-slate-100 rounded-full p-1">
                        <Lock className="w-4 h-4 text-slate-400" />
                      </span>
                    )}
                  </Link>
                );
              })}
              {isDeveloper && (
                <Link
                  to="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-bold text-rose-600 hover:bg-rose-50"
                >
                  <Settings className="w-5 h-5" />
                  Admin
                </Link>
              )}
              
              <div className="border-t border-slate-100 mt-2 pt-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50"
                    >
                      <User className="w-5 h-5" />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                      className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50"
                    >
                      <LogIn className="w-5 h-5" />
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100"
                    >
                      <User className="w-5 h-5" />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-auto pt-16 pb-8 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <Link to="/home" className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                <BrainCircuit className="w-6 h-6 text-indigo-400" />
                <span>CareerSphere AI</span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Your AI-powered ecosystem for learning, job preparation, mock interviews, and career growth. Accelerate your professional journey today.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Platform</h3>
              <ul className="space-y-3">
                <li><Link to="/home" className="text-sm hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="text-sm hover:text-white transition-colors">Pricing & Plans</Link></li>
                <li><Link to="/jobs" className="text-sm hover:text-white transition-colors">Live Job Board</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/learning" className="text-sm hover:text-white transition-colors">Learning & Books</Link></li>
                <li><Link to="/mock-interview" className="text-sm hover:text-white transition-colors">AI Mock Interview</Link></li>
                <li><Link to="/resume-tools" className="text-sm hover:text-white transition-colors">ATS Resume Builder</Link></li>
                <li><Link to="/ai-assistant" className="text-sm hover:text-white transition-colors">Career Assistant</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
              <ul className="space-y-3">
                <li className="text-sm">
                  <a href="mailto:support@careersphere.ai" className="hover:text-white transition-colors">support@careersphere.ai</a>
                </li>
                <li className="text-sm">
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                </li>
                <li><Link to="/contact" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">Contact Support Team &rarr;</Link></li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} CareerSphere AI Technologies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Refund Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
