import React, { useState } from 'react';
import { Gamepad2, Timer, Users, Puzzle, DollarSign, Bug, ArrowLeft, Lock, Star, Play, CheckCircle } from 'lucide-react';

const gamesList = [
  { id: 'aptitude', title: 'Aptitude Sprint', icon: Timer, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', desc: 'Master rapid quantitative and logical reasoning tests.' },
  { id: 'hr', title: 'HR Scenario Simulator', icon: Users, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-200', desc: 'Navigate tricky workplace and behavioral dilemmas.' },
  { id: 'terms', title: 'Term Matcher', icon: Puzzle, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', desc: 'Connect the right industry jargon to its definition.' },
  { id: 'negotiate', title: 'Salary Negotiator', icon: DollarSign, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200', desc: 'Learn the art of closing the best compensation package.' },
  { id: 'debug', title: 'Logic Debugger', icon: Bug, color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-200', desc: 'Spot errors in logic, grammar, or code under pressure.' }
];

export function Games() {
  const [selectedGame, setSelectedGame] = useState<typeof gamesList[0] | null>(null);
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [gameState, setGameState] = useState<'playing' | 'won'>('playing');

  // Hub View
  if (!selectedGame) {
    return (
      <div className="space-y-8 pb-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Gamepad2 className="w-6 h-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Interview Games</h1>
          </div>
          <p className="text-slate-600">Sharpen your skills with our 5 interactive gamified modules. Complete all 200 levels in each game to master your interview prep.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gamesList.map((game) => (
            <div 
              key={game.id} 
              onClick={() => setSelectedGame(game)}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex flex-col h-full group"
            >
              <div className={`w-14 h-14 ${game.bg} ${game.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <game.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{game.title}</h3>
              <p className="text-slate-600 flex-1">{game.desc}</p>
              
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  200 Levels
                </div>
                <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg group-hover:bg-indigo-600 transition-colors">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Level Selection View
  if (!currentLevel) {
    return (
      <div className="space-y-6 pb-12">
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm sticky top-20 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedGame(null)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-slate-600" />
            </button>
            <div className={`p-2 ${selectedGame.bg} ${selectedGame.color} rounded-lg`}>
              <selectedGame.icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">{selectedGame.title}</h2>
              <p className="text-sm text-slate-500">Select a level (1 - 200)</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl font-semibold text-sm">
            Progress: 3 / 200
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-12 gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {Array.from({ length: 200 }).map((_, i) => {
              const levelNum = i + 1;
              const isCompleted = levelNum <= 3;
              const isUnlocked = levelNum <= 4; // Unlock up to level 4 for demo

              return (
                <button
                  key={levelNum}
                  onClick={() => {
                    if (isUnlocked) {
                      setCurrentLevel(levelNum);
                      setGameState('playing');
                    }
                  }}
                  className={`
                    aspect-square rounded-xl flex flex-col items-center justify-center font-bold text-lg transition-all
                    ${isCompleted ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-200 hover:bg-emerald-200' : 
                      isUnlocked ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-500 hover:scale-105' : 
                      'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed opacity-70'}
                  `}
                >
                  {isCompleted ? <CheckCircle className="w-6 h-6 mb-1" /> : 
                   !isUnlocked ? <Lock className="w-5 h-5 mb-1" /> : null}
                  {levelNum}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Gameplay View
  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentLevel(null)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-slate-600" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{selectedGame.title}</h2>
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600">
              Level {currentLevel}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700 font-medium font-mono text-sm">
          <Timer className="w-4 h-4" /> 00:45
        </div>
      </div>

      <div className={`bg-white rounded-3xl border-2 ${selectedGame.border} p-8 md:p-12 shadow-sm text-center min-h-[400px] flex flex-col`}>
        {gameState === 'playing' ? (
          <>
            <div className="flex-1 flex flex-col justify-center">
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${selectedGame.bg} ${selectedGame.color} w-max mx-auto mb-6`}>
                Question {currentLevel}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 max-w-2xl mx-auto leading-relaxed">
                {selectedGame.id === 'aptitude' && "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?"}
                {selectedGame.id === 'hr' && "A team member consistently misses deadlines, affecting your work. How do you handle it?"}
                {selectedGame.id === 'terms' && "Match the concept: 'A software development approach where releases are kept small and frequent.'"}
                {selectedGame.id === 'negotiate' && "HR offers ₹8LPA. Your market research suggests ₹10LPA. What is your response?"}
                {selectedGame.id === 'debug' && "Find the bug: `for(let i=0; i<=arr.length; i++) { console.log(arr[i]); }`"}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                <button onClick={() => setGameState('won')} className="p-4 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:border-indigo-600 hover:bg-indigo-50 transition-all">
                  {selectedGame.id === 'aptitude' ? '150 meters' : 'Option A'}
                </button>
                <button onClick={() => setGameState('won')} className="p-4 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:border-indigo-600 hover:bg-indigo-50 transition-all">
                  {selectedGame.id === 'aptitude' ? '120 meters' : 'Option B'}
                </button>
                <button onClick={() => setGameState('won')} className="p-4 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:border-indigo-600 hover:bg-indigo-50 transition-all">
                  {selectedGame.id === 'aptitude' ? '180 meters' : 'Option C'}
                </button>
                <button onClick={() => setGameState('won')} className="p-4 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:border-indigo-600 hover:bg-indigo-50 transition-all">
                  {selectedGame.id === 'aptitude' ? '200 meters' : 'Option D'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Level Complete!</h3>
            <p className="text-slate-600 mb-8">Great job on solving Level {currentLevel}.</p>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setCurrentLevel(null)}
                className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition"
              >
                Level Map
              </button>
              <button 
                onClick={() => {
                  setCurrentLevel(currentLevel + 1 > 200 ? 200 : currentLevel + 1);
                  setGameState('playing');
                }}
                className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                Next Level <Play className="w-4 h-4 fill-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
