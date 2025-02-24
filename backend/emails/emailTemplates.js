export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f7fa;
    }
    .header {
      background: linear-gradient(to right, #3b82f6, #2563eb);
      padding: 30px 20px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .header h1 {
      color: white;
      margin: 0;
      font-size: 28px;
      font-weight: bold;
    }
    .content {
      background-color: white;
      padding: 30px 20px;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    .code {
      text-align: center;
      margin: 30px 0;
      padding: 20px;
      background-color: #f0f4f8;
      border-radius: 8px;
      box-sizing: border-box; /* Ensures padding is included in width */
    }
    .code span {
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 5px;
      color: #3b82f6;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #888;
      font-size: 0.8em;
    }
    .footer p {
      margin: 5px 0;
    }
    .button {
      display: inline-block;
      margin: 20px 0;
      padding: 12px 24px;
      background-color: #3b82f6;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .button:hover {
      background-color: #2563eb;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Verify Your Email</h1>
  </div>
  <div class="content">
    <p>Hello,</p>
    <p>Thank you for signing up! To complete your registration, please verify your email address by entering the code below:</p>
    <div class="code">
      <span>{verificationCode}</span>
    </div>
    <p>This code will expire in <strong>15 minutes</strong> for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f7fa;
    }
    .header {
      background: linear-gradient(to right, #3b82f6, #2563eb);
      padding: 30px 20px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .header h1 {
      color: white;
      margin: 0;
      font-size: 28px;
      font-weight: bold;
    }
    .content {
      background-color: white;
      padding: 30px 20px;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    .icon {
      text-align: center;
      margin: 30px 0;
    }
    .icon div {
      background-color: #3b82f6;
      color: white;
      width: 60px;
      height: 60px;
      line-height: 60px;
      border-radius: 50%;
      display: inline-block;
      font-size: 30px;
    }
    ul {
      padding-left: 20px;
      margin: 20px 0;
    }
    ul li {
      margin-bottom: 10px;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #888;
      font-size: 0.8em;
    }
    .footer p {
      margin: 5px 0;
    }
    .button {
      display: inline-block;
      margin: 20px 0;
      padding: 12px 24px;
      background-color: #3b82f6;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .button:hover {
      background-color: #2563eb;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Password Reset Successful</h1>
  </div>
  <div class="content">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div class="icon">
      <div>✓</div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
    <p>Need help? <a href="mailto:support@yourapp.com" style="color: #3b82f6; text-decoration: none;">Contact Support</a></p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f7fa;
    }
    .header {
      background: linear-gradient(to right, #3b82f6, #2563eb);
      padding: 30px 20px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .header h1 {
      color: white;
      margin: 0;
      font-size: 28px;
      font-weight: bold;
    }
    .content {
      background-color: white;
      padding: 30px 20px;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    .button {
      display: inline-block;
      margin: 20px 0;
      padding: 12px 24px;
      background-color: #3b82f6;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .button:hover {
      background-color: #2563eb;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #888;
      font-size: 0.8em;
    }
    .footer p {
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Password Reset</h1>
  </div>
  <div class="content">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" class="button">Reset Password</a>
    </div>
    <p>This link will expire in <strong>1 hour</strong> for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
    <p>Need help? <a href="mailto:support@yourapp.com" style="color: #3b82f6; text-decoration: none;">Contact Support</a></p>
  </div>
</body>
</html>
`;