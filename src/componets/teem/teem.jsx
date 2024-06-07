import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaShare } from 'react-icons/fa';
import profile from '../../assets/profile.jpg';
import profile2 from '../../assets/profile2.jpg';

const TeamSection = () => {
    return (
        <div className="container-xxl py-5">
            <Container className="py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text text-uppercase">Our Team</h6>
                    <h1 className="mb-5">Expert Team Members</h1>
                </div>
                <Row className="g-4">
                    <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item p-4">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid h" src={profile}  alt="Team Member 1" />
                            </div>
                            <h5 className="mb-0">Bashir muhammad jibrin</h5>
                            <p>C0O</p>
                            <div className="btn-slide mt-1">
                                {/* <FaShare /> */}
                                <span className='social-icons'>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaInstagram /></a>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item p-4">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid" src={profile2} alt="Team Member 2" />
                            </div>
                            <h5 className="mb-0">Jibrin abubakar yaman</h5>
                            <p>CEO</p>
                            <div className="btn-slide mt-1">
                                {/* <FaShare /> */}
                                <span className='social-icons'>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaInstagram /></a>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item p-4">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid h " src={profile} alt="Team Member 3" />
                            </div>
                            <h5 className="mb-0">David Johnson</h5>
                            <p>CTO</p>
                            <div className="btn-slide mt-1">
                                {/* <FaShare /> */}
                                <span className='social-icons'>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaInstagram /></a>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.9s">
                        <div className="team-item p-4">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid" src={profile2}alt="Team Member 4" />
                            </div>
                            <h5 className="mb-0">Emily Brown</h5>
                            <p>Lead Developer</p>
                            <div className="btn-slide mt-1">
                                {/* <FaShare /> */}
                                <span className='social-icons'>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaInstagram /></a>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TeamSection;
