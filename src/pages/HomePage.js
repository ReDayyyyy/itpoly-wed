import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ตัวอย่างภาพกิจกรรม (คุณสามารถแทนที่ด้วย URL ของภาพของคุณ)
import EventImage1 from '../images/1.jpg';
import EventImage2 from '../images/2.jpg';
import EventImage3 from '../images/3.jpg';

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  return (
    <section id="home" style={styles.section}>
      <h2 style={styles.heading} data-aos="fade-up">ยินดีต้อนรับเข้าสู่เว็บของเรา</h2>
      <p style={styles.subHeading} data-aos="fade-up" data-aos-delay="200">เทคโนโลยีสารสนเทศ</p>

      {/* Slider สำหรับกิจกรรม */}
      <Slider {...settings}>
        <div data-aos="fade-in">
          <img src={EventImage1} alt="กิจกรรม 1" style={imageStyle} />
        </div>
        <div data-aos="fade-in">
          <img src={EventImage2} alt="กิจกรรม 2" style={imageStyle} />
        </div>
        <div data-aos="fade-in">
          <img src={EventImage3} alt="กิจกรรม 3" style={imageStyle} />
        </div>
      </Slider>

      {/* กิจกรรมที่สำคัญ */}
      <section style={styles.activitiesSection}>
        <h3 style={styles.activitiesHeading}>กิจกรรมของเรา</h3>
        <div style={styles.activitiesContainer}>
          {/* กิจกรรมที่ 1 */}
          <div style={styles.activityCard} data-aos="fade-up">
            <img src={EventImage1} alt="กิจกรรม 1" style={styles.activityImage} />
            <p style={styles.activityDescription}>ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช. ได้รับรางวัลชนะเลิศเหรียญทอง และได้เป็นตัวแทนไปแข่งขันต่อในระดับภาคเหนือ</p>
          </div>

          {/* กิจกรรมที่ 2 */}
          <div style={styles.activityCard} data-aos="fade-up" data-aos-delay="200">
            <img src={EventImage2} alt="กิจกรรม 2" style={styles.activityImage} />
            <p style={styles.activityDescription}>กิจกรรมPOLY Folksong Contest</p>
          </div>

          {/* กิจกรรมที่ 3 */}
          <div style={styles.activityCard} data-aos="fade-up" data-aos-delay="400">
            <img src={EventImage3} alt="กิจกรรม 3" style={styles.activityImage} />
            <p style={styles.activityDescription}>กีฬาสานสัมพันธ์ สาขาเทคโนโลยีสารสนเทศ ปีการศึกษา 2567</p>
          </div>
        </div>
      </section>
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
  subHeading: {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '30px',
  },
  activitiesSection: {
    marginTop: '50px',
    padding: '40px 20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  activitiesHeading: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  activitiesContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  activityCard: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    textAlign: 'center',
  },
  activityImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderBottom: '2px solid #f2f2f2',
  },
  activityDescription: {
    padding: '10px',
    fontSize: '1.1em',
    color: '#555',
    backgroundColor: '#f8f8f8',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
};

export default HomePage;
