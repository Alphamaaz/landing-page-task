import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Services from './components/Services';
import GetProposal from './components/GetProposal';
import CaseStudies from './components/CaseStudies';
import Accordians from './components/Accordians';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
        <Navbar />
      <div className="App">
        <Hero />
        <Partners />
        <Services />
        <GetProposal />
        <CaseStudies />
        <Accordians />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
