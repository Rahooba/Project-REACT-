import React from 'react';
import './ToolsPage.css';

function ToolsPage() {
  return (
    <div className="tools-page-container">
      <h1 className="tools-title">أدوات تربية دودة القز في الخارجة</h1>
      
      <div className="tools-intro-card">
        <p className="tools-intro-text">
          دليل شامل لأماكن بيع أدوات تربية دودة القز في محافظة الوادي الجديد (الخارجة)
        </p>
      </div>
      
      <div className="tools-content-card">
        <h2 className="tools-section-title">الأدوات الأساسية المطلوبة</h2>
        
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon">🌿</div>
            <h3>أدوات التربية</h3>
            <ul>
              <li>صواني خشبية/بلاستيكية</li>
              <li>رفوف معدنية</li>
              <li>شبكات تهوية</li>
              <li>ترمومتر ورطوبة</li>
            </ul>
          </div>
          
          <div className="tool-card">
            <div className="tool-icon">🧴</div>
            <h3>معدات النظافة</h3>
            <ul>
              <li>مطهرات زراعية</li>
              <li>فرش تنظيف</li>
              <li>قفازات لاتكس</li>
              <li>أغطية واقية</li>
            </ul>
          </div>
          
          <div className="tool-card">
            <div className="tool-icon">🧺</div>
            <h3>أدوات الحصاد</h3>
            <ul>
              <li>ملاقط خاصة</li>
              <li>فرشاة ناعمة</li>
              <li>أكياس شبكية</li>
              <li>ميزان دقيق</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="tools-content-card locations-card">
        <h2 className="tools-section-title">أماكن الشراء في الخارجة</h2>
        
        <div className="location-map">
          <div className="map-iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.234567890123!2d30.546789!3d25.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1449162b9b123456%3A0x987654321abc!2sEl%20Kharga%2C%20New%20Valley%20Governorate!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{border:0, borderRadius: '15px'}}
              allowFullScreen=""
              loading="lazy"
              title="خريطة الخارجة"
            ></iframe>
          </div>
          
          <div className="locations-list">
            <div className="location-item">
              <h3>الجمعية الزراعية الرئيسية</h3>
              <p><span>📍</span> شارع الجامعة، أمام مديرية الزراعة</p>
               <p><strong>الأدوات المتوفرة:</strong> صواني تربية، أدوات تقليم، شبكات حماية</p>
              <p><span>📞</span> 092-7921234</p>
              <p><span>⏰</span> 8 ص - 4 م (عدا الجمعة)</p>
            </div>
            
            <div className="location-item">
               <h3>مستلزمات المزارع</h3>
              <p><strong>الموقع:</strong> سوق الخارجة المركزي، بجوار مسجد الفتح</p>
              <p><strong>الأدوات المتوفرة:</strong> أدوات تعقيم، موازين دقيقة، فرشاة جمع اليرقات</p>
              <p><strong>الهاتف:</strong> 010-12345678</p>
              <p><span>🚚</span> توصيل مجاني للطلبات فوق 500 ج</p>
            </div>

            <div className="location-item">
              <h3>تعاونية النحالين</h3>
              <p><strong>الموقع:</strong> حي الأندلس، طريق الداخلة</p>
              <p><strong>الأدوات المتوفرة:</strong> ملاقط خاصة، أكياس شبكية، معدات تربية متكاملة</p>
              <p><strong>ملاحظة:</strong> يتوفر لديهم شتلات توت أسبوعيًا</p>
            </div>
          
          </div>
        </div>
      </div>
      
      <div className="tools-content-card">
        <h2 className="tools-section-title">نصائح للشراء</h2>
        
        <div className="tips-grid">
          <div className="tip-card">
            <h3>أوقات الزحام</h3>
            <p>تجنب الشراء صباح السبت والأحد حيث يشهد السوق الزراعي ازدحامًا شديدًا</p>
        
            <h3>🕰 أفضل أوقات الشراء</h3>
            <p>صباح الاتنين إلى الخميس بين 10 صباحًا و1 ظهرًا لتجنب الزحام</p>
          </div>
          
          <div className="tip-card">
            <h3>💲 دليل الأسعار</h3>
            <ul>
            <li>صواني التربية: 50-150 جنيهاً</li>
                <li>أدوات التعقيم: 30-80 جنيهاً</li>
                <li>مجموعة كاملة: 500-1000 جنيه</li>
            </ul>
          </div>
          
          <div className="tip-card">
            <h3>🌱 نصائح إضافية</h3>
            <p>اطلب شهادة ضمان للمعدات - تأكد من توفر قطع الغيار - تفاوض على السعر عند الشراء بالجملة</p>
          </div>
        </div>
      </div>
      
    
    </div>
  );
}

export default ToolsPage;