import s from "./MidSection.module.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobeEurope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {Carousel} from "antd";

import 'antd/dist/antd.css';




let MidSectionOne = () => {
    return (
        <div className={s.block}>
            <p className={s.title}>INFORMATION</p>
            <NavLink to='/home' className={s.navItem}>Delivery Information</NavLink>
            <NavLink to='/home' className={s.navItem}>Discount</NavLink>
            <NavLink to='/home' className={s.navItem}>Sitemap</NavLink>
            <NavLink to='/home' className={s.navItem}>Privacy Police</NavLink>
            <NavLink to='/home' className={s.navItem}>My Account</NavLink>
        </div>
    )
}

let MidSectionTwo = () => {
    return (
        <div className={s.block}>
            <p className={s.title}>MY ACCOUNT</p>
            <NavLink to='/home' className={s.navItem}>Sign In</NavLink>
            <NavLink to='/home' className={s.navItem}>View Cart</NavLink>
            <NavLink to='/home' className={s.navItem}>My Wishlist</NavLink>
            <NavLink to='/home' className={s.navItem}>Check out</NavLink>
            <NavLink to='/home' className={s.navItem}>Track My Order</NavLink>
        </div>
    )
}

let MidSectionThree = () => {
    return (
        <div className={s.block}>
            <p className={s.title}>HELP</p>
            <NavLink to='/home' className={s.navItem}>F.A.Q.</NavLink>
            <NavLink to='/home' className={s.navItem}>Shipping</NavLink>
            <NavLink to='/home' className={s.navItem}>Contact Us</NavLink>
            <NavLink to='/home' className={s.navItem}>Privacy Policy</NavLink>
        </div>
    )
}

let MidSectionFour = () => {
    return (
        <div className={s.block}>
            <p className={s.title}>CONTACT INFO</p>
            <NavLink to='/home' className={s.navItem}>
                <FontAwesomeIcon icon={faGlobeEurope} className={s.icon}/>
                <span>Your Address, Country</span>
            </NavLink>
            <NavLink to='/home' className={s.navItem}>
                <FontAwesomeIcon icon={faPhoneAlt} className={s.icon}/>
                <span>+1 234 5678 9999</span>
            </NavLink>
            <NavLink to='/home' className={s.navItem}>
                <FontAwesomeIcon icon={faEnvelope} className={s.icon}/>
                <span className={s.mail}>mail.@domain.com</span>
            </NavLink>
        </div>
    )
}

let MidSection = () => {

    return (
        <div>
            <div>
                <div className={s.wrapper}>
                    <MidSectionOne/>
                    <MidSectionTwo/>
                    <MidSectionThree/>
                    <MidSectionFour/>
                </div>
            </div>

            <div className={s.carouselWrapper}>
                <Carousel autoplay>
                    <div className={s.carouselBlock}>
                        <MidSectionOne/>
                    </div>
                    <div className={s.carouselBlock}>
                        <MidSectionTwo/>
                    </div>
                    <div className={s.carouselBlock}>
                        <MidSectionThree/>
                    </div>
                    <div className={s.carouselBlock}>
                        <MidSectionFour/>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default MidSection;