import s from "./Header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhoneAlt, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";
import {CategoriesType} from "../../store/headerReducer";

type PropsType = {
    cartProductLength: number
    categories: Array<CategoriesType>
    setIsActiveBurger: (boolean: boolean) => void
    isActiveBurger: boolean
}

let Header: React.FC<PropsType> = (props) => {

    const categories = props.categories.map(category => <NavLink to={`/${category.name.toLowerCase()}`}
                                                                  className={s.navItem}
                                                                  activeClassName={s.active}
                                                                  key={category.id}
                                                                  onClick={() => props.setIsActiveBurger(false)}>{category.name}</NavLink>)

    // const [isActiveBurger, setIsActiveBurger] = useState(false)

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
                <NavLink to='/home' className={s.siteLogo} onClick={() => props.setIsActiveBurger(false)}>
                    <span className={s.textGreen}>RENOSHOP</span>BEE
                </NavLink>
                <div className={`${s.navMenu} ${props.isActiveBurger && s.isActive}`}>
                    <NavLink to='/home' className={s.navItem} activeClassName={s.active}
                             onClick={() => props.setIsActiveBurger(false)}>HOME</NavLink>
                    {/*<NavLink to='/women' className={s.navItem} activeClassName={s.active}*/}
                    {/*         onClick={() => setIsActiveBurger(true)}>WOMEN</NavLink>*/}
                    {/*<NavLink to='/men' className={s.navItem} activeClassName={s.active}*/}
                    {/*         onClick={() => setIsActiveBurger(true)}>MEN</NavLink>*/}
                    {/*<NavLink to='/kids' className={s.navItem} activeClassName={s.active}*/}
                    {/*         onClick={() => setIsActiveBurger(true)}>KIDS</NavLink>*/}
                    {/*<NavLink to='/jewellery' className={s.navItem} activeClassName={s.active}*/}
                    {/*         onClick={() => setIsActiveBurger(true)}>JEWELLERY</NavLink>*/}
                    {/*<NavLink to='/accessories' className={s.navItem} activeClassName={s.active}*/}
                    {/*         onClick={() => setIsActiveBurger(true)}>ACCESSORIES</NavLink>*/}
                    {categories}
                </div>
                <span className={s.navRight}>
                     <NavLink to='/cart' onClick={() => props.setIsActiveBurger(false)}>
                         <FontAwesomeIcon icon={faShoppingCart} className={s.shoppingCart}/>
                         <div className={s.numberOrder}>{props.cartProductLength}</div>
                     </NavLink>
                    <FontAwesomeIcon icon={faSearch} className={s.iconSearch}/>
                    <div className={`${s.burger} ${props.isActiveBurger && s.active}`}
                         onClick={() => props.setIsActiveBurger(!props.isActiveBurger)}>
                        <span></span>
                    </div>
                </span>
            </div>
        </header>
    )
}

export default Header;