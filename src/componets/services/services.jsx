import React from 'react';
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from 'reactstrap';
import { FaArrowRight } from 'react-icons/fa';  // Import the arrow icon from react-icons
// import services1 from '../../assets/service-1.jpg';
// import services2 from '../../assets/service-2.jpg';
// import services3 from '../../assets/service-3.jpg';
// import services4 from '../../assets/service-4.jpg';
// import services5 from '../../assets/service-5.jpg';
// import services6 from '../../assets/service-6.jpg';
import './services.css'; // Make sure to create and import your custom CSS file

const ServicesSection = () => {
    return (
        <div className="container-xxl py-5">
            <Container className="py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text text-uppercase">Our Services</h6>
                    <h1 className="mb-5">Explore Our Services</h1>
                </div>
                <Row className="g-4">
                    <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.3s">
                        <Card className="service-item p-4">
                            <CardImg top className="img-fluid" src='https://themewagon.github.io/logistica/img/service-1.jpg' alt="Air Freight" />
                            <CardBody>
                                <CardTitle tag="h4" className="mb-3">Air Freight</CardTitle>
                                <CardText>Our air freight services ensure quick and reliable delivery for your urgent shipments. We manage everything from booking to tracking, providing seamless air logistics solutions.</CardText>
                                <Button className="btn-slide mt-2 btns d-flex align-items-center" href="">
                                    <FaArrowRight className="arrow-icon" /> <span className="read-more-text">Read More</span>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.5s">
                        <Card className="service-item p-4">
                            <CardImg top className="img-fluid" src="https://themewagon.github.io/logistica/img/service-2.jpg" alt="Ocean Freight" />
                            <CardBody>
                                <CardTitle tag="h4" className="mb-3">Ocean Freight</CardTitle>
                                <CardText>Our ocean freight services cover all major global ports, offering flexible and cost-effective sea transport solutions for your large-volume shipments.</CardText>
                                <Button className="btn-slide mt-2 btns d-flex align-items-center" href="">
                                    <FaArrowRight className="arrow-icon" /> <span className="read-more-text">Read More</span>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.7s">
                        <Card className="service-item p-4">
                            <CardImg top className="img-fluid" src='https://themewagon.github.io/logistica/img/service-3.jpg' alt="Road Freight" />
                            <CardBody>
                                <CardTitle tag="h4" className="mb-3">Road Freight</CardTitle>
                                <CardText>We provide reliable road freight services for local and cross-border transport. Our extensive fleet ensures timely and secure delivery of your goods.</CardText>
                                <Button className="btn-slide mt-2 btns d-flex align-items-center" href="">
                                    <FaArrowRight className="arrow-icon" /> <span className="read-more-text">Read More</span>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.3s">
                        <Card className="service-item p-4">
                            <CardImg top className="img-fluid" src='https://themewagon.github.io/logistica/img/service-3.jpg' alt="Train Freight" />
                            <CardBody>
                                <CardTitle tag="h4" className="mb-3">Train Freight</CardTitle>
                                <CardText>Our train freight services offer a sustainable and cost-effective solution for transporting large quantities of goods over long distances.</CardText>
                                <Button className="btn-slide mt-2 btns d-flex align-items-center" href="">
                                    <FaArrowRight className="arrow-icon" /> <span className="read-more-text">Read More</span>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.5s">
                        <Card className="service-item p-4">
                            <CardImg top className="img-fluid" src='https://themewagon.github.io/logistica/img/service-4.jpg' alt="Customs Clearance" />
                            <CardBody>
                                <CardTitle tag="h4" className="mb-3">Customs Clearance</CardTitle>
                                <CardText>We provide expert customs clearance services, ensuring that your shipments comply with all regulations and reach their destination without delay.</CardText>
                                <Button className="btn-slide mt-2 btns d-flex align-items-center" href="">
                                    <FaArrowRight className="arrow-icon" /> <span className="read-more-text">Read More</span>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.7s">
                        <Card className="service-item p-4">
                            <CardImg top className="img-fluid" src='https://themewagon.github.io/logistica/img/service-4.jpg' alt="Warehouse Solutions" />
                            <CardBody>
                                <CardTitle tag="h4" className="mb-3">Warehouse Solutions</CardTitle>
                                <CardText>Our warehouse solutions include storage, inventory management, and distribution, providing a comprehensive service to streamline your supply chain.</CardText>
                                <Button className="btn-slide mt-2 btns d-flex align-items-center" href="">
                                    <FaArrowRight className="arrow-icon" /> <span className="read-more-text">Read More</span>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ServicesSection;
