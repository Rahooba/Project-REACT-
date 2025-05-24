import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-green">
      <div className="container-fluid">
        {/* هنا أضفنا العنصر الجديد للشعار */}
        <div className="d-flex align-items-center">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            
            
            <img 
              src={logo} 
              alt="شعار محافظة الوادي الجديد"
              width="40"
              height="40"
              className="d-inline-block align-right me-1"
            />
          </Link>
        </div>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">الصفحة الرئيسية</Link>
            <Link className="nav-link" to="/map">خرائط</Link>
            <Link className="nav-link" to="/mulberry">زراعة أشجار التوت</Link>
            <Link className="nav-link" to="/silkworm">تربية دودة القز</Link>
            <Link className="nav-link" to="/tools">الأدوات والمعدات</Link>
            <Link className="nav-link" to="/news">الأخبار والفعاليات</Link>
            <Link className="nav-link" to="/contact">تواصل معنا</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;