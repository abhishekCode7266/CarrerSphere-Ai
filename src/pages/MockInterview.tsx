import React, { useState } from 'react';
import { Send, Bot, User, Settings2 } from 'lucide-react';

export function MockInterview() {
  const [setup, setSetup] = useState({
    level: 'Graduation',
    branch: 'Computer Science',
    type: 'Private Job',
    topic: 'Technical & HR'
  });

  const [hasStarted, setHasStarted] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const startInterview = async () => {
    setHasStarted(true);
    setIsLoading(true);
    
    // Initial prompt for the AI to start generating questions dynamically
    const initialPrompt = `Hello, I am a ${setup.level} student from ${setup.branch}. I am preparing for a ${setup.type} interview. The topic is ${setup.topic}. Please act as the interviewer and ask me the first question. Evaluate my answers moving forward.`;
    
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: initialPrompt })
      });
      const data = await res.json();
      setMessages([{ role: 'ai', content: data.reply }]);
    } catch (error) {
      setMessages([{ role: 'ai', content: 'Connection error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `My answer: ${currentInput}. Please evaluate briefly and ask the next question from your 5000+ question database for this category.` })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: 'Connection error.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasStarted) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dynamic AI Mock Interview</h1>
        <p className="text-slate-600 mb-8">
          Access our engine of over 5000+ interview questions dynamically generated for your specific level and branch.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Education Level</label>
            <select 
              value={setup.level}
              onChange={e => setSetup({...setup, level: e.target.value})}
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
            >
              <option>12th Pass</option>
              <option>Graduation (Undergrad)</option>
              <option>Post Graduation (PG)</option>
              <option>PhD</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Branch / Stream</label>
            <input 
              type="text"
              value={setup.branch}
              onChange={e => setSetup({...setup, branch: e.target.value})}
              placeholder="e.g., Computer Science, Mechanical, Commerce, Arts..."
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Interview Target</label>
              <select 
                value={setup.type}
                onChange={e => setSetup({...setup, type: e.target.value})}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
              >
                <option>Private Job</option>
                <option>Government Job</option>
                <option>International Career</option>
                <option>College Placement</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Rounds</label>
              <select 
                value={setup.topic}
                onChange={e => setSetup({...setup, topic: e.target.value})}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
              >
                <option>Technical & HR Mixed</option>
                <option>Technical Only</option>
                <option>HR & Behavioral Only</option>
                <option>Aptitude</option>
              </select>
            </div>
          </div>

          <button 
            onClick={startInterview}
            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition flex justify-center items-center gap-2"
          >
            <Settings2 className="w-5 h-5" /> Start Interview Engine
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Bot className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="font-bold text-slate-800">Interview in Progress</h2>
            <p className="text-xs text-slate-500">{setup.level} | {setup.branch} | {setup.type}</p>
          </div>
        </div>
        <button onClick={() => setHasStarted(false)} className="text-sm font-medium text-red-600 hover:text-red-800">
          End Interview
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
             <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-800' : 'bg-indigo-600'}`}>
              {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-slate-100 text-slate-800 rounded-tr-none' : 'bg-indigo-50 text-indigo-900 border border-indigo-100 rounded-tl-none'}`}>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4 flex-row">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 rounded-tl-none flex items-center gap-2">
               <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
               <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
               <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-200">
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer here..."
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
