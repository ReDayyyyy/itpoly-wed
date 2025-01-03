import React from 'react';

function ContactPage() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form style={styles.form}>
        <label htmlFor="name" style={styles.label}>Name:</label><br />
        <input type="text" id="name" name="name" required style={styles.input} /><br />

        <label htmlFor="email" style={styles.label}>Email:</label><br />
        <input type="email" id="email" name="email" required style={styles.input} /><br />

        <label htmlFor="message" style={styles.label}>Message:</label><br />
        <textarea id="message" name="message" rows="4" required style={styles.textarea}></textarea><br />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    display: 'inline-block',
    textAlign: 'left',
    maxWidth: '500px',
    width: '100%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  label: {
    fontSize: '1.1em',
    marginBottom: '8px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '1em',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '1em',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.1em',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ContactPage;
