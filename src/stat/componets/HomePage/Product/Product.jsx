import s from "./Product.module.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faRetweet, faShoppingCart, faStar} from "@fortawesome/free-solid-svg-icons";



const Product = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.image}>
                <div className={s.addHover}>
                    <FontAwesomeIcon icon={faShoppingCart} className={s.iconHover}/>
                </div>
                <div className={s.addHover}>
                    <FontAwesomeIcon icon={faHeart} className={s.iconHover}/>
                </div>
                <div className={s.addHover}>
                    <FontAwesomeIcon icon={faRetweet} className={s.iconHover}/>
                </div>
                <span className={s.sizeIcon}>{props.size}</span>
            </div>
            <span className={s.nameProduct}>{props.nameProduct}</span>
            <span className={s.price}>
                ${props.cost}
            </span>
            <div className={s.stars}>
                <FontAwesomeIcon icon={faStar} className={s.iconStar}/>
                <FontAwesomeIcon icon={faStar} className={s.iconStar}/>
                <FontAwesomeIcon icon={faStar} className={s.iconStar}/>
                <FontAwesomeIcon icon={faStar} className={s.iconStar}/>
                <FontAwesomeIcon icon={faStar} className={s.iconStar}/>
            </div>
        </div>
    )
}

export default Product;