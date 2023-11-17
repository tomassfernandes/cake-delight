import { useState } from "react";
import { instagramIcon, twitterIcon, facebookIcon } from "../Items/SocialItems";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-div">
          <div className="logo-letter-footer-div">
            <p className="logo-letter logo-letter-1 footer-logo">Cake</p>
            <p className="logo-letter footer-logo">Delight</p>
          </div>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input
              className="footer-form-input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email"
              required
            />

            <button className="footer-form-btn" type="submit">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
        <div className="footer-div">
          <h4 className="h4">Information</h4>
          <p className="footer-div-p">123 Sugar Lane, Cakeville, CA 98765</p>
          <p className="footer-div-p">About Us</p>
          <p className="footer-div-p">Events</p>
          <p className="footer-div-p">Testimonials</p>
        </div>
        <div className="footer-div">
          <h4 className="h4">Helpful Links</h4>
          <p className="footer-div-p">Services</p>
          <p className="footer-div-p">Supports</p>
          <p className="footer-div-p">Terms & Condition</p>
          <p className="footer-div-p">Privacy Policy</p>
        </div>
        <div className="footer-div">
          <h4 className="h4">Contact Us</h4>
          <p className="footer-div-p">(555) 123-4567</p>
          <p className="footer-div-p">info@cakedelight.com</p>
          <div className="footer-socials-div">
            {instagramIcon}
            {facebookIcon}
            {twitterIcon}
          </div>
        </div>
      </div>
    </footer>
  );
}
