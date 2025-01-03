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
    subHeading: {
      fontSize: '1.2em',
      color: '#555',
      marginBottom: '30px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1.1em',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'transform 0.3s, background-color 0.3s',
    },
    buttonHover: {
      transform: 'scale(1.1)',
      backgroundColor: '#45a049',
    },
  };
  
  function HomePage() {
    const [hover, setHover] = React.useState(false);
  
    return (
      <section id="home" style={styles.section}>
        <h2 style={styles.heading}>ยินดีต้อนรับเข้าสู่เว็บของเรา</h2>
        <p style={styles.subHeading}>เทคโนโลยีสารสนเทศ</p>
        <button
          style={{ ...styles.button, ...(hover ? styles.buttonHover : {}) }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          เรียนรู้เพิ่มเติม
        </button>
      </section>
    );
  }
  