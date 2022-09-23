import React from 'react'
import './Feature.css'
// import reuse from '../components/Feature.reuse.jsx'
import img1 from '../images/property-1.jpg'
import img2 from '../images/property-2.jpg'
import img3 from '../images/property-3.jpg'
import img4 from '../images/property-4.jpg'
import img5 from '../images/property-5.jpg'
import img6 from '../images/property-6.jpg'
import { BsBox } from 'react-icons/bs'
import { BiBed } from 'react-icons/bi'
import { GiRomanToga } from 'react-icons/gi'

const Feature = () => {

    const data = [
        {
            heading: '10765 Hillshire Ave, Baton Rouge, LA 70810, USA',
            sqf: '8000sqf',
            bed: 4,
            bath: 4,
            imgUL: '../images/property-1.jpg',
            price: '$4000',
            Rating: '⭐⭐⭐⭐⭐'


        },
        {
            heading: '3723 SANDBAR DR, Addis, LA 70710, USA',
            sqf: '8000sqf',
            bed: 4,
            bath: 4,
            imgUL: '../images/property-2.jpg',
            price: '$5000',
            Rating: '⭐⭐⭐⭐⭐'


        },
        {
            heading: '59345 STONEWALL DR, Plaquemine, LA 70764, USA',
            sqf: '8000sqf',
            bed: 4,
            bath: 4,
            imgUL: '../images/property-3.jpg',
            price: '$5500',
            Rating: '⭐⭐⭐⭐⭐'


        },
        {
            heading: 'LOT 21 ROYAL OAK DR, Prairieville, LA 70769, USA',
            sqf: '8000sqf',
            bed: 4,
            bath: 4,
            imgUL: '../images/property-4.jpg',
            price: '$6000',
            Rating: '⭐⭐⭐⭐⭐'


        },
        {
            heading: '710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA',
            sqf: '8000sqf',
            bed: 4,
            bath: 4,
            imgUL: '../images/property-5.jpg',
            price: '$4800',
            Rating: '⭐⭐⭐⭐⭐'


        },
        {
            heading: '5133 MCLAIN WAY, Baton Rouge, LA 70809, USA',
            sqf: '8000sqf',
            bed: 4,
            bath: 4,
            imgUL: '../images/property-6.jpg',
            price: '$8000',
            Rating: '⭐⭐⭐⭐⭐'


        }
    ]


    return (

        <section>
            <div className="feature container">
                <div className="feature-wrapper">
                    <div className="feature-content">
                        <h2>Featured Properties</h2>
                        <p>A great plateform to buy, sell and rent your properties without any agent or <br />commisions. </p>
                    </div>
                    <div className="feature-box">
                        {data.map((card) => {
                            return (
                                <div className="feature-point">
                                    <img src={img1} alt="" />
                                    <h2>{card.heading}</h2>
                                    <div className="feature-type">
                                        <h5 href="#"><BsBox /> {card.sqf}</h5>
                                        <h5 href="#"><BiBed /> {card.bed}</h5>
                                        <h5 href="#"><GiRomanToga /> {card.bath}</h5>
                                    </div>
                                    <div className="feature-price">
                                        <h5>Price: {card.price}</h5>
                                        <h5>Rating: {card.Rating}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>



                </div>
            </div >
        </section >
    )
}

export default Feature