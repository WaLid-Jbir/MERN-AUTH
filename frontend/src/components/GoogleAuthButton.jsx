import React from 'react'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'
import { Loader } from 'lucide-react';

const GoogleAuthButton = () => {

    const { googleAuth, isGoogleLoading, error } = useAuthStore();

    const handleGoogleSignUp = async () => {
		try {
			await googleAuth();
		} catch (error) {
			console.error("Error signing up with Google:", error);
		}
	};

  return (
    <motion.button
        className="w-full py-3 px-4 bg-white text-gray-800 font-bold rounded-lg shadow-lg
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
        focus:ring-offset-gray-900 transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleGoogleSignUp}
        >
        <svg width="24" height="24" viewBox="0 0 294 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 122.729V180.82H230.727C227.183 199.502 216.545 215.321 200.59 225.957L249.272 263.731C277.636 237.55 294 199.094 294 153.412C294 142.776 293.046 132.548 291.273 122.73L150 122.729Z" fill="#4285F4"/>
            <path d="M65.9342 178.553L54.9546 186.958L16.0898 217.23C40.7719 266.185 91.3596 300.004 149.996 300.004C190.496 300.004 224.45 286.64 249.269 263.731L200.587 225.958C187.223 234.958 170.177 240.413 149.996 240.413C110.996 240.413 77.8602 214.095 65.9955 178.639L65.9342 178.553Z" fill="#34A853"/>
            <path d="M16.0899 82.7734C5.86309 102.955 0 125.728 0 150.001C0 174.273 5.86309 197.047 16.0899 217.228C16.0899 217.363 66.0004 178.5 66.0004 178.5C63.0004 169.5 61.2272 159.955 61.2272 149.999C61.2272 140.043 63.0004 130.498 66.0004 121.498L16.0899 82.7734Z" fill="#FBBC05"/>
            <path d="M149.999 59.7279C172.091 59.7279 191.727 67.3642 207.409 82.0918L250.364 39.1373C224.318 14.8647 190.5 0 149.999 0C91.3627 0 40.7719 33.6821 16.0898 82.7738L65.9988 121.502C77.8619 86.0462 110.999 59.7279 149.999 59.7279Z" fill="#EA4335"/>
        </svg>
        {isGoogleLoading ? (
            <Loader className="animate-spin mx-auto" size={24} />
        ) : (
            "Sign Up with Google"
        )}
    </motion.button>
  )
}

export default GoogleAuthButton
