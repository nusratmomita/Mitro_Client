import { BadgeQuestionMark } from 'lucide-react';
import React from 'react';

const FAQ = () => {
    const faqs = [
    {
      question: "What is Mitro?",
      answer:
        "Mitro is an all-in-one platform with a schedule tracker, budget planner, study planner, Q&A generator, and dashboard to help you stay organized and productive.",
    },
    {
      question: "How does the Q&A Generator work?",
      answer:
        "You can upload your notes or study material, and the Q&A Generator creates practice questions instantly. It’s powered by AI to help you test your understanding effectively.",
    },
    {
      question: "Can I use the toolkit on mobile?",
      answer:
        "Yes! The toolkit is fully responsive and works seamlessly on both mobile and desktop devices, so you can stay on track wherever you are.",
    },
    {
      question: "Is the budget tracker customizable?",
      answer:
        "Absolutely. You can set spending categories, add budgets, and track your expenses in real-time to develop smarter financial habits.",
    },
    {
      question: "Do I need to pay to use Mitro?",
      answer:
        "Mitro is free to get started with. Some advanced features may require a premium upgrade in the future, but all core tools are available at no cost.",
    },
  ];

    return (
        <div className='mt-20 flex justify-center items-center flex-col'>
            <div className="inline-flex flex-row-reverse items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full mb-4">
                <BadgeQuestionMark className="w-8 h-8 text-green-600" />
                <span className="text-2xl font-medium text-[#165f1d]">Got questions? We’re here to help.</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-green-900 via-green-600 to-green-900 bg-clip-text text-transparent mb-10">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="collapse collapse-plus border border-green-200 bg-white shadow-md rounded-xl"
                >
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-semibold text-green-700">
                    {faq.question}
                    </div>
                    <div className="collapse-content text-gray-600">
                    <p>{faq.answer}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;