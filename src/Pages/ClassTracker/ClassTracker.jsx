import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ClassTracker = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const selectedColor = watch("color", "#3b82f6");

  const submitForm = async (data) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
      reset();
      // Success toast could be shown here
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const colorOptions = [
    { value: "#3b82f6", name: "Blue" },
    { value: "#ef4444", name: "Red" },
    { value: "#10b981", name: "Green" },
    { value: "#f59e0b", name: "Amber" },
    { value: "#8b5cf6", name: "Purple" },
    { value: "#06b6d4", name: "Cyan" },
    { value: "#f97316", name: "Orange" },
    { value: "#84cc16", name: "Lime" },
  ];

  return (
    <div className="mt-30 mb-30 min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="avatar bg-[rgb(22,95,29)] rounded-full placeholder mb-4">
                <div className="text-[#165f1d]  rounded-full w-16">
                  <span className="text-2xl   flex justify-center items-center mt-4">📚</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#165f1d] mb-2">
                Add New Subject
              </h2>
              <p className="text-[#165f1d]">
                Fill in the details to add a new class to your schedule
              </p>
            </div>

            <div className="space-y-6">
              {/* Subject Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <span className="text-primary">📖</span>
                    Subject Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Advanced Mathematics"
                  className={`input input-bordered w-full transition-all duration-200 focus:input-primary ${
                    errors.subject ? "input-error" : ""
                  }`}
                  {...register("subject", {
                    required: "Subject name is required",
                    minLength: {
                      value: 2,
                      message: "Subject name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Subject name must be less than 50 characters",
                    },
                  })}
                />
                {errors.subject && (
                  <label className="label">
                    <span className="label-text-alt text-error flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.subject.message}
                    </span>
                  </label>
                )}
              </div>

              {/* Instructor */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <span className="text-primary">👨‍🏫</span>
                    Instructor
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Mr. Smith"
                  className={`input input-bordered w-full transition-all duration-200 focus:input-primary ${
                    errors.instructor ? "input-error" : ""
                  }`}
                  {...register("instructor", {
                    required: "Instructor name is required",
                    minLength: {
                      value: 2,
                      message: "Instructor name must be at least 2 characters",
                    },
                  })}
                />
                {errors.instructor && (
                  <label className="label">
                    <span className="label-text-alt text-error flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.instructor.message}
                    </span>
                  </label>
                )}
              </div>

              {/* Day and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Day of Week */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                      <span className="text-primary">📅</span>
                      Day
                    </span>
                  </label>
                  <select
                    className={`select select-bordered w-full transition-all duration-200 focus:select-primary ${
                      errors.day ? "select-error" : ""
                    }`}
                    {...register("day", { required: "Please select a day" })}
                  >
                    <option value="">Choose a day</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                  </select>
                  {errors.day && (
                    <label className="label">
                      <span className="label-text-alt text-error flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.day.message}
                      </span>
                    </label>
                  )}
                </div>

                {/* Time */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                      <span className="text-primary">🕐</span>
                      Time
                    </span>
                  </label>
                  <input
                    type="time"
                    className={`input input-bordered w-full transition-all duration-200 focus:input-primary ${
                      errors.time ? "input-error" : ""
                    }`}
                    {...register("time", { required: "Time is required" })}
                  />
                  {errors.time && (
                    <label className="label">
                      <span className="label-text-alt text-error flex items-center gap-1">
                        <span>⚠️</span>
                        {errors.time.message}
                      </span>
                    </label>
                  )}
                </div>
              </div>

              {/* Color Picker */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <span className="text-primary">🎨</span>
                    Subject Color
                  </span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {colorOptions.map((color) => (
                    <label key={color.value} className="cursor-pointer">
                      <input
                        type="radio"
                        className="sr-only"
                        value={color.value}
                        {...register("color")}
                      />
                      <div
                        className={`w-10 h-10 rounded-full border-4 transition-all duration-200 hover:scale-110 ${
                          selectedColor === color.value
                            ? "border-primary shadow-lg scale-110"
                            : "border-base-300 hover:border-base-400"
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    </label>
                  ))}
                </div>
                {/* Custom Color Picker */}
                <div className="mt-6">
                  <label className="label">
                    <span className="label-text-alt">Or choose custom color:</span>
                  </label>
                  <input
                    type="color"
                    className="w-16 h-7 ml-5 rounded border-2 border-base-300 cursor-pointer"
                    {...register("color")}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-8">
                <button
                  type="submit"
                  onClick={handleSubmit(submitForm)}
                  disabled={!isValid || isSubmitting}
                  className={`btn btn-primary btn-lg w-full transition-all duration-200 ${
                    isSubmitting ? "loading" : ""
                  } ${!isValid ? "btn-disabled" : "hover:scale-[1.02]"}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Adding Subject...
                    </>
                  ) : (
                    <>
                      <span className="text-lg">✅</span>
                      Add Subject
                    </>
                  )}
                </button>
              </div>

              {/* Form Progress Indicator */}
              <div className="text-center">
                <div className="text-sm text-base-content/60">
                  Form is {isValid ? "✅ ready" : "⏳ incomplete"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Card */}
        {watch("subject") && (
          <div className="card bg-base-100 shadow-lg border border-base-300 mt-6">
            <div className="card-body p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span>👀</span>
                Preview
              </h3>
              <div
                className="card bg-base-200 border-l-4 p-4"
                style={{ borderLeftColor: selectedColor }}
              >
                <h4 className="font-bold text-lg" style={{ color: selectedColor }}>
                  {watch("subject") || "Subject Name"}
                </h4>
                <p className="text-base-content/80">
                  Instructor: {watch("instructor") || "TBD"}
                </p>
                <p className="text-base-content/80">
                  {watch("day") ? watch("day").charAt(0).toUpperCase() + watch("day").slice(1) : "Day"}{" "}
                  at {watch("time") || "Time"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassTracker;