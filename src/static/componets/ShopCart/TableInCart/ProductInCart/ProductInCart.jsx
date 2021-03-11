import s from "./ProductInCart.module.css";
import React from "react";


const ProductInCart = (props) => {
    let onChangeValue = (e) => {
        let value = e.target.value;
        props.onChangeProductValue(value, props.id)
    }

    let onProductDelete = () => {
        props.onProductDelete(props.id)
    }

    return (
            <div className={s.wrapper}>
                <div className={`${s.products} ${s.item}`}>
                    <div className={s.image}>80х100</div>
                    <div className={s.nameProduct}>{props.nameProduct}</div>
                </div>
                <div className={`${s.color} ${s.item}`}>
                    <div>Size: XL</div>
                    <div>Color: Black</div>
                </div>
                <div className={`${s.quantity} ${s.item}`}>
                    <input type='number' min='0' max='100' className={s.input} onChange={onChangeValue} value={props.value}/>
                </div>
                <div className={`${s.price} ${s.item}`}>${props.cost}</div>
                <div className={`${s.total} ${s.item}`}>
                    <span className={s.totalPrice}>${props.totalCost}</span>
                    <button className={s.delete} onClick={onProductDelete}>+</button>
                </div>
            </div>
    )
}

export default ProductInCart;