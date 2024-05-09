import logo from './logo.svg';
import './App.css';
import Firsthalf from './components/landingPage/Firsthalf';
import Aboutme from './components/landingPage/Aboutme';
import Intro from './components/landingPage/Intro';
import Experience from './components/landingPage/Experience';
import Skills from './components/landingPage/Skills';
import DownloadPdf from './components/landingPage/DownloadPdf';
import Meetme from './components/landingPage/Meetme';
import Report from './components/landingPage/Report';

function App() {
  return (
    <>
    <div className="App" style={{ overflow: 'hidden' }}>
      <Firsthalf />
      <Intro/>
      <Aboutme />
      <Experience/>
      <Skills/>
      <DownloadPdf/>
      <Meetme/>
      <Report/>
    </div>
    </>
  );
}

export default App;
