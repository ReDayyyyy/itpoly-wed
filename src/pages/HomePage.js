import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

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
    height: '400px', // กำหนดความสูงให้เท่ากันทุกสไลด์
    objectFit: 'cover', // เพื่อปรับให้รูปพอดีกับกรอบ
    borderRadius: '10px',
  };

  return (
    <section id="home">
      <h2>ยินดีต้อนรับเข้าสู่เว็บของเรา</h2>
      <p>เทคโนโลยีสารสนเทศ</p>
      <Slider {...settings}>
        <div>
          <img
            src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/458711378_1035385301920895_9045442624310260588_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEfnK8bI9xrAO-ejVcDUUZj189rglxH1n7Xz2uCXEfWfmBm9q-Uo90oM4vRxJEFAqW4q2BZsjbzu7KJYKLw7ZXo&_nc_ohc=OEd8bFm3liUQ7kNvgFnlMdf&_nc_oc=Adhfo36atZC3b0XwK2aXU44aQv54HZLL3npElzP9ILhldYPhxMYxCvtvvDUUsNKmMG8&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=A8foGpmJy7fZNtd9Gfk5LJm&oh=00_AYBXP10b8axNz44jsW8knSMJRcOHjsnKALzIDTHfgqAvsg&oe=6773D423"
            alt="Slide 1"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/459239445_1038987911560634_7282358072979799197_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEu8kjAM7xfzK_GFoGXMKf8KGo_fPK0M1koaj988rQzWap6zaQI8LIg5X5iKWB4Qwb_IM1faDiJEBlewluouY7b&_nc_ohc=ixGd1Mn51T0Q7kNvgFvboiy&_nc_oc=Adj-pZCYankV44pdb0U3UAnWPyBAkDN9utX5k-hgcCkR7aIPxMGuYEKbsiqgme3SjO4&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=Azlqcrh7SUDc5sSeXXJcSLx&oh=00_AYAn_6rCFiPzuCd8nYdP7lb2ocPY9gbc3aHxFMlrX3jKtw&oe=6773F3C8"
            alt="Slide 2"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/465985343_1089521756507249_4254757350376348131_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEawlFQKAjqoeNYG95gfPwWiJurgJ5iJjaIm6uAnmImNrYyzo5y3E2oaF4I3WBvx-JlHvuCPJan44UrRQeirZyj&_nc_ohc=g5z8bfjwShEQ7kNvgHt8yN9&_nc_oc=AdjFCKZ2ELkwwFiqZtUCcNGaamWlnB7o6hdOmAxzXzuf1QgM-WTyS3raKQeuoMeabhk&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=A-Ox93OPBeFp0XyyAcWulcC&oh=00_AYBzI-1ehiUb-9Rh7c8UOTNEWbslYww3wDTJZJZxH4LyOw&oe=6773EDD4"
            alt="Slide 3"
            style={imageStyle}
          />
        </div>
      </Slider>
    </section>
  );
}

export default HomePage;
