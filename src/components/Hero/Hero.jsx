import hero from '../../assets/hero-img.png'
import '../Hero/Hero.css'
function Hero(){

  return (
    <div className='hero-section'>
      <img className='imgHero' src={hero} alt="Discover, collect and sell NFTs" />
    </div>
  );
}

export default Hero