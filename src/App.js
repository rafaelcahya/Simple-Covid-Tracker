import Home from './pages/home/Home';

import './style/font.css';
import './style/config.css';
import './style/config.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Global from './pages/global/Global';

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
            </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
