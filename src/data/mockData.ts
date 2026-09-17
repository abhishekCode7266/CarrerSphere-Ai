import { Job, Course } from '../types';

export const initialJobs: Job[] = [
  { id: '1', title: 'Software Engineer', company: 'Google', location: 'Bangalore, India', type: 'Private', mode: 'Hybrid', salary: '₹18L - ₹30L', experience: '1-3 years', skills: ['React', 'Node.js', 'System Design'], isInternational: false },
  { id: '3', title: 'SSC CGL Inspector (CBIC)', company: 'Government of India', location: 'Pan India', type: 'Government', mode: 'On-site', salary: 'Pay Level 7 (₹44,900 - ₹1,42,400)', experience: 'Fresher / Graduation', skills: ['Quantitative Aptitude', 'Reasoning', 'General Awareness'], isInternational: false },
  { id: '5', title: 'Systems Engineer', company: 'TCS', location: 'Pune, India', type: 'Private', mode: 'On-site', salary: '₹4L - ₹7L', experience: 'Fresher', skills: ['Java', 'SQL', 'Aptitude'], isInternational: false },
  { id: '6', title: 'Probationary Officer (PO)', company: 'State Bank of India (SBI)', location: 'Pan India', type: 'Government', mode: 'On-site', salary: '₹41,960 Basic + Allowances', experience: 'Fresher / Graduation', skills: ['Banking', 'Data Interpretation', 'English'], isInternational: false },
  { id: '2', title: 'Data Scientist', company: 'Microsoft', location: 'Hyderabad, India', type: 'Private', mode: 'Remote', salary: '₹22L - ₹40L', experience: '3-5 years', skills: ['Python', 'Machine Learning', 'AI'], isInternational: false },
  { id: '7', title: 'Civil Services (IAS/IPS)', company: 'UPSC', location: 'Pan India', type: 'Government', mode: 'On-site', salary: 'Pay Level 10 (₹56,100+)', experience: 'Graduation', skills: ['General Studies', 'CSAT', 'Mains Writing'], isInternational: false },
];

export const incomingLiveJobs: Job[] = [
  { id: '101', title: 'SDE-1 (Frontend)', company: 'Amazon', location: 'Bangalore / Remote', type: 'Private', mode: 'Hybrid', salary: '₹25L - ₹35L', experience: '0-2 years', skills: ['React', 'JavaScript', 'DSA'], isInternational: false },
  { id: '102', title: 'RBI Grade B Officer', company: 'Reserve Bank of India', location: 'Mumbai (HQ)', type: 'Government', mode: 'On-site', salary: '₹1,16,914 / month gross', experience: 'Graduation (60%)', skills: ['Finance', 'Economics', 'Aptitude'], isInternational: false },
  { id: '103', title: 'Cloud Architect', company: 'Infosys', location: 'Chennai, India', type: 'Private', mode: 'Hybrid', salary: '₹15L - ₹25L', experience: '5+ years', skills: ['AWS', 'Azure', 'DevOps'], isInternational: false },
  { id: '104', title: 'Assistant Loco Pilot (ALP)', company: 'Indian Railways (RRB)', location: 'Various Zones', type: 'Government', mode: 'On-site', salary: 'Level 2 (₹19,900+)', experience: 'ITI / Diploma', skills: ['Technical Ability', 'General Science'], isInternational: false },
  { id: '105', title: 'Business Analyst', company: 'Deloitte', location: 'Gurgaon, India', type: 'Private', mode: 'Hybrid', salary: '₹8L - ₹14L', experience: '1-3 years', skills: ['SQL', 'Tableau', 'Excel'], isInternational: false },
  { id: '106', title: 'Sub Inspector (SI)', company: 'Delhi Police / CAPF (SSC CPO)', location: 'Delhi / Pan India', type: 'Government', mode: 'On-site', salary: 'Level 6 (₹35,400+)', experience: 'Graduation', skills: ['Physical Standard', 'English', 'Aptitude'], isInternational: false },
];

// For backward compatibility if imported elsewhere
export const mockJobs: Job[] = [...initialJobs, ...incomingLiveJobs];

export const mockCourses: Course[] = [
  { id: 'c1', title: 'Full-Stack Web Development', level: 'Beginner', category: 'Software Development', duration: '12 weeks', rating: 4.8 },
  { id: 'c2', title: 'Advanced Machine Learning', level: 'Advanced', category: 'Artificial Intelligence', duration: '8 weeks', rating: 4.9 },
  { id: 'c3', title: 'Gov Job Aptitude Masterclass', level: 'Intermediate', category: 'Government Exams', duration: '6 weeks', rating: 4.7 },
  { id: 'c4', title: 'Data Analytics with Python', level: 'Beginner', category: 'Data Analytics', duration: '10 weeks', rating: 4.6 },
];
