import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "7d"});

    res.cookie("token", token, {
        httpOnly: true, // cookie can only be accessed by the server 
        secure: process.env.NODE_ENV === "production", // only send cookie over https in production 
        sameSite: "strict", // prevent CSRF attacks
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return token;
}