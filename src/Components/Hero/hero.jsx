import '../Hero/hero.css';
import MARKET from '../../Assets/market 2.png'
import CRAY from '../../Assets/cray-mkt.webp'

export function Hero() {
    return (
        <>
        <div className="hero">
        <div className="hero-left">
            <h2>Do Your Market Runs At Ease.</h2>
            <div>
            <div className="hand-icon">
            <p>Explore Our Store Today!!!!</p>
            <i class="fa-sharp fa-hand-o-right fa-solid" ></i>
        </div>
            </div>
        </div>
       
        <div className="hero-right">
            {/* <img src={CRAY} alt="" /> */}
            <img src={MARKET} alt="shop" />

        </div>
        </div>
        </>
    )
}