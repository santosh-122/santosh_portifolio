import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { FaYoutube,FaFacebookSquare,FaInstagram } from 'react-icons/fa';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { CiLinkedin } from "react-icons/ci";
import { Aboutmetext } from '../../utils/constants';
function Aboutme() {
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
      <Container className='mt-4'id="test1">
        <Row>
          <Col>
            <div className="textAlign:center border rounded-circle shadow bg-white" style={{ padding: "60px" }} >
              <h1> About Me </h1>
            </div>
            <div className='mt-4 element' style={{padding:"60px" , margin:"0px"}} >
             
                <FaYoutube style={{ color: 'red' ,fontSize: '50px',cursor:"pointer" }} onClick={Youtube}/>
                <CiLinkedin style={{ color: '#287bbc',fontSize: '50px',cursor:"pointer"  }} onClick={linkdinclik} />
                <FaFacebookSquare style={{ color: '#3b5998',fontSize: '50px',cursor:"pointer" }} onClick={facebook}  />
                <FaInstagram style={{ color: '#E4405F',fontSize: '50px',cursor:"pointer"  }} onClick={Instagram}/>
  
            </div>
          </Col>
          <Col xs={8}>
            <div>
              <p style={{
                fontSize: "28px", textAlign: "justify",
                textJustify: "inter-word",
                margin: "0", color: "#838383"
              }} className='mb-4'>
               {Aboutmetext.FirstParagrapg}
              </p>
              <p style={{
                fontSize: "28px", textAlign: "justify",
                textJustify: "inter-word",
                margin: "0", color: "#838383"
              }}>
                {Aboutmetext.SecondParagraph}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
  
export default Aboutme;