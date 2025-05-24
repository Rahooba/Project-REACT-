
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import MapPage from './Components/MapPage';
import Contactus from './Components/Contactus';
import MulberryPage from './Components/MulberryPage';
import SilkwormPage from './Components/SilkwormPage';
import ToolsPage from './Components/ToolsPage';
import NewsPage from './Components/NewsPage';
import About from './Components/About';


function App() {
  return (

    <div className="flex flex-col min-h-screen">
  
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/mulberry" element={<MulberryPage />} />
            <Route path="/silkworm" element={<SilkwormPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </main>
      </div>

  );
}

export default App;
