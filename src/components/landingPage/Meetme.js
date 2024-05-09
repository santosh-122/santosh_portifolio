import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegCopyright } from "react-icons/fa6";
import { FaYoutube, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";
function Meetme() {
  const facebook= () =>{
    window.open("https://www.facebook.com/profile.php?id=100008997399110","_blank")
  }
  const linkdinclik=()=>{
    window.open("https://www.linkedin.com/in/santoshkumar-karri-aa25b5212/","_blank")
  }
  const Youtube= () => {
    window.open("https://www.youtube.com/channel/UCEeYhQuh47RmbfbSpHtGVVA","_blank")
    
  }
  const Instagram = () =>{
    window.open("https://www.instagram.com/santosh_traveldiaries/","_blank")
  }
  return (
    <Container className='mt-4'>
      <h1 style={{ fontFamily: "ProximaNovaT", fontSize: "55px", color: "#3a3a3a" }}>Meet me</h1>
      <p style={{ textAlign: "center", color: "#838383", margin: "0 auto", fontSize: "21px", marginTop: "10px", marginBottom: "40px" }}>I'm always excited to work on awesome projects. Let's meet up and discuss.</p>
      <h3 style={{ fontFamily: "ProximaNova", textAlign: "center", color: "#41b0bf", margin: "0 auto", fontSize: "2.5em", marginTop: "10px", marginBottom: "40px" }}>Thank You!</h3>

      <Row>
        <Col>
          <p style={{ textAlign: "justify" }}>No <FaRegCopyright /> copyright issues <br></br>Feel free to copy. If you need any help,<br></br> ping me !</p>
        </Col>
        <Col>
          <p style={{ fontFamily: "Sacramento ,cursive", fontSize: "2em" }}>Santosh Kumar Karri</p>
        </Col>
        <Col>
          <div>
            <p style={{ marginBottom: '0' }}>You can Find me everywhere</p>
            
            <FaYoutube style={{ color: 'red', fontSize: '45px',cursor:"pointer" }} onClick={Youtube}/>
            <CiLinkedin style={{ color: '#287bbc', fontSize: '45px',cursor:"pointer" }} onClick={linkdinclik}/>
            <FaFacebookSquare style={{ color: '#3b5998', fontSize: '45px',cursor:"pointer" }}onClick={facebook} />
            <FaInstagram style={{ color: '#E4405F', fontSize: '45px',cursor:"pointer" }} onClick={Instagram}/>
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default Meetme;
