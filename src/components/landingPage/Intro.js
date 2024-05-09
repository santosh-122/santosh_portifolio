import { animated, useSpring } from 'react-spring';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useEffect } from 'react';
const MovingAeroplane = () => {
    const animationProps = useSpring({
      from: { x: -window.innerWidth / 2 }, // Start from 100px off-screen (left)
      to: [{ x: window.innerWidth / 2 }, { x: -window.innerWidth / 2 }], // Move right, then back left
      config: { duration: 5000 }, // Duration for each movement
      loop: true, // Loop the animation continuously
    });
    return (
      <div style={{ width: '100vw', overflow: 'hidden' }}> {/* Infinite width */}
        <animated.div style={{ ...animationProps }}>
          <BsChevronDoubleRight size="2em" color="currentColor" />
        </animated.div>
      </div>
    );
  };
  const MovingIcon = () => {
    const animationProps = useSpring({
      from: { x: window.innerWidth / 2 }, // Start from 100px off-screen (left)
      to: [{ x: -window.innerWidth / 2 }, { x: window.innerWidth / 2 }], // Move right, then back left
      config: { duration: 5000 }, // Duration for each movement
      loop: true, // Loop the animation continuously
    });
    return (
      <div style={{ width: '100vw', overflow: 'hidden' }}> {/* Infinite width */}
  
        <animated.div style={{ ...animationProps }}>
          <BsChevronDoubleLeft size="2em" color="currentColor" />
        </animated.div>
      </div>
    );
  };
  
function Intro() {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

    const backgroundImageUrlplane = '/aeroplane.gif';
    const divStyle = {
      backgroundImage: `url(${backgroundImageUrlplane})`,
      backgroundSize: 'cover', // Set background size to 100% width and original height
      backgroundrepeat: "no-repeat",
      backgroundOrigin: "content-box",
      height: '300px',
      backgroundattachment: "fixed",
      backgroundPosition: "center",
      width: 'auto',
      objectFit: 'cover' // Three times the current height (adjust as needed)
    };
    const textStyle = {
      fontFamily: 'cursive , Bold'
    };
    return (
      <div className='bg-light'>
        <MovingAeroplane />
        <div>
          <h2 style={textStyle} className='mb-4'>Santosh kumar Karri</h2>
          <h3 style={{ fontFamily: "Times New Roman" }} className='mb-4'>I am a front-end web application developer</h3>
        </div>
        <div>
          <Button variant="outline-warning" onClick={scrollToBottom}className="rounded-pill">Meet Me</Button>
        </div>
        <MovingIcon />
      </div>
    );
  }

  export default Intro;