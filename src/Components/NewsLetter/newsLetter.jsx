// import '../NewsLetter/newsletter.css';
import '../NewsLetter/newsLetter.css';



export default function NewsLetter(){
    return(
        <>
            <div className="newsletter">
                <h1>Get exclusive offers on your email</h1>
                <p>Subscribe to our newsletter and stay updated.</p>
                <div>
                    <input type="email" placeholder='Your email id' />
                    <button>Subscribe</button>
                </div>
            </div>
        </>
    )
}