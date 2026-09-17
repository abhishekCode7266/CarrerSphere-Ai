import React, { createContext, useContext, useState, useEffect } from 'react';

type SubscriptionPlan = 'none' | '1_month' | '3_months' | '6_months' | 'free_trial';

export interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  careerGoal?: string;
  branch?: string;
  educationLevel?: string;
  college?: string;
  passingYear?: string;
  skills?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  isDeveloper: boolean;
  subscription: SubscriptionPlan;
  trialExpiresAt: number | null;
}

interface AuthContextType extends AuthState {
  login: (email: string) => void;
  register: (name: string, email: string) => void;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  toggleDeveloperMode: () => void;
  setSubscription: (plan: SubscriptionPlan) => void;
  startFreeTrial: () => void;
  hasPremiumAccess: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>(() => {
    const saved = localStorage.getItem('careersphere_auth_v2');
    if (saved) return JSON.parse(saved);
    return { 
      isAuthenticated: false,
      user: null,
      isDeveloper: false, 
      subscription: 'none', 
      trialExpiresAt: null 
    };
  });

  useEffect(() => {
    localStorage.setItem('careersphere_auth_v2', JSON.stringify(state));
  }, [state]);

  const login = (email: string) => {
    setState(prev => ({
      ...prev,
      isAuthenticated: true,
      user: prev.user || { name: 'User', email }
    }));
  };

  const register = (name: string, email: string) => {
    setState(prev => ({
      ...prev,
      isAuthenticated: true,
      user: { name, email, careerGoal: 'Not specified', branch: 'Not specified' }
    }));
  };

  const logout = () => {
    setState(prev => ({
      ...prev,
      isAuthenticated: false,
      user: null,
      subscription: 'none',
      isDeveloper: false
    }));
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    setState(prev => ({
      ...prev,
      user: prev.user ? { ...prev.user, ...data } : null
    }));
  };

  const toggleDeveloperMode = () => {
    setState(prev => ({ ...prev, isDeveloper: !prev.isDeveloper }));
  };

  const setSubscription = (plan: SubscriptionPlan) => {
    setState(prev => ({ ...prev, subscription: plan }));
  };

  const startFreeTrial = () => {
    setState(prev => ({
      ...prev,
      subscription: 'free_trial',
      trialExpiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
    }));
  };

  const hasPremiumAccess = () => {
    if (state.isDeveloper) return true;
    if (state.subscription !== 'none') {
      if (state.subscription === 'free_trial' && state.trialExpiresAt && Date.now() > state.trialExpiresAt) {
        return false; // Trial expired
      }
      return true; // Subscription or Trial is active! Access Granted.
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ 
      ...state, 
      login, register, logout, updateProfile, 
      toggleDeveloperMode, setSubscription, startFreeTrial, hasPremiumAccess 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
