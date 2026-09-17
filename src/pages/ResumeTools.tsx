import React, { useState } from 'react';
import { FileText, Percent, UploadCloud, LayoutTemplate, PenTool, Download } from 'lucide-react';

export function ResumeTools() {
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'ats' | 'builder'>('builder');

  const simulateAtsCheck = () => {
    setAtsScore(null);
    setTimeout(() => {
      setAtsScore(Math.floor(Math.random() * (95 - 75 + 1)) + 75);
    }, 1500);
  };

  const handleGeneratePdf = () => {
    alert("Generating Highly Optimized PDF Resume...\n\n(This is a demo feature. Real implementation uses libraries like react-pdf to export the template.)");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Resume & Career Tools</h1>
        <p className="text-slate-600 mt-2">Build a professional resume, check ATS score, and export directly as PDF.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button 
          onClick={() => setActiveTab('builder')}
          className={`pb-4 px-6 font-medium text-sm border-b-2 transition-colors ${activeTab === 'builder' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <div className="flex items-center gap-2"><PenTool className="w-4 h-4" /> AI Resume Builder</div>
        </button>
        <button 
          onClick={() => setActiveTab('ats')}
          className={`pb-4 px-6 font-medium text-sm border-b-2 transition-colors ${activeTab === 'ats' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <div className="flex items-center gap-2"><Percent className="w-4 h-4" /> ATS Score Checker</div>
        </button>
      </div>

      {activeTab === 'builder' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Builder Form */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <h2 className="text-xl font-bold text-slate-900 mb-6">Enter Details</h2>
             <form className="space-y-5">
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                 <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Professional Summary (AI Assisted)</label>
                 <textarea rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Experienced software engineer with a track record of..."></textarea>
                 <div className="flex justify-end mt-1"><button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">✨ Rewrite with AI</button></div>
               </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Experience (Comma separated)</label>
                 <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="TechCorp (2020-2023), StartupX (2023-Present)" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Top Skills</label>
                 <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="React, Node.js, Python, AWS" />
               </div>
             </form>
          </div>

          {/* Builder Preview */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900">Live Preview</h2>
              <button onClick={handleGeneratePdf} className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition">
                <Download className="w-4 h-4" /> Export PDF
              </button>
            </div>
            
            <div className="flex-1 bg-white border border-slate-200 shadow-md p-8 rounded flex flex-col items-center justify-center text-center">
               {/* Minimal Mock Template Display */}
               <FileText className="w-16 h-16 text-slate-300 mb-4" />
               <p className="text-slate-500 font-medium">Your resume preview will render here based on the selected premium template.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ats' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ATS Checker */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
              <Percent className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">AI ATS Resume Checker</h2>
            <p className="text-slate-600 mb-6 max-w-sm">
              Upload your resume and get an instant ATS compatibility score against industry standards.
            </p>
            
            {atsScore ? (
              <div className="mb-6">
                <div className="text-5xl font-extrabold text-emerald-600 mb-2">{atsScore}%</div>
                <p className="text-sm font-medium text-slate-500">Great job! Your resume is highly ATS compliant.</p>
              </div>
            ) : (
               <div className="w-full max-w-xs border-2 border-dashed border-slate-300 rounded-xl p-8 mb-6 flex flex-col items-center justify-center bg-slate-50 cursor-pointer hover:bg-slate-100 transition">
                 <UploadCloud className="w-8 h-8 text-slate-400 mb-2" />
                 <p className="text-sm text-slate-500">Drag & Drop PDF here</p>
               </div>
            )}

            <button 
              onClick={simulateAtsCheck}
              className="w-full max-w-xs py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition"
            >
              {atsScore ? 'Check Another Resume' : 'Analyze ATS Score'}
            </button>
          </div>

          {/* Templates */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <LayoutTemplate className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900">Premium Templates</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(num => (
                <div key={num} className="group relative border border-slate-200 rounded-xl overflow-hidden aspect-[1/1.4] bg-slate-100 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-slate-300" />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-4 py-2 bg-white text-slate-900 text-sm font-bold rounded-lg shadow-lg">Use Template</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
