"use client";

import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer-section" id="contact-us">
            <div className="footer-bg-pattern"></div>
            <div className="footer-container">
                <div className="footer-left">
                    <h2 className="footer-title">
                        <span>Want to</span>
                        <span className="accent">reach out?</span>
                    </h2>

                    <div className="locations-grid">
                        <div className="location-item">
                            <h3>Abu Dhabi</h3>
                            <p>
                                Airport Road, Abu Dhabi National Hotels building (behind
                                Carrefour & next to Department of Health)
                            </p>
                            <a href="mailto:sales@adnhc.ae" className="contact-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                sales@adnhc.ae
                            </a>
                            <a href="tel:+97124087505" className="contact-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +971 2 408 7505
                            </a>
                        </div>

                        <div className="location-item">
                            <h3>Dubai</h3>
                            <p>
                                4th Floor JW Marriott Hotel Marina, Dubai Marina.
                            </p>
                            <a href="mailto:sales@adnhc.ae" className="contact-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                sales@adnhc.ae
                            </a>
                            <a href="tel:+97124087505" className="contact-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +971 2 408 7505
                            </a>
                        </div>

                        <div className="location-item">
                            <h3>Saudi Arabia</h3>
                            <p>
                                4th Floor JW Marriott Hotel Marina, Dubai Marina.
                            </p>
                            <a href="mailto:sales@adnhc.ae" className="contact-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                sales@adnhc.ae
                            </a>
                            <a href="tel:+97124087505" className="contact-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +971 2 408 7505
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="form-header">
                        <p>
                            We'd love to hear from you and it's as simple as using one of the
                            methods below.
                        </p>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="firstName"
                                className="form-input"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="firstName">First Name *</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="lastName"
                                className="form-input"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="lastName">Last Name *</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="email">Email Address *</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                id="phone"
                                className="form-input"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="phone">Mobile Number *</label>
                        </div>
                        <div className="form-group full-width">
                            <input
                                type="text"
                                id="services"
                                className="form-input"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="services">Services *</label>
                        </div>
                        <div className="form-group full-width">
                            <textarea
                                id="message"
                                className="form-input"
                                placeholder=" "
                                rows={1}
                                required
                            />
                            <label htmlFor="message">Your Message to us *</label>
                        </div>
                        <div className="full-width">
                            <button type="submit" className="submit-btn">
                                Let's Talk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
