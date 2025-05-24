import React from 'react';
import './NewsPage.css';
import governormeeting from "./images/governormeeting.jpg";
import workshopImg from "./images/workshopImg.jpg";
import harvestImg from "./images/harvestImg.jpg";
import farmerImg from "./images/farmerImg.jpg";

function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "محافظ الوادي الجديد يلتقي الرئيس لمناقشة مشروع الحرير",
      content: "عقد محافظ الوادي الجديد اجتماعًا مع الرئيس السيسي لبحث سبل تطوير مشروع دودة القز بالمحافظة، حيث تم الاتفاق على توفير الدعم الفني والتمويلي للمزارعين.",
      date: "15 يونيو 2023",
      image: governormeeting,
      type: "political"
    },
    {
      id: 2,
      title: "ورشة عمل جديدة لتدريب المزارعين",
      content: "تنظم مديرية الزراعة بالوادي الجديد ورشة عمل مجانية يوم 25 الجاري حول 'أحدث تقنيات تربية دودة القز' بقاعة المؤتمرات بالخارجة.",
      date: "10 يونيو 2023",
      image: workshopImg,
      type: "event"
    },
    {
      id: 3,
      title: "نجاح أول حصاد تجاري للحرير بالخارجة",
      content: "تمكن المزارع محمد عبد الرحمن من تحقيق أول إنتاج تجاري للحرير الطبيعي بمزرعته بقرية باريس، بحصاد 5 كجم من الشرانق عالية الجودة.",
      date: "5 يونيو 2023",
      image: harvestImg,
      type: "success"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "معرض منتجات الحرير الطبيعي",
      date: "30 يونيو 2023",
      location: "ساحة الثقافة - الخارجة"
    },
    {
      id: 2,
      title: "دورة تدريبية للمبتدئين",
      date: "5 يوليو 2023",
      location: "مركز التدريب الزراعي"
    }
  ];

  return (
    <div className="news-page-container">
      <h1 className="news-title">أخبار وفعاليات مشروع الحرير</h1>
      
      <div className="news-intro-card">
        <p className="news-intro-text">
          آخر التطورات والنجاحات في مشروع تربية دودة القز بمحافظة الوادي الجديد
        </p>
      </div>
      
      {/* Main News Section */}
      <div className="news-content-card">
        <h2 className="news-section-title">آخر الأخبار</h2>
        
        <div className="news-grid">
          {newsItems.map(item => (
            <div key={item.id} className={`news-card ${item.type}`}>
              <div className="news-image-container">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="news-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'fallback-image.jpg'
                  }}
                />
              </div>
              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <button className="news-button">المزيد</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Upcoming Events */}
      <div className="news-content-card events-card">
        <h2 className="news-section-title">الفعاليات القادمة</h2>
        
        <div className="events-timeline">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-item">
              <div className="event-date">
                <div className="event-day">{event.date.split(' ')[0]}</div>
                <div className="event-month">{event.date.split(' ')[1]}</div>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p><span>📍</span> {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Success Stories */}
      <div className="news-content-card success-card">
        <h2 className="news-section-title">نجاحات المزارعين</h2>
        
        <div className="success-story">
          <div className="farmer-image-container">
            <img 
              src={farmerImg} 
              alt="المزارع الناجح"
              className="farmer-image"
            />
          </div>
          <div className="story-content">
            <h3>قصة نجاح: عائلة أحمد بقرية باريس</h3>
            <p>تمكنت العائلة من تحويل 100 دودة قز إلى مشروع صغير يحقق ربحًا شهريًا يصل إلى 3000 جنيه، مع توفير فرص عمل لشباب القرية.</p>
            <div className="achievements">
              <div className="achievement">
                <div className="achievement-icon">💰</div>
                <p>زيادة الدخل بنسبة 40%</p>
              </div>
              <div className="achievement">
                <div className="achievement-icon">👨‍👩‍👧‍👦</div>
                <p>توفير 5 فرص عمل</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;