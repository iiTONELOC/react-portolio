import React, { useState } from 'react';
import MyNav from './components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

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

    <Container
      bg="dark"
      fluid
      className={'m-0 p-0'}
    >
      <Row xs={12}>
        <Col xs={12}>
          <MyNav tabs={tabs}></MyNav>
        </Col>
        <Col xs={12}>
          {/* ABOUT */}
          {/* PROJECTS */}
          {/* CONTACT */}
          {/* RESUME */}
        </Col>
      </Row>
    </Container>



  );
}

export default App;
