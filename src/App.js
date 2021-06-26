import React, { useState } from 'react';
import MyNav from './components/Nav';
import About from './components/About';
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
  return (
    <main>
      <div className='container-fluid m-0 p-0 mainContainer'>
        <MyNav tabs={tabs}></MyNav>
        <About></About>
        {/* PROJECTS */}
        {/* CONTACT */}
        {/* RESUME */}

      </div >
      <Footer></Footer>
    </main>
  );
}

export default App;
