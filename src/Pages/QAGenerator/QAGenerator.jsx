import React, { useState } from "react";
import {
  Bot,
  Pencil,
  CheckCircle2,
  Zap,
  Brain,
  FileEdit,
  ListChecks,
  Stars,
  Wand2,
} from "lucide-react";

export default function QAGenerator() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [difficulty, setDifficulty] = useState("Medium");

  const handleContinue = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-30 p-6 flex flex-col items-center justify-center">
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 0 20px rgba(81,175,91,0.3); }
          50% { box-shadow: 0 0 30px rgba(81,175,91,0.6); }
        }
        .animate-fade-in-down { animation: fadeInDown 0.6s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>

      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-down">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Stars className="w-10 h-10 text-green-800 animate-spin" />
            <h1 className="text-3xl lg:text-4xl font-bold text-green-800 drop-shadow-sm">
              Q&A Generator
            </h1>
          </div>
          <p className="text-green-900">
            Choose how you'd like to create your study questions
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-4 transition-all duration-300">
          {/* AI Option */}
          <div
            onClick={() => setSelectedOption("ai")}
            className={`card bg-base-100 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(81,175,91,0.3)] border-4 ${
              selectedOption === "ai"
                ? "border-[#165f1d] bg-gradient-to-br from-[#B3E55E]/10 to-[#F7FFA3]/10 animate-pulse-glow scale-95"
                : "border-transparent"
            }`}
          >
            <div
              className={`card-body items-center text-center transition-all duration-300 ${
                selectedOption ? "p-4" : "p-8"
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full bg-[#165f1d] flex items-center justify-center mb-4 transition-all duration-500 ${
                  selectedOption === "ai"
                    ? "scale-110 rotate-12"
                    : "hover:rotate-[360deg] hover:scale-110"
                } animate-float`}
              >
                <Bot className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>

              <h2 className="card-title text-2xl text-[#165f1d] mb-2 flex items-center gap-2">
                Generate with AI
                <Wand2 className="w-5 h-5 text-[#165f1d]" />
              </h2>

              {!selectedOption && (
                <>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Let artificial intelligence create customized questions and
                    answers from your study materials
                  </p>
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
                </>
              )}
            </div>
          </div>

          {/* Manual Option */}
          <div
            onClick={() => setSelectedOption("manual")}
            className={`card bg-base-100 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(81,175,91,0.3)] border-4 ${
              selectedOption === "manual"
                ? "border-[#165f1d] bg-gradient-to-br from-[#B3E55E]/10 to-[#F7FFA3]/10 animate-pulse-glow scale-95"
                : "border-transparent"
            }`}
          >
            <div
              className={`card-body items-center text-center transition-all duration-300 ${
                selectedOption ? "p-4" : "p-8"
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full bg-[#165f1d] flex items-center justify-center mb-4 transition-all duration-500 ${
                  selectedOption === "manual"
                    ? "scale-110 rotate-12"
                    : "hover:rotate-[360deg] hover:scale-110"
                } animate-float`}
              >
                <Pencil className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>

              <h2 className="card-title text-2xl text-[#165f1d] mb-2 flex items-center gap-2">
                Manual Q&A
                <FileEdit className="w-5 h-5 text-[#165f1d]" />
              </h2>

              {!selectedOption && (
                <>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Create your own questions and answers with full control over
                    the content
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
                </>
              )}
            </div>
          </div>
        </div>

        {/* Difficulty Level */}
        {selectedOption && (
          <div className="text-center mb-6 animate-fade-in-up">
            <p className="text-lg font-semibold mb-2 text-[#165f1d]">
              Select Difficulty Level:
            </p>
            <div className="flex justify-center gap-4">
              {["Easy", "Medium", "Hard"].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`btn rounded-full px-6 ${
                    difficulty === level
                      ? "bg-[#165f1d] text-white"
                      : "bg-gray-100 text-[#165f1d]"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Display Selected Section */}
        {selectedOption === "ai" && (
          <div className="mt-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-[#165f1d] mb-4 text-center">
              AI Question Generator ({difficulty})
            </h2>
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-green-100">
              <input
                type="text"
                placeholder="Enter a topic (e.g. React Hooks, World War II, Algebra)..."
                className="input input-bordered w-full mb-4"
              />
              <button className="btn w-full bg-[#165f1d] hover:bg-[#0e4a15] text-white">
                Generate Questions
              </button>
              <div className="mt-6 bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-gray-700">
                  💡 AI-generated questions will appear here...
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedOption === "manual" && (
          <div className="mt-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-[#165f1d] mb-4 text-center">
              Manual Q&A ({difficulty})
            </h2>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-green-100 p-6 space-y-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="p-4 border rounded-xl bg-green-50">
                  <p className="font-semibold text-[#165f1d] mb-3">
                    Question {i + 1}: Sample question {i + 1}?
                  </p>
                  {["Option A", "Option B", "Option C", "Option D"].map(
                    (opt, j) => (
                      <div key={j} className="flex items-center gap-2 mb-1">
                        <input type="radio" name={`q${i}`} />
                        <label>{opt}</label>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div className="mt-10 text-center">
          <button
            onClick={handleContinue}
            className={`btn btn-lg bg-[#165f1d] text-white border-0 hover:shadow-[0_10px_30px_rgba(81,175,91,0.5)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 px-12 rounded-full text-lg ${
              selectedOption
                ? "opacity-100 animate-fade-in-up"
                : "opacity-0 pointer-events-none"
            }`}
          >
            Upgrade for Unlimited AI 
            <Zap className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
