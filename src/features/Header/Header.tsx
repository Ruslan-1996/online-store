import s from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { CategoriesType } from "../../store/headerReducer";
import cn from 'classnames';

type PropsType = {
  cartProductLength: number
  categories: Array<CategoriesType>
}

const useWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return width
}

const Header: React.FC<PropsType> = (props) => {
  const [isActiveBurger, setIsActiveBurger] = useState(false)
  const width = useWindowDimensions()

  const categories = props.categories.map(category => <NavLink to={`/${category.name.toLowerCase()}`}
                                                               className={s.navItem}
                                                               activeClassName={s.active}
                                                               key={category.id}
                                                               onClick={() => setIsActiveBurger(false)}>{category.name}</NavLink>)

  useEffect(() => {
    if (isActiveBurger) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isActiveBurger])

  useEffect(() => {
    if(width > 1025) {
      document.body.style.overflow = 'visible'
      setIsActiveBurger(false)
    }
  }, [width])

  const onBurgerMenu = () => {
    setIsActiveBurger(prevState => !prevState)
  }

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
        <NavLink to='/home' className={s.siteLogo} onClick={() => setIsActiveBurger(false)}>
          <span className={s.textGreen}>RENOSHOP</span>BEE
        </NavLink>
        <div className={`${s.navMenu} ${isActiveBurger && s.isActive}`}>
          <NavLink to='/home' className={s.navItem} activeClassName={s.active}
                   onClick={() => setIsActiveBurger(false)}>HOME</NavLink>
          {categories}
        </div>
        <span className={s.navRight}>
                     <NavLink to='/cart' onClick={() => setIsActiveBurger(false)}>
                         <FontAwesomeIcon icon={faShoppingCart} className={s.shoppingCart}/>
                         <div className={s.numberOrder}>{props.cartProductLength}</div>
                     </NavLink>
                    <FontAwesomeIcon icon={faSearch} className={s.iconSearch}/>
                    <div className={`${s.burger} ${isActiveBurger && s.active}`} onClick={onBurgerMenu}>
                        <span></span>
                    </div>
                </span>
      </div>
      <div className={cn(s.backdrop, {[s.active]: isActiveBurger})} onClick={onBurgerMenu}></div>
    </header>
  )
}

export default Header;