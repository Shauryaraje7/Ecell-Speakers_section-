import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay CSS

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

import slide_image_1 from './assets/images/Srijan.png';
import slide_image_2 from './assets/images/swapnil teipathi.png';
import slide_image_3 from './assets/images/amruta Shingwekar.png';
import slide_image_4 from './assets/images/Abhay Yadav.png';
import slide_image_5 from './assets/images/Mitresh.png';
import slide_image_6 from './assets/images/Punit G.png';
import slide_image_7 from './assets/images/Rakhi.png';

const members = [
  { name: "Srijan", position: "Lead", linkedIn: "https://linkedin.com/in/lead", img: slide_image_1 },
  { name: "swapnil teipathi", position: "Co-Lead", linkedIn: "https://linkedin.com/in/colead1", img: slide_image_2 },
  { name: "Amruta Shingwekar", position: "Member", linkedIn: "https://www.linkedin.com/in/amruta-shingwekar-ez/", img: slide_image_3 },
  { name: "Abhay Yadav ", position: "Member", linkedIn: "https://www.linkedin.com/in/drabhayyadav/", img: slide_image_4 },
  { name: "Mitresh", position: "Member", linkedIn: "https://linkedin.com/in/member3", img: slide_image_5 },
  { name: "Punit G", position: "Co-Lead", linkedIn: "https://linkedin.com/in/colead2", img: slide_image_6 },
  { name: "Rakhi", position: "Member", linkedIn: "https://linkedin.com/in/member4", img: slide_image_7 },
];

function Coordinators() {
  return (
    <div className="container">
      <h1 className="heading">Speakers</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true} // Loop to ensure continuous scrolling
        slidesPerView="auto"
        speed={900} // Adjust speed to 1 second per transition
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        autoplay={{
          delay: 1500, // Faster auto-scrolling every 1.5 seconds
          disableOnInteraction: false, // Ensure autoplay continues after user interaction
          pauseOnMouseEnter: false, // No pause on hover
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Add Autoplay module
        className="swiper_container"
      >
        {members.map((member, index) => {
          if (!member.name || !member.position || !member.linkedIn || !member.img) {
            console.warn(`Incomplete data for member at index ${index}`, member);
            return null;
          }

          return (
            <SwiperSlide key={index}>
              <div className="card">
                <img className="members-imgs" src={member.img} alt={`${member.name}'s image`} />
                <div className="card-content">
                  <h3>{member.name}</h3>
                 
                  <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                    View LinkedIn
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Coordinators;
