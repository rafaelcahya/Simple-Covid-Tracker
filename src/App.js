import Home from './pages/home/Home';

import './style/font.css';
import './style/config.css';
import './style/config.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Global from './pages/global/Global';
import Country from './pages/Country/Country';
import Continent from './pages/Continent/Continent';
import Vaccine from './pages/vaccine/Vaccine';
import VaccineTracker from './pages/vaccine tracker/VaccineTracker';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
            <style>{'body { background-color: #eff1fc; }'}</style>
        </Helmet>
        <Router>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/global' exact element={<Global/>} />
                <Route path='/country' exact element={<Country/>} />
                <Route path='/continent' exact element={<Continent/>} />
                <Route path='/vaccine' exact element={<Vaccine/>} />
                <Route path='/vaccine-tracker' exact element={<VaccineTracker/>} />
            </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
