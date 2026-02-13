import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Trash2, LogOut, LayoutDashboard, Wallet, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const publicLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/business', label: 'Business' },
    { to: '/cleaners', label: 'Cleaners' },
  ];

  const privateLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/report', label: 'Report Bin', icon: AlertCircle },
    { to: '/payments', label: 'Payments', icon: Wallet },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">TrashCash</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {!isAuthenticated ? (
              <>
                {publicLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.to)
                        ? 'text-primary-500'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            ) : (
              <>
                {privateLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                        isActive(link.to)
                          ? 'text-primary-500'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500"
                >
                  Login
                </Link>
                <Link to="/signup" className="btn-primary text-sm py-2 px-4">
                  Get Started
                </Link>
              </div>
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-4 space-y-3">
            {!isAuthenticated ? (
              <>
                {publicLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-sm font-medium ${
                      isActive(link.to)
                        ? 'text-primary-500'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            ) : (
              <>
                {privateLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 py-2 text-sm font-medium ${
                        isActive(link.to)
                          ? 'text-primary-500'
                          : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </>
            )}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-sm text-red-500"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-gray-600 dark:text-gray-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary text-sm py-2 px-4"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
