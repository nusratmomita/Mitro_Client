import React, { useState } from 'react';
import { Bot, Pencil, CheckCircle2, Zap, Brain, FileEdit, ListChecks, Stars, Wand2 } from 'lucide-react';

export default function QAGenerator() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleContinue = () => {
    if (selectedOption) {
      alert(`You selected: ${selectedOption === 'ai' ? 'Generate with AI' : 'Manual Q&A'}\n\nRedirecting to ${selectedOption} mode...`);
    }
  };

  return (
    <div className="mt-30 p-6 flex items-center justify-center">
      {/* //  TODO : Why this */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(81, 175, 91, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(81, 175, 91, 0.6);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }

        .hover-lift:hover {
          animation: none;
        }
      `}</style>

      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Stars className="w-10 h-10 text-green-800 animate-spin" />
            <h1 className="text-2xl lg:text-4xl font-bold text-green-800 drop-shadow-sm">Q&A Generator</h1>
          </div>
          <p className="text-green-900">
            Choose how you'd like to create your study questions
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* AI Option */}
          <div
            onClick={() => setSelectedOption('ai')}
            className={`card bg-base-100 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(81,175,91,0.4)] border-4 animate-slide-in-left hover-lift ${
              selectedOption === 'ai' 
                ? 'border-[#165f1d] bg-gradient-to-br from-[#B3E55E]/10 to-[#F7FFA3]/10 animate-pulse-glow' 
                : 'border-transparent'
            }`}
          >
            <div className="card-body items-center text-center p-8">
              {/* Icon */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-[#165f1d] to-[#B3E55E] flex items-center justify-center mb-6 transition-all duration-500 ${
                selectedOption === 'ai' ? 'scale-110 rotate-12' : 'hover:rotate-[360deg] hover:scale-110'
              } animate-float`}>
                <Bot className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>

              {/* Badge */}
              {selectedOption === 'ai' && (
                <div className="badge badge-success bg-[#165f1d] border-0 text-white mb-2 animate-fade-in-down">
                  Selected
                </div>
              )}

              {/* Title */}
              <h2 className="card-title text-3xl text-[#165f1d] mb-4 flex items-center gap-2">
                Generate with AI
                <Wand2 className="w-6 h-6 text-[#165f1d]" />
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Let artificial intelligence create customized questions and answers from your study materials
              </p>

              {/* Features */}
              <ul className="space-y-3 w-full">
                <li className="flex items-center gap-3 text-[#165f1d] hover:translate-x-2 transition-transform duration-200">
                  <div className="w-7 h-7 rounded-full bg-[#B3E55E] flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-[#165f1d]" />
                  </div>
                  <span className="font-medium text-xl">Automatic question generation</span>
                </li>
                <li className="flex items-center gap-3 text-[#165f1d] hover:translate-x-2 transition-transform duration-200">
                  <div className="w-7 h-7 rounded-full bg-[#B3E55E] flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-[#165f1d]" />
                  </div>
                  <span className="font-medium text-xl">Smart content analysis</span>
                </li>
                <li className="flex items-center gap-3 text-[#165f1d] hover:translate-x-2 transition-transform duration-200">
                  <div className="w-7 h-7 rounded-full bg-[#B3E55E] flex items-center justify-center flex-shrink-0">
                    <ListChecks className="w-4 h-4 text-[#165f1d]" />
                  </div>
                  <span className="font-medium text-xl">Multiple difficulty levels</span>
                </li>
                <li className="flex items-center gap-3 text-[#165f1d] hover:translate-x-2 transition-transform duration-200">
                  <div className="w-7 h-7 rounded-full bg-[#B3E55E] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#165f1d]" />
                  </div>
                  <span className="font-medium text-xl">Instant results</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Manual Option */}
          <div
            onClick={() => setSelectedOption('manual')}
            className={`card bg-base-100 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(81,175,91,0.4)] border-4 animate-slide-in-right hover-lift ${
              selectedOption === 'manual' 
                ? 'border-[#165f1d] bg-gradient-to-br from-[#B3E55E]/10 to-[#F7FFA3]/10 animate-pulse-glow' 
                : 'border-transparent'
            }`}
          >
            <div className="card-body items-center text-center p-8">
              {/* Icon */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-[#165f1d] to-[#B3E55E] flex items-center justify-center mb-6 transition-all duration-500 ${
                selectedOption === 'manual' ? 'scale-110 rotate-12' : 'hover:rotate-[360deg] hover:scale-110'
              } animate-float`} style={{ animationDelay: '0.5s' }}>
                <Pencil className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>

              {/* Badge */}
              {selectedOption === 'manual' && (
                <div className="badge badge-success bg-[#165f1d] border-0 text-white mb-2 animate-fade-in-down">
                  Selected
                </div>
              )}

              {/* Title */}
              <h2 className="card-title text-3xl text-[#165f1d] mb-4 flex items-center gap-2">
                Manual Q&A
                <FileEdit className="w-6 h-6 text-[#165f1d]" />
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create your own questions and answers with full control over the content
              </p>

              {/* Features */}
              <ul className="space-y-3 w-full">
                <li className="flex items-center gap-3 text-[#165f1d] hover:translate-x-2 transition-transform duration-200">
                  <div className="w-7 h-7 rounded-full bg-[#B3E55E] flex items-center justify-center flex-shrink-0">
                    <Pencil className="w-4 h-4 text-[#165f1d]" />
                  </div>
                  <span className="font-medium text-xl">Custom question creation</span>
                </li>
                <li className="flex items-center gap-3 text-[#165f1d] hover:translate-x-2 transition-transform duration-200">
                  <div className="w-7 h-7 rounded-full bg-[#B3E55E] flex items-center justify-center flex-shrink-0">
                    <FileEdit className="w-4 h-4 text-[#165f1d]" />
                  </div>
                  <span className="font-medium text-xl">Personalized answers</span>
                </li>
                <li className="flex items-center gap-3 text-[#165f1d] hover:translate-x-2 transition-transform duration-200">
                  <div className="w-7 h-7 rounded-full bg-[#B3E55E] flex items-center justify-center flex-shrink-0">
                    <ListChecks className="w-4 h-4 text-[#165f1d]" />
                  </div>
                  <span className="font-medium text-xl">Flexible formatting</span>
                </li>
                <li className="flex items-center gap-3 text-[#165f1d] hover:translate-x-2 transition-transform duration-200">
                  <div className="w-7 h-7 rounded-full bg-[#B3E55E] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#165f1d]" />
                  </div>
                  <span className="font-medium text-xl">Save and organize</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            className={`btn btn-lg bg-gradient-to-r from-[#165f1d] to-[#165f1d] text-white border-0 hover:shadow-[0_10px_30px_rgba(81,175,91,0.5)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 px-12 rounded-full text-lg ${
              selectedOption ? 'opacity-100 animate-fade-in-up' : 'opacity-0 pointer-events-none'
            }`}
          >
            Continue
            <Zap className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}