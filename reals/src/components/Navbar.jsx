import React, { useState } from 'react'
import './Navbar.css'
import { BiBuildingHouse } from 'react-icons/bi'
import { AiOutlineAppstore } from 'react-icons/ai'


const Navbar = () => {
    //sticky navbar
    const [sticky, setSticky] = useState(false)
    const stickyHandle = () => {
        if (window.scrollY >= 90) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    window.addEventListener("scroll", stickyHandle)

    //responsive navbar
    const [click, setclick] = useState(false)
    const clickHandle = () => setclick(!click)

    return (
        <nav className={sticky ? 'nav sticky' : 'nav'}>
            <a href="#" onClick={clickHandle} className="menu-bt"><AiOutlineAppstore /></a>
            <div className="navbar padding">
                <div className="navbar-wrapper">
                    <a href="#" className="logo"><BiBuildingHouse /> Reals.</a>
                    <ul className={click ? "nav-list show" : "nav-list"}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#buy">Buy</a></li>
                        <li><a href="#sell">Sell</a></li>
                        <li><a href="#listing">Listing</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <a href="#" className="cta-btn">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

