import s from "./MidSection.module.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobeEurope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";



let MidSection = () => {
    return (
            <div className={s.wrapper}>
                <div className={s.block}>
                    <p className={s.title}>INFORMATION</p>
                    <NavLink to='/' className={s.navItem}>Delivery Information</NavLink>
                    <NavLink to='/' className={s.navItem}>Discount</NavLink>
                    <NavLink to='/' className={s.navItem}>Sitemap</NavLink>
                    <NavLink to='/' className={s.navItem}>Privacy Police</NavLink>
                    <NavLink to='/' className={s.navItem}>My Account</NavLink>
                </div>
                <div className={s.block}>
                    <p className={s.title}>MY ACCOUNT</p>
                    <NavLink to='/' className={s.navItem}>Sign In</NavLink>
                    <NavLink to='/' className={s.navItem}>View Cart</NavLink>
                    <NavLink to='/' className={s.navItem}>My Wishlist</NavLink>
                    <NavLink to='/' className={s.navItem}>Check out</NavLink>
                    <NavLink to='/' className={s.navItem}>Track My Order</NavLink>
                </div>
                <div className={s.block}>
                    <p className={s.title}>HELP</p>
                    <NavLink to='/' className={s.navItem}>F.A.Q.</NavLink>
                    <NavLink to='/' className={s.navItem}>Shipping</NavLink>
                    <NavLink to='/' className={s.navItem}>Contact Us</NavLink>
                    <NavLink to='/' className={s.navItem}>Privacy Policy</NavLink>
                </div>
                <div className={s.block}>
                    <p className={s.title}>CONTACT INFO</p>
                    <NavLink to='/' className={s.navItem}>
                        <FontAwesomeIcon icon={faGlobeEurope} className={s.icon}/>
                        <span>Your Address, Country</span>
                    </NavLink>
                    <NavLink to='/' className={s.navItem}>
                        <FontAwesomeIcon icon={faPhoneAlt} className={s.icon}/>
                        <span>+1 234 5678 9999</span>
                    </NavLink>
                    <NavLink to='/' className={s.navItem}>
                        <FontAwesomeIcon icon={faEnvelope} className={s.icon}/>
                        <span className={s.mail}>mail.@domain.com</span>
                    </NavLink>
                </div>
            </div>
    )
}

export default MidSection;