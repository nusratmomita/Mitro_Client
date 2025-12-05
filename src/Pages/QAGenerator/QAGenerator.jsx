import React, { useState } from "react";
import {
  Bot,
  Pencil,
  Stars,
  Wand2,
} from "lucide-react";

export default function QAGenerator() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [topic, setTopic] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // for creating class wise question
  const [selectClass , setSelectClass] = useState("");
  const [selectSubject , setSelectSubject] = useState("");

  const generateAnswer = async () => {
    if (!topic.trim()) return alert("Please enter a topic first!");
    setLoading(true);
    setAiAnswer("");

    try {
      const res = await fetch("http://localhost:9000/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();
      setAiAnswer(data.answer || "⚠️ No answer generated.");
    } catch (err) {
      console.error(err);
      setAiAnswer("❌ Error: Could not fetch AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 p-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-8">
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

      {/* Options */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 w-full max-w-4xl">
        <div
          onClick={() => setSelectedOption("ai")}
          className={`card p-6 hover:shadow-lg cursor-pointer text-center transition-all duration-300 border-2 border-[#51AF5B] hover:border-none ${
            selectedOption === "ai" ? "border border-green-600 scale-95" : ""
          }`}
        >
          <Bot className="w-12 h-12 mx-auto mb-4 text-green-700" />
          <h2 className="text-xl font-bold text-green-800 mb-2 flex justify-center items-center gap-2">
            Generate with AI <Wand2 className="w-5 h-5 text-green-700" />
          </h2>
          <p>Let AI answer student questions from your topic. The answers will be in 4-5 lines.</p>
        </div>

        <div
          onClick={() => setSelectedOption("manual")}
          className={`card p-6 hover:shadow-lg cursor-pointer text-center transition-all duration-300 border-2 border-[#51AF5B] hover:border-none ${
            selectedOption === "manual" ? "border border-green-600 scale-95" : ""
          }`}
        >
          <Pencil className="w-12 h-12 mx-auto mb-4 text-green-700" />
          <h2 className="text-xl font-bold text-green-800 mb-2">Manual Q&A</h2>
          <p>Answer pre-generated questions class and topic wise.</p>
        </div>
      </div>

      {/* AI Mode */}
      {selectedOption === "ai" && (
        <div className="max-w-3xl w-full bg-white p-6 rounded-xl shadow-lg border border-green-100">
          <input
            type="text"
            placeholder="Enter a topic or question..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="input input-bordered w-full mb-4"
          />
          <button
            onClick={generateAnswer}
            disabled={loading}
            className={`btn w-full bg-green-700 text-white ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Generating..." : "Get AI Answer"}
          </button>

          <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100 whitespace-pre-wrap">
            {loading ? (
              <p className="text-gray-600 italic">✨ AI is thinking...</p>
            ) : aiAnswer ? (
              <p className="text-gray-700">{aiAnswer}</p>
            ) : (
              <p className="text-gray-700">💡 AI-generated answer will appear here...</p>
            )}
          </div>
        </div>
      )}

      {/* Manual Mode */}
      {selectedOption === "manual" && (
        <div className="max-w-3xl w-full bg-white p-6 rounded-xl shadow-lg border border-green-100">
          <p className="text-green-800 font-bold text-center">Manual Q&A Mode</p>
          {/* Add your manual Q&A inputs here */}
          <div className="mt-4">
            <h3 className="text-center text-xl font-[500]">Choose a class</h3>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="bg-[#dddb6a79] p-2 border border-green-800 rounded-md cursor-pointer">
                <h3 
                    onClick={() => setSelectClass("6")}
                    className={`text-green-800 text-lg font-[500] ${selectClass === "6" ? "font-[800] text-xl" : ""}`} 
                  >
                  Class - 6</h3>
              </div>
              <div className="bg-[#dddb6a79] p-2 border border-green-800 rounded-md cursor-pointer">
                <h3 
                    onClick={() => setSelectClass("7")}
                    className={`text-green-800 text-lg font-[500] ${selectClass === "7" ? "font-[800] text-xl" : ""}`} 
                  >
                  Class - 7</h3>
              </div>
              <div className="bg-[#dddb6a79] p-2 border border-green-800 rounded-md cursor-pointer">
                <h3 
                    onClick={() => setSelectClass("8")}
                    className={`text-green-800 text-lg font-[500] ${selectClass === "8" ? "font-[800] text-xl" : ""}`} 
                  >
                  Class - 8</h3>
              </div>
            </div>
          </div>

          {/* subjects */}
          <div className="mt-4">
            <h3 className="text-center text-xl font-[500]">Choose a subject</h3>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="bg-[#dddb6a79] p-2 border border-green-800 rounded-md cursor-pointer">
                <h3 
                    onClick={() => setSelectSubject("Math")}
                    className={`text-green-800 text-lg font-[500] ${selectSubject === "Math" ? "font-[800] text-xl" : ""}`} 
                  >
                  Math</h3>
              </div>
              <div className="bg-[#dddb6a79] p-2 border border-green-800 rounded-md cursor-pointer">
                <h3 
                    onClick={() => setSelectSubject("English")}
                    className={`text-green-800 text-lg font-[500] ${selectSubject === "English" ? "font-[800] text-xl" : ""}`} 
                  >
                  English</h3>
              </div>
              <div className="bg-[#dddb6a79] p-2 border border-green-800 rounded-md cursor-pointer">
                <h3 
                    onClick={() => setSelectSubject("Science")}
                    className={`text-green-800 text-lg font-[500] ${selectSubject === "Science" ? "font-[800] text-xl" : ""}`} 
                  >
                  Science</h3>
              </div>
            </div>
          </div>

          {/* 
          5 Essential Questions (English – Class 6)

Identify the verb in this sentence: She plays the guitar.

Write the plural of “child”.

Convert to negative: “He is happy.”

What is the simple past of the word “go”?

Write 3–4 lines about your favorite hobby.

What are the five components of food?

Name one herbivore, one carnivore, and one omnivore.

What is evaporation?

What is the difference between transparent and opaque objects?

What is a shadow and how is it formed?


7 Simplify: 3x + 5x – 2x.

Solve: 3p – 6 = 12.

Convert 25% into fraction and decimal.

Find the value of –5 × 6.

Name the three types of triangles based on sides.

Change to passive voice: He wrote a letter.

Identify the subordinate clause: “I will call you when I reach home.”

Write the past participle of “eat”.

Write a notice about a school drawing competition.

Convert to future tense: “She cooks food.”

What is photosynthesis?

What is the difference between acids and bases?

Name two good conductors and two insulators.

What is respiration?

Define climate.

8 Solve: 2x + 5 = 17.

Find the square root of 144.

Express 1/27 in exponential form.

What is the perimeter of a square of side 11 cm?

Convert 0.125 into a fraction.

Change to indirect speech: He said, “I am tired.”

Convert to passive: The teacher praised the student.

Write a short story on “Lost and Found”.

Identify the adverb: “She quickly finished her work.”

Write a formal letter to your principal requesting leave.

Name two metals and two non-metals.

What is friction?

Draw and label the structure of a plant cell (or describe it).

Define force.

What is asexual reproduction?
*/}
          {
            selectClass === "6" && selectSubject === "Math" && (
              <div>
                <div>
                  <h3>1. What is the LCM of 6 and 8?</h3>
                  <textarea className="mt-4 border border-[#51AF5B] p-2 rounded-md mb-4" name="answer" id="answer" placeholder="Write your answer here.." cols={80} rows={5}></textarea>
                </div>
                <div>
                  <h3>2. Convert 3.75 into a fraction.</h3>
                  <textarea className="mt-4 border border-[#51AF5B] p-2 rounded-md mb-4" name="answer" id="answer" placeholder="Write your answer here.." cols={80} rows={5}></textarea>
                </div>
                <div>
                  <h3>3. Simplify the fraction: 12/36.</h3>
                  <textarea className="mt-4 border border-[#51AF5B] p-2 rounded-md mb-4" name="answer" id="answer" placeholder="Write your answer here.." cols={80} rows={5}></textarea>
                </div>
                <div>
                  <h3>4. A rectangle has length 8 cm and breadth 4 cm. What is its perimeter?</h3>
                  <textarea className="mt-4 border border-[#51AF5B] p-2 rounded-md mb-4" name="answer" id="answer" placeholder="Write your answer here.." cols={80} rows={5}></textarea>
                </div>
                <div>
                  <h3>5. Write any two integers between –5 and 5.</h3>
                  <textarea className="mt-4 border border-[#51AF5B] p-2 rounded-md mb-4" name="answer" id="answer" placeholder="Write your answer here.." cols={80} rows={5}></textarea>
                </div>
              </div>

            )
          }
        </div>
      )}
    </div>
  );
}
