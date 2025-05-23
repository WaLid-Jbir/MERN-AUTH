import { motion } from "framer-motion";
import Input from "../components/Input";
import { Eye, EyeOff, Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
import GoogleAuthButton from "../components/GoogleAuthButton";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false); // State for password visibility
	const  { signup, error, isLoading } = useAuthStore();
	const navigate = useNavigate();

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.error("Error signing up:", error);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
		>
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
					Create Account
				</h2>

				<form onSubmit={handleSignUp}>
					<Input
						icon={User}
						type="text"
						placeholder="Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						icon={Mail}
						type="email"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className="relative">
						<Input
							icon={Lock}
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{password.length > 0 && (
							<button
								type="button"
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
							</button>
						)}
					</div>

					{/* Error message */}
					{error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

					{/* Password Strength Meter */}
					<PasswordStrengthMeter password={password} />

					<motion.button
						className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-blue-600
						hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type="submit"
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader className="animate-spin mx-auto" size={24} />
						) : (
							"Sign Up"
						)}
					</motion.button>
				</form>

				{/* Divider */}
				<div className="flex items-center my-6">
					<div className="flex-1 h-px bg-gray-700"></div>
					<span className="px-4 text-gray-400">or</span>
					<div className="flex-1 h-px bg-gray-700"></div>
				</div>

				<GoogleAuthButton />

			</div>

			<div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
				<p className="text-sm text-gray-400">
					Already have an account?{" "}
					<Link to={"/login"} className="text-blue-400 hover:underline">
						Login
					</Link>
				</p>
			</div>
		</motion.div>
	);
};

export default SignUpPage;
