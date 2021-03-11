import s from "./CouponCode.module.css";
import React from "react";


const CouponCode = (props) => {
    return (
        <div className={s.wrapper}>
          <p className={s.title}>USE COUPON CODE</p>
            <p className={s.text}>Enter Your Coupon Here</p>
            <input className={s.input} type="text" placeholder='Enter your coupon here'/>
            <button className={s.button}>APPLY</button>
        </div>
    )
}

export default CouponCode;