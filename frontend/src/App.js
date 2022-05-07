import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Expertise from './Pages/Expertise/Expertise';
import HomePage from './Pages/Home/HomePage';
import Method from './Pages/Method/Method';
import Header from './Pages/Header/Header'
import Footer from './Pages/Method/js/Footer'
import MobileApp from './Pages/MobileApp/MobileApp';
import BusinessContinuty from './Pages/Company/Components/BusinessContinuty';
import QualityManagement from './Pages/Company/Components/QualityManagement';
import Engagement from './Pages/Company/Components/Engagement';
import Contact from './Pages/ContactUs/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='/expertise' element={<Expertise />} />
          <Route path='/methodology' element={<Method />} />
          <Route path='/mobile-app' element={<MobileApp />} />
          <Route path='/business-continuity' element={<BusinessContinuty />} />
          <Route path='/quality-management' element={<QualityManagement />} />
          <Route path='/engagement-models' element={<Engagement />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


