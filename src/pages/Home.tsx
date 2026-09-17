import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { BrainCircuit, Briefcase, BookOpen, User, LineChart, Globe, Building2, Star, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Home() {
  const { hasPremiumAccess } = useAuth();
  
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Accelerate your Career with AI
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            The all-in-one ecosystem for learning, interview preparation, and job discovery across government and private sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={hasPremiumAccess() ? "/ai-assistant" : "/pricing"} className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-md">
              {hasPremiumAccess() ? "Start AI Assistant" : "Start 7-Day Free Trial"}
            </Link>
            <Link to="/jobs" className="px-6 py-3 bg-white text-slate-700 rounded-full font-medium border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
              Explore Jobs
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<BookOpen className="w-6 h-6 text-blue-600" />}
          title="Learning Platform"
          description="Courses and learning paths for every major branch from Computer Science to Commerce."
          link="/learning"
        />
        <FeatureCard 
          icon={<Briefcase className="w-6 h-6 text-purple-600" />}
          title="Govt & Private Jobs"
          description="Discover opportunities across Central/State Govt, Banking, and top private tech companies."
          link="/jobs"
        />
        <FeatureCard 
          icon={<BrainCircuit className="w-6 h-6 text-indigo-600" />}
          title="AI Mock Interviews"
          description="Practice technical and HR rounds with our advanced AI. Get detailed analytics and feedback."
          link="/mock-interview"
        />
        <FeatureCard 
          icon={<User className="w-6 h-6 text-emerald-600" />}
          title="Resume & Career Tools"
          description="AI resume builder, ATS checker, and cover letter generator."
          link="/resume-tools"
        />
        <FeatureCard 
          icon={<LineChart className="w-6 h-6 text-amber-600" />}
          title="College Student Mode"
          description="Custom roadmaps, semester plans, and placement preparation for freshers."
          link="/student-mode"
        />
        <FeatureCard 
          icon={<Globe className="w-6 h-6 text-cyan-600" />}
          title="International Careers"
          description="Guidance for studying and working abroad in the US, UK, Canada, and more."
          link="/international"
        />
      </section>

      {/* Social Proof / Stats */}
      <section className="py-10 border border-slate-200 bg-white shadow-sm mt-4 rounded-3xl overflow-hidden">
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Trusted by students placed at top companies</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500 px-4">
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Microsoft</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Google</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Amazon</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Apple</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Meta</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> TCS</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Infosys</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Wipro</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Deloitte</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Accenture</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> IBM</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Cognizant</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> Capgemini</div>
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-slate-800"><Building2 className="w-5 h-5 md:w-6 md:h-6" /> HCLTech</div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Path to Success</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">A proven three-step process to transform your career trajectory with the power of Artificial Intelligence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-indigo-100 z-0"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white border-4 border-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-indigo-600/10">1</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Build Your Profile</h3>
            <p className="text-slate-600">Enter your details, skills, and goals. Our AI builds a personalized roadmap tailored just for you.</p>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-indigo-600 border-4 border-indigo-100 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-indigo-600/20">2</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Practice & Learn</h3>
            <p className="text-slate-600">Take AI mock interviews, play aptitude games, and complete specialized courses.</p>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white border-4 border-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-indigo-600/10">3</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Get Hired</h3>
            <p className="text-slate-600">Apply to live Govt and Private jobs with a 90%+ ATS-optimized AI generated resume.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-indigo-900 rounded-3xl text-white px-8 md:px-12 relative overflow-hidden shadow-2xl">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>
        
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto">Join thousands of students and professionals who have already accelerated their careers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <div className="flex text-amber-400 mb-4">
              <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
            </div>
            <p className="text-indigo-50 mb-6 font-medium leading-relaxed">"The AI Mock Interviews are insanely realistic. It caught my habit of saying 'like' too often and improved my system design answers. I cleared Amazon SDE-1!"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold">R</div>
              <div>
                <p className="font-bold">Rahul Sharma</p>
                <p className="text-xs text-indigo-300">Software Engineer, Amazon</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <div className="flex text-amber-400 mb-4">
              <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
            </div>
            <p className="text-indigo-50 mb-6 font-medium leading-relaxed">"CareerSphere's Govt job tracker and aptitude games helped me stay consistent. The current affairs section is always up to date. Cracked SBI PO on my first attempt."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold">P</div>
              <div>
                <p className="font-bold">Priya Patel</p>
                <p className="text-xs text-indigo-300">Probationary Officer, SBI</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <div className="flex text-amber-400 mb-4">
              <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
            </div>
            <p className="text-indigo-50 mb-6 font-medium leading-relaxed">"The resume builder is magic. It optimized my CV for ATS systems and I started getting interview calls within a week. The UI is just so easy to use."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold">A</div>
              <div>
                <p className="font-bold">Ananya Singh</p>
                <p className="text-xs text-indigo-300">Data Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to upgrade your career?</h2>
        <Link to={hasPremiumAccess() ? "/dashboard" : "/pricing"} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-colors shadow-xl shadow-indigo-600/20">
          Get Started Now <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-slate-500 mt-4 text-sm font-medium">Join 50,000+ job seekers. No credit card required for free tier.</p>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
  return (
    <Link to={link} className="block group">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all h-full flex flex-col">
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 flex-1">{description}</p>
      </div>
    </Link>
  );
}
