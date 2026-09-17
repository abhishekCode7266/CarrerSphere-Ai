import React, { useState } from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

export function Pricing() {
  const { setSubscription, startFreeTrial, hasPremiumAccess, subscription } = useAuth();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handleSubscribe = async (plan: '1_month' | '3_months' | '6_months', price: number) => {
    setProcessing(true);
    // Simulating Payment Gateway Integration (Razorpay/Stripe)
    setTimeout(() => {
      alert(`Payment of ₹${price} Successful via Razorpay/Stripe Gateway!\n\nMoney will be settled to the Admin's verified bank account.\n\nYour subscription is now active.`);
      setSubscription(plan);
      setProcessing(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleTrial = () => {
    startFreeTrial();
    alert("7-Day Free Trial Started! You now have access to premium features.");
    navigate('/dashboard');
  };

  return (
    <div className="py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Invest in Your Career</h1>
        <p className="text-lg text-slate-600 mb-6">
          Unlock the full power of AI Mock Interviews, 5000+ branch-specific questions, Resume Builder, and Automated Job Alerts.
        </p>
        
        {!hasPremiumAccess() && subscription !== 'free_trial' && (
          <button 
            onClick={handleTrial}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-700 font-bold rounded-full hover:bg-emerald-200 transition-colors"
          >
            <Zap className="w-5 h-5" /> Start 7-Day Free Trial
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* 1 Month Plan */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col hover:border-indigo-300 transition-all">
          <h3 className="text-xl font-bold text-slate-900 mb-2">1 Month Starter</h3>
          <div className="text-4xl font-extrabold text-slate-900 mb-6">₹99 <span className="text-sm font-normal text-slate-500">/ month</span></div>
          <ul className="space-y-4 mb-8 flex-1">
            <FeatureItem text="Full Access to AI Mock Interviews" />
            <FeatureItem text="Resume Builder & ATS Checker" />
            <FeatureItem text="5000+ Interview Questions (All Branches)" />
            <FeatureItem text="Interview Books & PDF Library" />
          </ul>
          <button 
            onClick={() => handleSubscribe('1_month', 99)}
            disabled={processing}
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {processing ? 'Processing...' : 'Subscribe for ₹99'}
          </button>
        </div>

        {/* 3 Month Plan */}
        <div className="bg-indigo-600 rounded-2xl p-8 border border-indigo-500 shadow-xl shadow-indigo-600/20 flex flex-col relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-bold rounded-full">
            Most Popular
          </div>
          <h3 className="text-xl font-bold text-white mb-2">3 Months Growth</h3>
          <div className="text-4xl font-extrabold text-white mb-6">₹199 <span className="text-sm font-normal text-indigo-200">/ 3 months</span></div>
          <ul className="space-y-4 mb-8 flex-1 text-indigo-50">
            <FeatureItem text="Everything in 1 Month Plan" white />
            <FeatureItem text="Automated Job Feed Alerts" white />
            <FeatureItem text="Advanced Career Analytics" white />
            <FeatureItem text="Govt + Private HR Prep Modules" white />
          </ul>
          <button 
            onClick={() => handleSubscribe('3_months', 199)}
            disabled={processing}
            className="w-full py-3 px-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition shadow-lg disabled:opacity-50"
          >
             {processing ? 'Processing...' : 'Subscribe for ₹199'}
          </button>
        </div>

        {/* 6 Month Plan */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">6 Months Mastery</h3>
          <div className="text-4xl font-extrabold text-white mb-6">₹299 <span className="text-sm font-normal text-slate-400">/ 6 months</span></div>
          <ul className="space-y-4 mb-8 flex-1 text-slate-300">
            <FeatureItem text="Everything in 3 Months Plan" />
            <FeatureItem text="1-on-1 AI Mentorship" />
            <FeatureItem text="International Learning Roadmaps" />
            <FeatureItem text="Priority Email Support" />
          </ul>
          <button 
            onClick={() => handleSubscribe('6_months', 299)}
            disabled={processing}
            className="w-full py-3 px-4 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 transition disabled:opacity-50"
          >
             {processing ? 'Processing...' : 'Subscribe for ₹299'}
          </button>
        </div>
      </div>
      
      <div className="mt-12 flex items-center justify-center gap-2 text-slate-500 text-sm">
        <ShieldCheck className="w-5 h-5 text-emerald-500" />
        <span>Secure payments processed via Razorpay/Stripe. Direct settlement to Developer's bank account.</span>
      </div>
    </div>
  );
}

function FeatureItem({ text, white = false }: { text: string, white?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <Check className={`w-5 h-5 shrink-0 ${white ? 'text-indigo-200' : 'text-emerald-500'}`} />
      <span className={white ? 'text-indigo-50' : 'text-slate-300'}>{text}</span>
    </li>
  );
}

