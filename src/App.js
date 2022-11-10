import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

const getDatafromLS = () => {
  const data = localStorage.getItem('datas');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

function App() {
  const [datas, setdatas] = useState(getDatafromLS());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <Router>
        <Navbar />
        <div className="container homeslide searchpage">
          <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/About' element={ <About /> } />
            <Route path='/Contact' element={ <Contact datas={datas} setdatas={setdatas} name={name} setName={setName} email={email} setEmail={setEmail} phoneNo={phoneNo} setPhoneNo={setPhoneNo} message={message} setMessage={setMessage} /> } />
            <Route path='/Admin' element={ <Admin datas={datas} setdatas={setdatas} name={name} setName={setName} email={email} setEmail={setEmail} phoneNo={phoneNo} setPhoneNo={setPhoneNo} message={message} setMessage={setMessage} /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
