import React from 'react';
import s from './ShopCart.module.css'
import CouponCode from "./CouponsCode/CouponCode";
import GiftVoucher from "./CouponsCode/GiftVoucher";
import TableInCartContainer from "./TableInCart/TableInCartContainer";
import ShippingAvailabilityContainer from "./ShippingAvailability/ShippingAvailabilityContainer";
import ShoppingCartCalculatorContainer from "./ShoppingCartCalculator/ShoppingCartCalculatorContainer";

const ShopCart = () => {
    return (
        <div className={s.wrapper}>
            <TableInCartContainer/>
            <div className={`${s.couponsCode} ${s.article}`}>
                <CouponCode/>
                <GiftVoucher/>
            </div>
            <div className={`${s.orderCheck} ${s.article}`}>
                <ShippingAvailabilityContainer/>
                <ShoppingCartCalculatorContainer/>
            </div>
        </div>
    );
}

export default ShopCart;


