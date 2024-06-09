import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, NavLink, Button } from 'reactstrap';
import Aboutimg from '../../assets/apapa.jpg'
import { CiGlobe } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import './about.css'
import Facts from './somefacts'


const AboutSection = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="container about py-5 px-lg-0 mt-5">
            <Container>
                <Row className="g-5 mx-lg-0">
                    <Col lg={6} className="ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="position-relative h-100">
                            <img className=" img-fluid w-100 h-100" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmTXKGCobbGx4TUvVt0iW31AlROX85hdJLw&shttps://images.app.goo.gl/Hqd1MJQh2ff7KHww8' style={{ objectFit: 'cover' }} alt="" />
                        </div>
                    </Col>
                    <Col lg={6} className="about-text wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="text text-uppercase mb-3">About Us</h6>
                        <h1 className="mb-5">Quick Transport and Logistics Solutions</h1>
                        <p className="mb-5">At Tyabo haulage and Logistics, we pride ourselves on providing exceptional transportation services to our valued clients. With 5 years of experience in the industry, we have established ourselves as a trusted and reliable partner for all your transportation needs.</p>
                        <Row className="g-4 mb-5">
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.5s">
                    <CiGlobe className='icons' />
                    <h5>Global Coverage</h5>
                    <p className={`m-0 ${showFullText ? '' : 'short-text'}`}>
                        {showFullText
                            ? "With our extensive network of partners and affiliates worldwide, we offer comprehensive global coverage for all your transportation needs. Whether you're shipping goods across continents or coordinating complex logistics operations, you can rely on us to provide seamless transportation solutions that span the globe."
                            : "With our extensive network of partners and affiliates worldwide, we offer comprehensive global coverage for all your transportation needs. "}
                    </p>
                </Col>
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.7s">
                    <FaTruckFast className='icons' />
                    <h5>On Time Delivery</h5>
                    <p className={`m-0 ${showFullText ? '' : 'short-text'}`}>
                        {showFullText
                            ? "At At Tyabo haulage and Logistics, we understand the importance of timely delivery. That's why we prioritize efficiency and punctuality in everything we do. Our commitment to on-time delivery ensures that your goods reach their destination safely and securely, without delays or disruptions."
                            : "At At Tyabo haulage and Logistics, we understand the importance of timely delivery. "}
                    </p>
                </Col>
            </Row>
            <Button onClick={toggleText} className="btns py-3 px-5">
                {showFullText ? "Show Less" : "Read More"}
            </Button>
                    </Col>
                </Row>
            </Container>
            <Facts/>
        </div>
    );
}

export default AboutSection;
