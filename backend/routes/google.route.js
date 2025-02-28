import express from "express"

import passport from "passport";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

const router = express.Router();

const CLIENT_URL = process.env.CLIENT_URL;

// Google OAuth routes
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);
  
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: `${CLIENT_URL}/login` }),
    async (req, res) => {
      generateTokenAndSetCookie(res, req.user._id);
      res.redirect(CLIENT_URL);
    }
);

export default router;