import './App.css';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/heroSection';

const heroSectionData = {
  title: 'React is great',
  subtitle: 'Not that hard to learn',
  buttonText: 'Learn More',
};

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection data={heroSectionData} />
    </div>
  );
}

export default App;
