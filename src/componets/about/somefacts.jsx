import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaHeadphones, FaUsers, FaShip, FaStar } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";
import './facts.css'; // Make sure to create and import your custom CSS file

const FactsSection = () => {
    return (
        <div className="container-xxl py-5">
            <Container className="py-5 ">
                <Row className="g-5 ">
                    <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className=" head3 text-uppercase mb-3">Some Facts</h6>
                        <h1 className="mb-5">#1 Place To Manage All Of Your Logistics</h1>
                        <p className="mb-5">At Tyabo Haulage and Logistics, we specialize in offering comprehensive and reliable transport and logistics solutions. With a dedicated team and cutting-edge technology, we ensure that your shipments are managed efficiently from start to finish. Our commitment to excellence makes us the top choice for all your transportation needs.</p>
                        <div className="d-flex align-items-center ">
                            <div className='i'> 
                            <FaHeadphones className="fa-3x flex-shrink-0  text-white" />
                            </div>
                            <div className="ps-4 text-dark">
                                <h6>Call for any query!</h6>
                                <h3 className="text-danger m-0">+234 802 942 5952</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row className="g-4 align-items-center">
                            <Col sm={6}>
                                <Card className="bg-danger text-white p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                                    <CardBody>
                                        <FaUsers className="fa-2x mb-3" />
                                        <CardTitle tag="h2" className="mb-2" data-toggle="counter-up">1234</CardTitle>
                                        <CardText>Happy Clients</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="bg-info text-white p-4 wow fadeIn" data-wow-delay="0.5s">
                                    <CardBody>
                                        <FaShip className="fa-2x mb-3" />
                                        <CardTitle tag="h2" className="mb-2" data-toggle="counter-up">1234</CardTitle>
                                        <CardText>Complete Shipments</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="bg-success text-white p-4 wow fadeIn" data-wow-delay="0.7s">
                                    <CardBody>
                                        <FaStar className="fa-2x mb-3" />
                                        <CardTitle tag="h2" className="mb-2" data-toggle="counter-up">1234</CardTitle>
                                        <CardText>Customer Reviews</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FactsSection;
