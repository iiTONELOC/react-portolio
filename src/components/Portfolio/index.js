import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
import works from './port_assets';
import Accordion from 'react-bootstrap/Accordion'

export default function Projects() {
    const wrapper = React.createRef();

    return (
        <section className='mt-3 p-3 d-flex flex-wrap justify-content-center'>

            <h1> Projects </h1>

            <div className='d-flex flex-wrap flex-row justify-content-center'>

                {works.map((project) => (
                    <Accordion className=' m-1 p-1 col-11 col-sm-8 col-md-5 col-lg-4 col-xl-3' key={project.name} >
                        <Card className='bg-light border border-success shadow-lg h-100'>
                            <Accordion.Toggle as={Card.Header} eventKey={wrapper} className='h-100' >
                                <Card.Img className='projectImage' variant="top" src={project.screenshot} />
                                <Card.Body className='d-flex flex-wrap justify-content-start'>
                                    <Card.Title className='col-12'>{project.name}</Card.Title>
                                    <Card.Text >
                                        {project.tech.map((el, idx) => (
                                            <Badge variant={el.variant} key={el.variant + idx} className={`${el.bg ? `${el.bg} m-1 p-2 text-white textShadow boxShadow` : 'text-white m-1 p-2 textShadow boxShadow'}`}>{el.name}</Badge>
                                        ))}
                                    </Card.Text>
                                    <Accordion.Collapse eventKey={wrapper} ref={wrapper}>
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Toggle>
                        </Card>
                    </Accordion>
                ))}
            </div>
        </section>

    )
}