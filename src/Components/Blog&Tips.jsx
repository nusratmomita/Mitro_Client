import React from "react";

const BlogTips = () => {
  const tips = [
    {
      title: "Top 5 Study Techniques",
      excerpt: "Maximize your learning with active recall, spaced repetition, and more.",
    },
    {
      title: "Budgeting for Students",
      excerpt: "Simple strategies to manage your money without stress.",
    },
    {
      title: "Boost Productivity",
      excerpt: "Daily habits and routines to stay focused and consistent.",
    },
  ];

  return (
    <section id="blog" className="mt-20 py-20">
        <h2 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-green-900 via-green-600 to-green-900 bg-clip-text text-transparent mb-10">
        Study & Productivity Tips
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {tips.map((tip, index) => (
            <div key={index} className="card bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl text-green-700 mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.excerpt}</p>
            </div>
        ))}
        </div>
    </section>
  );
};

export default BlogTips;
