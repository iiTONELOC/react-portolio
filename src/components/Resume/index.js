import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
export default function Resume() {
    return (
        <div className="jumbotron jumbotron-fluid m-0 p-2 bg-white">
            <div className="container mt-1 p-0 ">
                <Row className="d-flex flex-wrap justify-content-center p-3">
                    {/* HEADING */}
                    <Col xs={{ span: 10, order: 1 }} className='d-flex flex-wrap flex-column align-items-start '>
                        <header className='col-12 d-flex justify-content-start'>
                            <h1 className='headingTitle mt-lg-5 text-center'>Resume</h1>
                        </header>
                        <span className='rebeccaPurple d-flex justify-content-center p-2 border downloadIcon boxShadow ml-3 pulse'>
                            <i className="bi bi-download" style={{ fontSize: '2.5rem', color: 'white' }}></i>
                        </span>


                    </Col>
                    {/* CONTENT */}
                    <Col xs={{ span: 10, order: 3 }} className='mt-5'>
                        <p className="lead">Full Stack Web Developer with proven experience as a project manager. Skills in HTML, CSS, JavaScript, React.js, RWD, and agile development. Passionate about solving problems and providing meaningful web applications with a mobile-first approach that improve the lives of those around me.
                        </p>
                    </Col>
                    {/* IMAGE/AVATAR */}
                    <Col xs={{ span: 10, order: 2 }} className='avatar d-flex justify-content-center'>
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Prescription02&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Pale'

                            alt='Avatar' />
                    </Col>
                </Row>
            </div>
        </div >
    )
}