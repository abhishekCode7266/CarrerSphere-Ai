import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { BrainCircuit, ArrowRight, BookOpen, Briefcase, GraduationCap, Star, Shield, Users } from 'lucide-react';

export function Welcome() {
  const navigate = useNavigate();

  const handleEnter = () => {
    localStorage.setItem('hasVisitedCareerSphere', 'true');
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden text-slate-50">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center max-w-3xl text-center px-4"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-500/20 rounded-2xl border border-indigo-500/30">
            <BrainCircuit className="w-10 h-10 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            CareerSphere <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">AI</span>
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-slate-200">
          Learn. Prepare. Get Hired.
        </h2>
        
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
          Your AI-powered platform for learning, career guidance, job preparation, interviews and professional growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full max-w-2xl">
          <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 backdrop-blur-sm">
            <BookOpen className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="font-medium text-slate-200">Learning Paths</h3>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 backdrop-blur-sm">
            <GraduationCap className="w-8 h-8 text-indigo-400 mb-3" />
            <h3 className="font-medium text-slate-200">AI Interviews</h3>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 backdrop-blur-sm">
            <Briefcase className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="font-medium text-slate-200">Global Jobs</h3>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={handleEnter}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-indigo-600/25 active:scale-95"
          >
            Enter CareerSphere AI
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={handleEnter}
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full font-semibold text-lg transition-all border border-slate-700 active:scale-95"
          >
            Explore Platform
          </button>
        </div>

        {/* Social Proof Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-slate-800/60 w-full flex flex-col items-center"
        >
          <p className="text-sm text-slate-400 mb-6 font-medium">Join 50,000+ job seekers upgrading their careers</p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-slate-950 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-sm font-bold shadow-sm">RS</div>
              <div className="w-12 h-12 rounded-full border-2 border-slate-950 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-sm font-bold shadow-sm">AK</div>
              <div className="w-12 h-12 rounded-full border-2 border-slate-950 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-sm font-bold shadow-sm">JD</div>
              <div className="w-12 h-12 rounded-full border-2 border-slate-950 bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-sm font-bold shadow-sm">MK</div>
              <div className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 shadow-sm">+50k</div>
            </div>
            
            <div className="hidden sm:block h-10 w-px bg-slate-800"></div>
            
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
              </div>
              <div className="text-sm font-medium text-slate-300">
                <span className="text-white font-bold">4.9/5</span> Average Rating
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-10 text-slate-500 text-sm font-medium">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4"/> 100% Secure</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4"/> Community Driven</div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
