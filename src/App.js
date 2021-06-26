import React, { useState } from 'react';
import MyNav from './components/Nav';
import About from './components/About'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'

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
    <Container fluid className='m-0 p-0'>
      <MyNav tabs={tabs}></MyNav>
      <About></About>
      {/* PROJECTS */}
      {/* CONTACT */}
      {/* RESUME */}
    </Container>






  );
}

export default App;
