import React from 'react';
import Hero from './components/Hero';
import Sections from './components/Sections';
import CurriculumInstructor from './components/CurriculumInstructor';
import FAQCtaFooter from './components/FAQCtaFooter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white selection:bg-white/10 selection:text-white">
      <Hero />
      <Sections />
      <CurriculumInstructor />
      <FAQCtaFooter />
    </div>
  );
}

export default App;
