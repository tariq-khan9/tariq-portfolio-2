import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Slider from './components/Slider';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import app from './components/sass/app.scss';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
      <Intro/>
      <Slider/>
      <Testimonials/>
      <Contact/>
      </div>
      
    </div>
  );
}

export default App;
