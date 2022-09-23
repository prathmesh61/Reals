import React from 'react'
import heroBg from '../images/hero-bg.jpg'
import './Home.css'

const Home = () => {
    return (
        <section >
            <div className="main-bg">
                <img src={heroBg} alt="" />

                <div className="hero container">
                    <div className="hero-content">
                        <h1>We Will Help You Find Your<br /> <span>Wonderful Home</span></h1>
                        <p>A great plateform to buy, sell and rent your properties without any<br /> agent or commisions. </p>
                    </div>
                    <div className="form">
                        <div className="form-wrapper">
                            <div className="form-div">
                                <label htmlFor="Search">Search:*</label>
                                <input required type="text" placeholder='Your Email' />
                                <button className="cta-btn">Search now</button>
                            </div>
                            <div className="form-div">
                                <label htmlFor="Search">
                                    Select Categories:</label>
                                <select name="" id="">
                                    <option value="House">House</option>
                                    <option value="Office">Office</option>
                                    <option value="Apartment">Apartment</option>
                                </select>
                            </div>
                            <div className="form-div">
                                <label htmlFor="Search">
                                    Min Price:</label><br />
                                <select name="" id="">
                                    <option value="$200">$200</option>
                                    <option value="$300">$300</option>
                                    <option value="$400">$400</option>
                                    <option value="$500">$500</option>

                                </select>
                            </div>
                            <div className="form-div">
                                <label htmlFor="Search">
                                    Max Price:</label><br />
                                <select name="" id="">
                                    <option value="$500">$500</option>
                                    <option value="$1000">$1000</option>
                                    <option value="$1500">$1500</option>
                                    <option value="$2000">$2000</option>
                                    <option value="$3000">$3000</option>
                                    <option value="$5000">$5000</option>

                                </select>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home