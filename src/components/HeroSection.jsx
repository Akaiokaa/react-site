import './HeroSection.css'
import macaronHero from './../../images/macaron-hero.jpg'
function HeroSection() {
    return (
        <section className='hero'>
            <div className='hero-content'>
                <h1>How to Make Macarons</h1>
                <p>A curated collection of tested macaron recipes with directions and adjustments</p>
            </div>
            
            <div className='hero-image'>
                <img className="hero-macarons"src={macaronHero} alt="plate of rasberry macarons" />
            </div>
        </section>
    )
}

export default HeroSection;