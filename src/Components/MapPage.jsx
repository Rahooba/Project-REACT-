import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'framer-motion';
import './MapPage.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Create red icon for Kharga
const createRedIcon = () => {
  return new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// Create purple icon for silk projects
const createPurpleIcon = () => {
  return new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: 'pulse-marker'
  });
};

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

const MapPage = () => {
  // New Valley Governorate coordinates
  const khargaCity = [25.4404, 30.5584]; // Kharga (center of New Valley)
  
  const silkProjectLocations = [
    { 
      id: 1, 
      name: 'مشروع الحرير بالخارجة', 
      position: [25.4514, 30.5464], 
      type: 'مشروع قائم',
      details: 'مساحة 10 فدادين - 50 شجرة توت مزروعة منذ 2019'
    },
    { 
      id: 2, 
      name: 'أراضي واعدة بالداخلة', 
      position: [25.4950, 29.1667], 
      type: 'تربة مناسبة',
      details: 'مساحة 100 فدان - تربة طينية خصبة بمنطقة موط'
    },
    { 
      id: 3, 
      name: 'مشروع تجريبي بالفرافرة', 
      position: [27.0574, 27.9664], 
      type: 'مرحلة تجريبية',
      details: '5 فدادين - 20 شجرة توت تحت الاختبار'
    },
  ];

  useEffect(() => {
    const mapElement = document.querySelector('.leaflet-container');
    if (mapElement) {
      mapElement.style.opacity = '0';
      setTimeout(() => {
        mapElement.style.transition = 'opacity 1s ease-in-out';
        mapElement.style.opacity = '1';
      }, 500);
    }
  }, []);

  return (
    <motion.div 
      className="map-page-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="map-title"
        variants={itemVariants}
      >
        خريطة مشروعات الحرير الطبيعي بالوادي الجديد
      </motion.h1>
      
      <motion.div 
        className="map-description"
        variants={itemVariants}
      >
        <p>العلامة الحمراء تشير إلى مركز محافظة الوادي الجديد (الخارجة)</p>
        <p>العلامات البنفسجية تشير إلى مواقع مشروعات الحرير</p>
      </motion.div>
      
      <motion.div 
        className="map-wrapper"
        variants={itemVariants}
      >
        <MapContainer 
          center={khargaCity} 
          zoom={8}
          className="google-style-map"
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Google Maps tile layer */}
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={['mt0','mt1','mt2','mt3']}
            attribution='&copy; <a href="https://maps.google.com">Google Maps</a>'
          />
          
          {/* Red marker for Kharga (New Valley center) */}
          <Marker 
            position={khargaCity} 
            icon={createRedIcon()}
          >
            <Popup className="main-popup">
              <h3>مركز محافظة الوادي الجديد</h3>
              <p>مدينة الخارجة</p>
              <p>عاصمة محافظة الوادي الجديد</p>
            </Popup>
          </Marker>
          
          {/* Purple markers for silk projects */}
          {silkProjectLocations.map((location) => (
            <Marker 
              key={location.id} 
              position={location.position} 
              icon={createPurpleIcon()}
              eventHandlers={{
                mouseover: (e) => {
                  e.target.openPopup();
                },
                mouseout: (e) => {
                  e.target.closePopup();
                }
              }}
            >
              <Popup className="custom-popup" closeButton={false}>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="popup-title">{location.name}</h3>
                  <p className="popup-type">{location.type}</p>
                  <p className="popup-details">{location.details}</p>
                  <div className="popup-footer">
                    <button className="details-button">
                      التفاصيل الكاملة
                    </button>
                  </div>
                </motion.div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>

      <motion.div 
        className="location-list"
        variants={itemVariants}
      >
        <h3 className="list-title">مواقع مشروعات الحرير بالوادي الجديد</h3>
        <div className="legend">
          <div className="legend-item">
            <div className="legend-color red"></div>
            <span>مركز المحافظة (الخارجة)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color purple"></div>
            <span>مشاريع الحرير</span>
          </div>
        </div>
        <ul>
          {silkProjectLocations.map((location) => (
            <motion.li 
              key={location.id}
              whileHover={{ scale: 1.03, backgroundColor: '#f0e6ff' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.querySelector(`.leaflet-marker-icon[alt="Marker ${location.id}"]`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  element.click();
                }
              }}
            >
              <span className="location-name">{location.name}</span>
              <span className="location-type">{location.type}</span>
              <span className="location-coords">
                {location.position[0].toFixed(4)}, {location.position[1].toFixed(4)}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default MapPage;