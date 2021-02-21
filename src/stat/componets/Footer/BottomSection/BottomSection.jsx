import s from "./BottomSection.module.css";
import React from "react";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCcAmazonPay, faCcAmex, faCcMastercard, faCcPaypal, faCcVisa} from "@fortawesome/free-brands-svg-icons";


let BottomSection = () => {
    return (
        <div className={s.wrapper}>
            <span className={s.text}>
                Copyright 2020 RenoshopBee all right reserved - Design by BeeStudios
            </span>
            <span className={s.buttons}>
                <FontAwesomeIcon icon={faCcVisa} className={s.button}/>
                <FontAwesomeIcon icon={faCcPaypal} className={s.button}/>
                <FontAwesomeIcon icon={faCcAmazonPay} className={s.button}/>
                <FontAwesomeIcon icon={faCcMastercard} className={s.button}/>
                <FontAwesomeIcon icon={faCcAmex} className={s.button}/>
            </span>
        </div>
    )
}

export default BottomSection;