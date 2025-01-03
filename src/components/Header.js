import React from 'react';

function Header() {
  return (
    <header
      style={{
        position: 'relative',
        backgroundImage:
          'url("https://lh3.googleusercontent.com/p/AF1QipM6N7JKQkbgwt40cSHVaZeB_cyxflodi8TRkNnY=s680-w680-h510")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // เลเยอร์โปร่งแสงสีดำ
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={{ fontSize: '3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', animation: 'fadeIn 2s' }}>
          สาขาเทคโนโลยีสารสนเทศ
        </h1>
        <h3 style={{ fontSize: '1.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', animation: 'fadeIn 3s' }}>
          วิทยาลัยเทคโนโลยีโปลิเทคลานนาเชียงใหม่
        </h3>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
