import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#030712] text-white">
      <Navbar />
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
