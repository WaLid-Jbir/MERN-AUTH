import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import { Clock, Mail, User, Calendar } from "lucide-react";
import toast from "react-hot-toast";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700"
    >
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
        Dashboard
      </h2>

      {/* Profile Picture Section */}
      <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={user.picture ?  user.picture : "https://ui-avatars.com/api/?name=" + user.name}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 shadow-lg"
          />
      </motion.div>

      <div className="space-y-6">
        <motion.div
          className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile Information
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg">
              <User className="w-4 h-4 text-blue-400" />
              <p className="flex w-full">
                <span className="font-medium">Name:</span>
                <span className="text-gray-100 ml-2">{user.name}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg">
              <Mail className="w-4 h-4 text-blue-400" />
              <p className="flex w-full">
                <span className="font-medium">Email:</span>
                <span className="text-gray-100 ml-2">{user.email}</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Account Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg">
              <Calendar className="w-4 h-4 text-blue-400" />
              <p className="flex w-full">
                <span className="font-medium">Joined:</span>
                <span className="text-gray-100 ml-2">
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long", 
                    day: "numeric"
                  })}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg">
              <Clock className="w-4 h-4 text-blue-400" />
              <p className="flex w-full">
                <span className="font-medium">Last Login:</span>
                <span className="text-gray-100 ml-2">{formatDate(user.lastLogin)}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white 
            font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;