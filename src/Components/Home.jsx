import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

// Import images
import silkProduction from './images/silk-production.jpg';
import mulberryTrees from './images/mulberry-trees.jpg';
import silkworms from './images/silkworms.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
  }
};

function Home() {
  return (
    <motion.div 
      className="home-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        variants={itemVariants}
      >
        <motion.div 
          className="hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            حرير الوادي الجديد: إرث طبيعي يصنع المستقبل
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            موقع لخدمات صناعة الحرير الطبيعي وزراعة أشجار التوت بمحافظة الوادي الجديد
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about" className="cta-button">تعرف على مشروعنا</Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Quick Stats */}
      <motion.section 
        className="stats-section section-dark"
        variants={itemVariants}
      >
        <motion.h2 
          className="section-title"
          whileInView={{ scale: [0.95, 1] }}
          viewport={{ once: true }}
        >
          إنجازات المشروع
        </motion.h2>
        <div className="stats-grid">
          {[
            { value: "500+", label: "شجرة توت مزروعة" },
            { value: "120+", label: "مربي دودة قز" },
            { value: "2 طن", label: "حرير طبيعي سنويًا" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover="hover"
              variant={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <motion.h3 
                animate={{ 
                  scale: [1, 1.1, 1],
                  color: ["#6a0dad", "#4b0082", "#6a0dad"]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {stat.value}
              </motion.h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Production Stages */}
      <motion.section 
        className="production-section"
        variants={itemVariants}
      >
        <motion.h2 
          className="section-title"
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
        >
          مراحل إنتاج الحرير
        </motion.h2>
        <div className="production-steps" >
          {[
            { 
              img: mulberryTrees, 
              title: "المرحلة الأولى: زراعة التوت", 
              desc: "نزرع أشجار التوت التي تعتبر الغذاء الأساسي لدودة القز" 
            },
            { 
              img: silkworms, 
              title: "المرحلة الثانية: تربية الدودة", 
              desc: "رعاية دودة القز حتى تكمل دورة حياتها وتصنع الشرنقة" 
            },
            { 
              img: silkProduction, 
              title: "المرحلة الثالثة: استخلاص الحرير", 
              desc: "استخراج خيوط الحرير من الشرانق بطريقة تقليدية" 
            }
          ].map((step, index) => (
            <motion.div 
              key={index}
              className="step"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.img 
                src={step.img} 
                alt={step.title}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
{/* Quick Links Section */}
<motion.section 
  className="links-section section-dark"
  variants={itemVariants}
>
  <motion.h2 
    className="section-title"
    whileInView={{ scale: [1.05, 1] }}
    viewport={{ once: true }}
  >
    استكشف المزيد
  </motion.h2>

  <div className="quick-links-container">
    {[
      {
        title: "خرائط المزارع",
        description: "اكتشف مواقع مزارع التوت في الوادي الجديد",
        icon: "fas fa-map-marked-alt",
        link: "/map"
      },
      {
        title: "زراعة التوت",
        description: "تعلم أساليب زراعة أشجار التوت",
        icon: "fas fa-tree",
        link: "/mulberry"
      },
      {
        title: "تربية الدودة",
        description: "دليل متكامل لتربية دودة القز",
        icon: "fas fa-bug",
        link: "/silkworm"
      },
      {
        title: "تواصل معنا",
        description: "تواصل مع فريق الدعم الفني",
        icon: "fas fa-envelope",
        link: "/contact"
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        className="explore-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        <Link to={item.link} className="card-link">
          <div className="card-icon">
            <i className={item.icon}></i>
          </div>
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Link>
      </motion.div>
    ))}
  </div>
</motion.section>


    </motion.div>
    
  )
}

export default Home;