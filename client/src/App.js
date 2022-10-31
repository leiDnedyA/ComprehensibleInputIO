import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <p>ComprehensibleInput.io</p>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
