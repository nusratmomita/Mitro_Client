import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User, Mail, Lock, Eye, EyeOff, GraduationCap, ImagePlusIcon,Sparkles,ArrowRight,} from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Authentication/AuthContext';
import axios from 'axios';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage , setProfileImage] = useState('');
  const navigate = useNavigate();
  
  const { handleRegister , handleGoogleAuth , handleUpdateProfile } = useContext(AuthContext);

  const { register,handleSubmit,formState: { errors },reset } = useForm();

  const formSubmission = async (data) => {
    setIsLoading(true);

    handleRegister(data.email , data.password)
    .then(() => {
      const updateProfile = {
        displayName: data.fullName,
        photoURL: profileImage
      };

      handleUpdateProfile(updateProfile)
      .then(() => {
        setTimeout(() => {
          toast.success('🎉 Registration successful! Welcome to Mitro!');
          setIsLoading(false);
          reset();
          navigate("/");
        }, 1500);
      });
    })
    .catch((err) => {
      console.log(err);
      toast.error("Registration failed. Please try again.");
      setIsLoading(false);
    });
  };

  const handleGoogleSignUp = () => {
    setIsLoading(true);
    handleGoogleAuth()
    .then(() => {
      setTimeout(() => {
        toast.success('🎉 Registration successful! Welcome to Mitro!');
        setIsLoading(false);
        reset();
        navigate("/");
      }, 1500);
    })
    .catch((err) => {
      console.log(err);
      toast.error("Google sign up failed.");
      setIsLoading(false);
    });
  };

  const onError = () => {
    toast.error('Please fix the errors in the form');
  };

  const handlePhotoUpload = async(e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_key_api}`;
      const res = await axios.post(imageUploadUrl, formData);
      setProfileImage(res.data.data.url);
    } catch (err) {
      console.log(err);
      toast.error("Photo upload failed.");
    }
  };

  return (
    <div className="mt-20 mb-10 min-h-screen flex items-center justify-center p-4 ">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden mt-20 min-h-[100vh]">
        <div className="hidden lg:block absolute top-40 right-40 w-50 h-50 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="hidden lg:block absolute top-110 left-40 w-50 h-50 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="hidden lg:block absolute top-40 left-20 w-50 h-50 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <form onSubmit={handleSubmit(formSubmission, onError)}>
        <div className="relative w-full max-w-md">
          {/* Header */}
          <div className="text-center mt-20 mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#51AF5B] mb-2">Join Student Toolkit</h1>
            <p className="text-[#51AF5B] text-sm flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4" />
              Your academic journey starts here
              <Sparkles className="w-4 h-4" />
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#51AF5B]">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#51AF5B] w-5 h-5" />
                  <input
                    type="text"
                    {...register('fullName', {
                      required: 'Full name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-green-700 rounded-lg text-[#51AF5B] placeholder-[#51AF5B] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.fullName && <p className="text-red-300 text-xs mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#51AF5B]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#51AF5B] w-5 h-5" />
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-green-700 rounded-lg text-[#51AF5B] placeholder-[#51AF5B] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Photo */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#51AF5B]">Photo</label>
                <div className="relative">
                  <ImagePlusIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#51AF5B] w-5 h-5" />
                  <input
                    type="file"
                    {...register('photoUrl', { required: 'Please upload a photo' })}
                    onChange={handlePhotoUpload}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-green-700 rounded-lg text-[#51AF5B] placeholder-[#51AF5B] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                {errors.photoUrl && <p className="text-red-300 text-xs mt-1">{errors.photoUrl.message}</p>}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#51AF5B]">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#51AF5B] w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: { value: 6, message: 'Password must be at least 6 characters' },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                        message: 'Password must contain uppercase, lowercase, and number'
                      }
                    })}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-green-700 rounded-lg text-[#51AF5B] placeholder-[#51AF5B] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#51AF5B] hover:text-[#51AF5B]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-300 text-xs mt-1">{errors.password.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#ecebb4] cursor-pointer text-[#165f1d] text-xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="divider">OR</div>

              {/* Google Sign Up */}
              <button
                type="button"
                disabled={isLoading}
                onClick={handleGoogleSignUp}
                className="w-full cursor-pointer bg-[#ecebb4] text-[#165f1d] text-xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Google Sign Up
                    <FcGoogle className="w-6 h-6" />
                  </>
                )}
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-[#51AF5B] text-xl">
                Already have an account?{' '}
                <Link to="/login" className="text-[#51AF5B] underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={4000} theme="dark" className="mt-16" />

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default Register;
