import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/Main/Main';
// import './App.css'

function App() {
  const[darkMode, setDarkMode] = useState(true);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`flex bg-slate-700 ${darkMode && "dark"}`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <MainContent isOpen={isOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}


export default App
