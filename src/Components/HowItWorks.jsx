import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {FaRegLightbulb,FaRegCalendarAlt,FaRegMoneyBillAlt,FaRegQuestionCircle,FaRegChartBar,} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
  {
    id: 1,
    icon: <FaRegLightbulb size={30} className="text-green-600" />,
    title: "Schedule Tracker",
    description:
      "Stay on top of your day with smart reminders and an easy-to-use timeline. Plan tasks efficiently and never miss a deadline.",
  },
  {
    id: 2,
    icon: <FaRegCalendarAlt size={30} className="text-green-600" />,
    title: "Budget Tracker",
    description:
      "Manage your expenses effortlessly. Set goals, track spending, and make smarter financial decisions with clear insights.",
  },
  {
    id: 3,
    icon: <FaRegMoneyBillAlt size={30} className="text-green-600" />,
    title: "Q&A Generator",
    description:
      "Turn your notes into practice questions instantly. Boost retention and prepare with AI-generated quizzes tailored to your study material.",
  },
  {
    id: 4,
    icon: <FaRegQuestionCircle size={30} className="text-green-600" />,
    title: "Study Planner",
    description:
      "Break down big goals into daily milestones. Build personalized study plans that fit your pace and keep you consistent.",
  },
  {
    id: 5,
    icon: <FaRegChartBar size={30} className="text-green-600" />,
    title: "Dashboard",
    description:
      "Visualize your progress in real time with interactive charts and performance stats. See how far you've come at a glance.",
  },
  ];


  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-green-900 via-green-600 to-green-900 bg-clip-text text-transparent mt-20 mb-10">Get The Best, Be The Best</h1>
      <div className="relative container mx-auto py-16">
        
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-green-500 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            (() => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });

              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="flex items-center w-full relative"
                  ref={ref}
                >
                  {/* Left side */}
                  {isEven ? (
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6 }}
                      className="w-1/2 pr-8 text-right"
                    >
                      <h3 className="text-2xl font-bold text-green-700">{step.title}</h3>
                      <p className="text-gray-600 mt-2 text-lg">{step.description}</p>
                    </motion.div>
                  ) : (
                    <div className="w-1/2"></div>
                  )}

                  {/* Middle Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative flex items-center justify-center w-12 h-12 bg-white border-4 border-green-500 rounded-full z-10 shadow-lg"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Right side */}
                  {!isEven ? (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6 }}
                      className="w-1/2 pl-8 text-left"
                    >
                      <h3 className="text-2xl font-bold text-green-700">{step.title}</h3>
                      <p className="text-gray-600 mt-2 text-lg">{step.description}</p>
                    </motion.div>
                  ) : (
                    <div className="w-1/2"></div>
                  )}
                </div>
              );
            })()
))}

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
