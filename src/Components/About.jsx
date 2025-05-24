import React, { useState, useEffect } from 'react';
import './About.css';
import SilkProduction1 from './images/SilkProduction1.jpg';
import SilkProduction2 from './images/SilkProduction2.jpg';
import SilkProduction3 from './images/SilkProduction3.jpg';

const images = [SilkProduction1, SilkProduction2, SilkProduction3];

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">مشروع الحرير الطبيعي</h1>
      <p className="about-description">
        مشروع الحرير الطبيعي بالوادي الجديد هو مبادرة حكومية تهدف إلى إحياء صناعة الحرير في مصر من خلال زراعة أشجار التوت وتربية دودة القز.
      </p>

      {/* Silk Project Details */}
      <div className="about-details">
        <h2>تفاصيل المشروع</h2>
        <ul>
          <li>المساحة: 1000 فدان مخصصة لزراعة أشجار التوت</li>
          <li>فرص العمل: توفير وظائف لـ 5000 شخص</li>
          <li>إنتاج الحرير: تربية دودة القز وإنتاج الخيوط</li>
          <li>دورات تدريبية: تعليم عملي لتربية دودة القز</li>
        </ul>
      </div>

      {/* Silk History Section */}
      <div className="silk-history">
        <h2> نبذة عن صناعة الحرير في مصر</h2>
        <p>
          يعود تاريخ صناعة الحرير في مصر إلى العصر الفرعوني، حيث استخدم المصريون القدماء دودة القز لصناعة الأقمشة الفاخرة.
        </p>
      </div>

      {/* Image Slideshow */}
      <div className="image-slideshow">
        <img src={images[currentImage]} alt="Silk Production" className="slideshow-image" />
      </div>
    </div>
  );
}

export default About;
