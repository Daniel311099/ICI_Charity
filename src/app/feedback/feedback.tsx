import React from "react";
import FeedbackForm from "./form";
import { testimonials } from "./mockTestimonials"; // Assume you have a file for mock testimonials
import "~/styles/feedback.css"

export function Feedback() {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Feedback</h2>
                <p>We value your feedback. Please share your experience with us.</p>
                <div className="testimonials">
                    <h3>What Others Are Saying</h3>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <strong>{testimonial.name}</strong>
                            <p>{testimonial.content}</p>
                            <small>{new Date(testimonial.date).toLocaleDateString()}</small>
                            <span>Rating: {testimonial.rating}/5</span>
                        </div>
                    ))}
                </div>
            </div>
            <FeedbackForm />
        </div>
    );
}
