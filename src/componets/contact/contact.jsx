import React from 'react';
import { Container, Row, Col, Form, Input, Button } from 'reactstrap';
import { FaHeadphones } from 'react-icons/fa'; // Import the headphone icon from react-icons

const ContactSection = () => {
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
                            <FaHeadphones className="fa-3x flex-shrink-0   text-white" />
                            </div>
                            <div className="ps-4">
                                <h6>Call for any query!</h6>
                                <h3 className="text m-0">+234 802 942 5952</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
                            <Form>
                                <Row className="g-3">
                                    <Col xs={12} sm={6}>
                                        <Input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: '55px' }} />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: '55px' }} />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Input type="text" className="form-control border-0" placeholder="Your Mobile" style={{ height: '55px' }} />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Input type="select" className="form-select border-0" style={{ height: '55px' }}>
                                            <option selected>Select A Subject</option>
                                            <option value="1">Subject 1</option>
                                            <option value="2">Subject 2</option>
                                            <option value="3">Subject 3</option>
                                        </Input>
                                    </Col>
                                    <Col xs={12}>
                                        <Input type="textarea" className="form-control border-0" placeholder="Your Message" />
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
