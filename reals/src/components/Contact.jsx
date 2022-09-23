import React from 'react'
import './Contact.css'
import { BsTelephoneForward } from 'react-icons/bs'
const Contact = () => {
    return (
        <section>
            <div className="contact container">
                <div className="contact-wrapper">
                    <div className="contact-content">
                        <h2>Have Question ? Get in touch!</h2>
                        <p>A great plateform to buy, sell and rent your properties without any agent or <br />commisions. </p>
                        <a href="#" className="cta-btn"><BsTelephoneForward /> Contact Us</a>
                    </div>

                    <div className="contact-subscriber">
                        <div className="subscriber-heading">
                            <h4>Subscribe to Newsletter!</h4>
                            <p>Subscribe to get latest updates and information.</p>
                        </div>
                        <div className="subscriber-input">
                            <input type="text" placeholder='Enter Email' />
                            <button className="cta-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact