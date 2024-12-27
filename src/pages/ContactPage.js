import React from 'react';

function ContactPage() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br />

        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows="4" required></textarea><br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactPage;