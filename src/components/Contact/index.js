import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    const initialState = { name: '', email: '', message: '' };
    const [entry, setEntry] = useState(initialState);
    const { name, email, message } = entry;

    const handleOnChange = e => {
        setEntry({ ...entry, [e.target.name]: e.target.value });
        console.log(e.target.value)
    }
    return (
        <section className='col-12 d-flex flex-wrap justify-content-center mt-5'>
            <Form className='col-6 lightGray contactForm p-5'>
                <Form.Group controlId="nameControl">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        className='formLabel'
                        type="text"
                        placeholder="John Smith"
                        onBlur={handleOnChange}
                        defaultValue={name}
                        name="name"
                    />
                </Form.Group>
                <Form.Group controlId="emailControl">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='formLabel' type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="messageControl">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control className='formLabel' as="textarea" rows={5} />
                </Form.Group>
            </Form>
        </section>

    );
}
