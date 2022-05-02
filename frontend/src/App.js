import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Expertise from './Pages/Expertise/Expertise';
import Home from './Pages/Home/Home';
import Method from './Pages/Method/Method';
import Header from './Pages/Header/Header'
import Footer from './Pages/Method/js/Footer'
import MobileApp from './Pages/MobileApp/MobileApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/expertise' element={<Expertise />} />
          <Route path='/methodology' element={<Method />} />
          <Route path='/mobile-app' element={<MobileApp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


