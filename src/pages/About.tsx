import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';

export function About() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto mb-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Empowering the Future Workforce with AI
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          CareerSphere AI is a next-generation platform designed to bridge the gap between education and employment. We combine advanced Artificial Intelligence with real-world industry requirements to help students, freshers, and professionals land their dream jobs.
        </p>
      </section>

      {/* Stats/Mission */}
      <section className="bg-indigo-600 text-white py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-black mb-2">5000+</div>
            <div className="text-indigo-200 font-medium text-lg">Dynamic Interview Questions</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">24/7</div>
            <div className="text-indigo-200 font-medium text-lg">AI Mock Interview Availability</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">100%</div>
            <div className="text-indigo-200 font-medium text-lg">Automated Live Job Feeds</div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Our Core Pillars</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard 
            icon={<Target className="w-8 h-8 text-rose-500" />}
            title="Precision Training"
            description="Our AI doesn't just ask questions; it evaluates your answers against industry standards and provides real-time feedback."
          />
          <ValueCard 
            icon={<Users className="w-8 h-8 text-blue-500" />}
            title="For Everyone"
            description="From 12th pass students to PhD scholars, we generate personalized roadmaps and interview environments for every level."
          />
          <ValueCard 
            icon={<Globe className="w-8 h-8 text-emerald-500" />}
            title="Global & Local"
            description="Whether you are aiming for a Central Government Job in India or a Tech role in the US, our platform adapts to your goals."
          />
          <ValueCard 
            icon={<Award className="w-8 h-8 text-amber-500" />}
            title="Real-world Readiness"
            description="Integrated ATS Resume builders and professional HR rounds ensure you aren't just technically sound, but fully employable."
          />
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center">
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
