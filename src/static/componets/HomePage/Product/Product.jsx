import s from "./Product.module.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faRetweet, faShoppingCart, faStar} from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    debugger
    let addProductInCart = () => {
        props.onChange(props.id, props.nameProduct, props.cost, props.cost)
        props.onToggleProductInCart(props.id)
    }

    let deleteProduct = () => {
        props.onProductDelete(props.id)
        props.onToggleProductInCart(props.id)
    }


    return (
        <div className={s.wrapper}>
            <div className={s.image}>
                {!props.inCart ?
                    <div className={s.addHover} onClick={addProductInCart}>
                        <FontAwesomeIcon icon={faShoppingCart} className={s.iconHover}/>
                    </div> :
                    <div className={`${s.addHover} ${s.active}`} onClick={deleteProduct}>
                      <i className={s.check}></i>
                    </div>
                }
                <div className={s.addHover}>

                    <FontAwesomeIcon icon={faHeart} className={s.iconHover}/>
                </div>
                <div className={s.addHover}>
                    <FontAwesomeIcon icon={faRetweet} className={s.iconHover}/>
                </div>
                {props.size}
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