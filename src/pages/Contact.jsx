import React from "react";

function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p>
        Have any questions? We would love to hear from you.
      </p>

      <form>

        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <br />

        <div>
          <label>Message</label>
          <br />
          <textarea
            placeholder="Enter your message"
            rows="5"
          ></textarea>
        </div>

        <br />

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;