export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'professional' | 'admin';
  subscription: 'free' | 'pro' | 'premium';
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Private' | 'Government';
  mode: 'Remote' | 'On-site' | 'Hybrid';
  salary?: string;
  experience: string;
  skills: string[];
  isInternational: boolean;
  deadline?: string;
}

export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  duration: string;
  rating: number;
}
