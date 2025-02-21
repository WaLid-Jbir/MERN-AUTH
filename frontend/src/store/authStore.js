import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5001";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
        const response = await axios.post(`${API_URL}/api/auth/signup`, { email, password, name });
        set({ user: response.data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
        set({ error: error.response.data.message || "Error signung up", isLoading: false });
        throw error;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      set({ 
        user: response.data.user, 
        isAuthenticated: true, 
        isLoading: false, 
        error: null 
      });
    } catch (error) {
      set({ error: error.response.data.message || "Error logging in", isLoading: false });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/api/auth/verify-email`, { code });
      set({ user: response.data.user, isAuthenticated: true, isLoading: false });
      return response.data;
    } catch (error) {
      set({ error: error.response.data.message || "Error verifying email", isLoading: false });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/api/auth/check-auth`);
      set({ user: response.data.user, isAuthenticated: true, isLoading: false, isCheckingAuth: false });
    } catch (error) {
      set({ error: null, isAuthenticated: false, isCheckingAuth: false });
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/api/auth/forgot-password`, { email });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      console.error("Error sending reset password email:", error);
      set({ isLoading: false, error: error.response.message || "Error sending reset password email" });
      throw error;
    }
  },

  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/api/auth/reset-password/${token}`, { password });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      console.error("Error resetting password:", error);
      set({ isLoading: false, error: error.response.message || "Error resetting password" });
      throw error;
    }
  },

}));