import '../Offers/offers.css';
import EXCLUSIVE from '../../Assets/Exclusive.jpg'


export function Offers(){
    return(
        <>
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Stock For You</h1>
                <p>Only Best Sellers Products</p>
                <button>Check Now</button>

            </div>
            <div className="offers-right">
                <img src={EXCLUSIVE} alt="" />

            </div>

        </div>
        </>
    )
}