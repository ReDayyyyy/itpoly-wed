import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        position: 'relative', // ทำให้ Footer อยู่ในตำแหน่งปกติ
        backgroundColor: '#222',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        fontSize: '14px',
        marginTop: '20px', // เพิ่มช่องว่างด้านบน Footer
        zIndex: 10,
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <p style={{ margin: '5px 0', color: '#fbc02d' }}>
          &copy; 2025 เทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคลานนาเชียงใหม่
        </p>
        <p style={{ margin: '5px 0' }}>
          ติดต่อเรา: 2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300
        </p>
        <p style={{ margin: '5px 0' }}>
          โทร: <span style={{ color: '#4caf50' }}>053-213-061</span> | อีเมล: <a href="mailto:lannapoly@lannapoly.ac.th" style={{ color: '#1e88e5' }}>lannapoly@lannapoly.ac.th</a>
        </p>
      </div>
      <div style={{ marginTop: '10px' }}>
        <a
          href="https://www.facebook.com/lannapolyCNX"
          style={{ margin: '0 10px', color: '#1e88e5', textDecoration: 'none' }}
        >
          <img src="images/facebook-icon.png" alt="" style={{ width: '24px', verticalAlign: 'middle', marginRight: '5px' }} />{' '}
          Facebook
        </a>
        <a
          href="https://www.instagram.com/lannapolycnx/"
          style={{ margin: '0 10px', color: '#1e88e5', textDecoration: 'none' }}
        >
          <img src="images/instagram-icon.png" alt="" style={{ width: '24px', verticalAlign: 'middle', marginRight: '5px' }} />{' '}
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@lannapoly2010"
          style={{ margin: '0 10px', color: '#1e88e5', textDecoration: 'none' }}
        >
          <img src="images/youtube-icon.png" alt="" style={{ width: '24px', verticalAlign: 'middle', marginRight: '5px' }} />{' '}
          YouTube
        </a>
        <a
          href="https://www.tiktok.com/@lannapoly"
          style={{ margin: '0 10px', color: '#1e88e5', textDecoration: 'none' }}
        >
          <img src="images/tiktok-icon.png" alt="" style={{ width: '24px', verticalAlign: 'middle', marginRight: '5px' }} />{' '}
          TikTok
        </a>
      </div>
    </footer>
  );
}

export default Footer;
