import passport from 'passport';
import dotenv from "dotenv";
import path from "path";

import User from '../models/user.model.js';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { fileURLToPath } from "url";

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from the root folder
dotenv.config({ path: path.resolve(__dirname, "../.env") });

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.SERVER_URL}/api/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log('Google profile:', profile); // Debugging
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
            user.name = profile.displayName;
            user.picture = profile.photos[0].value;
            user.lastLogin = new Date();
            await user.save();
        }else{
            newUser = new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                picture: profile.photos[0].value,
                isVerified: true, // Google-verified emails are considered verified
            });
    
            await newUser.save();
        }

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;