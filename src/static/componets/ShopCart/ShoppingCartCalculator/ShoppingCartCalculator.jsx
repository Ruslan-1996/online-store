import s from "./ShoppingCartCalculator.module.css";
import React from "react";


const ShoppingCartCalculator = (props) => {
    return (
        <div className={s.wrapper}>
            <p className={s.title}>SHOPPING CART CALCULATOR</p>
            <div className={s.blockCalculation}>
                <div className={s.item}>
                    <span>Subtotal</span>
                    <span>{props.subtotal}</span>
                </div>
                <div className={s.item}>
                    <span>Coupon</span>
                    <span>-$0</span>
                </div>
                <div className={s.item}>
                    <span>Shipping</span>
                    <span>Free Shipping</span>
                </div>
            </div>
            <div className={s.blockTotal}>
                <div className={s.item}>
                <span>Total</span>
                <span>$450</span>
                </div>
            </div>
            {/*<p className={s.text}>Select Country</p>*/}
            {/*<input className={s.input} type="text" placeholder='Viet Nam'/>*/}
            {/*<p className={s.text}>Select State</p>*/}
            {/*<input className={s.input} type="text" placeholder='TP.HCM'/>*/}
            {/*<p className={s.text}>Postcode / Zip</p>*/}
            {/*<input className={s.input} type="text" placeholder='Postcode / Zip'/>*/}
            <button className={s.button}>PROCEED TO CHECKOUT</button>
        </div>
    )
}

export default ShoppingCartCalculator;