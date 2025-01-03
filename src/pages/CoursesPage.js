import React from 'react';

function CoursesPage() {
  return (
    <section id="courses" style={styles.section}>
      <h2 style={styles.heading}>หลักสูตรของเรา</h2>
      <p style={styles.subHeading}>เทคโนโลยีสารสนเทศ</p>

      <h3 style={styles.subHeading}>Course Materials</h3>
      <div style={styles.courseContainer}>
        <div style={styles.course} data-aos="fade-up">
          <h4 style={styles.courseTitle}>Basic IT Concepts</h4>
          <iframe
            src="https://drive.google.com/file/d/1KlESxHfQdaNQ5trzY9rSJhpiDCU5GDe8/preview"
            width="100%"
            height="500px"
            style={styles.iframe}
            title="Basic IT Concepts"
          ></iframe>
        </div>

        <div style={styles.course} data-aos="fade-up" data-aos-delay="200">
          <h4 style={styles.courseTitle}>Advanced Programming Techniques</h4>
          <iframe
            src="https://drive.google.com/file/d/1vx5diaTenzBsZuYRDX19YjesoCB6XA3m/preview"
            width="100%"
            height="500px"
            style={styles.iframe}
            title="Advanced Programming Techniques"
          ></iframe>
        </div>

        <div style={styles.course} data-aos="fade-up" data-aos-delay="400">
          <h4 style={styles.courseTitle}>Data Science Essentials</h4>
          <iframe
            src="https://drive.google.com/file/d/14qknn42lagFi_WuJoiOl_ibPwu7bUvte/preview"
            width="100%"
            height="500px"
            style={styles.iframe}
            title="Data Science Essentials"
          ></iframe>
        </div>

        <div style={styles.course} data-aos="fade-up" data-aos-delay="600">
          <h4 style={styles.courseTitle}>Network Security Fundamentals</h4>
          <iframe
            src="https://drive.google.com/file/d/1tnEVbTXtZNwtHmFuWMd7Xm5hFlMDI0Be/preview"
            width="100%"
            height="500px"
            style={styles.iframe}
            title="Network Security Fundamentals"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '50px 20px',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    position: 'relative',
  },
  heading: {
    fontSize: '3em',
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    transition: 'color 0.3s',
  },
  subHeading: {
    fontSize: '1.5em',
    color: '#7F8C8D',
    marginBottom: '40px',
  },
  courseContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    padding: '0 50px',
  },
  course: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    height: '100%',
  },
  courseTitle: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  iframe: {
    borderRadius: '10px',
    border: 'none',
    transition: 'transform 0.3s ease',
    height: 'auto',
  },
  courseHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
  },
};

export default CoursesPage;
