import React from 'react';

function AboutPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>เกี่ยวกับเรา</h1>
      <p style={styles.text}>
        สาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคลานนาเชียงใหม่ 
        เป็นสาขาวิชาที่มุ่งเน้นพัฒนาความรู้และทักษะในด้านเทคโนโลยีสารสนเทศ 
        เพื่อเตรียมความพร้อมให้กับนักเรียนและนักศึกษาในการก้าวเข้าสู่โลกแห่งเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว
      </p>

      <h2 style={styles.subHeading}>เป้าหมายของสาขา</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          ผลิตบุคลากรที่มีความรู้ความสามารถในด้านเทคโนโลยีสารสนเทศ 
          และสามารถนำไปประยุกต์ใช้ในองค์กรหรือสถานประกอบการได้อย่างมีประสิทธิภาพ
        </li>
        <li style={styles.listItem}>
          ส่งเสริมการเรียนรู้และนวัตกรรมในด้านเทคโนโลยีสารสนเทศ 
          เพื่อสร้างความก้าวหน้าในวิชาชีพและการพัฒนาชุมชน
        </li>
        <li style={styles.listItem}>
          สนับสนุนการพัฒนาทักษะด้านการคิดวิเคราะห์ 
          และการแก้ปัญหาด้วยเทคโนโลยีในระดับบุคคลและสังคม
        </li>
      </ul>

      <h2 style={styles.subHeading}>วิสัยทัศน์</h2>
      <p style={styles.text}>
        เป็นสาขาที่มีความเป็นเลิศในด้านการพัฒนาบุคลากรด้านเทคโนโลยีสารสนเทศ 
        และสร้างคุณค่าให้กับสังคมด้วยนวัตกรรมที่ยั่งยืน
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'left',
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.8em',
    color: '#333',
    marginTop: '20px',
  },
  text: {
    fontSize: '1.1em',
    color: '#555',
    lineHeight: '1.6',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    fontSize: '1.1em',
    color: '#555',
    marginBottom: '10px',
  },
};

export default AboutPage;
