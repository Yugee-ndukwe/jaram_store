import '../Footer/footer.css';
import FOOTER_LOGO from '../../Assets/images.jpeg';

export default function Footer(){
    return(
        <>

            <div className="footer">
                <div className="footer-logo">
                    <img src={FOOTER_LOGO} alt="footer-logo" />
                    <p>Jaram</p>
                </div>
                <ul className="footer-links">
                    <li>company</li>
                    <li>products</li>
                    <li>offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="footer-social-icons">
                    <div className="icons-container">  <img src="" alt="" /></div>
                    <div className="icons-container">  <img src="" alt="" /></div>
                    <div className="icons-container">  <img src="" alt="" /></div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @ 2024 All Rights resvered</p>
                </div>
            </div>
        </>
    )
}