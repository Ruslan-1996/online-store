import s from "./CouponCode.module.css";
import React from "react";
import {onSelectCouponCodeAC} from "../../../store/shopCartPage";
import {connect} from "react-redux";
import {Field, Form} from "react-final-form";
import {AppStateType} from "../../../store/store";

type PropsType = MapDispatchPropsType

const CouponCode: React.FC<PropsType> = (props) => {

    const required = (value:string) => {
        if (value) {
            return undefined
        } else {
            return 'Field is required'
        }
    }

    const onCouponCodeValue = (value: any) => {
        props.onSelectCouponCodeAC(value.couponCode)
    }

    return (
        <div className={s.wrapper}>
            <p className={s.title}>USE COUPON CODE</p>
            <p className={s.text}>Enter Your Coupon Here</p>
            <Form onSubmit={onCouponCodeValue}
                  render={({handleSubmit}) => (
                      <form onSubmit={handleSubmit}>
                          <Field type='text' validate={required} component={'input'} className={s.input} placeholder='Enter your coupon here' name={'couponCode'}/>
                          <button className={s.button}>APPLY</button>
                      </form>
                  )}/>
        </div>
    )
}
type MapDispatchPropsType = {
    onSelectCouponCodeAC: (text: string) => void
}

export default connect<{}, MapDispatchPropsType, {}, AppStateType>(null, {onSelectCouponCodeAC})(CouponCode);