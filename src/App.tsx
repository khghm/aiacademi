import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import VibeCoding from './components/VibeCoding';
import ContentCreation from './components/ContentCreation';
import Marketing from './components/Marketing';
import Tools from './components/Tools';
import MarketPrep from './components/MarketPrep';
import PromptEngineering from './components/PromptEngineering';
import Automation from './components/Automation';
import Chatbots from './components/Chatbots';
import AIDesign from './components/AIDesign';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return (<><Hero setActiveSection={setActiveSection} /><Courses setActiveSection={setActiveSection} /></>);
      case 'vibe-coding': return <VibeCoding />;
      case 'content': return <ContentCreation />;
      case 'marketing': return <Marketing />;
      case 'tools': return <Tools />;
      case 'market': return <MarketPrep />;
      case 'prompt': return <PromptEngineering />;
      case 'automation': return <Automation />;
      case 'chatbots': return <Chatbots />;
      case 'design': return <AIDesign />;
      default: return (<><Hero setActiveSection={setActiveSection} /><Courses setActiveSection={setActiveSection} /></>);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
