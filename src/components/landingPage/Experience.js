import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import profilesan from '../../assets/images/san.jpg'

function Experience() {
  return (
    <div className='bg-dark' id="Experience">
      <Container>
        <Row className='text-white' >
          <Col style={{ padding: "60px 0px" }}>
            <h1 className='font-weight-bold display-1 text-center' style={{ fontFamily: 'Bold' }}>3+</h1>
            <h3 className='font-weight-bold display-4 text-center' style={{ fontFamily: 'Bold' }}>Years Experience</h3>
          </Col>
          <Col xs={12} md={12} sm={12} lg={4} xl={4}>
            <Image src={profilesan} alt="img" fluid />
          </Col>
          <Col style={{ padding: "60px 0px" }}>
            <h1 className='font-weight-bold display-1 text-center' style={{ fontFamily: 'Bold' }}>8+</h1>
            <h3 className='font-weight-bold display-4 text-center' style={{ fontFamily: 'Bold' }}>Projects Completed</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
