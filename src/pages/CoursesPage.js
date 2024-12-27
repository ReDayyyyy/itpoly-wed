function CoursesPage() {
    return (
      <section id="courses">
        <h2>หลักสูตรของเรา</h2>
        <p>เทคโนโลยีสารสนเทศ</p>
  
        <h3>Course Materials</h3>
        <div style={{ marginBottom: '20px' }}>
          <h4>Basic IT Concepts</h4>
          <iframe
            src="https://drive.google.com/file/d/1KlESxHfQdaNQ5trzY9rSJhpiDCU5GDe8/preview"
            width="100%"
            height="500px"
            style={{ border: 'none' }}
            title="Basic IT Concepts"
          ></iframe>
        </div>
  
        <div style={{ marginBottom: '20px' }}>
          <h4>Advanced Programming Techniques</h4>
          <iframe
            src="https://drive.google.com/file/d/1vx5diaTenzBsZuYRDX19YjesoCB6XA3m/preview"
            width="100%"
            height="500px"
            style={{ border: 'none' }}
            title="Advanced Programming Techniques"
          ></iframe>
        </div>
  
        <div style={{ marginBottom: '20px' }}>
          <h4>Data Science Essentials</h4>
          <iframe
            src="https://drive.google.com/file/d/14qknn42lagFi_WuJoiOl_ibPwu7bUvte/preview"
            width="100%"
            height="500px"
            style={{ border: 'none' }}
            title="Data Science Essentials"
          ></iframe>
        </div>
  
        <div style={{ marginBottom: '20px' }}>
          <h4>Network Security Fundamentals</h4>
          <iframe
            src="https://drive.google.com/file/d/1tnEVbTXtZNwtHmFuWMd7Xm5hFlMDI0Be/preview"
            width="100%"
            height="500px"
            style={{ border: 'none' }}
            title="Network Security Fundamentals"
          ></iframe>
        </div>
      </section>
    );
  }
  
  export default CoursesPage;
  