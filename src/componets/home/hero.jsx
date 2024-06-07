import React from 'react'
import {Row,Container,Button,Col,} from 'reactstrap'
import './home.css'
import About from '../about/about'
import Service from '../services/services'
import Features from '../features/features'
import Teem from '../teem/teem'
function Home() {
  return (
    <>
    <div className='home'>
    <section className="hero">
      <Container className="hero-content">
        <Row className="">
          <Col>
            <h1 className='head'>Your Reliable <span className='span'>Transport </span> <br />Partner</h1>
            <p className='head2 text-white'> Efficient, Safe, and On-time Delivery Services</p>
            <Button className='btns'  >
              Explore Our Services
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
    
    </div>
    <About/>
    <Service/>
    <Features/>
    <Teem />
    </>
  )
}

export default Home