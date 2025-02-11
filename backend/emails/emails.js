import { mailtrapClient, sender } from "../emails/mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recepient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recepient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })

        console.log("Email sent successfully", response);
    } catch (error) {
        console.error(`Error sending verification email: ${error}`);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recepient = [{email}];
    try {
        
        const response = await mailtrapClient.send({
            from: sender,
            to: recepient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        });

        console.log("Reset email sent successfully", response);

    } catch (error) {
        console.error(`Error sending reset password email: ${error}`);
        throw new Error(`Error sending reset password email: ${error}`);
    }
};