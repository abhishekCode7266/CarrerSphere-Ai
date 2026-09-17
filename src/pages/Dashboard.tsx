import React, { useState } from 'react';
import { BookOpen, Target, Award, ArrowRight, User, Edit3, X, GraduationCap, MapPin, Code2 } from 'lucide-react';
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';

export function Dashboard() {
  const { user, subscription, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    educationLevel: user?.educationLevel || '',
    college: user?.college || '',
    branch: user?.branch || '',
    passingYear: user?.passingYear || '',
    careerGoal: user?.careerGoal || '',
    skills: user?.skills || ''
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(editForm);
    setIsEditing(false);
  };

  const planNames: Record<string, string> = {
    'none': 'Free Tier',
    'free_trial': '7-Day Free Trial',
    '1_month': '1 Month Starter (₹99)',
    '3_months': '3 Months Growth (₹199)',
    '6_months': '6 Months Mastery (₹299)'
  };

  // Calculate profile completion percentage
  const profileFields = ['name', 'phone', 'educationLevel', 'college', 'branch', 'passingYear', 'careerGoal', 'skills'];
  const filledFields = profileFields.filter(key => user?.[key as keyof typeof user] && user?.[key as keyof typeof user] !== 'Not specified');
  const completionPercentage = Math.round((filledFields.length / profileFields.length) * 100);

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
        
        <div className="flex items-start gap-6 relative z-10 w-full md:w-auto">
          <div className="w-20 h-20 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/20">
            <User className="w-10 h-10" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold text-slate-900">{user?.name}</h1>
            <p className="text-slate-500 font-medium mb-3">{user?.email} {user?.phone ? `• ${user.phone}` : ''}</p>
            
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 text-xs bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700 font-semibold border border-slate-200">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                {user?.educationLevel || 'Education Level'} • {user?.passingYear || 'Year'}
              </span>
              <span className="flex items-center gap-1.5 text-xs bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700 font-semibold border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                {user?.college || 'Add College/University'}
              </span>
              <span className="flex items-center gap-1.5 text-xs bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700 font-semibold border border-slate-200">
                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                {user?.branch && user.branch !== 'Not specified' ? user.branch : 'Add Branch'}
              </span>
              <span className="flex items-center gap-1.5 text-xs bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700 font-semibold border border-slate-200">
                <Target className="w-3.5 h-3.5 text-indigo-600" />
                {user?.careerGoal && user.careerGoal !== 'Not specified' ? user.careerGoal : 'Add Career Goal'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-3 relative z-10 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
          <div className="px-4 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full text-sm font-bold shadow-sm">
            {planNames[subscription] || 'Free Tier'}
          </div>
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition"
          >
            <Edit3 className="w-4 h-4" /> Edit Profile
          </button>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-2xl my-8 relative shadow-2xl">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <h2 className="text-2xl font-extrabold text-slate-900">Complete Your Profile</h2>
              <button onClick={() => setIsEditing(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"><X className="w-5 h-5"/></button>
            </div>
            
            <form onSubmit={handleSave} className="space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input required type="text" value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow bg-slate-50 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" value={editForm.phone} onChange={e => setEditForm({...editForm, phone: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow bg-slate-50 focus:bg-white" placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Academic Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Education Level</label>
                    <select value={editForm.educationLevel} onChange={e => setEditForm({...editForm, educationLevel: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow bg-slate-50 focus:bg-white">
                      <option value="">Select Level...</option>
                      <option value="12th Pass">12th Pass</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Undergraduate (BTech/BSc/BCA/BBA)">Undergraduate (BTech/BSc/BCA/BBA)</option>
                      <option value="Postgraduate (MTech/MCA/MBA)">Postgraduate (MTech/MCA/MBA)</option>
                      <option value="PhD">PhD / Doctorate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">College / University</label>
                    <input type="text" value={editForm.college} onChange={e => setEditForm({...editForm, college: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow bg-slate-50 focus:bg-white" placeholder="e.g. IIT Delhi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Branch / Specialization</label>
                    <input type="text" value={editForm.branch} onChange={e => setEditForm({...editForm, branch: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow bg-slate-50 focus:bg-white" placeholder="e.g. Computer Science" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Passing Year</label>
                    <select value={editForm.passingYear} onChange={e => setEditForm({...editForm, passingYear: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow bg-slate-50 focus:bg-white">
                      <option value="">Select Year...</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={2020 + i}>{2020 + i}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Career Profile</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Career Goal</label>
                  <input type="text" value={editForm.careerGoal} onChange={e => setEditForm({...editForm, careerGoal: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow bg-slate-50 focus:bg-white" placeholder="e.g. Full Stack Developer, Data Scientist" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Top Skills (Comma separated)</label>
                  <input type="text" value={editForm.skills} onChange={e => setEditForm({...editForm, skills: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow bg-slate-50 focus:bg-white" placeholder="e.g. React, Node.js, Python, Communication" />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex gap-4">
                <button type="button" onClick={() => setIsEditing(false)} className="flex-1 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition">Cancel</button>
                <button type="submit" className="flex-[2] py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20">Save Profile</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-slate-900">Profile Completion</h3>
              <span className={`text-sm font-bold ${completionPercentage === 100 ? 'text-emerald-600' : 'text-amber-500'}`}>{completionPercentage}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${completionPercentage === 100 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            {completionPercentage === 100 
              ? 'Your profile is complete! Our AI is now perfectly tailored to your goals.' 
              : 'Complete your academic and career details to unlock highly personalized mock interviews and job recommendations.'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <BookOpen className="w-24 h-24 text-blue-600" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg"><BookOpen className="text-blue-600 w-5 h-5" /></div>
              <h3 className="font-bold text-slate-900">Active Courses</h3>
            </div>
            <p className="text-4xl font-black text-slate-900">2</p>
            <p className="text-sm text-slate-500 mt-2 font-medium">In progress</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="w-24 h-24 text-purple-600" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg"><Target className="text-purple-600 w-5 h-5" /></div>
              <h3 className="font-bold text-slate-900">Mock Interviews</h3>
            </div>
            <p className="text-4xl font-black text-slate-900">5</p>
            <p className="text-sm text-slate-500 mt-2 font-medium">Completed</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recommended Actions */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">AI Recommendations</h3>
          <div className="space-y-4">
            <div className="p-4 border border-slate-100 bg-slate-50 rounded-xl flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-slate-800">Practice HR Round</h4>
                <p className="text-sm text-slate-600 mt-1">Based on your recent technical performance, focus on behavioral questions.</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800"><ArrowRight className="w-5 h-5" /></button>
            </div>
            <div className="p-4 border border-slate-100 bg-slate-50 rounded-xl flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-slate-800">Update Resume</h4>
                <p className="text-sm text-slate-600 mt-1">Add your new React skills to improve ATS matching by 15%.</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800"><ArrowRight className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        {/* Subscription Info */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Subscription & Billing</h3>
          <div className="p-4 border border-indigo-100 bg-indigo-50/50 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-slate-800">{planNames[subscription] || 'Free Tier'}</span>
              <span className="text-sm text-indigo-700 font-medium">Active</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">Access premium interviews, resume tools, and personalized tracking.</p>
            <div className="flex gap-3">
              <Link to="/pricing" className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
                Manage Plan / Upgrade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
