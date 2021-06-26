import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';







export default function MyNav(props) {

    // pass the nav tabs down from App so we can control what renders
    const {
        tabs = [],
    } = props;
    // handles the nav link highlighting when the mouse is over the selection
    const changeButtonColor = (e, remove) => {
        const linkStyle = 'background-color: rgba(208, 121, 227, 0.767); border-radius: 5px; color: black;)';
        const target = e.target;
        if (target.matches('span')) target.parentElement.style = linkStyle;
        if (target.matches('a')) target.style = linkStyle;
        if (remove) target.matches('span') ? target.parentElement.style = '' : target.style = '';
    }



    // NAV RETURN
    return (
        <Navbar bg="dark" variant="dark" className={'d-flex flex-wrap justify-content-between'}>
            <div>
                <Navbar.Brand href="#home">Anthony T</Navbar.Brand>
            </div>

            <Nav className="">
                {tabs.map((tabs) => (
                    <Nav.Link
                        onPointerOver={(e) => { changeButtonColor(e) }}
                        onPointerOut={(e) => { changeButtonColor(e, true) }}
                        href={`#${tabs.name}`}
                        key={tabs.name}
                    >{tabs.name}</Nav.Link>
                ))}
            </Nav>
        </Navbar>

    );
}
