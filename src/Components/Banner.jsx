import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-screen">
      {/* Left column */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full">
        <img
          src="https://picsum.photos/800/1000?grayscale"
          alt="Students studying"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 flex items-center justify-center transition duration-300">
          <p className="text-white text-2xl font-bold opacity-0 hover:opacity-100 transition duration-300">
            Work Hard, Dream Big! 📚
          </p>
        </div>
      </div>

      {/* Right column */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 w-full md:w-1/2 bg-base-100">
        
        <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
          <figure>
            <img src="https://picsum.photos/200/150?1" alt="Class Schedule" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Class Schedule Tracker</h2>
            <p>Never miss a class again – keep your schedule organized.</p>
          </div>
        </div>

        
        <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
          <figure>
            <img src="https://picsum.photos/200/150?2" alt="Budget Tracker" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Budget Tracker</h2>
            <p>Track your pocket money and expenses with ease.</p>
          </div>
        </div>

        
        <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
          <figure>
            <img src="https://picsum.photos/200/150?3" alt="Exam Q&A" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Exam Q&A Generator</h2>
            <p>Generate practice questions and prepare smarter.</p>
          </div>
        </div>

       
        <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
          <figure>
            <img src="https://picsum.photos/200/150?4" alt="Study Planner" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Study Planner</h2>
            <p>Break big study goals into manageable tasks.</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
