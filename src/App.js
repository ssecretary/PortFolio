import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Works from './components/works';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
