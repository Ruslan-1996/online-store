import s from "./ShoppingCartCalculator.module.css";
import React from "react";

type PropsType = {
    subtotal: number
    couponDiscount: number
    totalShopCart: number
}

const ShoppingCartCalculator: React.FC<PropsType> = (props) => {
    return (
        <div className={s.wrapper}>
            <p className={s.title}>SHOPPING CART CALCULATOR</p>
            <div className={s.blockCalculation}>
                <div className={s.item}>
                    <span>Subtotal</span>
                    <span>${props.subtotal}</span>
                </div>
                <div className={s.item}>
                    <span>Coupon</span>
                    <span>-${props.couponDiscount}</span>
                </div>
                <div className={s.item}>
                    <span>Shipping</span>
                    <span>Free Shipping</span>
                </div>
            </div>
            <div className={s.blockTotal}>
                <div className={s.item}>
                <span>Total</span>
                <span>${props.totalShopCart}</span>
                </div>
            </div>
            <button className={s.button}>PROCEED TO CHECKOUT</button>
        </div>
    )
}

export default ShoppingCartCalculator;