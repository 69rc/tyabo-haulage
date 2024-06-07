import React from 'react';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: '6rem', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
            <Container className="py-5">
                <Row className="g-5">
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Address</h4>
                        <p className="mb-2"><FaMapMarkerAlt className="me-3" />15 itapeju</p>
                        <p className="mb-2"><FaPhoneAlt className="me-3" />+234 802 942 5952</p>
                        <p className="mb-2"><FaEnvelope className="me-3" />infotyabo-haulage.com</p>
                        <div className="d-flex pt-2">
                            <Button className="btn-outline-light btn-social"><FaTwitter /></Button>
                            <Button className="btn-outline-light btn-social"><FaFacebookF /></Button>
                            <Button className="btn-outline-light btn-social"><FaYoutube /></Button>
                            <Button className="btn-outline-light btn-social"><FaLinkedinIn /></Button>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Services</h4>
                        <Button className="btn-link">Air Freight</Button>
                        <Button className="btn-link">Sea Freight</Button>
                        <Button className="btn-link">Road Freight</Button>
                        <Button className="btn-link">Logistic Solutions</Button>
                        <Button className="btn-link">Industry solutions</Button>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Quick Links</h4>
                        <Button className="btn-link">About Us</Button>
                        <Button className="btn-link">Contact Us</Button>
                        <Button className="btn-link">Our Services</Button>
                        <Button className="btn-link">Terms & Condition</Button>
                        <Button className="btn-link">Support</Button>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <Input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <Button className="btn btns py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="copyright">
                    <Row>
                        <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                            © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            {/* Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            <br />Distributed By <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a> */}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
