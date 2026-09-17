import React, { useState } from 'react';
import { Book, Download, BookOpen, Star, CheckCircle, Award } from 'lucide-react';
import { useNavigate } from 'react-router';

export function Learning() {
  const navigate = useNavigate();
  const [completedModules, setCompletedModules] = useState<Record<number, boolean>>({});

  const books = [
    { title: "Cracking the Coding Interview", author: "Gayle Laakmann", category: "Technical", level: "Graduation+" },
    { title: "The HR Interview Guide", author: "CareerSphere Team", category: "HR", level: "All Levels" },
    { title: "Government Exam Aptitude Master", author: "R.S. Aggarwal", category: "Government", level: "12th / Grad" },
    { title: "International Study & Career Prep", author: "Global Ed", category: "International", level: "Graduation+" },
  ];

  const modules = [
    { id: 1, title: 'Technical Mastery', desc: 'Complete end-to-end preparation module with video lectures and quizzes.' },
    { id: 2, title: 'HR & Behavioral', desc: 'Master the STAR method and negotiate your salary effectively.' },
    { id: 3, title: 'Govt Exam Prep', desc: 'Aptitude, reasoning, and general knowledge for top government exams.' }
  ];

  const handleComplete = (id: number) => {
    setCompletedModules(prev => ({ ...prev, [id]: true }));
  };

  const handleViewCertificate = (moduleTitle: string) => {
    navigate('/certificate', { state: { courseName: moduleTitle } });
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Learning & Resources</h1>
        <p className="text-slate-600 mt-2">Access premium learning paths and highly recommended interview books.</p>
      </div>

      <section>
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-slate-900">Recommended Interview Books</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{book.title}</h3>
              <p className="text-sm text-slate-500 mb-4">By {book.author}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">{book.category}</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">{book.level}</span>
              </div>

              <button className="mt-auto w-full py-2 bg-indigo-50 text-indigo-700 font-medium rounded-lg hover:bg-indigo-100 flex items-center justify-center gap-2 transition">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Premium Learning Modules</h2>
        <p className="text-slate-300 max-w-2xl mb-8">Dive deep into structured courses mapped for 12th Pass, Undergraduates, Postgraduates, and PhDs. From general aptitude to highly specialized technical domains.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col h-full">
              <Star className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">{mod.title}</h3>
              <p className="text-sm text-slate-400 mb-6 flex-1">{mod.desc}</p>
              
              {completedModules[mod.id] ? (
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                    <CheckCircle className="w-4 h-4" /> Module Completed
                  </div>
                  <button 
                    onClick={() => handleViewCertificate(mod.title)}
                    className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Award className="w-4 h-4" /> View Certificate
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => handleComplete(mod.id)}
                  className="mt-auto w-full py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition"
                >
                  Start Module &rarr;
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
