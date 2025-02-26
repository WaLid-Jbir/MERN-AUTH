import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: function () {
            // Only require password if the user is not signing up with Google
            return !this.googleId;
        }
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true // Prevents unique index errors when missing
    },
    picture: {
        type: String,
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;