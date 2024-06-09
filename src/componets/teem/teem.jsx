import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaShare } from 'react-icons/fa';
// import profile from '../../assets/profile.jpg';
// import profile2 from '../../assets/profile2.jpg';
// import Profile3 from "../../assets/AUWAL.jpg"
// import Profile4 from "../../assets/musty.jpg"

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
                                <img className="img-fluid h" src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/439934667_975874350824576_7400560713148228120_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeENUesF1ofvWdIGamII2pUyNtiDWo4XHMY22INajhccxp7hTJgZUHCbvLTqH3W-FMFT6JOruNJK47KCeuUeRVCr&_nc_ohc=tFcS2rdTI70Q7kNvgHWSVjc&_nc_ht=scontent-los2-1.xx&oh=00_AYAPYYV8erWLEMsuzDZ4caNhjh4jQzPlSAiKDjiaUzylyQ&oe=666B9171"  alt="Team Member 1" />
                            </div>
                            <h5 className="mb-0">Bashir muhammad jibrin</h5>
                            <p>COO</p>
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
                                <img className="img-fluid" src='https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/248557501_4654681027930332_5401731332306439976_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH_P_lpAdcUC9OUmY4jm-OW6sUaNbRgLNvqxRo1tGAs2-HkgX1rROIpWb7uYvVOikqFq5THMDdJwY_LHfz--FBF&_nc_ohc=ByCbdoY8cqkQ7kNvgERIkX1&_nc_ht=scontent-los2-1.xx&oh=00_AYCC0bmzUjrZNbmAh4QVQwHJoqGo4YUM41sORZ2UDLqQXQ&oe=666B7115' alt="Team Member 2" />
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
                                <img className="img-fluid h " src='https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/227813703_587038442678711_2404541909195230676_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH3JgM7qtyF4CToaNXFhcN-uElW8MeotHy4SVbwx6i0fLSJdgFnlKBjYJ6E4AElaXGEN9jMF-0JL4fYtGa-20kt&_nc_ohc=YPa77D9Ef5wQ7kNvgEXh7CH&_nc_ht=scontent-los2-1.xx&oh=00_AYBY6haALjCy7RMMRB7U80NmlH5Qv8lbQb7-i_msqR41tQ&oe=666B9D89' alt="Team Member 3" />
                            </div>
                            <h5 className="mb-0">Mustapha  jibrin</h5>
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
                                <img className="img-fluid h" src='https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/421508438_946391150595780_8692567945999902636_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG6OppPOr5QIJM2WH3rxWptX8NYoXX-RjBfw1ihdf5GMMcVLVvPsjisvAuiN1lfcMPHDWL9fq7MkpV7K4bRJrxs&_nc_ohc=jN2cHaEGb_0Q7kNvgG2gLgA&_nc_ht=scontent-los2-1.xx&oh=00_AYBv0z67Bmf1ptcbSsQMKyHT6xba7baAZ4n1vs8z65tNqw&oe=666B81F9'alt="Team Member 4" />
                            </div>
                            <h5 className="mb-0">Auwal bello muhammad</h5>
                            <p>CFO</p>
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
