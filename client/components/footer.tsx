import "./main.css"
import "./grid.css"


const FooterPage = () => {
    return (
        <footer className="footer spad">
            <div className="grid wide footer__body">
                <div className="row">
                    <div className="l-3 ">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href="a">
                                    <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1701712203/r0vrxnbcb9ybqgwenjxi.webp" alt="" />
                                </a>
                            </div>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    Address: 60-49 Road 11378 New York
                                </li>
                                <li className="footer__item">Phone: +65 11.188.888</li>
                                <li className="footer__item">
                                    Email:{" "}
                                    <a
                                        href="a"
                                        className="__cf_email__"
                                        data-cfemail="523a373e3e3d12313d3e3d203e3b307c313d3f"
                                    >
                                        dominhtrung2k@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-5 ">
                        <h6 className="footer__heading">Useful Links</h6>
                        <div className="footer__widget">
                            <ul className="footer__list footer__lists">
                                <li className="footer__item">
                                    <a href="a">About Us</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">About Our Shop</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">Secure Shopping</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">Delivery infomation</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">Privacy Policy</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">Our Sitemap</a>
                                </li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="a">Who We Are</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">Our Services</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">Projects</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">Contact</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">Innovation</a>
                                </li>
                                <li className="footer__item">
                                    <a href="a">Testimonials</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-4 ">
                        <div className="footer__widget-rigth">
                            <h6 className="footer__heading-rigth">Join Our Newsletter Now</h6>

                            <p>
                                Get E-mail updates about our latest shop and special offers.
                            </p>
                            <form action="a">
                                <input type="text" placeholder="Enter your mail" />
                                <button type="submit" className="site-btn">
                                    Subscribe
                                </button>
                            </form>
                            <div className="footer__widget__social">
                                <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1701712225/ak5svl45w0itkog4mryu.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterPage;