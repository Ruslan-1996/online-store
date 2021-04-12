import s from "./ShippingAvailability.module.css";
import React from "react";

type PropsType = {
    country: string,
    stateInCountry: string,
    postcode: string,
    onSelectCountryActionCreator: (text: string) => void
    onSelectStateActionCreator: (text: string) => void
    onPostCodeActionCreator: (text: string) => void
}

const ShippingAvailability: React.FC<PropsType> = (props) => {

    return (
        <div className={s.wrapper}>
          <p className={s.title}>SHIPPING AVAILABILITY</p>
            <p className={s.text}>Select Country</p>
            <input className={s.input} type="text" placeholder='Viet Nam'
                   value={props.country}onChange={(e) => {props.onSelectCountryActionCreator(e.target.value)}}/>
            <p className={s.text}>Select State</p>
            <input className={s.input} type="text" placeholder='TP.HCM'
                   value={props.stateInCountry} onChange={(e) => {props.onSelectStateActionCreator(e.target.value)}} />
            <p className={s.text}>Postcode / Zip</p>
            <input className={s.input} type="text" placeholder='Postcode / Zip'
                   value={props.postcode} onChange={(e) => {props.onPostCodeActionCreator(e.target.value)}}/>
            <button className={s.button}>UPDATE TOTALS</button>
        </div>
    )
}

export default ShippingAvailability;