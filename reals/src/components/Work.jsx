import React from 'react'
import './Work.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { FiKey } from 'react-icons/fi'

const Work = () => {

    return (
        <section>
            <div className="work container">
                <div className="work-wrapper">
                    <div className="work-content">
                        <h2>How It Works</h2>
                        <p>A great plateform to buy, sell and rent your properties without any agent or<br /> commisions. </p>
                    </div>
                    <div className="work-box">
                        <div className="work-point">
                            <a href="#"><AiOutlineHome /></a>
                            <h4>Evaluate Property</h4>
                            <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making. </p>
                        </div>
                        <div className="work-point">
                            <a href="#"><MdOutlineWorkOutline /></a>
                            <h4>Meeting with Agent</h4>
                            <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making. </p>
                        </div>
                        <div className="work-point">
                            <a href="#"><FiKey /></a>
                            <h4>Close the Deal</h4>
                            <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work

