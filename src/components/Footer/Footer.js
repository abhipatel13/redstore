import PlayStore from '../images/play-store.png';
import AppStore from '../images/app-store.png';
import LogoWhite from '../images/logo-white.png';

const Footer = () => {
    return (
        <>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for Android and ios Mobile Phone.</p>
                            <div class="app-logo">
                                <img src={ PlayStore } />
                                <img src={ AppStore } />
                            </div>
                        </div>
                        <div class="footer-col-2">
                            <img src={ LogoWhite } />
                            <p>Our Purpose is to Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
                        </div>
                        <div class="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div class="footer-col-4">
                            <h3>Follow Us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p>Copyright 2022 - redstore.com | Design By ABHI PATEL</p>
                </div>
            </div>
        </>
    )
}
export default Footer;