import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaGlobe, FaShippingFast, FaHeadphones } from 'react-icons/fa'; // Import icons from react-icons
// import featureImage from '../../assets/features.jpg'; // Import the feature image

const FeatureSection = () => {
    return (
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
            <Container className="feature py-5 px-lg-0">
                <Row className="g-5 mx-lg-0">
                    <Col lg={6} className="feature-text wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text  text-uppercase mb-3">Our Features</h6>
                        <h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1>
                        <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                            <FaGlobe className="text me-4 flex-shrink-0" size={48} />
                            <div>
                                <h5>Global Reach</h5>
                                <p className="mb-0">With our extensive network of partners and collaborators worldwide, we provide logistics solutions that span the globe.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.5s">
                            <FaShippingFast className="text me-4 flex-shrink-0" size={48} />
                            <div>
                                <h5>Fast Delivery</h5>
                                <p className="mb-0">Our commitment to efficiency and punctuality ensures that your shipments reach their destination quickly and reliably.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                            <FaHeadphones className="text me-4 flex-shrink-0" size={48} />
                            <div>
                                <h5>24/7 Support</h5>
                                <p className="mb-0">We're here for you round the clock, providing dedicated support and assistance whenever you need it.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
                        <div className="position-relative h-100">
                            <img className=" img-fluid w-100 h-100" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ixn9ceTKKhs1ROJQOvnTZOi2n0TLjIdFoA&s' alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FeatureSection;
