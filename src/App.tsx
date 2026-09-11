import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import VibeCoding from './components/VibeCoding';
import ContentCreation from './components/ContentCreation';
import Marketing from './components/Marketing';
import Tools from './components/Tools';
import MarketPrep from './components/MarketPrep';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero setActiveSection={setActiveSection} />
          <Courses setActiveSection={setActiveSection} />
        </>
      )}
      
      {activeSection === 'vibe-coding' && <VibeCoding />}
      {activeSection === 'content' && <ContentCreation />}
      {activeSection === 'marketing' && <Marketing />}
      {activeSection === 'tools' && <Tools />}
      {activeSection === 'market' && <MarketPrep />}
      
      <Footer />
    </div>
  );
}

export default App;
