import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { emailConfig } from "../config/emailConfig";

const Contact = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.5,
		},
	};

	const verticalLeft = {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
		},
	};

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Initialize EmailJS
	useEffect(() => {
		if (emailConfig.publicKey && emailConfig.publicKey !== 'YOUR_PUBLIC_KEY') {
			emailjs.init(emailConfig.publicKey);
		}
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validateForm = () => {
		if (!formData.name.trim()) {
			toast.error("Please enter your name", {
				position: "top-left",
				autoClose: 2000,
			});
			return false;
		}
		if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			toast.error("Please enter a valid email address", {
				position: "top-left",
				autoClose: 2000,
			});
			return false;
		}
		if (!formData.message.trim()) {
			toast.error("Please enter a message", {
				position: "top-left",
				autoClose: 2000,
			});
			return false;
		}
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		// Validate form
		if (!validateForm()) {
			return;
		}

		// Check if EmailJS is configured
		if (
			emailConfig.serviceID === 'YOUR_SERVICE_ID' ||
			emailConfig.templateID === 'YOUR_TEMPLATE_ID' ||
			emailConfig.publicKey === 'YOUR_PUBLIC_KEY'
		) {
			toast.error("Email service is not configured. Please contact me directly at carlosamedina.in@gmail.com", {
				position: "top-left",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			return;
		}

		setIsSubmitting(true);

		// Prepare email template parameters
		const templateParams = {
			from_name: formData.name.trim(),
			from_email: formData.email.trim(),
			to_email: emailConfig.recipientEmail,
			to_name: 'Carlos Medina', // Your name for the email
			message: formData.message.trim(),
			reply_to: formData.email.trim(),
		};

		// Log the email details (for debugging - remove in production)
		console.log('Sending email to:', emailConfig.recipientEmail);
		console.log('Email details:', {
			from: formData.email.trim(),
			fromName: formData.name.trim(),
			message: formData.message.trim()
		});

		try {
			// Send email using EmailJS
			const response = await emailjs.send(
				emailConfig.serviceID,
				emailConfig.templateID,
				templateParams,
				emailConfig.publicKey
			);

			console.log('Email sent successfully:', response);

			if (response.status === 200 || response.text === 'OK') {
				toast.success(`Message sent successfully to ${emailConfig.recipientEmail}! I'll get back to you soon.`, {
					position: "top-left",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});

				// Reset form
				setFormData({ name: "", email: "", message: "" });
			}
		} catch (error) {
			console.error("EmailJS Error:", error);
			
			let errorMessage = "Failed to send message. Please try again or email me directly.";
			
			if (error.text) {
				errorMessage = `Error: ${error.text}`;
			} else if (error.message) {
				errorMessage = `Error: ${error.message}`;
			}

			toast.error(errorMessage, {
				position: "top-left",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<div className='contact' id='contact'>
				<div className='container'>
					<motion.div
						className='heading'
						initial={{ opacity: 0 }}
						whileInView={fade}
						viewport={{ once: true }}>
						<p className='heading-sub-text'>Hire Me</p>
						<p className='heading-text'>Get in Touch</p>
					</motion.div>
					<div className='contact-box'>
						<motion.div
							className='left-box'
							initial={{ opacity: 0, y: "-50px" }}
							whileInView={verticalLeft}>
							<div className='contact-hello'>
								<p>Say Hello</p>
								<a
									className='hello-links'
									href='mailto:carlosamedina.in@gmail.com'
									target='_blank'
									rel='noreferrer'>
									carlosamedina.in@gmail.com
								</a>
							</div>
						</motion.div>
						<motion.div
							className='right-box'
							initial={{ opacity: 0, y: "50px" }}
							whileInView={verticalLeft}>
							<form
								name='contact-form'
								onSubmit={handleSubmit}>

								<div className='form-top'>
									<div className='name'>
										<label htmlFor='name'>Your Name</label>
										<input
											type='text'
											name='name'
											id='name'
											value={formData.name}
											onChange={handleChange}
											placeholder='Enter your name'
											required
										/>
									</div>

									<div className='email'>
										<label htmlFor='email'>Your Email</label>
										<input
											type='email'
											name='email'
											id='email'
											value={formData.email}
											onChange={handleChange}
											placeholder='Enter your email address'
											required
										/>
									</div>
								</div>

								<div className='form-mid'>
									<div className='message'>
										<label htmlFor='message'>Your message</label>
										<textarea
											type='text'
											name='message'
											id='message'
											value={formData.message}
											onChange={handleChange}
											placeholder='Hi, I think I need you to work on this particular product. Reach out as soon as you can'
											required></textarea>
									</div>
								</div>

								<div className='form-btn'>
									<button
										type='submit'
										disabled={isSubmitting}
										className='hero-contact'>
										{isSubmitting ? "Sending..." : "Send Message"}
									</button>
								</div>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Contact;
