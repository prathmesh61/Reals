import React from 'react'
import './Footer.css'
import { BiBuildingHouse } from 'react-icons/bi'
import { BiLeftArrowCircle } from 'react-icons/bi'
import { AiOutlinePhone } from 'react-icons/ai'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { BiLocationPlus } from 'react-icons/bi'

const Footer = () => {
    return (
        <section>
            <div className="footer">
                <div className="footer-wrapper container">
                    <div className="footer-logo">
                        <h2><BiBuildingHouse /> Reals.</h2>
                        <p>A great plateform to buy, sell and rent your<br /> properties without any agent or commisions. </p>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#"><BiLeftArrowCircle /> Home</a></li>
                            <li><a href="#"><BiLeftArrowCircle /> Buy</a></li>
                            <li><a href="#"><BiLeftArrowCircle /> Sell</a></li>
                            <li><a href="#"><BiLeftArrowCircle /> Blog</a></li>
                            <li><a href="#"><BiLeftArrowCircle /> Login</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#"><BiLeftArrowCircle /> Terms & Service</a></li>
                            <li><a href="#"><BiLeftArrowCircle /> About Us</a></li>
                            <li><a href="#"><BiLeftArrowCircle /> Contact</a></li>
                            <li><a href="#"><BiLeftArrowCircle /> Listing</a></li>

                        </ul>
                    </div>
                    <div className="footer-contact">
                        <p><BiLocationPlus /> C/54 Northwest Freeway,<br />
                            Suite 558,<br />
                            Houston, USA 485 </p>
                        <p><MdOutlineMarkEmailUnread /> contact@example.com</p>
                        <p><AiOutlinePhone /> +152 534-468-854</p>
                    </div>
                </div>
                <div className="footer-end">
                    <p>© 2022 Realvine. All Right Reserved by Reals. </p>
                </div>
            </div>
        </section>
    )
}

export default Footer