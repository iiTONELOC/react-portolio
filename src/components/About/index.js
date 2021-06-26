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
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus, perferendis nemo inventore iste unde dolor reprehenderit et quisquam ad autem tempora aliquid quibusdam perspiciatis officia animi cumque corporis sed.
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