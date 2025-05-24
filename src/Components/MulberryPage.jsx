import React from 'react';
import { motion } from 'framer-motion';
import './MulberryPage.css';

// Import images (you'll need to add these to your project)
import mulberryVarieties from './images/mulberry-varieties.jpg';
import planting from './images/Optimal planting dates.jpg';
import pruning from './images/pruning.jpg';
import fertilization from './images/Organic fertilizer.jpg';
import problems from './images/mulberry-problems.jpg';
import pruningVideo from './Videos/pruningvid.mp4';
import problemsvid from './Videos/mulberry-problemsvid.mp4';
import fertilizationvid from './Videos/Organic fertilizervid.mp4';

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
    scale: 1.03,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  }
};

function MulberryPage() {
  const cultivationData = [
    {
      title: "الأصناف المناسبة للوادي الجديد",
      content: [
        "1. التوت الأبيض (Morus alba): الأكثر ملاءمة للمناخ الصحراوي",
        "2. التوت الأسود (Morus nigra): ينمو جيدًا مع الري الكافي",
        "3. التوت الباكستاني: يتحمل الجفاف وينتج ثمارًا كبيرة",
        "4. صنف شاه التوت: مناسب للتربة الرملية"
      ],
      tips: "ينصح باختيار الأصناف المطعمة لمقاومة أعلى للملوحة",
      image: mulberryVarieties
    },
    {
      title: "مواعيد الزراعة المثلى",
      content: [
        "• الفترة المثلى: من منتصف فبراير إلى نهاية مارس",
        "• يمكن الزراعة في أكتوبر ونوفمبر في المناطق المحمية",
        "• تجنب زراعة الشتلات في أشهر الصيف الحارة",
        "• أفضل وقت للزراعة عندما تكون درجة الحرارة بين 20-30°م"
      ],
      tips: "الزراعة في الصباح الباكر أو قبل الغروب تقلل من إجهاد الشتلات",
      image: planting
    },
    {
      title: "برامج التقليم الموسمية",
      content: [
        "التقليم الشتوي (يناير-فبراير):",
        "- إزالة الأفرع الميتة والمصابة",
        "- تقصير الأفرع الرئيسية بمقدار الثلث",
        "",
        "التقليم الصيفي (يونيو-يوليو):",
        "- تخفيف الأوراق الكثيفة",
        "- إزالة السرطانات"
      ],
      tips: "استخدم أدوات تقليم معقمة لتجنب انتشار الأمراض",
      image: pruning 
    },
    {
      title: "جداول التسميد المتكاملة",
      content: [
        "السماد العضوي:",
        "- 20 كجم سماد بلدي متحلل لكل شجرة سنويًا",
        "",
        "الأسمدة الكيماوية (للشجرة البالغة):",
        "- 500 جم سوبر فوسفات ثلاثي في الشتاء",
        "- 300 جم سلفات بوتاسيوم مقسمة على 3 دفعات",
        "- 200 جم نترات أمونيوم خلال النمو النشط"
      ],
      tips: "يوصى بإجراء تحليل التربة قبل التسميد",
      image: fertilization
    },
    {
      title: "المشاكل الشائعة وحلولها",
      content: [
        "1. اصفرار الأوراق:",
        "- سبب محتمل: نقص الحديد",
        "- العلاج: رش بمحلول شيلات الحديد",
        "",
        "2. تساقط الثمار:",
        "- سبب محتمل: نقص البورون",
        "- العلاج: التسميد بورقياً ببوراكس 0.5%",
        "",
        "3. الإصابة بالحشرات القشرية:",
        "- العلاج: رش بزيت النيم أو المبيدات المناسبة"
      ],
      tips: "المراقبة الدورية تمنع تفاقم المشاكل",
      image: problems
    }
  ];
const videos = [
    {
      title: "طريقة تقليم أشجار التوت",
      src: pruningVideo,
      poster: pruning // Using your existing image as poster frame
    },
    {
      title: "كيفية مكافحة آفات التوت",
      src: problemsvid,
      poster: problems
    },
    {
      title: "برنامج التسميد السنوي",
      src: fertilizationvid,
      poster: fertilization
    }
  ];

  return (
    <motion.div 
      className="mulberry-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

      <motion.section 
        className="content-section"
        variants={itemVariants}
      >
        <motion.h2 
          className="section-title"
          whileInView={{ scale: [0.95, 1] }}
          viewport={{ once: true }}
        >
          أساسيات زراعة التوت
        </motion.h2>
        
        <div className="cultivation-grid">
          {cultivationData.map((item, index) => (
            <motion.div
              key={index}
              className="cultivation-card"
              variants={itemVariants}
              whileHover="hover"
              variantss={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <ul>
                  {item.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {item.tips && (
                  <div className="card-tips">
                    <strong>نصيحة خبراء:</strong> {item.tips}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

     <motion.section className="video-section section-dark">
        <motion.h2 className="section-title">
          فيديوهات توضيحية
        </motion.h2>
        
        <div className="video-grid">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="video-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="video-wrapper">
                <video
                  controls
                  poster={video.poster}
                  className="video-player"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4>{video.title}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

export default MulberryPage;