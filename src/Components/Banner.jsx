import React, { useState } from "react";
import { ChevronRight, Calendar, DollarSign, Brain, BookOpen, Sparkles} from "lucide-react";
import { Link } from "react-router";

const Banner = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Class Schedule Tracker",
      description: "Never miss a class again – keep your schedule organized with smart notifications.",
      icon: Calendar,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      buttonText: "Schedule Planner",
      directTo: "/classTracker"
    },
    {
      id: 2,
      title: "Budget Tracker",
      description: "Track your pocket money and expenses with intelligent spending insights.",
      icon: DollarSign,
      color: "from-green-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
      buttonText: "Budget Tracker",
      directTo: "/budgetTracker"
    },
    {
      id: 3,
      title: "Exam Q&A Generator",
      description: "Generate practice questions and prepare smarter with AI-powered learning.",
      icon: Brain,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      buttonText: "Q&A Generator",
      directTo: "/qaGenerator"
    },
    {
      id: 4,
      title: "Study Planner",
      description: "Break big study goals into manageable tasks with personalized road maps.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      buttonText: "Study Planner",
      directTo: "/studyPlanner"
    }
  ];

  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-8 mt-8">
      {/* Hero Section with Enhanced Typography */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-800">Transform Your Academic Journey</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
          Study Smarter, Not Harder
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Unlock your potential with our comprehensive suite of academic tools designed for modern students
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center ">
        {/* Enhanced Right Column - Feature Cards */}
        <div className="lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative ${card.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-white/50`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 text-xl leading-relaxed">
                  {card.description}
                </p>

                {/* Enhanced Button */}
                <Link to={card.directTo}>
                  <button className={`cursor-pointer  xl:w-[40%] lg:w-[100%] w-[100%] xl:whitespace-nowrap bg-gradient-to-r ${card.color} ${card.hoverColor} text-white font-semibold p-2 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}>
                  <span>{card.buttonText}</span>
                  <ChevronRight className={`w-8 h-8 transition-transform duration-300 ${hoveredCard === card.id ? 'translate-x-1' : ''}`} />
                </button>
                </Link>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner;