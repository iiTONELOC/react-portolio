import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
import works from './port_assets';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'


export default function Projects() {
    const wrapper = React.createRef();

    return (
        <section className='mt-3 p-3 d-flex flex-wrap justify-content-center'>
            <h1> Projects </h1>
            <div className='d-flex flex-wrap flex-row justify-content-center'>
                {works.map((project) => (
                    <Accordion
                        className=' m-1 p-1 col-11 col-sm-8 col-md-5 col-lg-4 col-xl-3 projectCard'
                        key={project.name}

                    >
                        <Card
                            className='bg-light border border-success shadow-lg'
                        >
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey={wrapper}
                                className='h-100' >
                                <Card.Img
                                    className='projectImage'
                                    variant="top"
                                    src={project.screenshot}
                                />
                                <Card.Body
                                    className='d-flex flex-wrap justify-content-start'
                                >
                                    <div className='col-12 projectTitle mb-2 border-dark border-bottom '>{project.name}</div>
                                    <Card.Text className='col-12'>
                                        {project.tech.map((el, idx) => (
                                            <Badge
                                                variant={el.variant}
                                                key={el.variant + idx}
                                                className={`${el.bg ? `${el.bg}  p-2 m-1 text-white textShadow boxShadow` : ` text-white p-2 mb-1 m-1 textShadow boxShadow`}`}
                                            >
                                                {el.icon ? el.icon : el.name}
                                            </Badge>
                                        ))}
                                    </Card.Text>
                                    <div className='col-12 d-flex flex-wrap justify-content-start mt-5'>
                                        <Accordion.Collapse
                                            eventKey={wrapper}
                                            ref={wrapper}
                                        >
                                            <div >
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    className='m-1'
                                                    href={project.url}
                                                    target='_blank'
                                                    rel='noreopener'
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-display" viewBox="0 0 16 16">
                                                        <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                                                    </svg>
                                                    {''} View Live
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    className='m-1'
                                                    href={project.repo}
                                                    target='_blank'
                                                    rel='noreopener'
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
                                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                                                    </svg>
                                                    {''} Repo
                                                </Button>
                                            </div>
                                        </Accordion.Collapse>
                                    </div>
                                </Card.Body>
                                <div className='col-12 d-flex flex-wrap justify-content-end'>
                                    <Badge
                                        variant=''
                                        className='text-white p-2 mb-1 textShadow boxShadow lightGreen'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-binoculars-fill" viewBox="0 0 16 16">
                                            <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z" />
                                        </svg>
                                    </Badge>
                                </div>


                            </Accordion.Toggle>
                        </Card>
                    </Accordion>
                ))}
            </div>
        </section>

    )
}