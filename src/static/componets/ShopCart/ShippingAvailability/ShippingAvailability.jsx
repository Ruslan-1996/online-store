import s from "./ShippingAvailability.module.css";
import React from "react";


const ShippingAvailability = (props) => {

    let onCountryUpdate = (e) => {
        let text = e.target.value;
        props.onCounty(text);
    }

    let onStateUpdate = (e) => {
        let text = e.target.value;
        props.onState(text);
    }

    let onPostcodeUpdate = (e) => {
        let text = e.target.value;
        props.onPostcode(text);
    }

    return (
        <div className={s.wrapper}>
          <p className={s.title}>SHIPPING AVAILABILITY</p>
            <p className={s.text}>Select Country</p>
            <input className={s.input} type="text" placeholder='Viet Nam'
                   value={props.country}onChange={onCountryUpdate}/>
            <p className={s.text}>Select State</p>
            <input className={s.input} type="text" placeholder='TP.HCM'
                   value={props.stateInCountry} onChange={onStateUpdate} />
            <p className={s.text}>Postcode / Zip</p>
            <input className={s.input} type="text" placeholder='Postcode / Zip'
                   value={props.postcode} onChange={onPostcodeUpdate}/>
            <button className={s.button}>UPDATE TOTALS</button>
        </div>
    )
}

export default ShippingAvailability;