import s from "./Header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhoneAlt, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";

type PropsType = {
    cartProductLength: number
}

let Header: React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <div className={s.topHeader}>
                <div className={s.contacts}>
                    <div className={s.phone}>
                        <FontAwesomeIcon icon={faPhoneAlt} className={s.iconInHeader}/>
                        <span className={s.phoneNumber}>+1 123 456 789</span>
                    </div>
                    <div className={s.mail}>
                        <FontAwesomeIcon icon={faEnvelope} className={s.iconInHeader}/>
                        <span className={s.nameMail}>info@company.com</span>
                    </div>
                </div>
                <div className={s.networks}>
                    <FontAwesomeIcon icon={faFacebookF}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconFacebook}`}/>
                    <FontAwesomeIcon icon={faTwitter}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconTwitter}`}/>
                    <FontAwesomeIcon icon={faInstagram}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconInstagram}`}/>
                    <FontAwesomeIcon icon={faLinkedinIn}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconLinkedin}`}/>
                    <FontAwesomeIcon icon={faBehance}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconBehance}`}/>
                </div>
            </div>
            <div className={s.bottomHeader}>
                <NavLink to='/home' className={s.navItem}>
                    <span className={s.siteLogo}><span className={s.textGreen}>RENOSHOP</span>BEE</span>
                </NavLink>
                <span className={s.navMenu}>
                    <NavLink to='/home' className={s.navItem} activeClassName={s.active}>HOME</NavLink>
                    <NavLink to='/women' className={s.navItem} activeClassName={s.active}>WOMEN</NavLink>
                    <NavLink to='/men' className={s.navItem} activeClassName={s.active}>MEN</NavLink>
                    <NavLink to='/kids' className={s.navItem} activeClassName={s.active}>KIDS</NavLink>
                    <NavLink to='/jewellery' className={s.navItem} activeClassName={s.active}>JEWELLERY</NavLink>
                    <NavLink to='/accessories' className={s.navItem} activeClassName={s.active}>ACCESSORIES</NavLink>
                </span>
                <span className={s.navRight}>
                     <NavLink to='/cart'>
                         <FontAwesomeIcon icon={faShoppingCart} className={s.shoppingCart}/>
                         <div className={s.numberOrder}>{props.cartProductLength}</div>
                     </NavLink>
                    <FontAwesomeIcon icon={faSearch} className={s.iconSearch}/>
                    <div className={s.burger}>
                        <span></span>
                    </div>
                </span>
            </div>
        </header>
    )
}

export default Header;