import './App.css';
import About from './components/About';
import CtaFooter from './components/CtaFooter';
import Hero from './components/Hero'; // Import the Hero component you created
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      {/* Your custom components go here */}
      <Hero />
      <About /> {/* 2. Make sure there is a 't' at the end of About */}
      <Experience /> {/* 2. Make sure there is a 't' at the end of About */}
            <CtaFooter /> {/* 2. Make sure there is a 't' at the end of About */}


    </div>
  );
}

export default App;
