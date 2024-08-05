"use client"
import "~/styles/contact.css";
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import "~/styles/feedback.css";

const FeedbackForm: React.FC = () => {
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({
        message: '',
        anonymous: false,
        rating: 0,
    });

    const [errors, setErrors] = useState({
        message: '',
        rating: '',
    });

    const validate = () => {
        const newErrors = { ...errors };
        let valid = true;

        if (!formData.message) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        if (formData.rating < 1 || formData.rating > 5) {
            newErrors.rating = 'Rating is required and must be between 1 and 5';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value, type} = e.target;
        setFormData({ ...formData, message: value });
    };
    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };
    const handleRatingChange = (rating: number) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log({ formData });
            // Handle actual form submission here
        }
    };

    return (
        <div className="feedback-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Your feedback..."
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error-border' : ''}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                {/* <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="anonymous"
                            checked={formData.anonymous}
                            onChange={handleCheckChange}
                        />
                        Submit anonymously
                    </label>
                </div> */}
                <div className="form-group">
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${formData.rating >= star ? 'selected' : ''}`}
                                onClick={() => handleRatingChange(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    {errors.rating && <p className="error">{errors.rating}</p>}
                </div>
                {!formData.anonymous && !session && (
                    <p className="login-required">You need to be logged in to submit feedback.</p>
                )}
                <button type="submit" className="send-feedback-btn" disabled={!formData.anonymous && !session}>
                    {formData.anonymous || session ? 'Send Feedback' : 'Login to Submit'}
                </button>
            </form>
        </div>
    );
}

export default FeedbackForm;
