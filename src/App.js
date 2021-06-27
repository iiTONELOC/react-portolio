import React, { useState } from 'react';
import MyNav from './components/Nav';
import About from './components/About';
import Projects from './components/Portfolio';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // constants for nav bar
  const [tabs] = useState([
    {
      name: 'About'
    },
    { name: 'Projects' },
    { name: 'Contact' },
    { name: 'Resume' },
  ]);
  const [currentView, setCurrentView] = useState(tabs[0]);
  return (
    <main>
      <div className='container-fluid m-0 p-0 mainContainer'>
        <MyNav
          tabs={tabs}
          setCurrentView={setCurrentView}
          currentView={currentView}
        >
        </MyNav>
        <About></About>
        {currentView.name === "Projects" && <Projects></Projects>}
        {/* CONTACT */}
        {/* RESUME */}
      </div >
      <Footer></Footer>
    </main>
  );
}

export default App;
