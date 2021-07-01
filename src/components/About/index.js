import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
export default function About() {
    return (
        <div className="jumbotron jumbotron-fluid m-0 p-2 bg-white">
            <div className="container mt-1 p-0 ">
                <Row className="d-flex flex-wrap justify-content-center p-3">
                    {/* HEADING */}
                    <Col xs={{ span: 10, order: 1 }} >
                        <h1 className='headingTitle mt-lg-5 text-center'>Hello, I'm Anthony</h1>
                    </Col>
                    {/* CONTENT */}
                    <Col xs={{ span: 10, order: 3 }} className='mt-5'>
                        <p className="lead">Full Stack Web Developer with proven experience as a project manager. Skills in HTML, CSS, JavaScript, React.js, RWD, and agile development. Passionate about solving problems and providing meaningful web applications with a mobile-first approach that improve the lives of those around me.
                        </p>
                    </Col>
                    {/* IMAGE/AVATAR */}
                    <Col xs={{ span: 10, order: 2 }} className=' d-flex justify-content-center'>
                        <img className='avatar' src='https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Prescription02&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Pale'

                            alt='Avatar' />
                    </Col>
                </Row>
            </div>
        </div >
    )
}