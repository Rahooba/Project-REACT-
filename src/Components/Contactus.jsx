import React from 'react';
import './Contactus.css';
import { motion } from 'framer-motion';
function Contactus() {
  return (
    <div className="contact-container">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
  <h1>صفحة التواصل</h1>
</motion.div>
      <p className="contact-description">نحن هنا لمساعدتك. تواصل معنا في أي وقت.</p>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="اسمك" className="contact-input" />
        <input type="email" placeholder="البريد الإلكتروني" className="contact-input" />
        <textarea placeholder="رسالتك" className="contact-textarea"></textarea>
        <button className="contact-button">إرسال</button>
      </form>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>معلومات الاتصال</h2>
        <p><strong>العنوان:</strong> شارع المثال, المدينة</p>
        <p><strong>الهاتف:</strong> +20 123 456 7890</p>
        <p><strong>البريد الإلكتروني:</strong> contact@example.com</p>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#" className="icon facebook">F</a>
        <a href="#" className="icon twitter">T</a>
        <a href="#" className="icon instagram">I</a>
      </div>
    </div>
  );
}

export default Contactus;
