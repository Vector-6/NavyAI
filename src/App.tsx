import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeExample from './components/CodeExample';
import Providers from './components/Providers';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F3FF] to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <Navbar />
      <Hero />
      <Features />
      <CodeExample />
      <Providers />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
