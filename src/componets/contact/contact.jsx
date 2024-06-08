import React, { useState } from 'react';
import { Container, Row, Col, Form, Input, Button } from 'reactstrap';
import { FaHeadphones } from 'react-icons/fa';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="container-xxl py-5">
            <Container className="py-5">
                <Row className="g-5 align-items-center">
                    <Col lg={5} className="wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text text-uppercase mb-3">Contact Us</h6>
                        <h1 className="mb-5">Get In Touch!</h1>
                        <p className="mb-5">For any inquiries or assistance, feel free to reach out to us.</p>
                        <div className="d-flex align-items-center">
                            <div className='i'>
                                <FaHeadphones className="fa-3x flex-shrink-0 text-white" />
                            </div>
                            <div className="ps-4">
                                <h6>Call for any query!</h6>
                                <h3 className="text m-0">+234 802 942 5952</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
                            <Form onSubmit={handleSubmit}>
                                <Row className="g-3">
                                    <Col xs={12} sm={6}>
                                        <Input
                                            type="text"
                                            name="name"
                                            className="form-control border-0"
                                            placeholder="Your Name"
                                            style={{ height: '55px' }}
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Input
                                            type="email"
                                            name="email"
                                            className="form-control border-0"
                                            placeholder="Your Email"
                                            style={{ height: '55px' }}
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Input
                                            type="text"
                                            name="mobile"
                                            className="form-control border-0"
                                            placeholder="Your Mobile"
                                            style={{ height: '55px' }}
                                            value={formData.mobile}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Input
                                            type="select"
                                            name="subject"
                                            className="form-select border-0"
                                            style={{ height: '55px' }}
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select A Subject</option>
                                            <option value="Subject 1">Subject 1</option>
                                            <option value="Subject 2">Subject 2</option>
                                            <option value="Subject 3">Subject 3</option>
                                        </Input>
                                    </Col>
                                    <Col xs={12}>
                                        <Input
                                            type="textarea"
                                            name="message"
                                            className="form-control border-0"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <Button className="btn btns w-100 py-3" type="submit">Send Message</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactSection;
