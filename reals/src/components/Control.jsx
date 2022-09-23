import React from 'react'
import './Control.css'
import controlImg from '../images/about-banner.jpg'

const Control = () => {
    return (
        <section>
            <div className="control container">
                <div className="control-wrapper padding">
                    <img src={controlImg} alt="" />
                    <div className="control-content">
                        <h2>Efficiency Transparency Control.</h2>
                        <p>Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Hously is Real Estate Redefined. </p>
                        <button className="cta-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Control