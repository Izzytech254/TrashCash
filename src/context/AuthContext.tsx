import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USERS: User[] = [
  { id: '1', name: 'John Vendor', email: 'vendor@trashcash.com', role: 'vendor' },
  { id: '2', name: 'Sarah Cleaner', email: 'cleaner@trashcash.com', role: 'cleaner' },
  { id: '3', name: 'Gov Admin', email: 'gov@trashcash.com', role: 'government' },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('trashcash_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(u => u.email === email);
    if (!foundUser) {
      throw new Error('Invalid credentials');
    }
    
    setUser(foundUser);
    localStorage.setItem('trashcash_user', JSON.stringify(foundUser));
    setIsLoading(false);
  };

  const signup = async (name: string, email: string, _password: string, role: UserRole) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role,
    };
    
    setUser(newUser);
    localStorage.setItem('trashcash_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('trashcash_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
