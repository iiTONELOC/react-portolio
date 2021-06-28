import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Icons from '../../assets/icons';
import myResume from '../../assets/resume.pdf';
import Badge from 'react-bootstrap/Badge'
const icon = Icons();


export default function Resume() {
    const skills = [
        {
            name: 'Front End',
            skills: [
                { name: 'HTML', variant: 'secondary', bg: '', icon: icon.htmlIcon },
                { name: 'CSS', variant: 'secondary', bg: '', icon: icon.cssIcon },
                { name: 'Bootstrap', variant: 'secondary', bg: '', icon: icon.bootStrap },
                { name: 'Tailwinds', variant: 'secondary', bg: '', icon: icon.twCssIcon },
                { name: 'JavaScript', variant: 'secondary', bg: '', icon: icon.jsIcon },
                { name: 'jQuery', variant: 'secondary', bg: '', icon: icon.jQuery },
                { name: 'React', variant: 'secondary', icon: icon.react },

            ]
        },
        {
            name: 'Back End',
            skills: [
                { name: 'APIs', variant: 'secondary', bg: '', icon: icon.apiIcon },
                { name: 'Node.js', variant: 'secondary', bg: '', icon: icon.nodeIcon },
                { name: 'Express.js', variant: 'secondary', bg: '', icon: icon.express },
                { name: 'MySQL', variant: 'secondary', icon: icon.mysqlIcon },
                { name: 'Sequelize', variant: 'secondary', bg: '', icon: icon.sqlIze },
                { name: 'MongoDB', variant: 'secondary', bg: '', icon: icon.mongo },
                { name: 'Mongoose', variant: 'secondary', bg: '', icon: icon.mongoose },
            ]
        }
    ]
    return (
        <div className="jumbotron jumbotron-fluid m-0 p-2 bg-white">
            <div className="container mt-1 p-0 ">
                <Row className="d-flex flex-wrap justify-content-center p-3">
                    {/* HEADING */}
                    <Col xs={{ span: 10, order: 1 }} className='d-flex flex-wrap flex-column align-items-center'>
                        <header className='col-12 d-flex justify-content-center'>
                            <h1 className='headingTitle mt-lg-5 text-center'>Resume</h1>
                        </header>
                        <div className='d-flex'>
                            <a href={myResume} download><span className='rebeccaPurple d-flex justify-content-center p-2 border downloadIcon boxShadow ml-3 pulse'>
                                <i className="bi bi-file-earmark-pdf-fill" style={{ fontSize: '2.5rem', color: 'white' }}></i> <br></br> <p className='text-white mt-3'>Download</p>
                            </span></a>
                            <a href={myResume} ><span className='lightGreen d-flex justify-content-center p-2 border viewIcon boxShadow ml-3 pulse'>
                                <i className="bi bi-search" style={{ fontSize: '2.5rem', color: 'white' }}></i> <br></br> <p className='text-white mt-3'>View</p>
                            </span></a>
                        </div>




                    </Col>
                    {/* CONTENT */}
                    {/* IMAGE/AVATAR */}
                    <Col xs={{ span: 10, order: 2 }} className=' d-flex flex-wrap justify-content-center'>
                        {skills.map((el) => (
                            <ul className='mt-5 col-6 d-flex flex-column justify-content-center align-items-center list-unstyled' key={el.name}>
                                <li> <h2>{el.name}</h2>
                                    <ul className='list-unstyled '>
                                        {el.skills.map((skill) => (
                                            <li className='m-1' key={skill.name}>
                                                <div key={'div'}
                                                    className='col-12 d-flex justify-content-start align-items-start pulseHoverOnly'
                                                >
                                                    <Badge
                                                        variant={skill.variant}
                                                        key={skill.name}
                                                        className={`${skill.bg ? `${skill.bg}  p-2 my-1 mr-1 text-white textShadow boxShadow` : ` text-white p-2 my-1 mr-1 textShadow boxShadow`}`}
                                                    >
                                                        {skill.icon ? skill.icon : skill.name}
                                                    </Badge>
                                                    <span className={`
                                                ${skill.bg ? `${skill.bg !== 'white' ? `${skill.bg} text-white` : skill.bg} m-1   roundedIcon boxShadow` : `bg-${`${skill.variant !== 'light' ? `${skill.variant} text-white` : skill.variant}`} m-1   roundedIcon boxShadow d-flex flex-wrap justify-content-center`}`}>
                                                        <p className='p-2 d-flex'>{skill.name}</p>
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </li>


                            </ul>
                        ))}
                    </Col>
                </Row>
            </div>
        </div >
    )
}