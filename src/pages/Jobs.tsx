import React, { useState, useEffect } from 'react';
import { initialJobs, incomingLiveJobs } from '../data/mockData';
import { Search, MapPin, Briefcase, DollarSign, Filter, RefreshCw, Sparkles, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router';
import { Job } from '../types';

export function Jobs() {
  const [filterType, setFilterType] = useState<'All' | 'Private' | 'Government'>('All');
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedCount, setScannedCount] = useState(0);
  const { isDeveloper } = useAuth();
  
  const filteredJobs = jobs.filter(job => filterType === 'All' || job.type === filterType);

  // Simulate AI Scanner
  const triggerAIScan = () => {
    if (scannedCount >= incomingLiveJobs.length || isScanning) return;
    
    setIsScanning(true);
    
    // Simulate network delay and processing
    setTimeout(() => {
      const newJob = incomingLiveJobs[scannedCount];
      setJobs(prev => [newJob, ...prev]);
      setScannedCount(prev => prev + 1);
      setIsScanning(false);
    }, 1500);
  };

  // Auto-scan a few jobs on mount to make it feel alive
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerAIScan();
    }, 3000);
    return () => clearTimeout(timer);
  }, [scannedCount]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Live Job Portal</h1>
          <p className="text-slate-600 mt-1">Find Government, Private, and International opportunities.</p>
        </div>
        <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
          {(['All', 'Private', 'Government'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filterType === type ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Automated Feed Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 md:p-5 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between shadow-md gap-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="flex items-center gap-4 relative z-10">
           <div className={`p-2 bg-white/20 rounded-lg ${isScanning ? 'animate-pulse' : ''}`}>
             <RefreshCw className={`w-6 h-6 ${isScanning ? 'animate-spin' : ''}`} />
           </div>
           <div>
             <h3 className="font-bold text-base md:text-lg flex items-center gap-2">
               AI Job Scanner Active
               {isScanning && <span className="text-xs bg-emerald-800/50 px-2 py-0.5 rounded-full flex items-center gap-1"><Zap className="w-3 h-3 text-amber-300"/> Scraping Web...</span>}
             </h3>
             <p className="text-xs md:text-sm text-emerald-50 mt-1">
               Our AI continuously crawls career pages and government boards to fetch the latest openings.
             </p>
           </div>
        </div>
        <div className="flex items-center gap-3 relative z-10 w-full md:w-auto">
          {scannedCount < incomingLiveJobs.length ? (
            <button 
              onClick={triggerAIScan}
              disabled={isScanning}
              className={`w-full md:w-auto px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition flex items-center justify-center gap-2 ${isScanning ? 'bg-emerald-700 text-emerald-200 cursor-not-allowed' : 'bg-white text-emerald-700 hover:bg-emerald-50'}`}
            >
              <Zap className="w-4 h-4" />
              {isScanning ? 'Syncing...' : 'Force Sync Now'}
            </button>
          ) : (
             <div className="px-4 py-2 bg-emerald-800/40 text-emerald-100 rounded-lg text-sm font-bold flex items-center gap-2 border border-emerald-500/30">
               <RefreshCw className="w-4 h-4" /> All Sources Up to Date
             </div>
          )}
        </div>
      </div>
      
      {/* 5000+ Questions Banner */}
      <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl flex items-center justify-between">
         <div className="flex items-center gap-3">
           <Sparkles className="w-5 h-5 text-indigo-600" />
           <p className="text-sm font-medium text-indigo-900">Preparing for these jobs? Access our <strong>5000+ dynamic interview questions</strong> for all branches (12th to PhD).</p>
         </div>
         <Link to="/mock-interview" className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition shadow-sm whitespace-nowrap">
           Practice Now
         </Link>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search roles, skills, or companies..." 
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <button className="px-4 py-3 bg-white border border-slate-300 rounded-xl flex items-center gap-2 hover:bg-slate-50 text-slate-700 shadow-sm">
          <Filter className="w-5 h-5" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-md flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                <p className="text-slate-600 font-medium mt-1">{job.company}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${job.type === 'Government' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}>
                {job.type}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
              <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</div>
              <div className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.experience}</div>
              {job.salary && <div className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> {job.salary}</div>}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {job.skills.map(skill => (
                <span key={skill} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-400 flex items-center gap-1"><RefreshCw className="w-3 h-3" /> Auto-synced 2h ago</span>
              <button className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
