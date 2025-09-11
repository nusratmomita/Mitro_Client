import React from "react";
import bannerImg1 from '../assets/bannerImg1.jfif';
import bannerImg2 from '../assets/bannerImg2.jfif';
import bannerImg3 from '../assets/bannerImg3.jfif';
import bannerImg4 from '../assets/bannerImg4.jfif';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-screen max-w-6xl mx-auto justify-between items-center mt-15">
      {/* Left column */}
      <div className="relative w-full md:w-[50%] md:h-full">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
          >
          {[bannerImg1, bannerImg2, bannerImg3, bannerImg4].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-3/6 rounded-3xl p-3">
              <img
              src={img}
              alt={`Banner ${i + 1}`}
              className="w-full h-full object-cover rounded-2xl"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-60 flex items-center justify-center transition duration-300">
                <p className="text-white text-2xl font-bold opacity-0 hover:opacity-100 transition duration-300">
                Work Hard, Dream Big! 📚
                </p>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right column */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-base-100 lg:-mt-30">
        
        <div className="card bg-base-200 shadow-md hover:shadow-xl transition h-3/4">
          <figure>
            <img src="https://picsum.photos/200/150?1" alt="Class Schedule" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Class Schedule Tracker</h2>
            <p>Never miss a class again – keep your schedule organized.</p>
          </div>
        </div>

        
        <div className="card bg-base-200 shadow-md hover:shadow-xl transition h-3/4">
          <figure>
            <img src="https://picsum.photos/200/150?2" alt="Budget Tracker" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Budget Tracker</h2>
            <p>Track your pocket money and expenses with ease.</p>
          </div>
        </div>

        
        <div className="card bg-base-200 shadow-md hover:shadow-xl transition h-3/4 -mt-20">
          <figure>
            <img src="https://picsum.photos/200/150?3" alt="Exam Q&A" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Exam Q&A Generator</h2>
            <p>Generate practice questions and prepare smarter.</p>
          </div>
        </div>

       
        <div className="card bg-base-200 shadow-md hover:shadow-xl transition h-3/4 -mt-20">
          <figure>
            <img src="https://picsum.photos/200/150?4" alt="Study Planner" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Study Planner</h2>
            <p>Break big study goals into manageable tasks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
