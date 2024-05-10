import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

function Header() {
  return (
    <Container fluid style={{ width: "100%" }}>
      <Navbar className='text-white'>
        <Navbar.Brand href="" className='text-white'>santosh</Navbar.Brand>
        <Nav className="ms-auto align-items-center d-flex gap-3 justify-space-between" >
          <Link href="" style={{textDecorationLine:"none"}} activeClass="active" 
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} className='text-white'>About</Link>
          <Link href="" style={{textDecorationLine:"none"}} activeClass="active" 
            to="skill"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}className='text-white'>Skills</Link>
          <Link href="" style={{textDecorationLine:"none"}} activeClass="active" 
            to="Experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} className='text-white'>Experience</Link>
          {/* <Link href="" style={{textDecorationLine:"none"}} activeClass="active" 
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}className='text-white'>Projects</Link> */}
          <Link href="" style={{textDecorationLine:"none"}} activeClass="active" 
            to="Resume"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} className='text-white'>Resume</Link>
        </Nav>

      </Navbar>
    </Container>
  );
}

export default Header;