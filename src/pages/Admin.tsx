import React, { useState } from 'react';
import { Settings, RefreshCw, Download, DollarSign, Users, Briefcase } from 'lucide-react';

export function Admin() {
  const [isAutoSyncing, setIsAutoSyncing] = useState(true);

  const handleWithdraw = () => {
    alert("Withdrawal request initiated!\n\n₹45,500 will be deposited to your connected bank account (XXXX-XXXX-1234) within 24-48 hours via Razorpay Payouts.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-600 mt-1">Manage revenue, platform settings, and job synchronizations.</p>
        </div>
      </div>

      {/* Revenue & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <h3 className="font-semibold text-slate-600">Total Revenue</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">₹45,500</p>
          <button 
            onClick={handleWithdraw}
            className="mt-4 w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition"
          >
            Withdraw to Bank
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-slate-600">Active Subscribers</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">238</p>
          <div className="mt-4 flex gap-2">
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">+12 today</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-slate-600">Total Jobs</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">1,245</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Automated Job Sync */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">Automated Job Feed</h3>
            <button 
              onClick={() => setIsAutoSyncing(!isAutoSyncing)}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition ${isAutoSyncing ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}
            >
              <RefreshCw className={`w-4 h-4 ${isAutoSyncing ? 'animate-spin' : ''}`} />
              {isAutoSyncing ? 'Sync Active' : 'Sync Paused'}
            </button>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              When Active, the system automatically pulls new jobs via API integrations (e.g., Jooble, Adzuna) and populates the Jobs portal. You don't need to manually update them.
            </p>
            
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">Govt API Sync (RSS/Webhooks)</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Healthy</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">Private API Sync (LinkedIn/Indeed)</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Healthy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Subscriptions</h3>
          <div className="space-y-4">
            {[
              { id: 'TXN-902', plan: '6 Months', amount: '₹299', time: '10 mins ago' },
              { id: 'TXN-901', plan: '3 Months', amount: '₹199', time: '1 hour ago' },
              { id: 'TXN-900', plan: '1 Month', amount: '₹99', time: '3 hours ago' },
            ].map(txn => (
              <div key={txn.id} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100 transition">
                <div>
                  <p className="font-semibold text-slate-800">{txn.id}</p>
                  <p className="text-xs text-slate-500">{txn.plan} Plan</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-600">{txn.amount}</p>
                  <p className="text-xs text-slate-400">{txn.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
