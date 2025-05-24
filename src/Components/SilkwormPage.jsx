import React from 'react';
import './SilkwormPage.css';
import silkwormImage from './images/silkwormimg.jpg'; // Adjust path as needed
function SilkwormPage() {
  return (
    <div className="page-container">
      <h1 className="title">تربية دودة القز: الدليل الشامل</h1>
      
      <div className="content-card intro-card">
        <p className="intro-text">
          تربية دودة القز هي عملية مثيرة تعود إلى آلاف السنين، وتعتبر مصدرًا رئيسيًا لإنتاج الحرير الطبيعي. هذا الدليل يقدم كل ما تحتاج معرفته للبدء في هذه الهواية المربحة.
        </p>
      </div>
      
      <div className="content-card">
        <h2 className="section-title">الأساسيات العلمية</h2>
        
        <div className="info-box">
          <h3>الاسم العلمي: <span>Bombyx mori</span></h3>
          <p>دودة القز المستأنسة تختلف عن الأنواع البرية، حيث فقدت القدرة على الطيران وتعتمد كليًا على البشر للبقاء.</p>
        </div>
        
         <div className="silkworm-image">
        <img 
          src={silkwormImage} 
          alt="دودة القز" 
          className="silkworm-img"
        />
      </div>
      </div>
      
      <div className="content-card">
        <h2 className="section-title">متطلبات التربية الأساسية</h2>
        
        <div className="requirements-grid">
          <div className="requirement-card">
            <div className="icon">🌱</div>
            <h3>الغذاء</h3>
            <ul>
              <li>أوراق التوت الطازجة (الغذاء الوحيد)</li>
              <li>يجب أن تكون الأوراق خالية من المبيدات</li>
              <li>توفير الغذاء 3-4 مرات يوميًا</li>
            </ul>
          </div>
          
          <div className="requirement-card">
            <div className="icon">🌡️</div>
            <h3>البيئة</h3>
            <ul>
              <li>درجة الحرارة: 24-28°م</li>
              <li>الرطوبة: 70-80%</li>
              <li>تهوية جيدة دون تيارات هوائية</li>
            </ul>
          </div>
          
          <div className="requirement-card">
            <div className="icon">🏠</div>
            <h3>المسكن</h3>
            <ul>
              <li>صواني بلاستيكية أو خشبية</li>
              <li>مساحة كافية للنمو (تزداد حجمًا 10,000 ضعف)</li>
              <li>تنظيف يومي للمخلفات</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="content-card lifecycle-card">
        <h2 className="section-title">دورة الحياة الكاملة</h2>
        
        <div className="lifecycle-stages">
          <div className="stage">
            <div className="stage-number">1</div>
            <h3>البيضة</h3>
            <p>صغيرة بحجم رأس الدبوس، تفقس بعد 10-14 يومًا</p>
          </div>
          
          <div className="stage">
            <div className="stage-number">2</div>
            <h3>اليرقة</h3>
            <p>5 أعمار (تنسلخ بينها)، 25-30 يومًا من التغذية المكثفة</p>
          </div>
          
          <div className="stage">
            <div className="stage-number">3</div>
            <h3>الشرنقة</h3>
            <p>تغزل الشرنقة خلال 3-8 أيام، تبقى داخلها 10-14 يومًا</p>
          </div>
          
          <div className="stage">
            <div className="stage-number">4</div>
            <h3>الفراشة</h3>
            <p>تعيش 5-10 أيام، تضع 300-500 بيضة ثم تموت</p>
          </div>
        </div>
      </div>
      
      <div className="content-card">
        <h2 className="section-title">نصائح الخبراء</h2>
        
        <div className="expert-tips">
          <div className="tip-card">
            <h3>التغذية المثلى</h3>
            <p>قدم أوراق التوت الصباحية (أكثر طراوة) لليرقات الصغيرة، واستخدم الأوراق الأكثر نضجًا لليرقات الكبيرة.</p>
          </div>
          
          <div className="tip-card">
            <h3>الصحة والوقاية</h3>
            <p>اغسل يديك قبل التعامل مع الديدان، واستخدم ملاقط نظيفة لنقل الأوراق لمنع التلوث.</p>
          </div>
          
          <div className="tip-card">
            <h3>حصاد الشرانق</h3>
            <p>للحرير، اغلي الشرانق قبل خروج الفراشات (بعد 7 أيام من التشرنق).</p>
          </div>
        </div>
      </div>
      
      <div className="content-card">
        <h2 className="section-title">الأسئلة الشائعة</h2>
        
        <div className="faq-item">
          <h3>كم عدد دودات القز التي أحتاجها لبدء المشروع؟</h3>
          <p>يمكن البدء بـ 50-100 دودة للمبتدئين. كل 100 دودة تنتج حوالي 1 كجم من الشرانق.</p>
        </div>
        
        <div className="faq-item">
          <h3>هل يمكن استخدام نباتات غير التوت؟</h3>
          <p>بعض الأنواع البرية تأكل نباتات أخرى، لكن Bombyx mori تتغذى حصريًا على أوراق التوت.</p>
        </div>
        
        <div className="faq-item">
          <h3>كيف أحافظ على الديدان في الشتاء؟</h3>
          <p>يمكن حفظ البيض في الثلاجة (5°م) لعدة أشهر حتى يحين موسم التربية.</p>
        </div>
      </div>
      
      
    </div>
  );
}

export default SilkwormPage;