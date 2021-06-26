import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';







export default function MyNav(props) {

    // pass the nav tabs down from App so we can control what renders
    const {
        tabs = [],
    } = props;
    // handles the nav link highlighting when the mouse is over the selection
    const changeButtonColor = (e, remove) => {
        const linkStyle = 'background-color: rgba(208, 121, 227, 0.767); border-radius: 5px;)';
        const target = e.target;
        if (target.matches('span')) target.parentElement.style = linkStyle;
        if (target.matches('a')) target.style = linkStyle;
        if (remove) target.matches('span') ? target.parentElement.style = '' : target.style = '';
    }



    // NAV RETURN
    return (
        <Container fluid className='navBar'>
            <Navbar className={'d-flex flex-wrap justify-content-between p-5'}>
                <div className='d-flex flex-wrap justify-content-center'>
                    <Navbar.Brand href="#home" ><h1 className='navTitle'>Anthony T</h1> </Navbar.Brand>
                </div>

                <Nav className='d-flex flex-wrap justify-content-center'>
                    {tabs.map((tabs) => (
                        <Nav.Link
                            onPointerOver={(e) => { changeButtonColor(e) }}
                            onPointerOut={(e) => { changeButtonColor(e, true) }}
                            href={`#${tabs.name}`}
                            key={tabs.name}
                            className="navLink text-white"
                        >{tabs.name}</Nav.Link>
                    ))}
                </Nav>
            </Navbar>
        </Container>


    );
}
