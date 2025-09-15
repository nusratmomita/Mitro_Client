import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleContactForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "2efff433-c4bc-4ff9-b164-440b3481910d");

    setIsSubmitted(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        e.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <motion.div
      className="mt-20 max-w-7xl mx-10 lg:mx-auto space-y-5 mb-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-green-900 via-green-600 to-green-900 bg-clip-text text-transparent mb-10">
        Got some questions? Contact Us
      </h1>

      <div
        id="contactMe"
        className="max-w-7xl mx-auto p-10 rounded-3xl shadow-2xl mt-10 flex flex-col md:flex-row gap-10 items-start bg-white"
      >
        {/* Form */}
        <div className="max-w-xl mx-auto px-4 w-full">
          <form onSubmit={handleContactForm} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered w-full rounded-xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input input-bordered w-full rounded-xl"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="textarea textarea-bordered w-full rounded-xl"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors w-full"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <svg
                    className="animate-spin h-6 w-6 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend size={25} className="mr-2" /> Send
                </>
              )}
            </button>

            {result && <p className="text-center text-green-700 mt-2">{result}</p>}
          </form>
        </div>
      </div>

      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors"
      >
        ↑
      </button>
    </motion.div>
  );
};

export default ContactMe;
