import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Services from './pages/Services';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UseCases from './pages/UseCases';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <div className='App'>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
