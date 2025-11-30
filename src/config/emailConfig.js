/**
 * EmailJS Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a free account at https://www.emailjs.com/
 * 2. Go to "Email Services" → Add New Service → Select Gmail
 *    - Connect your Gmail account
 *    - Copy the Service ID
 * 3. Go to "Email Templates" → Create New Template
 *    - Template should include: {{from_name}}, {{from_email}}, {{to_email}}, {{to_name}}, {{message}}, {{reply_to}}
 *    - Example template:
 *      Subject: New Contact Form Message from {{from_name}}
 *      Content:
 *        To: {{to_name}} ({{to_email}})
 *        From: {{from_name}} ({{from_email}})
 *        Message: {{message}}
 *        Reply to: {{reply_to}}
 *    - IMPORTANT: Set the "To Email" field in the template to: {{to_email}}
 *    - Copy the Template ID
 * 4. Go to "Account" → "General" → Copy your Public Key
 * 5. Create a .env file in the root directory with:
 *    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
 *    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
 *    REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
 * 
 * Or replace the values below directly (not recommended for production)
 */

export const emailConfig = {
  serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  recipientEmail: 'carlosamedina.in@gmail.com', // Your Gmail address
};

