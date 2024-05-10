import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import core from "../../assets/images/core.png"
import interest from "../../assets/images/interest.png"
import ui from "../../assets/images/ui.png"


function Skills() {
  return (
    <Container className='mt-4' id="skill">
      <h3>Skills</h3>
      <Row className='mt-4'>
        <Col xs={12} sm={4} xl={4} lg={4}>
          <div className='text-center'>
            <Image src={core} alt="" fluid style={{ maxHeight: "300px" }} />
          </div>
        </Col>
        <Col xs={12} sm={4} xl={4} lg={4}>
          <div className='text-center'>
            <Image src={interest} alt="" fluid style={{  maxHeight: "300px" }} />
          </div>
        </Col>
        <Col xs={12} sm={4} xl={4} lg={4}>
          <div className='text-center'>
            <Image src={ui} alt="" fluid style={{  maxHeight: "300px" }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
