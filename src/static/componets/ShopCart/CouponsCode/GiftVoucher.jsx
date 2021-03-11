import s from "./CouponCode.module.css";
import React from "react";


const GiftVoucher = (props) => {
    return (
        <div className={s.wrapper}>
          <p className={s.title}>USE GIFT VOUCHER</p>
            <p className={s.text}>Enter Your Gift Voucher Code Here</p>
            <input className={s.input} type="text" placeholder='Enter your gift voucher code here'/>
            <button className={s.button}>APPLY</button>
        </div>
    )
}

export default GiftVoucher;