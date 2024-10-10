"use client"
// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { api } from '~/trpc/react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        volunteer: false, // New field for volunteer option
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const validate = () => {
        const newErrors = { ...errors };
        let valid = true;

        if (!formData.firstName) {
            newErrors.firstName = 'First Name is required';
            valid = false;
        }

        if (!formData.lastName) {
            newErrors.lastName = 'Last Name is required';
            valid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone Number is required';
            valid = false;
        }

        if (!formData.message) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const ev = type === 'checkbox' ? e as React.ChangeEvent<HTMLInputElement> : null
        setFormData({ ...formData, [name]: type === 'checkbox' ? ev!.target.checked : value });
    };
    const mut = api.general.sendContactEmail.useMutation()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // alert('Message sent!');
            // handle actual form submission here
         
            mut.mutateAsync({
                message: formData.message,
                name: formData.firstName + ' ' + formData.lastName,
                email: formData.email,
                phone: formData.phone,
                volunteer: formData.volunteer
            })
            console.log({formData})
        }
    };

    return (    
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? 'error-border' : ''}
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? 'error-border' : ''}
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error-border' : ''}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'error-border' : ''}
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error-border' : ''}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <div className="volunteer-option">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="volunteer"
                            className="checkbox-input"
                            checked={formData.volunteer}
                            onChange={handleChange}
                        />
                        I am interested in volunteering
                    </label>
                </div>
                <button type="submit" className="send-message-btn">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;
