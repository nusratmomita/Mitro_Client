import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="mt-20 max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#DDDB6A] via-yellow-100 to-[#DDDB6A] py-20 text-center text-[#165f1d]">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Start Using the Toolkit Today
      </h2>
      <p className="text-lg mb-8">
        Organize your schedule, budget, and study plans in one place.
      </p>
      <Link to="/login" className="px-8 py-4 bg-[#F7FFA3] text-[#165f1d] font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
        Sign Up Now
      </Link>
    </section>
  );
};

export default CTA;
