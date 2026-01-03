import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeExample from './components/CodeExample';
import Providers from './components/Providers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F3FF] to-white">
      <Navbar />
      <Hero />
      <Features />
      <CodeExample />
      <Providers />
      <Footer />
    </div>
  );
}

export default App;
