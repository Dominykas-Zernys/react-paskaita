import './heroSection.css';

function HeroSection(props) {
  return (
    <div className='hero-section'>
      <div className='info'>
        <h1>{props.data.title}</h1>
        <p className='hero-subtitle'>{props.data.subtitle}</p>
        <button>{props.data.buttonText}</button>
      </div>
    </div>
  );
}

export default HeroSection;
