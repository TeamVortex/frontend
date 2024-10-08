import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar showAlert={showAlert} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<Home mode={mode} showAlert={showAlert} role={'college'}/>} />
        <Route path='/login' element={<Login initialPage={'login'} mode={mode} showAlert={showAlert}/>} />
        <Route path='/signup' element={<Login initialPage={'createAccount'} mode={mode} showAlert={showAlert}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/fileupload' element={<FileUpload />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
