import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Award, Download, Share2, CheckCircle, BrainCircuit } from 'lucide-react';
import { Navigate, useLocation, useNavigate } from 'react-router';

export function Certificate() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from location state or use defaults
  const courseName = location.state?.courseName || 'Advanced AI & Career Mastery';
  
  // Calculate dates
  const today = new Date();
  const endDateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 45); // Assuming a 45 day course
  const startDateStr = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  const issueId = Math.random().toString(36).substring(2, 10).toUpperCase();

  if (!user) return <Navigate to="/home" />;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Your Certificate</h1>
          <p className="text-slate-600 mt-2">Congratulations on completing the module!</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition flex items-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4" /> Download PDF
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center gap-2 shadow-sm">
            <Share2 className="w-4 h-4" /> Share on LinkedIn
          </button>
        </div>
      </div>

      {/* Certificate Canvas */}
      <div className="w-full bg-white p-2 md:p-4 rounded-xl shadow-2xl border border-slate-200 print:shadow-none print:border-none print:p-0">
        <div className="relative w-full border-[12px] border-double border-indigo-900 bg-amber-50/30 p-8 md:p-16 text-center overflow-hidden h-[600px] flex flex-col justify-center items-center">
          
          {/* Decorative Corner Patterns */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-indigo-900 opacity-20 m-4"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-indigo-900 opacity-20 m-4"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-8 border-l-8 border-indigo-900 opacity-20 m-4"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-indigo-900 opacity-20 m-4"></div>

          {/* Background Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <BrainCircuit className="w-96 h-96" />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="flex items-center gap-3 mb-8">
              <BrainCircuit className="w-10 h-10 text-indigo-900" />
              <span className="text-2xl font-black text-indigo-900 tracking-wider uppercase">CareerSphere AI</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2 font-bold tracking-widest uppercase">Certificate of Completion</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest mb-10 text-sm">This is to certify that</p>

            <h3 className="text-5xl md:text-6xl font-black text-indigo-700 mb-6 font-serif italic border-b-2 border-indigo-200 pb-2 px-12 inline-block">
              {user.name || 'Student Name'}
            </h3>

            <p className="text-slate-600 text-lg mb-4 max-w-2xl leading-relaxed">
              has successfully completed all requirements, projects, and assessments for the AI-powered professional curriculum:
            </p>

            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">
              "{courseName}"
            </h4>

            {/* Signatures & Details Grid */}
            <div className="w-full max-w-4xl grid grid-cols-3 gap-8 items-end mt-8">
              
              <div className="text-center flex flex-col items-center">
                <div className="w-full border-b border-slate-400 mb-2 pb-2">
                  <span className="font-mono text-sm text-slate-800 font-bold">{startDateStr}</span>
                  <span className="mx-2 text-slate-400">-</span>
                  <span className="font-mono text-sm text-slate-800 font-bold">{endDateStr}</span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Course Duration</p>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <Award className="w-24 h-24 text-amber-500 fill-amber-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-amber-600 bg-white rounded-full" />
                  </div>
                </div>
              </div>

              <div className="text-center flex flex-col items-center">
                <div className="w-full border-b border-slate-400 mb-2 pb-2">
                  <span className="font-script text-2xl text-indigo-900 block transform -rotate-2">A.I. Director</span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Authorized Signature</p>
              </div>

            </div>

            <div className="mt-8 text-center w-full">
              <p className="text-xs text-slate-400 font-mono">Credential ID: {issueId} • Verified by CareerSphere AI Platform</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
