import s from "./Product.module.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faRetweet, faShoppingCart, faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";

type PropsType = {
    setAssessment: (assessment: number, id: number) => void
    onProductDelete: (id: number) => void
    onChange: (id: number, name: string, cost: number, image: string) => void
    productInCart: Array<number>
    id: number
    name: string
    price: number
    image: string
    assessment: number
    size: string | undefined
}

const Product: React.FC<PropsType> = (props) => {

    let addProductInCart = () => {
        props.onChange(props.id, props.name, props.price, props.image)
    }

    let deleteProduct = () => {
        props.onProductDelete(props.id)
    }

    let starActive = [];
    for (let i = 1; i <= props.assessment; ++i) {
        starActive.push(i)
    }

    let starDontActive = [];
    for (let i = props.assessment + 1; i <= 5; ++i) {
        starDontActive.push(i)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.image} style={{
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center top"
            }}>
                    {!props.productInCart.some(product => product === props.id) ?
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

            </div>
            <span className={s.size}>{props.size}</span>
            <span className={s.nameProduct}>{props.name}</span>
            <span className={s.price}>
                ${props.price.toFixed(2)}
            </span>
            <div className={s.stars}>
                {starActive.map(star => <span onClick={() => props.setAssessment(star, props.id)} key={star}>
                    <FontAwesomeIcon icon={faStar} className={s.iconStar} key={star}/>
                </span>)}
                {starDontActive.map(star => <span onClick={() => props.setAssessment(star, props.id)} key={star}>
                    <FontAwesomeIcon icon={faStarRegular} className={s.iconStar} key={star}/>
                </span>)}
            </div>
        </div>
    )
}

export default Product;